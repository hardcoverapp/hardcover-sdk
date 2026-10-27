// Mirrors shared/errors.json. Names and hierarchy are canonical across SDKs.
import { auth } from "../generated/auth.ts";

/** Extra details an error carries. Used when creating errors, e.g. in a custom transport or a test. */
export interface HardcoverErrorOptions {
  /** The HTTP status, when the failure came from a response. */
  status?: number;
  /** The underlying error, kept on `error.cause`. */
  cause?: unknown;
  /** The GraphQL operation that failed, e.g. "AddUserBook". */
  operationName?: string;
}

/** Every error the SDK throws extends this, so one `instanceof` check catches them all. */
export class HardcoverError extends Error {
  /** The HTTP status, when the failure came from a response. */
  readonly status: number | undefined;
  /** The GraphQL operation that failed, when the request had one (e.g. "AddUserBook"). */
  readonly operationName: string | undefined;

  constructor(message: string, options: HardcoverErrorOptions = {}) {
    super(message, { cause: options.cause });
    this.name = new.target.name;
    this.status = options.status;
    this.operationName = options.operationName;
  }
}

/**
 * The token isn't valid: expired, revoked or mistyped. With an OAuth session
 * the client has already refreshed once and retried before throwing this.
 */
export class AuthenticationError extends HardcoverError {}

// Reasons and their messages mirror shared/auth.json.
/**
 * Why an OAuth session has no usable tokens: `not-signed-in` (never signed
 * in), `signed-out` (here or in another process sharing the store), `revoked`
 * (the server refused the refresh token, e.g. the app was removed on
 * hardcover.app), or `expired` (the access token ran out and there was no
 * refresh token, as with an identity-only sign-in).
 */
export type SignedOutReason = "not-signed-in" | "signed-out" | "revoked" | "expired";

/**
 * An OAuth session has no usable tokens, so the user needs to sign in again.
 * The session already cleared its store and called `onSignedOut`.
 */
export class SignedOutError extends AuthenticationError {
  /** Why: `not-signed-in`, `signed-out`, `revoked` or `expired`. */
  readonly reason: SignedOutReason;

  constructor(reason: SignedOutReason, options?: HardcoverErrorOptions) {
    super(SIGNED_OUT_MESSAGES[reason], options);
    this.reason = reason;
  }
}

const SIGNED_OUT_MESSAGES: Record<SignedOutReason, string> = auth.oauth.signedOutMessages;

/**
 * The token lacks scopes this request needs. `missingScopes` lists every one,
 * exactly as the server reported them; ask the user to grant these.
 *
 * @see {@link https://docs.hardcover.app/api/pat-link-builder/ | Token link builder}, for a token with the right scopes
 */
export class ScopeError extends HardcoverError {
  /** Every scope the request needed and the token lacks, e.g. `["write:reviews"]`. */
  readonly missingScopes: string[];

  constructor(message: string, missingScopes: string[], options?: HardcoverErrorOptions) {
    super(message, options);
    this.missingScopes = missingScopes;
  }
}

/** API tokens can't use this operation at all, whatever their scopes. */
export class UnsupportedOperationError extends HardcoverError {}

/**
 * The request asked for more top-level fields than one request may. Only
 * `graphql()` can hit this; the SDK splits its own requests to fit.
 */
export class RequestTooLargeError extends HardcoverError {}

/** `burst`: the short-term allowance that refills every second. `daily`: the cap per day. */
export type RateLimitWindow = "burst" | "daily";

/**
 * Too many requests. The client already waits out short (burst) limits and
 * retries; this reaches you when retries run out or the daily cap is spent.
 */
export class RateLimitError extends HardcoverError {
  /** How long to wait before trying again. */
  readonly retryAfterSeconds: number;
  /** Which limit ran out: `burst` (refills in seconds) or `daily` (resets once a day). */
  readonly window: RateLimitWindow;
  /** That window's limit, when the server said. */
  readonly limit: number | undefined;
  /** Requests left in that window, when the server said. */
  readonly remaining: number | undefined;

