# 05. Adding a language

The first SDK (TypeScript) proves the shared layer. Each later language is
mostly a transport, a codegen config and a conformance runner.

## What a language gets for free

These already exist in `shared/` and `api-snapshot/`. The scripts that check
and rewrite them run on Node 24 with pnpm, whatever language you're adding:

- every operation and fragment (`shared/operations/`)
- enums (`shared/enums.json`)
- the error taxonomy and matching rules (`shared/errors.json`)
- environments (`shared/environments.json`)
- client constants: retries, timeouts, pacing, cost, page sizes, limits,
  User-Agent format and client header (`shared/client.json`)
- token rules and OAuth timings (`shared/auth.json`)
- the stats module's rules (`shared/stats.json`)
- behavior tests (`shared/conformance/`)
- recorded API responses (`shared/fixtures/`, planned: empty today)
- the schema and scope map (`api-snapshot/`)

## What a language must build

| # | Piece | Done when |
|---|---|---|
| 1 | `scripts/case-operations.mjs --case camel` (or `snake`) for the language's convention, then codegen over the output and `api-snapshot/schema.graphql` | Rewritten operations validate; types are generated in CI; freshness check passes |
| 2 | Generation from `shared/*.json`: enums, errors, environments, `client.json`, `auth.json` | No hand-written copies of ids, error names, limits or timings |
| 3 | Transport interface, platform HTTP transport, mock transport | Conformance runner uses the mock |
| 4 | Core pipeline (auth, classify, retry, unwrap, rate-limit state, pacing, batching) | `cases.json`, `vectors.json` and `client.json` in `shared/conformance` pass |
| 5 | Resources (v1 list in [03](03-sdk-design.md#resources-v1)) | Every case in `shared/conformance/resources/` passes; public API reviewed for idiom |
| 6 | OAuth session (sign-in, refresh, store) | Every case in `shared/conformance/oauth.json` passes; constants come from `shared/auth.json`; one live sign-in run by hand |
| 7 | Live suite reading the shared env vars | Green against staging |
| 8 | Fixture-backed public mock client | Documented in the package README |
| 9 | Row in `languages.json`, with support flags set honestly | `matrix:check` passes |
| 10 | Release component in release-please config | First pre-release published |

## The core, file by file (TypeScript)

Each file owns one job, so a port can mirror them one at a time.

| File | Owns |
|---|---|
| `core/client.ts` | Options, resource wiring, `request()` and `graphql()`, the send-and-retry loop |
| `core/allowance.ts` | Rate-limit state: pacing, cold start, contention jitter, batch size |
| `core/planner.ts` | Batching (`batch: true`): runs, de-duplication, mutation barriers |
| `core/responses.ts` | A response body to data, or to the right error |
| `core/rate-limit.ts` | Parsing the `RateLimit` and `RateLimit-Policy` headers |
| `core/cost.ts` | A request's cost, counted the way the gateway counts it |
| `core/errors.ts` | The error taxonomy (`shared/errors.json`) |
| `core/transport.ts` | The HTTP seam: `fetchTransport`, or a mock in tests |
| `core/token.ts` | Cleaning up pasted tokens, refusing unusable ones |
| `core/dates.ts`, `core/isbn.ts` | Local dates and ISBN cleanup |
| `core/json-columns.ts` | Types for the `cached_*` JSON columns |

## Adding a resource (TypeScript today; the same steps per language)

1. Operations in `shared/operations/` (canonical, snake_case), then
   `pnpm codegen` (validates the rewritten output too).
2. Any new ids or string values go in `shared/enums.json`, with a label and,
   where it matters, a `doc` that becomes the hover tooltip.
3. `src/resources/<name>.ts`: thin methods over the operations, using
   `pickDefined`, `required`, `nonNull` and `ActionRecord` from `resources/shared.ts`. Follow
   spec/03 Naming (ids first, options last, `Page` for lists, `NotFoundError`,
   remove vs delete) and end every public method's doc with a `Scopes:` line.
4. Wire it: import, field and constructor in `core/client.ts`, export in
   `index.ts` (`tests/wiring.test.ts` fails if one is missed).
5. Tests first: mock tests with `tests/helpers.ts`, then a targeted live test
   (`tests/live/<name>.test.ts`, or `.writes.test.ts` for real-user writes).
6. A type-checked example in `examples/`, mapped in `languages.json`
   `examples`, plus the matrix row (`pnpm matrix`; `matrix:check` refuses a ✅
   resource without an example).
7. The spec/03 resources table row.

## Review checklist for a new language

- [ ] Shared data is consumed from disk or generated from it. Nothing is copied
      by hand.
- [ ] Mutations are never retried after a network failure.
- [ ] Update methods send only the fields the caller set.
- [ ] Rotated refresh tokens are persisted before use.
- [ ] Every public method's doc comment lists the scopes it needs, including
      `read:me` where it looks up the user (TypeScript enforces this with a test).
- [ ] Kotlin only: a Java source set in the test suite calls every resource
      method through the Java-facing API (futures or blocking), compiled and
      run in CI. If it reads badly from Java, the API is wrong.
- [ ] The live suite cleans up after itself and refuses prod writes by default.
- [ ] Every resource marked ✅ has a type-checked usage example
      (`packages/<lang>/examples/`) covering its real-user flow. Examples are
      compiled in CI, so API changes can't silently break the docs. They are
      the source for the docs site pages (`hardcover-docs`, added on a branch
      as each resource lands). Enforced: `languages.json` maps each resource
      row to its example file, and `pnpm matrix:check` fails if a ✅ resource
      has none.
- [ ] The README matrix matches reality.

## Shared-layer changes

A change in `shared/` or `api-snapshot/` affects every language. The PR must:

1. pass `validate-operations`,
2. regenerate every language's code, and
3. run every language's conformance suite.

CI path filters make this automatic. A new conformance case can land ahead of
the implementations only if it's marked `"pending": ["swift", ...]`, which
keeps the matrix honest.
