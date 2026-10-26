# @hardcover/sdk

The official TypeScript client for the [Hardcover](https://hardcover.app) API,
built by the Hardcover team for the community. It runs in Node 22.12+,
browsers, Deno, Bun and React Native (Hermes), with no runtime dependencies.
It's ES modules only; CommonJS code on Node 22.12+ can still `require()` it.

**[Documentation](https://docs.hardcover.app/sdk/typescript/)**: getting
started, guides, and every method with a live example you can run with your
own token.

> **0.x: early release.** Everything works against the live API. Names may
> still change before 1.0 based on what people building with it tell us;
> [open an issue](https://github.com/hardcoverapp/community-sdk/issues) with
> anything that gets in your way.

```sh
npm install @hardcover/sdk
```

Testing with Jest? Let Jest compile the package by exempting it from
`transformIgnorePatterns`, e.g. `"node_modules/(?!@hardcover/sdk)"` (alongside
any packages you already list there). Vitest needs nothing.

## Quick start

Get a personal access token at hardcover.app → Account → API Access. Keep it
out of source control and out of browser bundles.
[Getting started](https://docs.hardcover.app/sdk/typescript/0.1/getting-started/)
walks through it.

```ts
import { HardcoverClient, UserBookStatus } from "@hardcover/sdk";

const hc = new HardcoverClient({ token: process.env.HARDCOVER_TOKEN, userAgent: "my-reading-app/1.0" });

const me = await hc.me.get();
const reading = await hc.library.list({ status: UserBookStatus.CurrentlyReading });

for (const entry of reading.items) console.log(entry.book.title);
```

Typed resources cover the library and reads, lists, journal, goals, vibes,
prompts, the catalog (books, authors, series, editions), people and feeds,
notifications and search. `hc.request(operations.X, variables)` runs any
built-in operation, and `hc.graphql(query)` runs anything your token's scopes
allow, with the same auth, retries and errors.

## Signing users in (OAuth)

Apps that act for other people use OAuth. The session owns the tokens:
it refreshes them before they expire, never spends a refresh token twice,
stores each new pair before using it, and tells you once when the user needs
to sign in again. You decide where tokens are stored. See
[Sign people in](https://docs.hardcover.app/sdk/typescript/0.1/guides/sign-in/).

```ts
import * as SecureStore from "expo-secure-store";
import { openAuthSessionAsync } from "expo-web-browser";
import { HardcoverClient } from "@hardcover/sdk";
import { OAuthSession, secureStore } from "@hardcover/sdk/oauth";

const session = new OAuthSession({
  clientId: "your-client-id", // hardcover.app → Account → Developer apps
  redirectUri: "yourapp://oauth/callback",
  store: secureStore(SecureStore, "hardcover-tokens"),
  onSignedOut: () => showSignIn(),
});
const hc = new HardcoverClient({ auth: session });

const attempt = session.authorize({ scopes: ["read:me:content", "read:library"] });
const result = await openAuthSessionAsync(attempt.url, attempt.redirectUri);
if (result.type === "success") await session.completeAuthorization(result.url, attempt);
```

TVs and command-line tools can use `session.signInWithDevice(...)` instead.
On React Native, install `react-native-get-random-values` (or pass
`expo-crypto` as `random`) so sign-in has a secure random source.

## Paging

List methods return one page at a time: `{ items, limit, offset, hasMore }`.
To go through every page, hand any list method to `allPages`:

```ts
import { allPages } from "@hardcover/sdk";

for await (const book of allPages((page) => hc.authors.books(authorId, page))) {
  console.log(book.title);
}
```

Each list has a most it returns per request (100 for lists and activities, 1,000
for books). Asking for more is safe: the client sends that list's most, and
`hasMore` still tells you whether there's another page. See
[Paging](https://docs.hardcover.app/sdk/typescript/0.1/client-and-helpers/#paging).

## Reading stats

`@hardcover/sdk/stats` computes a reader's stats for a year, a month or
their whole history, the same way the Stats page on hardcover.app does:

```ts
import { readingStats, period } from "@hardcover/sdk/stats";

const year = await readingStats(hc, period.thisYear({ timeZone: "America/Denver" }));
console.log(year.books, year.pages, year.authors[0]?.author.name);
```

To compare periods without fetching again, call `fetchStatsData(hc)` once and
`computeStats(data, period)` for each. See
[Stats](https://docs.hardcover.app/sdk/typescript/0.1/resources/stats/) and
[A reader's year](https://docs.hardcover.app/sdk/typescript/0.1/guides/a-readers-year/).

## What the client handles

- **Rate limits.** It paces itself from the API's headers, backs off when
  other apps share your budget, and can batch concurrent reads into one
  request (`batch: true`).
- **Errors.** Every failure is a typed error: `ScopeError` names the missing
  scopes, `RateLimitError` says how long to wait, `SignedOutError` means show
  sign-in.
- **Retries.** Reads are retried after network and server errors; writes are
  never sent twice.
- **JSON columns.** Columns the API only knows as JSON come back typed, such
  as `book.cachedImage.color` or `book.cachedFeaturedSeries.position`. Keys
  stay as stored (`color_name`), and an empty column is `{}`.
- **Testing.** `MockTransport` from `@hardcover/sdk/testing` drives a real
  client with canned responses.

[Handle errors and test your app](https://docs.hardcover.app/sdk/typescript/0.1/guides/errors-and-testing/)
covers both, and
[Client and helpers](https://docs.hardcover.app/sdk/typescript/0.1/client-and-helpers/)
lists every option, enum and error.

## More

- [Guides](https://docs.hardcover.app/sdk/typescript/0.1/) for whole tasks,
  and a page per resource with every method and a live example
- [Changelog](https://docs.hardcover.app/sdk/typescript/changelog/)
- [The design and the API it wraps](https://github.com/hardcoverapp/community-sdk/tree/main/spec)
- [Issues](https://github.com/hardcoverapp/community-sdk/issues)
