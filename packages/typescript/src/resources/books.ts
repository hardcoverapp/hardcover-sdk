import type { HardcoverClient } from "../core/client.ts";
import { NotFoundError } from "../core/errors.ts";
import { cleanIsbn } from "../core/isbn.ts";
import type { WithJsonColumns } from "../core/json-columns.ts";
import type {
  BookDetailFragment,
  BookSummaryFragment,
  EditionSummaryFragment,
  FindBookMappingsQuery,
  GetFriendsForBookQuery,
  FindEditionsByIsbnQuery,
  TrendingDuration,
} from "../generated/graphql.ts";
import { operations } from "../operations.ts";
import type { Platform } from "../generated/enums.ts";
import { capped, DEFAULT_LIMIT, toPage, type Page, type PageOptions } from "./page.ts";
import { nonNull, required } from "./shared.ts";

export type Book = WithJsonColumns<BookDetailFragment>;
export type BookSummary = WithJsonColumns<BookSummaryFragment>;
export type Edition = WithJsonColumns<EditionSummaryFragment>;
export type EditionWithBook = WithJsonColumns<FindEditionsByIsbnQuery["editions"][number]>;

/**
 * A library entry of someone the signed-in user follows, with its reader and
 * any review. Private notes are never included.
 */
export type FriendEntry = WithJsonColumns<NonNullable<GetFriendsForBookQuery["following_user_books"][number]["userBook"]>>;

/**
 * A book another service knows by `externalId`. `editionId` is the exact
 * edition when the mapping names one.
 */
export type ExternalMatch = WithJsonColumns<FindBookMappingsQuery["book_mappings"][number]>;

export interface ReleasedOptions extends PageOptions {
  /** First day, inclusive (YYYY-MM-DD). */
  from: string;

  /** Last day, inclusive (YYYY-MM-DD). */
  to: string;
}

/** Similar books, plus when the list was built. */
export interface SimilarBooks extends Page<BookSummary> {
  /**
   * When Hardcover last built this book's list (ISO timestamp), or null if it
   * hasn't yet. The site builds it when someone opens the book's page and
   * refreshes it monthly.
   */
  updatedAt: string | null;
}

export interface TrendingOptions extends PageOptions {
  /** The window readers are counted over. Defaults to "month". */
  duration?: TrendingDuration;
}

/** Catalog reads. */
export class BooksResource {
  private readonly client: HardcoverClient;

  constructor(client: HardcoverClient) {
    this.client = client;
  }

  /** Scopes: `read:catalog`. */
  async get(id: number): Promise<Book | null> {
    const { books_by_pk } = await this.client.request(operations.GetBook, { id });

    return books_by_pk ?? null;
  }

  /** Scopes: `read:catalog`. */
  async getBySlug(slug: string): Promise<Book | null> {
    const { books } = await this.client.request(operations.GetBookBySlug, { slug });

    return books[0] ?? null;
  }

  /**
   * Books in the order you passed their ids; ids that don't exist are skipped.
   * Scopes: `read:catalog`.
   */
  async getMany(ids: number[]): Promise<BookSummary[]> {
    if (ids.length === 0) return [];

    const { books } = await this.client.request(operations.GetBooks, { ids });

    // The API returns them in its own order; put them back in yours.
    const byId = new Map(books.map((book) => [book.id, book]));
    const inOrder = ids.map((id) => byId.get(id));

    return inOrder.filter((book): book is BookSummary => book !== undefined);
  }

  /** A book's editions, most-read first. Scopes: `read:catalog`. */
  async editions(bookId: number, { limit: requested = DEFAULT_LIMIT, offset = 0 }: PageOptions = {}): Promise<Page<Edition>> {
    const limit = capped("editions", requested);
    const { editions } = await this.client.request(operations.GetEditionsForBook, { bookId, limit, offset });

    return toPage(editions, limit, offset);
  }

  /**
   * Editions with exactly these ISBN-13s or ISBN-10s (spaces and hyphens are
   * fine), each with its book. For anything fuzzier, use search.books.
   * Scopes: `read:catalog`.
   */
  async findByIsbn(isbns: string[]): Promise<EditionWithBook[]> {
    const cleaned = [...new Set(isbns.map(cleanIsbn).filter(Boolean))];
    if (cleaned.length === 0) return [];

    const { editions } = await this.client.request(operations.FindEditionsByIsbn, { isbns: cleaned });

    return editions;
  }

