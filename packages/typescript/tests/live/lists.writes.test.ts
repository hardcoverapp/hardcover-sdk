// A real user scanning a shelf into a new list: bulk add by ISBN (as scanners
// and people type them), a code that can't match, a repeated scan, changing a
// book's edition, removing a book, deleting the list. Runs only under
// `pnpm test:live:writes`; cleans up.
import { expect, it } from "vitest";
import { operations, PrivacySetting } from "../../src/index.ts";
import { describeLiveWrites, liveClient, popularBookIds, target, trackJournal } from "./setup.ts";

describeLiveWrites(`lists: bulk scan into a new list (${target})`, () => {
  const client = liveClient();

  it("addBooks by exact ISBN → repeat is harmless → setEdition → removeBook → delete", async () => {
    // Three random popular books that have an ISBN-13 edition.
    const scanned: { bookId: number; editionId: number; isbn13: string }[] = [];
    for (const bookId of (await popularBookIds(client)).sort(() => Math.random() - 0.5)) {
      const { editions } = await client.request(operations.GetEditionsForBook, { bookId, limit: 10 });
      const edition = editions.find((e) => e.isbn13);
      if (edition) scanned.push({ bookId, editionId: edition.id, isbn13: edition.isbn13! });
      if (scanned.length === 3) break;
    }
    console.info(`[live] scanning books ${scanned.map((s) => `${s.bookId} (${s.isbn13})`).join(", ")}`);

    const hyphenate = (isbn: string) => `${isbn.slice(0, 3)}-${isbn.slice(3, 4)}-${isbn.slice(4, 9)}-${isbn.slice(9, 12)}-${isbn.slice(12)}`;
    const upc = "071612345678";
    const codes = [scanned[0]!.isbn13, hyphenate(scanned[1]!.isbn13), ` ${scanned[2]!.isbn13} `, upc];

    const journals = await Promise.all(scanned.map((s) => trackJournal(client, s.bookId)));
    const list = await client.lists.create({ name: `sdk-test-${Date.now()}`, privacy: PrivacySetting.Private });
    try {
      const result = await client.lists.addBooks(list.id, codes);

      expect(result.notAdded).toEqual([{ code: upc, reason: "no_exact_edition" }]);
      expect(result.added.map((a) => a.code)).toEqual(codes.slice(0, 3));
      // Each code resolved to a book with that ISBN (maybe a more-read duplicate edition).
      for (const added of result.added) {
        const { editions_by_pk } = await client.graphql<{ editions_by_pk: { isbn13: string | null } }>(
          "query ($id: Int!) { editions_by_pk(id: $id) { isbn13: isbn_13 } }",
          { id: added.editionId },
        );
        expect(editions_by_pk.isbn13).toBe(added.code.replace(/[\s-]/g, ""));
      }

      const onList = await client.lists.get(list.id);
      expect(onList?.listBooks.map((lb) => lb.editionId).sort()).toEqual(result.added.map((a) => a.editionId).sort());

      // Scanning the same shelf again changes nothing.
      const again = await client.lists.addBooks(list.id, codes);
      expect(again.added.map((a) => a.listBookId)).toEqual(result.added.map((a) => a.listBookId));
      expect((await client.lists.get(list.id))?.listBooks).toHaveLength(3);

      // Switching a book to its default edition and back, as the site's edition picker does.
      const { bookId, editionId } = result.added[1]!;

      expect((await client.lists.setEdition(list.id, bookId, null)).editionId).toBeNull();
      expect((await client.lists.setEdition(list.id, bookId, editionId)).editionId).toBe(editionId);

      expect(await client.lists.removeBook(list.id, result.added[0]!.bookId)).toBe(true);
      expect(await client.lists.removeBook(list.id, result.added[0]!.bookId)).toBe(false);
      expect((await client.lists.get(list.id))?.listBooks).toHaveLength(2);
    } finally {
      await client.lists.delete(list.id);
      for (const journal of journals) await journal.cleanup();
    }
  });
});
