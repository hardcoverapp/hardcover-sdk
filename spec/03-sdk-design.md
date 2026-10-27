# 03. SDK design (language-neutral)

These rules apply to every language. Language-specific notes are at the end.
Where a language's idiom conflicts with a rule here, the idiom wins on
**naming and syntax** only, never on behavior. Behavior is pinned by the
[conformance suite](../shared/conformance).

## Principles

**Why the SDK exists.** It does what every app would otherwise have to work
out and repeat on its own: the easy-to-forget local details (splitting a scope
list into an array, cleaning up pasted ISBNs, idiomatic casing),
friendly interaction with the API (typed errors, pacing, retries that never
double-write), and the hard parts (bulk adds with partial failures, targeting
the right read on a re-read). What the API decides (matching, journaling,
permissions, read lifecycles) stays in the API. Principle 2 is the other half
of this.

1. **Operations are data.** Every GraphQL document lives once, in
   `shared/operations/`. Languages generate types from these files plus
   `api-snapshot/schema.graphql` and never hand-write query strings.
2. **Thin, honest wrappers; the API does the work.** Resource methods map
   closely to operations. When the API can do something (search matching,
   journaling, starting and finishing reads), the SDK passes through instead of
   reimplementing it, so API improvements reach SDK users without an SDK
   release. SDK-side logic is limited to client concerns (auth, retries, rate
   limits, input mapping) and to gaps the API doesn't cover yet. Each such gap
   is documented as a candidate to move into the API, with its extra request
   count stated. Current gaps: percent progress (the API takes only pages or
   seconds), the local-date default when marking a book Read, and applying
   privacy after goal creation (spec/06 #22).
3. **Always an escape hatch.** `client.graphql(query, variables)` runs anything
   the token allows, with the same auth, retries and error mapping.
4. **Fail loudly, typed.** Every failure becomes a class from
   [`shared/errors.json`](../shared/errors.json). No `{data, errors}` tuples
   leak out of resource methods.
5. **Never double-write.** Mutations are not retried when it's unknown whether
   they landed.
6. **Don't expose what users shouldn't write.** State the SDK owns (rate-limit
   state, the clock, request internals) is read-only or private, and values
   the server owns (goal progress, journal entries the server writes) have no
   setter. Decided 2026-09-28: if users shouldn't write it, the SDK doesn't
   invite them to.
7. **Never break on something the SDK has the pieces to fix, durably.**
   (Decided 2026-09-28.) A pasted token with whitespace or a `Bearer ` prefix
   is cleaned up, not rejected. But a fix must give the same result on every
   run and must not depend on state the SDK can't keep. A fix that works
   today and breaks tomorrow is worse than a clear error. The SDK only refuses
   when it genuinely can't proceed, and then says exactly what's wrong and what
   to use instead.
8. **The app identifies itself; the SDK never stands in for it.** (Decided
   2026-10-22.) Anything that names or describes the app, or decides what
   it asks the user for, comes from the app and has no SDK default:
   `clientId`, `redirectUri`, the scopes on every sign-in, the store key.
   What users see on the consent screen and at `/link` (name, description,
   image) is the app's own registration on Hardcover, looked up by
   `clientId`, so it can't read "Hardcover SDK". The SDK only appends its
   own name and version to the app's `userAgent`, after it.

## Layers

```
┌──────────────────────────────────────────────────────────┐
│ Resources   me · books · search · library · reads ·      │  hand-written, thin
│             journal · lists · goals                       │
├──────────────────────────────────────────────────────────┤
│ Operations  generated typed documents + result types      │  codegen from shared/
├──────────────────────────────────────────────────────────┤
│ Core        request pipeline: auth → send → classify →    │  hand-written
│             retry → unwrap envelopes → typed error        │
├──────────────────────────────────────────────────────────┤
│ Transport   HTTP (fetch / URLSession / OkHttp / httpx)    │  pluggable; mock in tests
└──────────────────────────────────────────────────────────┘
      Auth       static token, or an OAuth session that owns the token lifecycle
```

### Naming

- **Consistency first** (decided 2026-09-28): the same kind of thing always
  has the same shape. What a method acts on comes first as positional ids,
  container before item (`lists.addBook(listId, bookId, options)`,
  `journal.add(bookId, entry)`); options come last as one object. Every paged
  method returns a `Page`. Every "doesn't exist" is a `NotFoundError`.
- **remove** takes a book off something the user keeps (`library.remove`,
  `lists.removeBook`). **delete** destroys something the user owns
  (`lists.delete`, `goals.delete`, `journal.delete`).
- `get(id)` returns `null` when nothing exists; methods that change something
  missing throw.
- Every public method's doc comment ends with one `Scopes:` line (tested), so
  editors show the scopes it needs on hover.

## Client configuration

| Option | Default | Notes |
|---|---|---|
| `token` | one of `token`/`auth` | A PAT, or an OAuth access token the app manages itself |
| `auth` | one of `token`/`auth` | An `OAuthSession`, or any `TokenSource` (`getAccessToken`, optional `refreshAfterUnauthorized` and `userVersion`): refreshes and stores tokens itself |
| `environment` | `prod` | `prod`, `staging` or `local`, from `shared/environments.json` |
| `endpoint` | from environment | Overrides the GraphQL URL (Conductor ports, proxies) |
| `transport` | platform HTTP | Swap in the mock transport for tests |
| `maxRetries` | 3 | Applies to 429 and to query-only network/5xx retries |
| `timeoutMs` | 35000 | Just above the server's 30s |
| `userAgent` | `hardcover-sdk-<lang>/<version>` | Callers append their app name. The gateway logs it per token. Browsers don't let `fetch` set it, so it only arrives from Node and native |
| `onRateLimit` | none | Hook called with parsed headers after each response |
| `onWarning` | `console.warn` | Problems that don't stop the client, e.g. a deprecated legacy JWT |
| `pace` | true | Wait for the rate-limit allowance before sending (see Pacing) |
| `sleep` | `setTimeout` | Injectable for tests |
| `now` | current time | Injectable clock for tests (pacing) |

Date defaults belong to the server: with no date given, it records the
reader's local day from their own timezone (spec/02, Dates).

## Auth

Two ways in: a static token (a PAT, or an access token the app manages
itself) or an OAuth session that the SDK runs end to end. Exactly one is
given to the client: `token` or `auth`.

### Static token (built)

At construction: whitespace and a pasted `Bearer ` prefix are cleaned up; a
missing token, a refresh token (`hc_rt_`) or an authorization code (`hc_ac_`)
throws a `TypeError` saying what to use instead; a legacy JWT works but
triggers one `onWarning` (default `console.warn`); any other format is sent
as-is for the server to judge. A refresh token is always refused as `token`:
refresh tokens rotate, so exchanging one would spend the copy in the user's
`.env`; the next run would replay it and the API would revoke the whole token
family. Refresh tokens only ever live inside an OAuth session's store.

### OAuth session (the SDK owns the token lifecycle)

Every OAuth app needs the same hard parts, and each one signs the user out
when it's wrong. So the SDK owns all of them. The only thing it can't decide
is *where* tokens are kept, because that's platform-specific; that is a
pluggable `TokenStore` with secure defaults wherever the platform has one.

What the session handles:

- **Sign-in.** Authorization code + PKCE (S256, the only method the server
  accepts) for apps with a browser, and the device grant for TVs and CLIs.
  It generates the verifier, `state` and (with `openid`) `nonce`, builds the
  authorize URL, and on the redirect checks `state` and `iss` (RFC 9207, the
  server sends it) before exchanging the code. Redirect parsing doesn't use
  `URL`/`URLSearchParams`, which React Native implements only partly.
- **Refresh at the right time.** Shortly before `expires_in` runs out
  (with slack for clock drift), and once more after an unexpected 401, then
  replay the request once. A 401 means the gateway refused the token before
  running anything, so replaying a mutation is safe. If the token endpoint
  fails (offline, rate limited, down) while the access token still works,
  requests keep using it and the next refresh waits a few seconds, or the
  server's Retry-After.
- **One refresh at a time.** Concurrent callers share one in-flight refresh.
  Two refreshes with the same refresh token look like theft to the server,
  which revokes the whole family.
- **Persist before use.** The rotated pair is written to the store before the
  new access token is used or the call returns. A crash in between would
  otherwise leave only the spent refresh token, and the next launch would
  replay it. If the write fails, the session keeps the new pair in memory
  (the old one is already spent) and the write's error reaches the caller.
- **Sign-in and sign-out end in-flight refreshes.** A refresh that returns
  after a sign-out or a different sign-in never saves: its pair is revoked
  and the waiting request gets SignedOutError, so a signed-out user can't
  be signed back in by a late answer, and one user's tokens never overwrite
  another's.
- **Across processes.** Tabs, a CLI run twice, or an app plus its widget can
  share one store. A store may provide `lock(fn)`; the session refreshes
  inside it and re-reads the store first, adopting a pair another process
  already rotated instead of refreshing again.
- **Losing access.** `invalid_grant` on refresh (revoked on the website,
  "re-authorization required", refresh token expired or replayed) clears the
  store, calls `onSignedOut(reason)` and throws `SignedOutError`, a subclass
  of `AuthenticationError`. Apps show sign-in again on that one signal.
- **Identity-only sign-ins.** With only `openid`/`profile`/`email` and no
  `offline_access`, the server issues a short-lived access token and **no
  refresh token**. When it expires the session is signed out (`expired`),
  not broken.
- **Sign-out.** `signOut()` revokes what the store holds (another process
  may have rotated it) on the server, best effort since revoking either
  token revokes both, then clears the store and calls `onSignedOut`. A
  throwing `onSignedOut` can't break this: its error is rethrown on its own.
- **The refresh token stays inside.** `tokens()`, `completeAuthorization`
  and `signInWithDevice` return everything but the refresh token
  (`canRefresh` says whether there is one): an app that spent it itself
  would get the sign-in revoked.
- **The client's cached user.** `client.me` caches the signed-in user. The
  session's `userVersion()` changes on every sign-in and sign-out, and the
  client fetches the user again when it does. It's a number to compare,
  not a listener, so clients never need disposing.
- **Device polling** retries network and server errors until the code
  expires (the user may already have typed it), and an abort signal stops
  it immediately, including before it starts.
- **OpenID Connect.** The session sends `nonce` and keeps the `id_token` in
  the token set as-is. The SDK doesn't verify its signature (that needs a
  JWKS fetch and RS256 on every platform); apps that use it for their own
  backend login verify it there. `me.get()` covers what most apps want.

