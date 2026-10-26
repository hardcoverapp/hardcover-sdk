// Runs every shared query operation against a real API, read-only. Variables
// are discovered from the account's own data and the catalog, so this works
// on any environment without hard-coded ids.
import { beforeAll, expect, it } from "vitest";
import { ActionError, operations } from "../../src/index.ts";
import { describeLive, liveClient, target } from "./setup.ts";

describeLive(`every shared query (${target})`, () => {
  const client = liveClient();
  let userId: number;
  let book: { id: number; slug: string | null };
  let isbn: string | undefined;
  let listId: number | undefined;
  let userBookId: number | undefined;

  beforeAll(async () => {
    const { me } = await client.request(operations.Me);
    userId = me[0]!.id;

    const found = await client.graphql<{
      books: { id: number; slug: string | null; editions: { isbn_13: string | null }[] }[];
      lists: { id: number }[];
      user_books: { id: number }[];
    }>(
      `query Discover($userId: Int!) {
        books(limit: 1, order_by: { users_count: desc }, where: { slug: { _is_null: false } }) {
          id slug editions(limit: 1, where: { isbn_13: { _is_null: false } }) { isbn_13 }
        }
        lists(limit: 1, where: { user_id: { _eq: $userId } }) { id }
        user_books(limit: 1, where: { user_id: { _eq: $userId } }) { id }
      }`,
      { userId },
    );
    book = found.books[0]!;
    isbn = found.books[0]!.editions[0]?.isbn_13 ?? undefined;
    listId = found.lists[0]?.id;
    userBookId = found.user_books[0]?.id;
  });

  it("GetBook", async () => {
    const { books_by_pk } = await client.request(operations.GetBook, { id: book.id });
    expect(books_by_pk?.id).toBe(book.id);
    expect(Array.isArray(books_by_pk?.contributions)).toBe(true);
  });

  it("GetBookBySlug", async () => {
    const { books } = await client.request(operations.GetBookBySlug, { slug: book.slug! });
    expect(books[0]?.id).toBe(book.id);
  });

  it("GetBooks", async () => {
    const { books } = await client.request(operations.GetBooks, { ids: [book.id] });
    expect(books.map((b) => b.id)).toEqual([book.id]);
  });

  it("GetEditionsForBook", async () => {
    const { editions } = await client.request(operations.GetEditionsForBook, { bookId: book.id, limit: 2 });
    expect(editions.length).toBeGreaterThan(0);
  });

  it("FindEditionsByIsbn", async ({ skip }) => {
    if (!isbn) skip("top book has no ISBN-13 edition");
    const { editions } = await client.request(operations.FindEditionsByIsbn, { isbns: [isbn!] });
    expect(editions.some((e) => e.isbn13 === isbn)).toBe(true);
  });

  it("SimilarBookIds", async () => {
    const { books_by_pk } = await client.request(operations.SimilarBookIds, { id: book.id });
    expect(books_by_pk?.id).toBe(book.id);
    expect(Array.isArray(books_by_pk?.cachedSimilarBookIds)).toBe(true);
  });

  it("TrendingBookIds", async () => {
    const { books_trending } = await client.request(operations.TrendingBookIds, { limit: 5 });
    expect(books_trending?.error ?? null).toBeNull();
    expect(Array.isArray(books_trending?.ids)).toBe(true);
  });

  it("Search", async ({ skip }) => {
    try {
      const { search } = await client.request(operations.Search, { query: "the", perPage: 3 });
      expect(Array.isArray(search?.ids)).toBe(true);
    } catch (error) {
      // A restored local DB has no Typesense index; the action reports that
      // in its envelope, which the SDK correctly raises as ActionError.
      if (error instanceof ActionError && error.messages.includes("Not found.")) skip("search index missing on this environment");
      throw error;
    }
  });

  it("GetLibrary + CountLibrary agree", async () => {
    const { user_books } = await client.request(operations.GetLibrary, { userId, limit: 100 });
    const { user_books_aggregate } = await client.request(operations.CountLibrary, { userId });
    const count = user_books_aggregate.aggregate?.count ?? 0;
    expect(user_books.length).toBe(Math.min(count, 100));
  });

  it("GetUserBook", async ({ skip }) => {
    if (!userBookId) skip("account has no user books");
    const { user_books_by_pk } = await client.request(operations.GetUserBook, { id: userBookId! });
    expect(user_books_by_pk?.userId).toBe(userId);
  });

  it("GetUserBookForBook", async ({ skip }) => {
    if (!userBookId) skip("account has no user books");
    const { user_books_by_pk } = await client.request(operations.GetUserBook, { id: userBookId! });
    const { user_books } = await client.request(operations.GetUserBookForBook, { userId, bookId: user_books_by_pk!.bookId });
    expect(user_books[0]?.id).toBe(userBookId);
  });

  it("GetListsForUser", async () => {
    const { lists } = await client.request(operations.GetListsForUser, { userId, limit: 5 });
    for (const list of lists) expect(list.userId).toBe(userId);
  });

  it("GetList", async ({ skip }) => {
    if (!listId) skip("account has no lists");
    const { lists_by_pk } = await client.request(operations.GetList, { id: listId!, limit: 5 });
    expect(lists_by_pk?.id).toBe(listId);
    expect(Array.isArray(lists_by_pk?.listBooks)).toBe(true);
  });

  it("GetJournalForBook", async () => {
    const { reading_journals } = await client.request(operations.GetJournalForBook, { userId, bookId: book.id, limit: 5 });
    expect(Array.isArray(reading_journals)).toBe(true);
  });

  it("GetGoals", async () => {
    const { goals } = await client.request(operations.GetGoals, { userId, includeArchived: true });
    expect(Array.isArray(goals)).toBe(true);
  });
});
