import type { HardcoverClient } from "../core/client.ts";
import { toActionAt, type OccurredAt } from "../core/dates.ts";
import { NotFoundError } from "../core/errors.ts";
import type { WithJsonColumns } from "../core/json-columns.ts";
import { UserBookStatus, type PrivacySetting } from "../generated/enums.ts";
import type {
  AddUserBookMutation,
  GetLibraryChangesQuery,
  GetLibraryQuery,
  GetOwnedBooksQuery,
  GetUserBookForBookQuery,
  GetUserBookQuery,
  MarkOwnedMutation,
} from "../generated/graphql.ts";
import { operations } from "../operations.ts";
import { capped, DEFAULT_LIMIT, toPage, type Page, type PageOptions } from "./page.ts";
import { pickDefined, required, type ActionRecord } from "./shared.ts";

export type LibraryEntry = WithJsonColumns<ActionRecord<AddUserBookMutation, "insert_user_book", "userBook">>;
export type LibraryListItem = WithJsonColumns<GetLibraryQuery["user_books"][number]>;
export type LibraryEntryWithBook = WithJsonColumns<NonNullable<GetUserBookQuery["user_books_by_pk"]>>;
export type LibraryEntryForBook = WithJsonColumns<GetUserBookForBookQuery["user_books"][number]>;
export type LibraryChange = WithJsonColumns<GetLibraryChangesQuery["user_books"][number]>;

/** A book on the reader's Owned list, with the edition they own. */
export type OwnedBook = WithJsonColumns<NonNullable<GetOwnedBooksQuery["lists"][number]>["listBooks"][number]>;

/** The Owned list row `markOwned` created (or found). */
export type OwnedMark = WithJsonColumns<ActionRecord<MarkOwnedMutation, "edition_owned", "listBook">>;

/** One status, or several to match any of them. */
export type LibraryStatusFilter = UserBookStatus | UserBookStatus[];

export interface LibraryListOptions extends PageOptions {
  /** Only entries with this status (or any of these). All statuses when left out. */
  status?: LibraryStatusFilter;
}

export interface LibraryChangesOptions {
  /** The `cursor` from the previous result. Leave out for everything. */
  since?: string | null;

  /** The entry ids you already hold, to get `removedIds` back. */
  knownIds?: Iterable<number>;

  limit?: number;
}

/** One page of library changes, oldest change first. */
export interface LibraryChanges {
  /** Entries added or changed since the cursor (including their reads). Upsert them by `id`. */
  items: LibraryChange[];

  /** Pass as `since` next time. Opaque: store it as-is. Null until something has synced. */
  cursor: string | null;

  /** More changes are waiting: call again with `cursor` right away. */
  hasMore: boolean;

  /** With `knownIds`: the ids you have that are no longer in the library. */
  removedIds?: number[];
}

// The cursor is the (updated_at, id) of the last row seen. updated_at stays the
// server's string (microseconds), which a JS Date would round.
export function encodeCursor(row: { updatedAt?: string | null; id: number }): string {
  return `${row.updatedAt}|${row.id}`;
}

export function decodeCursor(cursor: string): { after: string; afterId: number } {
  const split = cursor.lastIndexOf("|");
  const id = cursor.slice(split + 1);

  // The id is the row's integer id: digits only, never empty.
  if (split <= 0 || !/^\d+$/.test(id)) {
    throw new RangeError(`Not a library changes cursor: ${JSON.stringify(cursor)}`);
  }

  return { after: cursor.slice(0, split), afterId: Number(id) };
}

/** A review on a library entry. Every field needs the `write:reviews` scope. */
export interface ReviewPatch {
  markdown?: string | null;
  hasSpoilers?: boolean;
  reviewedAt?: string | null;
}

/**
 * Changes to a library entry. Only fields you set are sent, which matters:
 * any review field needs the `write:reviews` scope, so a plain status change
 * must never include them.
 */
export interface LibraryEntryPatch {
  status?: UserBookStatus;

  /**
   * Date for the status change (YYYY-MM-DD, the reader's local day). Leave it
   * out and the server records today in the reader's own timezone.
   */
  date?: string;
  startDate?: string;

  /** 0.5 to 5 in half steps; null clears it. */
  rating?: number | null;

  privacy?: PrivacySetting;
  editionId?: number | null;
  notes?: string | null;
  readCount?: number;
  recommendedBy?: string | null;
  recommendedFor?: string | null;

  /** Needs `write:reviews`. */
  review?: ReviewPatch;

  /** When this happened, if not now. Backdates the journal entry the server writes. */
  occurredAt?: OccurredAt;
}