```ts
const session = new OAuthSession({
  clientId, redirectUri: "myapp://oauth/callback",
  store: secureStore(SecureStore, "hardcover"),   // any async get/set/delete
  onSignedOut: (reason) => showSignIn(),
});
const client = new HardcoverClient({ auth: session });

const attempt = session.authorize({ scopes: ["read:library", "write:library"] });
const result = await openAuthSessionAsync(attempt.url, redirectUri);
await session.completeAuthorization(result.url, attempt);
```

`attempt` is plain JSON, so an SPA keeps it in `sessionStorage` across the
redirect. The low-level helpers (`createAuthorization`, `exchangeCode`,
`refreshTokens`, `revokeToken`, `startDeviceAuthorization`,
`pollDeviceToken`, `parseRedirect`) are exported for apps that run their own
flow, e.g. a server that keeps tokens per user in a database.

Stores, per platform:

| Platform | Default | Notes |
|---|---|---|
| TypeScript | `memoryStore()` | Gone when the process ends. `secureStore(kv, key)` adapts any async key-value store (`expo-secure-store`, Keychain wrappers). A browser store with a Web Locks cross-tab lock and a Node file store (owner-only file, lock file) are planned as separate entry points |
| Swift | Keychain | Optional access group so extensions share tokens |
| Kotlin | Android Keystore-backed encrypted storage | JVM: the app passes a store |

