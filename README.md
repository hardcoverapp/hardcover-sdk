# Hardcover SDK

Hardcover's official SDKs, built for the community. Client libraries for the
[Hardcover](https://hardcover.app) GraphQL API, maintained by the Hardcover
team and open to contributions.

There is one shared, language-neutral contract (operations, enums, errors and
behavior tests), and each language is a thin layer on top of it. The API
decides; the SDK passes its answers through, and takes care of what every app
would otherwise repeat:

- typed resources (`me`, `library`, `reads`, `lists`, `journal`, `goals`,
  `vibes`, `prompts`, `books`, `authors`, `series`, `users`, `activities`,
  `likes`, `notifications`, `search`) with one consistent shape across them
- rate limits: pacing from the API's headers, backoff when other apps share the
  same budget, and opt-in batching of concurrent reads
- OAuth sign-in (browser with PKCE, device code, OpenID) where the SDK owns the
  tokens: refresh, rotation, secure storage and one signed-out signal
- one error taxonomy, with missing scopes and failed actions spelled out
- local details apps get wrong: ISBN cleanup, token cleanup
- incremental library sync with a server-side cursor
- reading stats for a year, a month or life (optional module), matching the
  site's Stats page

<p align="center">
  <img src="packages/typescript/teasers/prompts.webp" alt="A prompt's books, most picked first: hc.prompts.books()" width="49%">
  <img src="packages/typescript/teasers/import.webp" alt="Goodreads ids to Hardcover books in one request: hc.books.findByExternalIds()" width="49%">
</p>

<p align="center"><sub>Real calls, rendered for illustration (the SDK returns JSON). More in <a href="packages/typescript/teasers">packages/typescript/teasers</a>.</sub></p>

**Status: TypeScript, 0.x early release.** `@hardcover/sdk` is
[on npm](https://www.npmjs.com/package/@hardcover/sdk); its
[README](packages/typescript/README.md) and the
[documentation](https://docs.hardcover.app/sdk/typescript/) cover using it.
It covers what reading apps need from the API: the library and reads, lists,
journal, goals, vibes and prompts, the catalog (books, authors, series,
editions, external ids), people and feeds, and notifications. A few niche
areas come later, and some endpoints are left out on purpose (librarian-only
catalog edits, operations the gateway blocks for tokens);
[spec/03](spec/03-sdk-design.md#coverage) lists both. Names may still change
before 1.0. The first consumers are the Hardcover docs site (live examples)
and a React Native app. Swift, Kotlin (Java-friendly), Python and Ruby follow
once the shared layer has proven itself.

## Language matrix

Generated from [`languages.json`](languages.json). Run `pnpm matrix` after
changing it.

<!-- MATRIX:START -->
| Feature | TypeScript | Swift | Kotlin (Java-friendly) | Python | Ruby |
|---|:-:|:-:|:-:|:-:|:-:|
| **Core** |  |  |  |  |  |
| GraphQL transport + raw query escape hatch | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| Normalized error taxonomy | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| Action envelope unwrapping (`error` / `errors`) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| Rate-limit pacing, 429 backoff, request batching | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| Types generated from `shared/operations` | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| **Auth** |  |  |  |  |  |
| Personal access token | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| OAuth authorization code + PKCE | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| OAuth device grant | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| Refresh rotation + revoke | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| **Resources** |  |  |  |  |  |
| `me` (read) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `books` / `editions` (read) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `authors` (read) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `series` (read) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `users`: profiles, follows, blocks | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `activities`, `likes`, friends on a book | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `notifications`: list, unread count, mark read | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `search` (read) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `library` (user books): read | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `library` (user books): write | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `reads` (dates + progress): read | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `reads` (dates + progress): write | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `journal`: read | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `journal`: write | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `lists`: read | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `lists`: write | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `goals`: read | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `goals`: write | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `vibes`: read | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `vibes`: write (Supporter perk) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `prompts`: read | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `prompts`: write (ask, answer, follow) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| `stats` (optional module): period totals and breakdowns | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| **Testing** |  |  |  |  |  |
| Mock transport + shared fixtures | 🟡 | ⬜ | ⬜ | ⬜ | ⬜ |
| Shared conformance suite passes | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| Contract tests vs `api-snapshot` | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| Live integration tests: reads (opt-in) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| Live integration tests: writes (opt-in, real-user flows) | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |
| **Runtimes** |  |  |  |  |  |
| Node + browser (docs site) | ✅ | ➖ | ➖ | ➖ | ➖ |
| React Native (Hermes) | 🟡 | ➖ | ➖ | ➖ | ➖ |
| **Release** |  |  |  |  |  |
| Published to package registry | ✅ | ⬜ | ⬜ | ⬜ | ⬜ |

✅ done · 🟡 partial · ⬜ planned · ➖ not applicable
<!-- MATRIX:END -->

A cell turns ✅ only when that language passes the matching
[conformance cases](shared/conformance), and a resource row also needs a
type-checked usage example. See [spec/05](spec/05-adding-a-language.md).

The two partial TypeScript rows: shared fixtures are planned but
[empty](shared/fixtures/README.md) (mock tests use inline responses for now),
and React Native passes the Hermes compile and runtime checks
([spec/04](spec/04-testing.md#react-native-hermes-check)) but hasn't been
proven in a shipping app yet.

## Layout

```
api-snapshot/     frozen copy of the public schema + scope map (codegen input)
shared/
  operations/     every GraphQL document, once (validated against the snapshot)
  enums.json      status, privacy, reading format, date precision, search types
  errors.json     error taxonomy + how to recognize each raw failure
  auth.json       token prefixes and the OAuth session's rules and timings
  client.json     retries, timeouts, pacing, request cost, page sizes, limits
  stats.json      how the stats module counts reads, pages, ratings and authors
  environments.json  prod / staging / local endpoints
  conformance/    language-neutral behavior tests every SDK must pass
  fixtures/       recorded, scrubbed API responses for mock clients
packages/         one directory per language (typescript/ first), plus playground/
  typescript/teasers/  images of real calls, for the README and docs
scripts/          case-operations, validate-operations, render-matrix, snapshot
spec/             the design
```

## Spec

1. [The public API surface](spec/01-api-surface.md): endpoints, auth, scopes,
   actions, limits, error shapes
2. [How the app uses the data](spec/02-app-usage.md): the first-party client
   patterns and domain rules to mirror
3. [SDK design](spec/03-sdk-design.md): layers, pipeline, casing, resources,
   versioning
4. [Testing](spec/04-testing.md): mocks, contract and drift tests, opt-in live
   tests
5. [Adding a language](spec/05-adding-a-language.md)
6. [Open questions](spec/06-open-questions.md)

## Commands

```sh
pnpm install
pnpm codegen               # regenerate types after editing shared/operations
pnpm test                  # mock and conformance tests, every package
pnpm typecheck             # including the examples
pnpm validate:operations   # shared/operations vs api-snapshot/schema.graphql
pnpm matrix                # regenerate the table above
pnpm snapshot:check        # has the live schema drifted from api-snapshot?
```

## Playground

A local page for trying any SDK call against a real API:

```sh
pnpm playground   # http://localhost:5173
```

Paste a personal access token under Connection (kept in that browser's local
storage; local development only), pick a resource and method, fill in the
inputs, and run it. The page shows the result, every request the SDK sent, the
rate-limit state, and typed errors with their fields. Methods that change data
are labeled, and anything that deletes asks first.

Local setup: browsers only see the rate-limit headers if local Hasura runs with
`HASURA_GRAPHQL_DISABLE_CORS: "true"` (spec/04, spec/06 #24).

## Live tests

These are off by default; mocks always come first. To run them against a
real server, set a test account's token in the shell or in a gitignored
`.env` at the repo root:

```sh
cd packages/typescript
HARDCOVER_API_KEY=hc_pat_... HARDCOVER_ENV=staging pnpm test:live          # reads
HARDCOVER_API_KEY=hc_pat_... HARDCOVER_ENV=local pnpm test:live:writes      # plus real-user writes
```

OAuth sign-in needs a person to approve it, so it has its own interactive
check. Register an app with redirect URI `http://127.0.0.1/callback`, then:

```sh
HARDCOVER_OAUTH_CLIENT_ID=... node scripts/oauth-smoke.ts             # browser sign-in, refresh, sign-out
HARDCOVER_OAUTH_CLIENT_ID=... node scripts/oauth-smoke.ts rejections  # or: device, identity, offline
```

See [spec/04](spec/04-testing.md#layer-3-live-integration) for every variable,
including local and Conductor targets.

## Contributing

Issues and pull requests are welcome. Start with the [spec](#spec): changes to
behavior go through the shared layer (`shared/`) and its conformance cases, so
every language stays in step. [spec/05](spec/05-adding-a-language.md) covers
adding a language. The shared tooling needs Node 24 and pnpm whatever
language you work in. Live tests are opt-in and only act the way a real reader
would; they never probe limits or access rules.

## License

[MIT](LICENSE)
