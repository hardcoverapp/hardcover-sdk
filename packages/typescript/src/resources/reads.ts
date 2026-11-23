import type { HardcoverClient } from "../core/client.ts";
import { toActionAt, type OccurredAt } from "../core/dates.ts";
import { HardcoverError, NotFoundError } from "../core/errors.ts";
import type { WithJsonColumns } from "../core/json-columns.ts";
import { ReadingFormat, type DatePrecision } from "../generated/enums.ts";
import type { GetFinishedReadsQuery, UpdateUserBookReadMutation, UserBookReadFragment } from "../generated/graphql.ts";
import { operations } from "../operations.ts";
import { capped, DEFAULT_LIMIT, toPage, type Page, type PageOptions } from "./page.ts";
import { pickDefined, required, type ActionRecord } from "./shared.ts";

export type Read = WithJsonColumns<UserBookReadFragment>;
export type UpdatedRead = WithJsonColumns<ActionRecord<UpdateUserBookReadMutation, "update_user_book_read", "userBookRead">>;

/** A finished read with its library entry and book. */
export type FinishedRead = WithJsonColumns<GetFinishedReadsQuery["user_book_reads"][number]>;

/** A read's dates, as you'd fill them in on the site. Dates are YYYY-MM-DD, the reader's local day. */
export interface ReadDates {
  startedAt?: string | null;

  /** Null clears it, so the read is in progress again. */
  finishedAt?: string | null;

  /** How exact `finishedAt` is, e.g. `DatePrecision.Month` for "sometime in March". */
  precision?: DatePrecision;

  /** The edition read, if not the library entry's own. It must be an edition of the same book. */
  editionId?: number;
}

export interface FinishedReadsOptions extends PageOptions {
  /** First day, inclusive (YYYY-MM-DD). */
  from: string;

  /** Last day, inclusive (YYYY-MM-DD). */
  to: string;
}

const DATES_WIRE: Record<keyof ReadDates, string> = {
  startedAt: "started_at",
  finishedAt: "finished_at",
  precision: "finished_at_precision",
  editionId: "edition_id",
};

/**
 * Exactly one unit. Percent is converted with the read's edition: pages for
 * print and ebook, seconds for audio.
 */
export type ProgressInput = ({ pages: number } | { seconds: number } | { percent: number }) & {
  /** When the reading happened, if not now. Backdates the journal entry the server writes. */
  occurredAt?: OccurredAt;
};

// The server's rule: started, not finished, newest.
function openRead(reads: Read[]): Read | null {
  const open = reads.filter((read) => read.startedAt && !read.finishedAt);
  const newestFirst = open.sort((a, b) => b.id - a.id);

  return newestFirst[0] ?? null;
}

function assertCount(value: number, unit: string): void {
  if (!Number.isInteger(value) || value < 0) {
    throw new RangeError(`${unit} must be a whole number of 0 or more (got ${value})`);
  }
}

function assertPercent(percent: number): void {
  if (!Number.isFinite(percent) || percent < 0 || percent > 100) {
    throw new RangeError(`percent must be 0 to 100 (got ${percent})`);
  }
}

// Checks that need no request, so bad input fails before anything is sent.
function assertProgressInput(input: ProgressInput): void {
  const units = (["pages", "seconds", "percent"] as const).filter((unit) => unit in input);
  if (units.length !== 1) throw new TypeError("Pass exactly one of pages, seconds or percent");

  if ("pages" in input) assertCount(input.pages, "pages");
  if ("seconds" in input) assertCount(input.seconds, "seconds");
  if ("percent" in input) assertPercent(input.percent);
}

// Same math as the app: ceil(pct / 100 * total).
function progressFields(read: Read, input: ProgressInput): Record<string, number> {
  if ("pages" in input) return { progress_pages: input.pages };
  if ("seconds" in input) return { progress_seconds: input.seconds };

  const { percent } = input;
  const edition = read.edition;

  // Audiobooks track seconds; everything else tracks pages.
  if (edition?.readingFormatId === ReadingFormat.Audiobook) {
    if (!edition.audioSeconds) {
      throw new RangeError("This read's audiobook edition has no length; pass seconds instead of percent");
    }

    return { progress_seconds: Math.ceil((percent / 100) * edition.audioSeconds), progress: percent };
  }

  if (!edition?.pages) {
    throw new RangeError("This read's edition has no page count; pass pages instead of percent");
  }

  // The percent goes along with the page so the server can keep it as typed:
  // on a short book, a 1% step can round to the same page.
  return { progress_pages: Math.ceil((percent / 100) * edition.pages), progress: percent };
}