Crypto: PKCE needs random bytes and SHA-256. The TS session uses WebCrypto
when present; SHA-256 has a small built-in fallback, so React Native only
needs a `getRandomValues` polyfill (`expo-crypto`,
`react-native-get-random-values`) or an explicit `crypto` option. Without a
secure random source it refuses to start rather than fall back to
`Math.random`.

Requests to the OAuth endpoints are form-encoded POSTs over the same
`Transport`, so the mock transport covers them in tests. Their errors are
`OAuthError` (`code`, `description`); `authorization_pending` and `slow_down`
stay inside the device poll loop.

### Requirements in the editor

Developers see what a call needs before they make it, on hover and in the
published type declarations:

- **Every operation** (`operations.X`) has a generated doc comment
  (`scripts/gen-operation-docs.mjs`, part of `pnpm codegen`): the leading
  comment from its `.graphql` file, the scopes each root field accepts, a
  role when every accepted scope needs one (the librarian `write:catalog:*`
  scopes), extra scopes for protected columns (`email`,
  `librarian_roles`) and for review fields a write can send
  (`write:reviews`), and a note when tokens can't use it at all. All of it
  comes from `api-snapshot`, so it can't drift from the server.
- **Every resource method** has a hand-written `Scopes:` line, plus notes
  such as "Supporter perk". `tests/scopes-docs.test.ts` checks each line
  covers what the method's operations need, using the shared resource
  cases (which operations it sends) and the snapshot (what each needs).
- The built package keeps every doc comment in its `.d.ts` files and strips
  them from the JavaScript.
- A `ScopeError` still names the missing scopes at runtime; the server is
  the authority, and the SDK never checks scopes before sending.

## Request pipeline

1. Serialize `{query, variables, operationName}`. The query comes from the
   generated document; `operationName` makes gateway logs readable.
2. Send with `Authorization: Bearer <token>` and `User-Agent`.
3. Parse the `RateLimit` and `RateLimit-Policy` headers (fall back to
   `X-RateLimit-*`) into `client.rateLimit` and call `onRateLimit`.
4. Classify the response with the `match` rules in `errors.json`. The first
   match wins, in file order.
5. Retry:
   - **429:** sleep `Retry-After`, up to `maxRetries`. Skip the retry if the
     daily window is the exhausted one.
   - **Network failure, 5xx or 408:** retry **queries only**, with backoff of
     250ms, 1s, then 4s.
   - **Mutations** get no network retry. Raise `NetworkError` with
     `mayHaveSucceeded: true`.
6. Unwrap action envelopes. For each top-level field whose selection contains
   `error` or `errors`, a non-null `error` or a non-empty `errors` raises
   `ActionError{operation, messages}`.
7. Return the typed data.

### Pacing

