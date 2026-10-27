import type { DocumentTypeDecoration } from "./decoration.ts";
import { client as constants } from "../generated/client.ts";
import { environments, type Environment } from "../generated/environments.ts";
import { version } from "../generated/version.ts";
import { operationInfo, type OperationInfo } from "../operations.ts";
import { ActivitiesResource } from "../resources/activities.ts";
import { AuthorsResource } from "../resources/authors.ts";
import { BooksResource } from "../resources/books.ts";
import { GoalsResource } from "../resources/goals.ts";
import { JournalResource } from "../resources/journal.ts";
import { LibraryResource } from "../resources/library.ts";
import { LikesResource } from "../resources/likes.ts";
import { ListsResource } from "../resources/lists.ts";
import { MeResource } from "../resources/me.ts";
import { NotificationsResource } from "../resources/notifications.ts";
import { PromptsResource } from "../resources/prompts.ts";
import { ReadsResource } from "../resources/reads.ts";
import { SearchResource } from "../resources/search.ts";
import { SeriesResource } from "../resources/series.ts";
import { UsersResource } from "../resources/users.ts";
import { VibesResource } from "../resources/vibes.ts";
import { Allowance } from "./allowance.ts";
import { requestCost } from "./cost.ts";
import { AuthenticationError, NetworkError, RateLimitError, ServerError, TimeoutError } from "./errors.ts";
import { withIdiomaticKeys, type WithJsonColumns } from "./json-columns.ts";
import { RequestPlanner } from "./planner.ts";
import type { RateLimitState } from "./rate-limit.ts";
import { classify, parseBody, toData, type SendResult } from "./responses.ts";
import { normalizeToken } from "./token.ts";
import { fetchTransport, TransportFailure, type HttpRequest, type HttpResponse, type Transport } from "./transport.ts";

export type { Environment };

/**
 * Supplies access tokens for a client that refreshes them, e.g. an
 * `OAuthSession` from `@hardcover/sdk/oauth`.
 */
export interface TokenSource {
  /** A current access token. Throws (SignedOutError) when there isn't one. */
  getAccessToken(): Promise<string>;

  /** The server refused `rejectedToken` with a 401: return a fresh one to replay with once, or throw. */
  refreshAfterUnauthorized?(rejectedToken: string): Promise<string>;

  /**
   * A number that changes whenever the signed-in user may have changed (a new
   * sign-in, or signing out), so the client knows its cached user is stale.
   * A refresh keeps the same user and the same number.
   */
  userVersion?(): number;
}

export interface HardcoverClientOptions {
  /**
   * A personal access token (`hc_pat_...`) or an OAuth access token your app
   * manages itself. Whitespace and a pasted `Bearer ` prefix are cleaned up.
   * Pass this or `auth`, not both.
   */
  token?: string;

  /** An OAuth session (or any TokenSource) that refreshes and stores tokens itself. Pass this or `token`. */
  auth?: TokenSource;

  /** Called for problems that don't stop the client, e.g. a deprecated legacy JWT. Defaults to console.warn. */
  onWarning?: (message: string) => void;

  environment?: Environment;

  /** Overrides the GraphQL URL from `environment`. */
  endpoint?: string;

  transport?: Transport;

  /** Retries for 429s, and for queries that hit network, timeout or 5xx failures. */
  maxRetries?: number;

  timeoutMs?: number;

  /** Your app's name, sent ahead of the SDK's. Browsers don't let fetch set User-Agent, so it only reaches the server from Node and native. */
  userAgent?: string;
  onRateLimit?: (state: RateLimitState) => void;

  /** Injectable for tests; defaults to setTimeout. */
  sleep?: (ms: number) => Promise<void>;

  /** Injectable clock for pacing; defaults to the current time. */
  now?: () => Date;

  /**
   * Wait for the burst allowance to refill before sending, when the last
   * response said it's spent, instead of sending and getting a 429.
   * Default true. The daily cap is never waited out.
   */
  pace?: boolean;

  /** Injectable random source (0 ≤ x < 1) for backoff jitter; defaults to Math.random. */
  random?: () => number;

  // The request planner (spec/03, core/planner.ts).
  /**
   * Send concurrent reads from `request()` and the resource methods as one
   * HTTP request, sized to what the rate limit allows right now, with
   * identical reads sent once. Mutations run alone, in the order issued, after
   * everything before them. `graphql()` is never grouped. Default false.
   */
  batch?: boolean;
}

/** Waits between retries of a network, timeout or 5xx failure. */
const NETWORK_BACKOFF_MS = constants.retry.networkBackoffMs;

const SDK_USER_AGENT = constants.userAgent.sdkFormat.replace("{language}", "typescript").replace("{version}", version);