/**
 * Reading sessions for a library entry. The server starts a read when status
 * becomes Currently Reading (a new one on a re-read) and finishes it on Read,
 * and it journals every change itself. Don't also write journal entries for these.
 */
export class ReadsResource {
  private readonly client: HardcoverClient;

  constructor(client: HardcoverClient) {
    this.client = client;
  }

  /** All reads for a library entry, newest first. Scopes: `read:library`. */
  async list(userBookId: number): Promise<Read[]> {
    const { user_books_by_pk } = await this.client.request(operations.GetUserBook, { id: userBookId });

    if (!user_books_by_pk) throw new NotFoundError("library entry", userBookId);
    return user_books_by_pk.userBookReads;
  }

  /** The read in progress (started, not finished), or null. Scopes: `read:library`. */
  async current(userBookId: number): Promise<Read | null> {
    return openRead(await this.list(userBookId));
  }

  /**
   * Records progress on the read in progress. Always looks up the current read
   * (one extra request) so a re-read never lands on a finished read.
   * Progress of 100% finishes the read and marks the book Read on the server.
   * Scopes: `read:library`, `write:library`.
   */
  async setProgress(userBookId: number, input: ProgressInput): Promise<UpdatedRead> {
    assertProgressInput(input);

    const read = await this.current(userBookId);
    if (!read) {
      throw new HardcoverError(
        `No read in progress for library entry ${userBookId}. Set its status to Currently Reading first.`,
      );
    }

    const progress = {
      ...progressFields(read, input),
      ...(input.occurredAt !== undefined && { action_at: toActionAt(input.occurredAt) }),
    };

    const { update_user_book_read } = await this.client.request(operations.UpdateUserBookRead, {
      id: read.id,
      read: progress,
    });

    return required(update_user_book_read?.userBookRead, "update_user_book_read", "read");
  }

  // ---- Editing reads by hand ----

  /**
   * Logs a read, e.g. one from before you used Hardcover. With `finishedAt`,
   * the server records it as finished and writes the journal entries.
   * Scopes: `write:library`.
   */
  async add(userBookId: number, dates: ReadDates): Promise<UpdatedRead> {
    const read = pickDefined(dates, DATES_WIRE);
    const { insert_user_book_read } = await this.client.request(operations.AddUserBookRead, { userBookId, read });

    return required(insert_user_book_read?.userBookRead, "insert_user_book_read", "read");
  }

  /**
   * Changes a read's dates or edition. Only the fields you set change; a null
   * `finishedAt` clears it. Scopes: `write:library`.
   */
  async update(readId: number, patch: ReadDates): Promise<UpdatedRead> {
    const read = pickDefined(patch, DATES_WIRE);
    const { update_user_book_read } = await this.client.request(operations.UpdateUserBookRead, { id: readId, read });

    return required(update_user_book_read?.userBookRead, "update_user_book_read", "read");
  }

  /** Deletes a read and the journal entries it wrote. Scopes: `write:library`. */
  async delete(readId: number): Promise<void> {
    await this.client.request(operations.RemoveUserBookRead, { id: readId });
  }

  // ---- Across the library ----

  /**
   * The signed-in user's reads finished between `from` and `to` (inclusive),
   * newest first, each with its book: what a stats or year-in-review screen
   * needs, without walking the whole library.
   * Scopes: `read:me:content`, `read:library`.
   */
  async finished({ from, to, limit: requested = DEFAULT_LIMIT, offset = 0 }: FinishedReadsOptions): Promise<Page<FinishedRead>> {
    const limit = capped("user_book_reads", requested);
    const userId = await this.client.me.id();
    const { user_book_reads } = await this.client.request(operations.GetFinishedReads, { userId, from, to, limit, offset });

    return toPage(user_book_reads, limit, offset);
  }
}