/** Options for `library.add`: the entry's fields, plus `imported`. */
export interface LibraryAddOptions extends LibraryEntryPatch {
  /**
   * Adds the book quietly, as an import: no activity is posted to followers'
   * feeds. Use it for bulk imports and syncs.
   */
  imported?: boolean;
}

export interface SetStatusOptions {
  /** The day of the change (YYYY-MM-DD). The server uses today when left out. */
  date?: string;

  /** When this happened, if not now. Backdates the journal entry. */
  occurredAt?: OccurredAt;
}

// Idiomatic patch fields to the wire fields the actions take.
const WIRE: Record<Exclude<keyof LibraryEntryPatch, "review" | "occurredAt">, string> = {
  status: "status_id",
  date: "user_date",
  startDate: "user_start_date",
  rating: "rating",
  privacy: "privacy_setting_id",
  editionId: "edition_id",
  notes: "private_notes",
  readCount: "read_count",
  recommendedBy: "recommended_by",
  recommendedFor: "recommended_for",
};

const REVIEW_WIRE: Record<keyof ReviewPatch, string> = {
  markdown: "review_markdown",
  hasSpoilers: "review_has_spoilers",
  reviewedAt: "reviewed_at",
};

function assertRating(rating: number | null | undefined): void {
  if (rating === null || rating === undefined) return;

  const inRange = Number.isFinite(rating) && rating >= 0.5 && rating <= 5;
  const halfStep = Number.isInteger(rating * 2);

  if (!inRange || !halfStep) {
    throw new RangeError(`Rating must be 0.5 to 5 in steps of 0.5, or null to clear it (got ${rating})`);
  }
}

function toWire({ review, occurredAt, ...fields }: LibraryEntryPatch): Record<string, unknown> {
  return {
    ...pickDefined(fields, WIRE),
    ...(review && pickDefined(review, REVIEW_WIRE)),
    ...(occurredAt !== undefined && { action_at: toActionAt(occurredAt) }),
  };
}

/** The operations' `statusIds` list. Without a status, the operation's default applies. */
function statusIds(status: LibraryStatusFilter | undefined): { statusIds?: UserBookStatus[] } {
  if (status === undefined) return {};

  return { statusIds: Array.isArray(status) ? status : [status] };
}

/** The signed-in user's library ("user books"). */
export class LibraryResource {
  private readonly client: HardcoverClient;

  constructor(client: HardcoverClient) {
    this.client = client;
  }

  /** One request plus a cached `me` lookup. Scopes: `read:me:content`, `read:library`. */
  async list({ status, limit = DEFAULT_LIMIT, offset = 0 }: LibraryListOptions = {}): Promise<Page<LibraryListItem>> {
    const userId = await this.client.me.id();

    const { user_books } = await this.client.request(operations.GetLibrary, {
      userId,
      limit,
      offset,
      ...statusIds(status),
    });

    return toPage(user_books, limit, offset);
  }

  /**
   * Scopes: `read:me:content`, `read:library`.
   */
  async count({ status }: { status?: LibraryStatusFilter } = {}): Promise<number> {
    const userId = await this.client.me.id();
    const { user_books_aggregate } = await this.client.request(operations.CountLibrary, { userId, ...statusIds(status) });

    return user_books_aggregate.aggregate?.count ?? 0;
  }

  /**
   * What changed in the library since a cursor, for keeping a local copy in
   * sync. Start with no `since` for everything, then pass each result's
   * `cursor`; while `hasMore`, call again right away.
   *
   * Removed entries don't show up as changes (the API deletes them outright
   * and has no deletion feed). Pass `knownIds`, the entry ids you hold, to get
   * `removedIds`: that adds one ids-only read of the whole library, so pass it
   * once per sync, e.g. with the last page.
   *
   * Scopes: `read:me:content`, `read:library`.
   */
  async changes({ since, knownIds, limit = DEFAULT_LIMIT }: LibraryChangesOptions = {}): Promise<LibraryChanges> {
    const cursor = since ? decodeCursor(since) : {};
    const userId = await this.client.me.id();

    // The ids-only read runs alongside the page, and only when asked for.
    const [{ user_books }, current] = await Promise.all([
      this.client.request(operations.GetLibraryChanges, { userId, limit, ...cursor }),
      knownIds && this.client.request(operations.GetLibraryIds, { userId }),
    ]);

    // With nothing new, the cursor stays where it was.
    const last = user_books[user_books.length - 1];
    const result: LibraryChanges = {
      items: user_books,
      cursor: last ? encodeCursor(last) : (since ?? null),
      hasMore: user_books.length === limit,
    };

    if (knownIds && current) {
      const present = new Set(current.user_books.map((entry) => entry.id));
      result.removedIds = [...new Set(knownIds)].filter((id) => !present.has(id));
    }

    return result;
  }