function networkBackoffMs(attempt: number): number {
  return NETWORK_BACKOFF_MS[Math.min(attempt, NETWORK_BACKOFF_MS.length - 1)]!;
}

/**
 * The Hardcover API client. Resources (`library`, `books`, …) cover what apps
 * usually need; `request()` runs any generated operation and `graphql()` any
 * query. Every call shares the same auth, pacing, retries and errors.
 *
 * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/getting-started/ | Getting started} with the SDK
 * @see {@link https://docs.hardcover.app/api/getting-started/ | Getting started} with the API
 */
export class HardcoverClient {
  /** The GraphQL URL this client sends requests to. */
  readonly endpoint: string;
  /**
   * The signed-in user: `get()` their profile, `id()`. Fetched once and
   * cached per client. Scopes: `read:me:content` (any `read:me` scope).
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/me/ | Me} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/users/ | Users} in the API docs
   */
  readonly me: MeResource;
  /**
   * The signed-in user's books: list and count by status, add, update
   * status, rating and review, owned editions, and `changes()` for
   * incremental sync. Scopes: `read:library`, `write:library`; reviews also
   * need `write:reviews`, owned editions `read:lists` and `write:lists`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/library/ | Library} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/userbooks/ | User books} in the API docs
   * @see {@link https://docs.hardcover.app/api/guides/gettingbookswithstatus/ | Getting books with a status} in the API docs
   */
  readonly library: LibraryResource;
  /**
   * Reading sessions on a library entry: start and finish dates, progress in
   * pages, percent or seconds, re-reads, and finished reads by date. Scopes:
   * `read:library`, `write:library`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/reads/ | Reads} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/guides/updatingabooksprogress/ | Updating a book's progress} in the API docs
   * @see {@link https://docs.hardcover.app/api/guides/gettingbooksprogress/ | Getting a book's progress} in the API docs
   */
  readonly reads: ReadsResource;
  /**
   * Lists: yours and other readers', books on them (one or many, by ISBN
   * too), order, following, and shared lists with members. Scopes:
   * `read:lists`, `write:lists`; adding by ISBN also `read:catalog`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/lists/ | Lists} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/lists/ | Lists} in the API docs
   */
  readonly lists: ListsResource;
  /**
   * Search books, authors, series, characters, lists, prompts, publishers
   * and users, ranked by the API. Scopes: `read:catalog`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/search/ | Search} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/guides/searching/ | Searching} in the API docs
   */
  readonly search: SearchResource;
  /**
   * Books and editions: by id, slug, ISBN or external id (e.g. Goodreads),
   * trending, new releases, and friends who read a book. Scopes:
   * `read:catalog` (friends: `read:social`).
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/books/ | Books} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/books/ | Books} in the API docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/editions/ | Editions} in the API docs
   */
  readonly books: BooksResource;
  /**
   * Reading journal entries for a book: notes and quotes. The server
   * journals status, progress and list changes on its own. Scopes:
   * `read:journal`, `write:library`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/journal/ | Journal} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/readingjournals/ | Reading journals} in the API docs
   * @see {@link https://docs.hardcover.app/api/guides/updatingreadingjournal/ | Updating the reading journal} in the API docs
   */
  readonly journal: JournalResource;
  /**
   * Reading challenges: create, update, archive, and progress in books,
   * pages or hours. Scopes: `read:goals`, `write:goals`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/goals/ | Goals} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/goals/ | Goals} in the API docs
   */
  readonly goals: GoalsResource;
  /**
   * Recommendation vibes built from weighted signals, and the books they
   * rank. Creating one is a Supporter perk. Scopes: `read:vibes`,
   * `write:vibes`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/vibes/ | Vibes} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/vibes/ | Vibes} in the API docs
   */
  readonly vibes: VibesResource;
  /**
   * Community prompts ("books that…"): browse, see the most-picked books,
   * answer, follow, and ask your own. Scopes: `read:prompts`,
   * `write:prompts`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/prompts/ | Prompts} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/prompts/ | Prompts} in the API docs
   */
  readonly prompts: PromptsResource;
  /**
   * Authors: by id or slug, with their books and series. Scopes:
   * `read:catalog`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/authors/ | Authors} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/authors/ | Authors} in the API docs
   */
  readonly authors: AuthorsResource;
  /**
   * Series: by id or slug, with their books in order. Scopes:
   * `read:catalog`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/series/ | Series} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/series/ | Series} in the API docs
   * @see {@link https://docs.hardcover.app/api/guides/gettingbooksinseries/ | Getting books in a series} in the API docs
   */
  readonly series: SeriesResource;
  /**
   * Other readers: profiles, followers and following, follow, block. Scopes:
   * `read:users`, `read:social`, `write:social`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/users/ | Users} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/users/ | Users} in the API docs
   */
  readonly users: UsersResource;
  /**
   * Like and unlike reviews, lists, prompts and other content. Scopes:
   * `write:social`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/likes/ | Likes} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/likes/ | Likes} in the API docs
   */
  readonly likes: LikesResource;
  /**
   * Activity feeds: a reader's, a book's, and the people you follow, and
   * deleting your own. Scopes: `read:social`; deleting `write:social`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/activities/ | Activities} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/activities/ | Activities} in the API docs
   */
  readonly activities: ActivitiesResource;
  /**
   * The notification bell: list, unread count, mark read. Scopes:
   * `read:notifications`, `write:notifications`.
   * @see {@link https://docs.hardcover.app/sdk/typescript/0.1/resources/notifications/ | Notifications} in the SDK docs
   * @see {@link https://docs.hardcover.app/api/graphql/schemas/notifications/ | Notifications} in the API docs
   */
  readonly notifications: NotificationsResource;

