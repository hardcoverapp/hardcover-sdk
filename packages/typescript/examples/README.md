# Examples

Each file is a self-contained, type-checked function you can copy into an app.
`pnpm typecheck` compiles them against the SDK, so an API change that breaks
an example fails CI instead of drifting from the docs. The
[docs](https://docs.hardcover.app/sdk/typescript/) show the same calls with
live examples you can run with your own token.

| Example | Shows |
|---|---|
| [quick-start.ts](quick-start.ts) | Creating a client, reading your shelf, rate-limit state |
| [sign-in.ts](sign-in.ts) | OAuth sign-in on React Native and on a TV, secure token storage, sign-out |
| [shelve-a-book.ts](shelve-a-book.ts) | Add, status, rating, review, remove |
| [reading-progress.ts](reading-progress.ts) | Progress in pages / percent / seconds, backdating with `occurredAt`, a re-read |
| [bulk-scan-to-list.ts](bulk-scan-to-list.ts) | Scanning barcodes into a list by exact ISBN, one or a whole shelf |
| [shared-lists.ts](shared-lists.ts) | Ranking a list, following lists, editing a list together |
| [social.ts](social.ts) | Profiles, follows, your feed, friends who read a book, likes, blocks |
| [notifications.ts](notifications.ts) | The notification bell: unread count, list, mark read |
| [search.ts](search.ts) | Searching every type, tuning with the API's options |
| [books.ts](books.ts) | Book details, editions, exact ISBN lookup, trending (one per series), new releases, ordered batches |
| [year-in-review.ts](year-in-review.ts) | A year of finished reads with their books, logging and fixing a past read, owned editions |
| [stats.ts](stats.ts) | Reading stats for a year, a month or life: totals, ratings, formats, genres, authors, books per month |
| [sync-library.ts](sync-library.ts) | Incremental library sync with a cursor, and finding removals |
| [journal.ts](journal.ts) | Notes and quotes; why most journal entries are the server's job |
| [vibes.ts](vibes.ts) | Building a recommendation vibe from signals, and reading results honestly |
| [goals.ts](goals.ts) | Reading challenges, merge-on-update, `goalProgress()` units |
| [catalog.ts](catalog.ts) | Author pages, a series reading order, importing by Goodreads id, an edition by id |
| [prompts.ts](prompts.ts) | Browsing prompts and their ranked books, answering, following, asking your own |
| [errors-and-testing.ts](errors-and-testing.ts) | Error types apps handle, and testing with `MockTransport` |
