// Talking to the OAuth endpoints: form-encoded POSTs over the same Transport
// the GraphQL client uses, so the mock transport covers them in tests.
import { auth } from "../generated/auth.ts";
import { client as constants } from "../generated/client.ts";
import { environments, type Environment } from "../generated/environments.ts";
import { version } from "../generated/version.ts";
import { HardcoverError, NetworkError, OAuthError, RateLimitError, ServerError, TimeoutError } from "../core/errors.ts";
import { fetchTransport, TransportFailure, type HttpResponse, type Transport } from "../core/transport.ts";
import { defaultRandomSource, type RandomSource } from "./pkce.ts";

/** Where the OAuth endpoints live. Comes from `environment`; override any of them. */
export interface OAuthEndpoints {
  /** The browser page that asks the user to approve the app. */
  authorize: string;
  token: string;
  revoke: string;
  device: string;
  /** The `iss` the server puts on redirects (RFC 9207). */
  issuer: string;
}

// No default stands in for the app: spec/03 principle 8.
/**
 * What identifies your app to Hardcover. Nothing here has a default that
 * stands in for your app: the consent screen shows the name and image of the
 * app registered under `clientId`.
 */
export interface OAuthConfig {
  /** Your app's client id, from hardcover.app → Account → Developer apps. */
  clientId: string;

  /** Only for confidential (`web_app`) clients, and only on a server. Never ship it in an app or a browser. */
  clientSecret?: string;

  environment?: Environment;

  /** Overrides individual endpoints from `environment`, e.g. for a local server or a proxy. */
  endpoints?: Partial<OAuthEndpoints>;

  transport?: Transport;

  /** Your app's name, sent ahead of the SDK's in the User-Agent. */
  userAgent?: string;

  /** A secure random source. Defaults to the platform's `crypto`. */
  random?: RandomSource;

  /** Injectable for tests. */
  now?: () => Date;
  sleep?: (ms: number) => Promise<void>;
}

/** The config with every default filled in. */
export interface ResolvedOAuthConfig {
  clientId: string;
  clientSecret: string | undefined;
  endpoints: OAuthEndpoints;
  transport: Transport;
  userAgent: string;
  random: () => RandomSource;
  now: () => Date;
  sleep: (ms: number) => Promise<void>;
}

const SDK_USER_AGENT = constants.userAgent.sdkFormat.replace("{language}", "typescript").replace("{version}", version);

export function resolveConfig(config: OAuthConfig): ResolvedOAuthConfig {
  const clientId = typeof config.clientId === "string" ? config.clientId.trim() : "";

  if (!clientId) {
    throw new TypeError("OAuth needs your app's clientId, from hardcover.app → Account → Developer apps.");
  }

  const environment = environments[config.environment ?? "prod"];
  const oauth = config.endpoints;

  const endpoints: OAuthEndpoints = {
    authorize: oauth?.authorize ?? environment.authorize ?? "",
    token: oauth?.token ?? `${environment.oauth}${auth.oauth.paths.token}`,
    revoke: oauth?.revoke ?? `${environment.oauth}${auth.oauth.paths.revoke}`,
    device: oauth?.device ?? `${environment.oauth}${auth.oauth.paths.device}`,
    issuer: oauth?.issuer ?? environment.issuer,
  };

  return {
    clientId,
    clientSecret: config.clientSecret || undefined,
    endpoints,
    transport: config.transport ?? fetchTransport(),
    userAgent: config.userAgent ? `${config.userAgent} ${SDK_USER_AGENT}` : SDK_USER_AGENT,
    // Looked up when first needed, so a device-only app or a refresh never
    // needs a random source it doesn't use.
    random: () => config.random ?? defaultRandomSource(),
    now: config.now ?? (() => new Date()),
    sleep: config.sleep ?? ((ms) => new Promise((resolve) => setTimeout(resolve, ms))),
  };
}

/** `application/x-www-form-urlencoded`, skipping absent values. */
export function formEncode(params: Record<string, string | undefined>): string {
  return Object.entries(params)
    .filter((entry): entry is [string, string] => entry[1] !== undefined)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

/**
 * POSTs to an OAuth endpoint with the client's credentials and returns the
 * JSON body. Never retried: a code works once and a refresh token rotates, so
 * sending either twice can sign the user out.
 */
export async function postForm(
  config: ResolvedOAuthConfig,
  url: string,
  params: Record<string, string | undefined>,
): Promise<Record<string, unknown>> {
  const body = formEncode({ ...params, client_id: config.clientId, client_secret: config.clientSecret });

  let response: HttpResponse;
  try {
    response = await config.transport.send({
      url,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        accept: "application/json",
        "user-agent": config.userAgent,
      },
      body,
    });
  } catch (cause) {
    if (!(cause instanceof TransportFailure)) throw cause;

    const message = cause.kind === "timeout" ? "OAuth request timed out" : `OAuth request failed: ${cause.message}`;
    const Failure = cause.kind === "timeout" ? TimeoutError : NetworkError;

    // It may have reached the server, which matters for a refresh (spec/06 #39).
    throw new Failure(message, true, { cause });
  }

  const payload = parseJsonObject(response.body);

  if (response.status >= 200 && response.status < 300) {
    if (payload) return payload;
    // Revoke answers 200 with an empty body.
    if (!response.body.trim()) return {};

    throw new HardcoverError("OAuth endpoint returned a body that isn't JSON", { status: response.status });
  }

  throw oauthFailure(response, payload);
}

function oauthFailure(response: HttpResponse, payload: Record<string, unknown> | undefined): HardcoverError {
  const { status } = response;
  const options = { status };

  const code = typeof payload?.error === "string" ? payload.error : undefined;
  const description = typeof payload?.error_description === "string" ? payload.error_description : undefined;

  // The token endpoint is throttled per IP (20 a minute).
  if (status === 429) {
    const retryAfter = Number(response.headers["retry-after"]) || 60;
    return new RateLimitError(`OAuth endpoint rate limited; retry after ${retryAfter}s`, retryAfter, "burst", undefined, undefined, options);
  }

  if (code) return new OAuthError(code, description, options);
  if (status >= 500) return new ServerError(`OAuth endpoint failed with HTTP ${status}`, options);

  return new HardcoverError(`OAuth endpoint returned HTTP ${status}`, options);
}

function parseJsonObject(body: string): Record<string, unknown> | undefined {
  try {
    const parsed: unknown = JSON.parse(body);
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as Record<string, unknown>) : undefined;
  } catch {
    return undefined;
  }
}