  /**
   * The entry for a book, or null if it isn't in the library.
   * Scopes: `read:me:content`, `read:library`.
   */
  async forBook(bookId: number): Promise<LibraryEntryForBook | null> {
    const userId = await this.client.me.id();
    const { user_books } = await this.client.request(operations.GetUserBookForBook, { userId, bookId });

    return user_books[0] ?? null;
  }

  /**
   * Scopes: `read:library`.
   */
  async get(id: number): Promise<LibraryEntryWithBook | null> {
    const { user_books_by_pk } = await this.client.request(operations.GetUserBook, { id });

    return user_books_by_pk ?? null;
  }

  /**
   * Adds a book (Want to Read unless `status` says otherwise). Pass
   * `imported: true` when adding many books at once, so followers' feeds
   * don't fill up with them.
   * Scopes: `write:library`.
   */
  async add(bookId: number, options: LibraryAddOptions = {}): Promise<LibraryEntry> {
    const { imported, ...rest } = options;
    const patch = { status: UserBookStatus.WantToRead, ...rest };
    assertRating(patch.rating);

    const { insert_user_book } = await this.client.request(operations.AddUserBook, {
      object: { book_id: bookId, ...toWire(patch), ...(imported !== undefined && { imported }) },
    });

    return required(insert_user_book?.userBook, "insert_user_book", "library entry");
  }

  /**
   * Scopes: `write:library`, `write:reviews` (review fields).
   */
  async update(id: number, patch: LibraryEntryPatch): Promise<LibraryEntry> {
    assertRating(patch.rating);

    const { update_user_book } = await this.client.request(operations.UpdateUserBook, {
      id,
      object: toWire(patch),
    });

    return required(update_user_book?.userBook, "update_user_book", "library entry");
  }

  /**
   * The server manages reads from status: Currently Reading starts a read (a
   * new one on a re-read), Read finishes it. It also writes the journal entries.
   * Without `date`, the server records today in the reader's own timezone.
   * Scopes: `write:library`.
   */
  setStatus(id: number, status: UserBookStatus, { date, occurredAt }: SetStatusOptions = {}): Promise<LibraryEntry> {
    // Only the options that were given, so the patch sends nothing extra.
    const patch: LibraryEntryPatch = { status };
    if (date !== undefined) patch.date = date;
    if (occurredAt !== undefined) patch.occurredAt = occurredAt;

    return this.update(id, patch);
  }

  /** Scopes: `write:library`. */
  rate(id: number, rating: number | null): Promise<LibraryEntry> {
    return this.update(id, { rating });
  }

  // ---- Owned editions ----

  /**
   * Marks an edition as owned: it goes on the reader's Owned list, which the
   * server creates the first time. Safe to repeat.
   * Scopes: `write:library`.
   */
  async markOwned(editionId: number): Promise<OwnedMark> {
    const { edition_owned } = await this.client.request(operations.MarkOwned, { editionId });

    return required(edition_owned?.listBook, "edition_owned", "owned list row");
  }

  /**
   * Takes a book off the Owned list. Returns false if it wasn't on it. The API
   * has no un-own action, so this finds the Owned list and removes the book
   * from it: up to three requests.
   * Scopes: `read:me:content`, `read:lists`, `write:lists`.
   */
  async unmarkOwned(bookId: number): Promise<boolean> {
    const listId = await this.#ownedListId();
    if (listId === undefined) return false;

    return this.client.lists.removeBook(listId, bookId);
  }

  /** Books on the Owned list, most recently marked first. Scopes: `read:me:content`, `read:lists`. */
  async owned({ limit: requested = DEFAULT_LIMIT, offset = 0 }: PageOptions = {}): Promise<Page<OwnedBook>> {
    const limit = capped("list_books", requested);
    const userId = await this.client.me.id();
    const { lists } = await this.client.request(operations.GetOwnedBooks, { userId, limit, offset });

    // No Owned list yet means nothing is owned.
    return toPage(lists[0]?.listBooks ?? [], limit, offset);
  }

  async #ownedListId(): Promise<number | undefined> {
    const userId = await this.client.me.id();
    const { lists } = await this.client.request(operations.GetOwnedBooks, { userId, limit: 0 });

    return lists[0]?.id;
  }

  /**
   * Scopes: `write:library`.
   */
  async remove(id: number): Promise<void> {
    const { delete_user_book } = await this.client.request(operations.RemoveUserBook, { id });

    if (!delete_user_book?.id) throw new NotFoundError("library entry", id);
  }
}