On by default (`pace: false` turns it off). The gateway charges one unit per
top-level field, minimum 1 per request (introspection and
`insert_reading_journal` fields add nothing), and every
response reports the remaining burst allowance and refill rate. Before sending,
the client counts its own request's cost the same way and reserves it from the
last known allowance, minus what its other unanswered requests have already
reserved; if that's short, it sleeps until enough has refilled. The cost is
given back when the response arrives (or the send fails). Requests sent at the
same moment therefore queue behind each other instead of all spending the same
remaining units. Before the first response, the client doesn't know its tier:
it sends up to 5 units (the smallest burst, a free-tier legacy JWT) and holds
the rest until an answer brings real numbers. A server that sends no
rate-limit headers releases them all (spec/06 #29). A 429 is still handled
(and retried) when pacing is off or another client shares the token; after
waiting one out, pacing stands down until fresh headers arrive so it never
double-waits. The daily cap is never waited out.

The allowance is **per user, not per token**. Two clients (or two tokens) for
the same person share one budget, and each only paces from the responses it
has seen. Apps should use one client per user.

Measured on the local stack: the live writes suite went from hundreds of 429s
per run to zero, with the same total duration.

### Contention backoff

The rate-limit budget is per user, not per token, so two apps (or two
clients) for one person compete for it, and each only sees the headers of its
own responses. Pacing alone makes competing clients wake at the same moment
and collide again. Decided 2026-10-07:

- A 429 when the client had no rate-limit state, or when its last headers
  showed the allowance spent, is ordinary: wait exactly `Retry-After`.
- A 429 when the last headers said there *was* room for this request is
  **contention** (someone else spent it). So is any second 429 in a row. The
  wait becomes `Retry-After` plus a random extra of up to
  `min(30s, 1s × 2^k)`, where `k` counts the contended 429s in a row (full
  jitter), so competing clients spread out instead of waking together.
- `k` resets after a successful response. The random source is injectable
  (`random`) so tests and conformance runners are deterministic.

### Request planner

Grouping calls into fewer HTTP requests, without changing what they mean.
Built 2026-10-07 (TypeScript), opt-in with the client option `batch: true`.

- The gateway accepts a **JSON array** of `{query, variables, operationName}`
  and answers with an array in the same order. It charges the sum of the
  items' fields (minimum 1 for the whole request) and rejects any request
  over the tier's burst capacity (403). So the planner groups concurrent reads
  into arrays sized to the remaining allowance and the burst capacity from
  `RateLimit-Policy`, using 5 (the smallest tier, free over a legacy JWT)
  until a response says otherwise. A lone read goes out as a plain request.
- **Mutations are barriers.** A mutation waits for everything issued before
  it, runs alone, and holds back everything issued after it. Reads are
  grouped, and identical reads (same document and variables) sent once, only
  within a run of reads; nothing is grouped, reordered or de-duplicated
  across a mutation.
- One failed item (GraphQL or action error) rejects only its caller. The
  gateway checks scopes, operation names and size for the whole array, so
  when it rejects the array for one of those, each item is sent alone to get
  its own answer. A 429 or network failure retries the whole array (reads
  only); a daily-cap 429 rejects every item.
- `graphql()` is never grouped: it's the escape hatch, sent as written.
- **Why an option, not a scope** (the earlier `client.batch(async () => …)`
  idea): there's no async context tracking on Hermes or in browsers, so a
  scope can't tell its calls from unrelated ones made concurrently. Reads
  issued within one macrotask, or while an earlier request is waiting on the
  allowance, join the same run.

### Incremental reads

Built 2026-10-07 for the library: `library.changes({ since, knownIds, limit })`
returns entries changed after a cursor, oldest first, with the next cursor and
`hasMore`.

- **The cursor is the server's, never the client's clock.** It's the
  `(updated_at, id)` of the last row returned, so paging through a run of
  equal timestamps neither skips nor repeats, and device clock skew can't lose
  changes. `updated_at` stays the server's string, which keeps microseconds a
  JS `Date` would round. Apps store the cursor as an opaque string.
- **Reads count as changes**: a read's change touches its entry.
- **Removals need ids.** Entries are deleted outright and the API has no
  deletion feed ([06](06-open-questions.md) #27). With `knownIds`, the SDK
  also reads every entry id (one field) and returns `removedIds`. Apps pass it
  once per sync, not on every page.
- Apps upsert by id. Next candidates: lists (`list_books` don't touch their
  list, so a list's changes need their own cursor), vibes, journal.

### Not in the core (modules later)

- **Caching**: off. A hidden cache serves stale data and hides server-side
  writes (journal entries the server records). Incremental reads (below)
  cover the "only what changed" need; a pluggable cache can come later as an
  optional module.
- **Stats** (decided 2026-10-07, built 2026-10-22): a limited, optional
  module, `@hardcover/sdk/stats`. Rules in `shared/stats.json`, cases in
  `shared/conformance/stats.json`.
  - `period.life()`, `.year(y)`, `.month(y, m)`, `.custom(from, to)`, and
    `.thisYear()` / `.thisMonth()` with the reader's time zone. Read dates
    are calendar dates, so only "this" needs a zone (API tokens can't read
    the profile time zone, see spec/02).
  - `fetchStatsData(client)` pages through the reader's counted library
    (`GetStatsLibrary`: the Read shelf or `read_count >= 1`, with reads,
    editions, tags and contributors) plus the contributor-role tables.
  - `computeStats(data, period)` is pure: books, reads (re-reads included),
    pages, time listened, half-star ratings, formats, genres and moods,
    authors, and reads per month. `readingStats(client, period)` does both.
  - It follows the app's Stats page exactly (its counted-reads rule, edition
    and format fallbacks, rating buckets, author rules), checked live on
    2026-10-22 against `Stats::CountedReads` for life, two years and a
    month. One difference: pages and time come from finished reads, the
    app's fallback, because the API doesn't expose the daily progress
    totals the app prefers (spec/06 #43).
  - Anything more specific (pace prediction, heatmaps, chart buckets, how a
    chart looks) is the app's; `byMonth` is the raw material for charts.
- **API versions**: when the API adds a version header, the client sends the
  version it was generated against and passes deprecation notices to
  `onWarning`. The format and support window are the API side's call.

### Chunking

`lists.addBooks` sends its adds 5 per request. The 5 is the smallest tier's
burst capacity, so a request never exceeds what any token can pay for; reads
use the request planner instead.

## Casing

Decided 2026-09-28: **every SDK follows its language's naming convention.**
TypeScript, Swift and Kotlin use camelCase; Python uses snake_case.

- **Shared operations stay canonical.** `shared/operations` uses the schema's
  snake_case field names with no aliases, so they stay schema-true and match
  the API docs.
- **Casing is a build step, not runtime conversion.**
  `scripts/case-operations.mjs --case <camel|snake>` rewrites the shared
  operations for a language by aliasing each multi-word field
  (`releaseYear: release_year`). The server returns idiomatic keys directly,
  and codegen produces idiomatic types from the rewritten documents. There is
  no key-renaming pass over responses, so JSON column contents
  (`cached_image`, `search.results`) are never touched.
- **Operation root fields are never aliased** (`insert_user_book`,
  `user_books`). Conformance cases, the scope map and
  `ActionError.operation` stay identical across languages. Resource methods
  unwrap roots, so users rarely see them.
- **Arguments and input objects can't be aliased.** Generated input types keep
  wire names. Resource methods take idiomatic inputs and map them to wire
  fields explicitly, which is also how "send only fields the caller set" is
  enforced.
- **Both documents are validated.** CI runs `validate-operations` on
  `shared/operations` and on each language's rewritten output, which catches
  alias collisions.
- **Fixtures are recorded canonical** (snake_case, from `shared/operations`).
  A language that aliases reshapes them in its mock client using the same
  rewrite, so one fixture set serves every language.
- **JSON column contents** keep their stored keys. Hand-written types for
  `cached_image` and similar may expose idiomatic names, but that mapping is
  explicit per type, never a blanket conversion. TypeScript does this for the
  stored snake_case keys in images (`color_name`), contributors
  (`contributor_role_*`, `contributor_specialization_*`) and a featured
  series (`books_count`, `primary_books_count`) (decided 2026-10-27, 0.1.1):
  it adds the camelCase copy and keeps the stored key, deprecated, until a
  later minor release removes it. The same data then reads the same in
  `cached_*` columns and in search hits.
- **Exception: search hits.** Search documents come from the index as JSON
  with snake_case keys and string ids. Their keys are index field names, never
  user content, so the SDK converts them all to the language's casing and ids
  to numbers. `search.raw()` keeps the untouched response.
- **Planned: field descriptions as doc comments.** The docs site's
  hand-written `field-descriptions.json` (e.g. "Category ID (1=Book,
  2=Novella, …)") can feed codegen so generated types carry them as hover
  tooltips in every language. Nice-to-have, not a v1 requirement.
- **This differs from the app**, which aliases by hand in each query. Hand
  aliases are what drifted in the old `sdk/` scaffold; generated aliases can't.

## Types for JSON columns

Several fields are `jsonb` and have no schema type:

- `cached_image`, `cached_contributors`, `cached_tags`, `cached_featured_series`
- `books.cached_header_image`, `books.cached_similar_book_ids`
- `users.cached_cover`, `users.cached_genres`
- `vibes.cached_book_ids`
- `search.results`
- `activities.data`
- `reading_journals.metadata`
- `goals.conditions`

For v1, ship hand-written types for `cached_image`, `cached_contributors`,
`cached_tags`, `cached_featured_series` and the per-`query_type` search hits.
Keep each as a small override map next to codegen, and mark them as "shape
observed, not guaranteed". Everything else stays as untyped JSON.

Built in TypeScript (2026-10-20): `core/json-columns.ts` holds the four
`cached_*` types and maps them by field name onto every response that
`request()` returns and every public type (`BookSummary`, `LibraryListItem`,
…), at any depth. Contents keep their stored keys (`cached_tags` entries are
stored camelCase), plus the camelCase copies described under Casing. Every field is
optional: an empty column arrives as `{}`, and the server may add or drop
keys. The raw generated types (`BookSummaryFragment`) stay `unknown`.

Added (2026-10-26), with shapes read from the app's own writers and checked on
prod: `cached_header_image` and `cached_cover` are the same image snapshot as
`cached_image`; `cached_similar_book_ids` and `cached_book_ids` are id arrays;
`cached_genres` is `{ tag, tagSlug, count }[]`. `BookDetail` selects the header
image and `UserProfile` the cover and genres. The similar-book ids (up to 100)
stay out of the fragments, as vibe book ids do; `books.similar` reads them with
their own query (`SimilarBookIds`).

Added (2026-10-27): `books.ratings_distribution` is typed `RatingCount[]`
(`{ rating, count }`, `[]` when a book has no ratings; checked locally) and
selected by `BookDetail`. `UserProfile` selects `users.admin` (staff), readable
with the same scopes as the rest of the profile.

## First consumers

The first two official uses set v1 priorities. A feature either of them needs
ships before anything they don't.

| Consumer | Runtime | Needs first |
|---|---|---|
| Docs site (`hardcover-docs`) | Browser, Astro build (Node) | PAT auth, `search`, `books`, `library`, `reads`; readable example code for each guide page |
| React Native app | Hermes | OAuth PKCE with a native custom-scheme redirect, device grant, refresh rotation, `me`, `library`, `reads`, `journal`, `lists`, `search` |

## Resources (v1)

Each method notes its operation, its required scope and any extra requests.

| Resource | Methods | Operations |
|---|---|---|
| `me` | `get()` (cached per client) | Me |
| `books` | `get(id)`, `getBySlug(slug)`, `getMany(ids)` (in the order given; missing ids skipped), `editions(bookId, page)`, `findByIsbn(isbns)` (exact ISBN-13/10, spaces and hyphens fine), `edition(id)` (with its book), `friends(bookId)` (library entries of people you follow, with reviews; never private notes), `findByExternalIds(platform, ids)` (books other services know by their ids, e.g. `Platform.Goodreads`; one request for the list), `trending({ duration, limit, offset })` (2 requests: ids, then books, in trending order; `limit` capped at the API's 100), `released({ from, to, limit, offset })` (first released in the range, most readers first; reissues excluded), `similar(bookId, page)` (the site's similar books from `cached_similar_book_ids`, up to 100; 2 requests; `updatedAt` null until the site builds the list). Read-only; catalog writes need librarian roles and come later | GetBook, GetBookBySlug, GetBooks, GetEditionsForBook, FindEditionsByIsbn, GetEdition, FindBookMappings, GetFriendsForBook, TrendingBookIds, ReleasedBooks, SimilarBookIds |
| `authors` | `get(id)`, `getBySlug(slug)` (with `canonicalId` for merged duplicates), `books(authorId, page)` (each book once, most readers first, active books only), `series(authorId)` (by name) | GetAuthor, GetAuthorBySlug, GetAuthorBooks, GetAuthorSeries |
| `series` | `get(id)`, `getBySlug(slug)`, `books(seriesId, page)` (every entry in position order, 50 per page by default, with `position`, `details`, `compilation`, `featured`; the site's reading order is server-side only, spec/06) | GetSeries, GetSeriesBySlug, GetSeriesBooks |
| `users` | `get(id)`, `getByUsername(username)` (case-insensitive, leading @ fine), `followers(userId, page)`, `following(userId, page)`, `follow(userId)`, `unfollow(userId)`, `removeFollower(userId)` (someone who follows you), `block(userId, { type: BlockType.Full \| Invites })` (a full block ends follows both ways), `unblock(userId)` (finds the block ids, false if none), `blocked()` | GetUser, GetUserByUsername, GetFollowers, GetFollowing, FollowUser, UnfollowUser, BlockUser, UnblockUser, GetBlockedUsers |
| `activities` | `forUser(userId, page)`, `forBook(bookId, page)`, `following(page)` (people the signed-in user follows; filtered through the author's followers, since `activities.followers` maps the author's own follows), `delete(id)` (your own) | GetActivitiesForUser, GetActivitiesForBook, GetFollowingActivities, DeleteActivity |
| `likes` | `like(LikeableType, id)`, `unlike(LikeableType, id)`, each returning the new count; a review is liked as its library entry | Like, Unlike |
| `notifications` | `list(page)` (in-app, newest first), `unreadCount()`, `markRead(ids?)` (these, or every unread one; returns how many changed). Mark-read uses the bulk `where:` form scoped to the user's own unread rows, since the per-row form is blocked for tokens (spec/06 #38) | GetNotifications, CountUnreadNotifications, MarkNotificationsRead, MarkAllNotificationsRead |
| `search` | `books`, `authors`, `series`, `characters`, `lists`, `prompts`, `publishers`, `users` (query, `{ page, perPage, fields, weights, typos, sort, filterBy }`) → `{ hits, ids, found, page, perPage }` with numeric ids and idiomatic keys; `raw(query, { type })` untouched. The query passes straight through; the API owns matching. Barcode scans use exact ISBN lookup instead (see Search below) | Search |
| `library` | `list({ status, limit, offset })`, `count({ status })`, `forBook(bookId)`, `get(id)`, `add(bookId, options)`, `update(id, patch)`, `setStatus(id, status, { date, occurredAt })`, `rate(id, rating)`, `remove(id)`. `status` is one value or a list. Planned: `iterate({ status })`. Owned editions: `markOwned(editionId)` (onto the reader's Owned list, created by the server; safe to repeat), `owned(page)`, `unmarkOwned(bookId)` (no un-own action exists, so it removes the book from the Owned list; up to 3 requests; false if it wasn't there) | GetLibrary, CountLibrary, GetUserBookForBook, GetUserBook, AddUserBook, UpdateUserBook, RemoveUserBook, MarkOwned, GetOwnedBooks |
| `reads` | `list(userBookId)`, `current(userBookId)`, `setProgress(userBookId, { pages \| seconds \| percent, occurredAt })`. Starting and finishing are driven by `library.setStatus` (Currently Reading starts a read, a new one on a re-read; Read finishes it). Edited by hand: `add(userBookId, { startedAt, finishedAt, precision, editionId })` (a past read; with `finishedAt` the server finishes it and journals it), `update(readId, patch)` (only what's set; null clears a date), `delete(readId)`. Across the library: `finished({ from, to, limit, offset })` (the signed-in user's reads finished in a range, newest first, with their book). Omitted: `upsert_user_book_reads`, deprecated in the app and answered "Not implemented" | GetUserBook, UpdateUserBookRead, AddUserBookRead, RemoveUserBookRead, GetFinishedReads |
| `journal` | `forBook(bookId, page)`, `add({ bookId, event = note, entry, privacy = the reader's activity privacy setting (the app's default for journal entries), editionId, date, tags = [], metadata })`, `update(id, patch)`, `delete(id)`, `clearForBook(bookId)`. Everything the API allows, any `JournalEvent`; each server-written event's doc comment names the call that already writes it (adding it manually duplicates it; a manual `progress_updated` merges into the day's entry). Journal `date` is a day (the API's `action_at` here is a date, not a timestamp) | GetJournalForBook, AddJournalEntry, UpdateJournalEntry, DeleteJournalEntry, ClearJournalForBook |
| `lists` | `mine(page)`, `forUser(userId, page)`, `get(id, page)`, `create`, `update`, `delete`, `addBook(listId, bookId, { editionId, position })`, `removeBook(listId, bookId)` (2 requests; returns false if absent), `addBooks(listId, codes)`: bulk add by exact ISBN-13/ISBN-10 (one lookup, adds batched 5 per request, per-item retry on a failed batch; unmatched codes such as UPCs are reported as `no_exact_edition`, never guessed). Ranked lists: `reorder(listId, listBookIds)` (every row in the new order, else RangeError before any change; clears positions, sets them from 0 in batches of 5, touches the list so its page refreshes, as the app does; ranked lists only). Following: `follow(listId)`, `unfollow(listId)`, `followed(page)`. Collaborative: `members(listId)`, `memberships()` (the signed-in user's invites and memberships), `invite(listId, userId)` (owner only, feature-flagged; the server enforces privacy rules), `respond(listId, ListMemberStatus.Accepted | Ignored | Spam)`, `removeMember(listId, userId)` (owner removes, or a member leaves) | GetListsForUser, GetList, CreateList, UpdateList, DeleteList, AddBookToList, FindListBook, RemoveListBook, FindEditionsByIsbn, GetListBookIds, ClearListPositions, FollowList, UnfollowList, GetFollowedLists, GetListMembers, GetListMemberships, InviteListMember, RespondToListInvite, RemoveListMember |
| `goals` | `list({ includeArchived })`, `get(id)`, `create(fields)`, `update(id, patch)` (2 requests: the API's update takes the whole goal, so the SDK reads and merges), `archive`/`unarchive`, `refreshProgress(id)`, `delete(id)`; plus `goalProgress(goal)` → `{ current, target, percent }` in the goal's unit (hour goals: target in hours, API progress in seconds). Progress is server-calculated. `create` applies a requested privacy with one follow-up update while the API ignores it on create (spec/06 #22) | GetGoals, GetGoal, CreateGoal, UpdateGoal, RefreshGoalProgress, DeleteGoal |
| `vibes` | `mine(page)`, `forUser(userId, page)`, `get(id)`, `books(id, page)` (cached results in ranked order, with `resultsPending`/`generatedAt`; 2 requests), `create({ title, description, privacy, signals, exclusions, dynamicSignals })`, `update(id, { …, addSignals, addExclusions, dynamicSignals })`, `delete(id)`. Signals are idiomatic shapes mapped to the API's nested attributes; taxonomy values are suggestions (any string accepted, the server validates). Supporter, custom-only and follower rules stay server-side | GetVibesForUser, GetVibe, GetVibeBookIds, CreateVibe, UpdateVibe, DeleteVibe, GetBooks |
| `prompts` | `get(id)`, `getBySlug(slug)`, `list({ sort: "popular" \| "newest", featured, limit, offset })`, `mine(page)`, `forUser(userId, page)`, `books(promptId, page)` (most picked first, with `answersCount`), `forBook(bookId, page)` (the prompts a book answers), `myAnswers(promptId)`, `following(page)`, `create({ question, description })` (always public), `update(id, patch)` (2 requests: the API's update takes the whole prompt; past 5 answers the server changes only the description), `delete(id)`, `answer(promptId, bookId, { description })` (idempotent per book; the server journals it) → `{ answer, answersCount }`, `updateAnswer(answerId, { description })`, `deleteAnswer(answerId)`, `follow(promptId)`, `unfollow(promptId)` (false if not following) | GetPrompt, GetPromptBySlug, GetPrompts, GetPromptsForUser, GetPromptBooks, GetPromptsForBook, GetPromptAnswersForUser, GetFollowedPrompts, CreatePrompt, UpdatePrompt, DeletePrompt, AnswerPrompt, UpdatePromptAnswer, DeletePromptAnswer, FollowPrompt, UnfollowPrompt |

Methods scoped to "my" data resolve `userId` from `me.get()`, which is cached
per client, so it costs one request per client, not per call.

### Coverage

Decided 2026-10-20: the SDK covers every endpoint the public API gives app
tokens, unless there's a written reason to leave one out. Audited against prod
introspection as an app token (`user` role).

**Later** (legitimate, not v1): characters and publishers (`get`, books);
tags and taggings (browse by genre or mood, a reader's tags); following
catalog entities (`follows`: authors, books, series, characters); filter lists
("hidden by me"); collection imports (a full Goodreads-style import workflow);
notification settings; account data (`subscriptions`, referrals); external
store links (`links`); box-set children (`book_collections`); per-book journal
summaries (`reading_journals_summary`); count helpers on other tables.

**Left out on purpose:**

- Catalog writes (`insert/update_book`, `_edition`, `_author`, `_serie`, …) and
  mapping writes need librarian or mapper roles (`write:catalog:*`).
- Operations the gateway blocks for tokens: `update_user`,
  `update_user_privacy_setting`, `update_newsletter`, `insert_report`,
  `insert_user_flags`, `receipt_validate`, and the per-row
  `update_notification_deliveries_by_pk` / `update_notification_settings_by_pk`
  (spec/06 #38).
- `upsert_user_book_reads`: deprecated in the app, answers "Not implemented".
- Reference tables the SDK ships as enums (`reading_formats`,
  `privacy_settings`, statuses, `platforms`, contributor roles, …).
- Internal or moderation tables (`taggable_counts`, `user_flags`, signup
  stats, `user_settings`, `images`).
- Raw Hasura bulk forms (`*_many`, `where:` deletes and updates): exposed only
  through the narrow methods above.
- Subscriptions (`*_stream`): the SDK is HTTP only; realtime would be its own
  module.

### Journal entries are the server's job

The server journals status changes, read starts and finishes, progress,
ratings and reviews itself, with a
10-minute debounce. Resource methods never write journal entries for those, or
every step would appear twice. `journal.add` accepts any event, but apps
normally use it for what only the reader writes (notes, quotes); each
`JournalEvent` doc comment names the call that already journals it. `occurredAt` on library and reads methods sets `action_at`, so
the server's entry carries when the reading actually happened.

### Pagination

- Page methods take `{limit, offset}` and return
  `{items, limit, offset, hasMore}`. `hasMore` is true when
  `items.length === limit`; no count request is made.
- Planned: `iterate()`, a lazy async sequence that stops at the table's row
  cap (see [01](01-api-surface.md#query-roots-reachable-by-tokens)) and paces
  itself like every request.

### Search

- `search.<type>()` sets `query_type` and passes the query and options
  through untouched; the API's own defaults apply. It returns typed hits with
  numeric ids and idiomatic keys, plus `found`.
- `raw()` returns the untouched response.
- **Barcode scans don't use search** (decided with the API side, 2026-09-28):
  a scan identifies one edition, so apps match it exactly with
  `books.findByIsbn` (single) or `lists.addBooks` (bulk) against
  `isbn_13`/`isbn_10`. Search is only a fallback the app offers when there's
  no exact match. (The web app's scanner currently feeds search; switching it
  is an app-side change.)
- Every call is 1 request with one top-level field, so it costs 1 against the
  rate limit.

## Versioning and releases

- **One monorepo, one tag stream per language** (`typescript-v1.2.0`), using
  release-please with one component per package. The old `sdk/` scaffold's
  config can be reused. A tag always points at the commit the published
  package was built from (for npm, the version's `gitHead`), never at a
  later commit on `main`.
- **Semver is per language.** A breaking API snapshot change is a major bump in
  every language that exposes the affected surface.
- **1.0 is no longer gated on the API.** Tokens and OAuth were beta-gated
  when this was written; both shipped to everyone by 2026-10-10 (the
  `oauth_apps` flag is gone). What 1.0 commits to now is the SDK's own
  public API: after 1.0, renaming or removing a method, option or type
  needs a major version. Decided 2026-10-22: start at 0.1.0 and reach 1.0
  once people building with it have tried it and suggested changes.
- **A changelog per package** (`packages/<lang>/CHANGELOG.md`, Keep a
  Changelog format, shipped in the package): written for people using the
  SDK, with what to change for anything renamed or removed.
- Planned: every package records the `api-snapshot` commit it was generated
  against, exposed as `SDK.apiSnapshot`.

## Language notes

- **TypeScript (first).**
  - Isomorphic: `fetch` only, no Node built-ins in core. It runs in Node 20+,
    Deno, Bun and browsers.
  - **Package.** `@hardcover/sdk`, ES modules only (decided 2026-10-22: a
    CommonJS copy doubled the size and risked two copies of every class;
    Node 22.12+ can `require()` ES modules, and Node 20 is past end of
    life). Built by `scripts/build.mjs` with `tsc` into `dist/`: JavaScript
    without comments, type declarations with every doc comment, and only
    the declarations an entry point can reach. One file per module, not a
    bundle, so every entry point shares one copy of the core: an error from
    `/oauth` is `instanceof` the same class as one from the root. No runtime dependencies: the one type
    the generated documents need (`DocumentTypeDecoration`) is declared in
    `core/decoration.ts` rather than pulled from
    `@graphql-typed-document-node/core`, which would bring `graphql` along as
    a peer. `pnpm pack:check` installs the tarball in a fresh project and
    checks import, `require()` on Node 22.12+, types (nodenext, CommonJS
    and bundler), and that no doc comment in the declarations is a
    maintainer note; CI runs it.
  - **Working from source.** Each export has an `@hardcover/source`
    condition pointing at `src/`. The repo's typecheck, tests and playground
    set it, so they never need a build; a linked consumer can too (`node
    --conditions=@hardcover/source`, or `customConditions` in its tsconfig).
    Published installs never see it.
  - Codegen: `@graphql-codegen/cli` (`typescript-operations` and
    `typed-document-node`) over the `--case camel` rewrite of the shared
    operations.
  - Entry points: `@hardcover/sdk` (client), `@hardcover/sdk/oauth`,
    `@hardcover/sdk/testing` (mock transport).
  - **Browser caution.** The docs contradict each other on browser use (see
    [06](06-open-questions.md)). Recommend PKCE for SPAs and never shipping a
    PAT in client code.
  - **The docs site is a first-class consumer.** `GraphQLExplorer` examples can
    show an "SDK" tab rendered from the same operation name.
  - **React Native is a first-class runtime** (Hermes), tested separately from
    Node and browsers:
    - No `AbortSignal.timeout`, WebCrypto or Node built-ins in core. Timeouts
      use `AbortController` plus `setTimeout`.
    - OAuth needs only a `getRandomValues` polyfill (`expo-crypto`,
      `react-native-get-random-values`); SHA-256 has a built-in fallback.
    - Redirects use a `native` app's custom scheme, opened with the platform
      auth session (e.g. `expo-web-browser` `openAuthSessionAsync`).
    - Tokens go to Keychain/Keystore through `secureStore(SecureStore, key)`
      (`expo-secure-store`), never AsyncStorage.
    - The published package bundles `shared/*.json`; Metro can't import
      outside the package.
- **Swift.**
  - async/await with `Sendable` types.
  - Codegen: `apollo-ios` codegen, or a lightweight generator over the same
    documents.
  - OAuth via `ASWebAuthenticationSession` in an optional module.
- **Kotlin, Java-friendly.** One JVM package that serves Kotlin, Android and
  plain Java callers, the way OkHttp does.
  - Kotlin source with coroutines (`suspend`) as the primary API.
  - A Java-facing surface on every public entry point: `CompletableFuture`
    and blocking variants, `@JvmOverloads` on default arguments,
    `@JvmStatic` on factories, `@file:JvmName` so there are no `*Kt`
    classes, and nullability annotations that Java tooling respects.
  - No `Flow`, `Result` or inline value classes in the Java-visible API.
  - Codegen: `apollo-kotlin` Kotlin models from the shared documents.
  - OkHttp transport.
- **Ruby** (requested by the API side, 2026-09-28; Hardcover itself runs on
  Rails).
  - snake_case (`--case snake`: the canonical operations, unchanged), Ruby
    naming (`library.set_status`, `goals.refresh_progress`), keyword arguments
    for options.
  - A plain-Ruby gem with no Rails dependency, so it works in scripts, bots and
    Rails apps alike. `Net::HTTP` transport (or Faraday if an adapter is
    wanted), Zeitwerk loading, RBS signatures generated from the operations.
  - Same shared contract: enums, errors, conformance cases and environments
    from `shared/`.
- **Python.**
  - Sync and async clients over `httpx`.
  - Codegen: `ariadne-codegen` (pydantic models) from the same documents.
  - snake_case preserved.
  - An existing community SDK (`hardcoverpy`, in the docs showcase) is worth
    comparing before building.