  /**
   * The library entries of people the signed-in user follows, for one book:
   * who has it, their status and rating, and any review.
   * Scopes: `read:me:content`, `read:social`.
   */
  async friends(bookId: number, { limit: requested = DEFAULT_LIMIT }: { limit?: number } = {}): Promise<FriendEntry[]> {
    const limit = capped("following_user_books", requested);
    const userId = await this.client.me.id();
    const { following_user_books } = await this.client.request(operations.GetFriendsForBook, { userId, bookId, limit });

    const entries: FriendEntry[] = [];
    for (const row of following_user_books) {
      if (row.userBook) entries.push(row.userBook);
    }

    return entries;
  }

  /** An edition by id, with its book. Scopes: `read:catalog`. */
  async edition(id: number): Promise<EditionWithBook | null> {
    const { editions_by_pk } = await this.client.request(operations.GetEdition, { id });

    return editions_by_pk ?? null;
  }

  /**
   * Books other services know by these ids, e.g. Goodreads or Open Library
   * ids from an import. Ids with no match are left out; one id can match
   * more than one book. Hardcover stores ids as strings, so numbers are
   * converted.
   * Scopes: `read:catalog`.
   */
  async findByExternalIds(platform: Platform, ids: (string | number)[]): Promise<ExternalMatch[]> {
    const externalIds = [...new Set(ids.map((id) => String(id).trim()).filter(Boolean))];
    if (externalIds.length === 0) return [];

    const { book_mappings } = await this.client.request(operations.FindBookMappings, { platformId: platform, externalIds });

    return book_mappings;
  }

  /**
   * Books like this one, most similar first, from the same recommendations as
   * the "Similar books" section on hardcover.app. Up to 100 in all; page
   * through them with `limit` and `offset`. Two requests when there are books
   * to show. Empty until the site has built the book's list (`updatedAt` is
   * null then).
   * Scopes: `read:catalog`.
   */
  async similar(bookId: number, { limit: requested = DEFAULT_LIMIT, offset = 0 }: PageOptions = {}): Promise<SimilarBooks> {
    const limit = capped("books", requested);
    // The book holds its ranked ids; the books themselves are a second read.
    const { books_by_pk: book } = await this.client.request(operations.SimilarBookIds, { id: bookId });
    if (!book) throw new NotFoundError("book", bookId);

    const ids = nonNull(book.cachedSimilarBookIds as (number | null)[] | null);
    const updatedAt = book.cachedSimilarBooksUpdatedAt ?? null;

    const books = await this.getMany(ids.slice(offset, offset + limit));

    return { ...toPage(books, limit, offset), hasMore: offset + limit < ids.length, updatedAt };
  }

  /**
   * Books first released between `from` and `to` (inclusive, `YYYY-MM-DD`),
   * most readers first. Uses each book's own release date, so a reissue or
   * translation of an older book isn't included.
   * Scopes: `read:catalog`.
   */
  async released({ from, to, limit: requested = DEFAULT_LIMIT, offset = 0 }: ReleasedOptions): Promise<Page<BookSummary>> {
    const limit = capped("books", requested);
    const { books } = await this.client.request(operations.ReleasedBooks, { from, to, limit, offset });

    return toPage(books, limit, offset);
  }

  /**
   * Trending books, in trending order. Two requests: the API returns ids,
   * then the books are fetched. The API returns at most 100 ids per call, so
   * `limit` is capped there; page on with `offset`.
   * Scopes: `read:catalog`.
   */
  async trending({ duration = "month", limit: requested = DEFAULT_LIMIT, offset = 0 }: TrendingOptions = {}): Promise<Page<BookSummary>> {
    const limit = capped("books_trending", requested);

    const { books_trending } = await this.client.request(operations.TrendingBookIds, { duration, limit, offset });
    const ids = nonNull(required(books_trending, "books_trending", "result").ids);

    const books = await this.getMany(ids);

    // hasMore follows the id page, even if a few of those books no longer exist.
    // (No `await` inside the spread: React Native's Babel transform mishandles it.)
    return { ...toPage(books, limit, offset), hasMore: ids.length === limit };
  }
}