  constructor(
    message: string,
    retryAfterSeconds: number,
    window: RateLimitWindow,
    limit: number | undefined,
    remaining: number | undefined,
    options?: HardcoverErrorOptions,
  ) {
    super(message, options);
    this.retryAfterSeconds = retryAfterSeconds;
    this.window = window;
    this.limit = limit;
    this.remaining = remaining;
  }
}

/** The server couldn't accept the request as sent (HTTP 400), e.g. a malformed query. */
export class InvalidRequestError extends HardcoverError {}

/** One GraphQL error from the API. */
export interface GraphQLErrorDetail {
  /** What went wrong, in the API's words. */
  message: string;
  /** Where in the query it happened, e.g. `books_by_pk.title`. */
  path: string | undefined;
  /** The API's error code, when it sent one. */
  code: string | undefined;
}

/** The API answered with GraphQL errors, e.g. a variable of the wrong type. */
export class GraphQLError extends HardcoverError {
  /** Each error the API returned, with its message, path and code. */
  readonly errors: GraphQLErrorDetail[];
  /** Partial data the API returned alongside the errors, if any. */
  readonly data: unknown;

  constructor(errors: GraphQLErrorDetail[], data: unknown, options?: HardcoverErrorOptions) {
    super(errors.map((e) => e.message).join("; ") || "GraphQL error", options);
    this.errors = errors;
    this.data = data;
  }
}

// A Hasura action that returned HTTP 200 with a failure inside `data`.
/**
 * A write the API accepted but refused, e.g. a Supporter perk on a free
 * account. `messages` holds the server's reasons and `operation` the action
 * that refused.
 */
export class ActionError extends HardcoverError {
  /** The action that refused, e.g. `insert_user_book`. */
  readonly operation: string;
  /** The server's reasons, in its words. */
  readonly messages: string[];
  /** Whatever else the action returned. */
  readonly data: unknown;

  constructor(operation: string, messages: string[], data: unknown, options?: HardcoverErrorOptions) {
    super(`${operation}: ${messages.join("; ")}`, options);
    this.operation = operation;
    this.messages = messages;
    this.data = data;
  }
}

/**
 * An OAuth endpoint or redirect refused the request. `code` is the RFC 6749
 * error code (`invalid_grant`, `access_denied`, …) or one of the SDK's own
 * redirect checks: `state_mismatch`, `issuer_mismatch`.
 */
export class OAuthError extends HardcoverError {
  /** The error code, e.g. `access_denied` when the user declined. */
  readonly code: string;
  /** The server's explanation, when it gave one. */
  readonly description: string | undefined;

  constructor(code: string, description: string | undefined, options?: HardcoverErrorOptions) {
    super(description ? `${code}: ${description}` : code, options);
    this.code = code;
    this.description = description;
  }
}

/**
 * Something the method needed doesn't exist, e.g. updating a goal that isn't
 * there. Lookups that can find nothing (get, forBook, current) return null.
 */
export class NotFoundError extends HardcoverError {
  /** What was missing, e.g. `goal`. */
  readonly resource: string;
  /** The id that wasn't found. */
  readonly id: number;

  constructor(resource: string, id: number, options?: HardcoverErrorOptions) {
    super(`${resource[0]!.toUpperCase()}${resource.slice(1)} ${id} not found`, options);
    this.resource = resource;
    this.id = id;
  }
}

/** The server failed (HTTP 5xx). Reads were already retried; writes never are. */
export class ServerError extends HardcoverError {}

/** Thrown for a server 408 or a client-side deadline. */
export class TimeoutError extends HardcoverError {
  /** True when a mutation timed out and the write may still have landed. */
  readonly mayHaveSucceeded: boolean;

  constructor(message: string, mayHaveSucceeded = false, options?: HardcoverErrorOptions) {
    super(message, options);
    this.mayHaveSucceeded = mayHaveSucceeded;
  }
}

/** The request never got an answer: offline, DNS, connection reset. Reads were already retried. */
export class NetworkError extends HardcoverError {
  /** True when a mutation failed in flight and the write may still have landed. */
  readonly mayHaveSucceeded: boolean;

  constructor(message: string, mayHaveSucceeded = false, options?: HardcoverErrorOptions) {
    super(message, options);
    this.mayHaveSucceeded = mayHaveSucceeded;
  }
}