  /** Set for a static token, so those requests skip the TokenSource round trip. */
  readonly #staticToken: string | undefined;
  readonly #auth: TokenSource | undefined;
  readonly #transport: Transport;
  readonly #maxRetries: number;
  readonly #userAgent: string;
  readonly #sleep: (ms: number) => Promise<void>;

  /** Rate-limit state, pacing and contention backoff (core/allowance.ts). */
  readonly #allowance: Allowance;

  /** Batching, when the `batch` option is on (core/planner.ts). */
  readonly #planner: RequestPlanner | undefined;

  constructor(options: HardcoverClientOptions) {
    this.endpoint = options.endpoint ?? environments[options.environment ?? "prod"].graphql;
    if (options.auth && options.token !== undefined) {
      throw new TypeError("Pass either `token` or `auth` to HardcoverClient, not both.");
    }

    this.#auth = options.auth;
    this.#staticToken = options.auth
      ? undefined
      : normalizeToken(options.token, options.onWarning ?? ((message) => console.warn(message)));
    this.#transport = options.transport ?? fetchTransport({ timeoutMs: options.timeoutMs });
    this.#maxRetries = options.maxRetries ?? constants.defaults.maxRetries;
    this.#userAgent = options.userAgent ? `${options.userAgent} ${SDK_USER_AGENT}` : SDK_USER_AGENT;
    this.#sleep = options.sleep ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms)));

    this.#allowance = new Allowance({
      pace: options.pace ?? true,
      now: options.now ?? (() => new Date()),
      sleep: this.#sleep,
      random: options.random ?? Math.random,
      onRateLimit: options.onRateLimit,
    });

    if (options.batch) {
      this.#planner = new RequestPlanner({
        execute: (query, variables, info) => this.#execute(query, variables, info),
        sendArray: (body, cost, operationName) => this.#send(body, cost, false, operationName),
        batchRoom: () => this.#allowance.batchRoom(),
      });
    }

    this.me = new MeResource(this, () => options.auth?.userVersion?.() ?? 0);
    this.library = new LibraryResource(this);
    this.reads = new ReadsResource(this);
    this.lists = new ListsResource(this);
    this.search = new SearchResource(this);
    this.books = new BooksResource(this);
    this.journal = new JournalResource(this);
    this.goals = new GoalsResource(this);
    this.vibes = new VibesResource(this);
    this.prompts = new PromptsResource(this);
    this.authors = new AuthorsResource(this);
    this.series = new SeriesResource(this);
    this.users = new UsersResource(this);
    this.likes = new LikesResource(this);
    this.activities = new ActivitiesResource(this);
    this.notifications = new NotificationsResource(this);
  }

  /** Rate-limit state from the most recent response that carried headers. Read-only: pacing relies on it. */
  get rateLimit(): RateLimitState | undefined {
    return this.#allowance.state;
  }

  // JSON column typing: core/json-columns.ts.
  /**
   * Runs a generated operation, e.g. `client.request(operations.Me)`. JSON
   * columns such as `cachedImage` come back typed (see `CachedImage` and the
   * other `Cached*` types).
   */
  request<TResult, TVariables>(
    document: DocumentTypeDecoration<TResult, TVariables>,
    ...[variables]: TVariables extends Record<string, never> ? [variables?: TVariables] : [variables: TVariables]
  ): Promise<WithJsonColumns<TResult>> {
    type Result = Promise<WithJsonColumns<TResult>>;

    const query = String(document);
    const info = operationInfo(document);
    const send = () => this.#execute(query, variables, info);

    let result: Promise<unknown>;
    if (!this.#planner) result = send();
    else if (info.kind === "mutation") result = this.#planner.mutation(send);
    else result = this.#planner.read(query, variables, info);

    return result.then(withIdiomaticKeys) as Result;
  }

  /** Escape hatch: any query the token's scopes allow, with the same auth, retries and errors. */
  graphql<TResult = unknown>(query: string, variables?: Record<string, unknown>): Promise<TResult> {
    const info = operationInfo(query);
    const send = () => this.#execute(query, variables, info);

    if (!this.#planner) return send() as Promise<TResult>;
    if (info.kind === "mutation") return this.#planner.mutation(send) as Promise<TResult>;

    return this.#planner.ungrouped(send) as Promise<TResult>;
  }

  // One operation on its own, unwrapped to its data.
  async #execute(query: string, variables: unknown, info: OperationInfo): Promise<unknown> {
    const body = JSON.stringify({ query, variables, operationName: info.name });
    const isMutation = info.kind === "mutation";

    const { status, payload } = await this.#send(body, requestCost(query), isMutation, info.name);

    return toData(payload, status, info.name);
  }

  // Sends with pacing and retries; returns the parsed body of a 2xx response or
  // throws the classified failure.
  async #send(body: string, cost: number, isMutation: boolean, operationName: string | undefined): Promise<SendResult> {
    let replayedAfterRefresh = false;

    for (let attempt = 0; ; attempt++) {
      const canRetry = attempt < this.#maxRetries;

      const token = this.#staticToken ?? (await this.#auth!.getAccessToken());
      const request = this.#httpRequest(body, token);

      await this.#allowance.reserve(cost);

      let response: HttpResponse;
      try {
        response = await this.#transport.send(request);
      } catch (cause) {
        this.#allowance.release(cost);

        // Only a TransportFailure means the request may not have reached the
        // server. Anything else is a bug in a custom or mock transport:
        // surface it immediately instead of retrying it as a network blip.
        if (!(cause instanceof TransportFailure)) throw cause;

        // Never replay a mutation that may have landed, as the app does.
        if (!isMutation && canRetry) {
          await this.#sleep(networkBackoffMs(attempt));
          continue;
        }

        throw networkError(cause, isMutation, operationName);
      }

      // What this client believed before this response, to tell contention from an ordinary 429.
      const hadRoom = this.#allowance.hadRoomFor(cost);

      let rateLimit: RateLimitState | undefined;
      try {
        rateLimit = this.#allowance.update(response.headers);
      } finally {
        // Release after reading the headers, so waiting requests see the new
        // numbers. In `finally` so a throwing onRateLimit hook can't keep it.
        this.#allowance.release(cost);
      }

      const payload = parseBody(response.body);
      const failure = classify(response, payload, rateLimit, operationName);

      if (!failure) {
        this.#allowance.succeeded();
        return { status: response.status, payload };
      }

      // A 401 with a refreshing token source: refresh once and replay once. The
      // gateway refused the token before running anything, so replaying a
      // mutation can't double-write.
      const refreshAfterUnauthorized = this.#auth?.refreshAfterUnauthorized;
      if (failure instanceof AuthenticationError && refreshAfterUnauthorized && !replayedAfterRefresh) {
        replayedAfterRefresh = true;
        await refreshAfterUnauthorized.call(this.#auth, token);
        attempt--;
        continue;
      }

      // A burst 429: wait it out (plus jitter if another client is competing), then retry.
      if (failure instanceof RateLimitError && failure.window === "burst" && canRetry) {
        await this.#sleep(failure.retryAfterSeconds * 1_000 + this.#allowance.contentionJitterMs(hadRoom));
        this.#allowance.waitedOut();
        continue;
      }

      // A 5xx or timeout: retry reads, never mutations.
      const transient = failure instanceof ServerError || failure instanceof TimeoutError;
      if (transient && !isMutation && canRetry) {
        await this.#sleep(networkBackoffMs(attempt));
        continue;
      }

      throw failure;
    }
  }

  #httpRequest(body: string, token: string): HttpRequest {
    return {
      url: this.endpoint,
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
        accept: "application/json",
        "user-agent": this.#userAgent,
      },
      body,
    };
  }
}

function networkError(cause: TransportFailure, isMutation: boolean, operationName: string | undefined): Error {
  const message = cause instanceof Error ? cause.message : String(cause);
  const options = { cause, operationName };

  if (cause.kind === "timeout") {
    return new TimeoutError(`Request timed out: ${message}`, isMutation, options);
  }

  return new NetworkError(`Network failure: ${message}`, isMutation, options);
}
