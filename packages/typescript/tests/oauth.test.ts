// OAuth behavior specific to the TypeScript SDK. The language-neutral rules
// are in oauth-conformance.test.ts (shared/conformance/oauth.json).
import { describe, expect, it } from "vitest";
import { HardcoverClient, operations, SignedOutError } from "../src/index.ts";
import {
  memoryStore,
  OAuthSession,
  secureStore,
  type RandomSource,
  type SecureKeyValue,
  type TokenSet,
  type TokenStore,
} from "../src/oauth/index.ts";
import { defaultRandomSource } from "../src/oauth/pkce.ts";
import { MockTransport, type MockResponse } from "../src/testing/index.ts";

const NOW = 1_800_000_000_000;
const now = () => new Date(NOW);
const random: RandomSource = { getRandomValues: (bytes) => bytes.fill(7) };

const fresh: TokenSet = { accessToken: "hc_at_old", refreshToken: "hc_rt_old", scope: "read:library", expiresAt: NOW + 3_600_000 };
const expiring: TokenSet = { ...fresh, expiresAt: NOW + 10_000 };

const tokenResponse = (suffix: string): MockResponse => ({
  status: 200,
  body: { access_token: `hc_at_${suffix}`, refresh_token: `hc_rt_${suffix}`, expires_in: 604_800, scope: "read:library" },
});

const meOk: MockResponse = { status: 200, body: { data: { me: [] } } };
const form = (body: string) => Object.fromEntries(new URLSearchParams(body));

describe("browser sign-in", () => {
  it("builds the attempt, checks the redirect, exchanges the code and stores the tokens", async () => {
    const transport = new MockTransport([tokenResponse("new")]);
    const store = memoryStore();
    const session = new OAuthSession({ clientId: "my-app", redirectUri: "myapp://cb", store, transport, random, now });

    const attempt = session.authorize({ scopes: ["read:library"] });
    const redirect = `myapp://cb?code=hc_ac_123&state=${attempt.state}&iss=${encodeURIComponent(attempt.issuer)}`;

    await session.completeAuthorization(redirect, attempt);

    expect(form(transport.requests[0]!.body)).toEqual({
      grant_type: "authorization_code",
      code: "hc_ac_123",
      code_verifier: attempt.codeVerifier,
      redirect_uri: "myapp://cb",
      client_id: "my-app",
    });
    expect((await store.get())?.accessToken).toBe("hc_at_new");
  });

  it("survives a page redirect: the attempt is plain JSON", async () => {
    const transport = new MockTransport([tokenResponse("new")]);
    const session = new OAuthSession({ clientId: "my-app", store: memoryStore(), transport, random, now });

    const saved = JSON.stringify(session.authorize({ scopes: ["read:library"], redirectUri: "https://app.example/cb" }));
    const attempt = JSON.parse(saved);

    await session.completeAuthorization(`https://app.example/cb?code=c&state=${attempt.state}`, attempt);

    expect(await session.isSignedIn()).toBe(true);
  });

  it("never sends a code from a redirect that doesn't match the attempt", async () => {
    const transport = new MockTransport([]);
    const session = new OAuthSession({ clientId: "my-app", redirectUri: "myapp://cb", store: memoryStore(), transport, random, now });

    const attempt = session.authorize({ scopes: ["read:library"] });

    await expect(session.completeAuthorization("myapp://cb?code=c&state=forged", attempt)).rejects.toMatchObject({ code: "state_mismatch" });
    expect(transport.requests).toHaveLength(0);
  });

  it("refuses an environment without an authorize page instead of guessing one", () => {
    const session = new OAuthSession({ clientId: "my-app", environment: "staging", store: memoryStore(), random });
    expect(() => session.authorize({ scopes: ["read:library"], redirectUri: "myapp://cb" })).toThrow(/endpoints.authorize/);
  });
});

describe("the app identifies itself (no SDK defaults)", () => {
  it("requires a clientId", () => {
    expect(() => new OAuthSession({ clientId: " ", store: memoryStore() })).toThrow(/clientId/);
  });

  it("requires a store", () => {
    expect(() => new OAuthSession({ clientId: "my-app" } as never)).toThrow(/token store/);
  });

  it("requires a store key", () => {
    expect(() => secureStore({} as SecureKeyValue, "")).toThrow(/key/);
  });

  it("sends the app's User-Agent as is and names the SDK in X-Hardcover-Client", async () => {
    const transport = new MockTransport([tokenResponse("new")]);
    const session = new OAuthSession({ clientId: "my-app", userAgent: "Shelfie/2.1", store: memoryStore(expiring), transport, now });

    await session.getAccessToken();

    expect(transport.requests[0]!.headers["user-agent"]).toBe("Shelfie/2.1");
    expect(transport.requests[0]!.headers["X-Hardcover-Client"]).toMatch(/^hardcover-sdk-typescript\/[\d.]+$/);
  });

  it("sends a confidential client's secret, and a public client sends none", async () => {
    const transport = new MockTransport([tokenResponse("a"), tokenResponse("b")]);

    await new OAuthSession({ clientId: "srv", clientSecret: "shh", store: memoryStore(expiring), transport, now }).getAccessToken();
    await new OAuthSession({ clientId: "app", store: memoryStore(expiring), transport, now }).getAccessToken();

    expect(form(transport.requests[0]!.body).client_secret).toBe("shh");
    expect(form(transport.requests[1]!.body)).not.toHaveProperty("client_secret");
  });
});

describe("client options", () => {
  it("takes token or auth, not both", () => {
    const session = new OAuthSession({ clientId: "my-app", store: memoryStore() });
    expect(() => new HardcoverClient({ token: "hc_pat_x", auth: session })).toThrow(/not both/);
  });

  it("still explains a missing token when neither is given", () => {
    expect(() => new HardcoverClient({})).toThrow(/token is missing/);
  });

  it("batches reads with the session's token", async () => {
    const transport = new MockTransport([{ status: 200, body: [{ data: { me: [] } }, { data: { me: [] } }] }]);
    const session = new OAuthSession({ clientId: "my-app", store: memoryStore(fresh), transport, now });
    const client = new HardcoverClient({ auth: session, transport, batch: true });

    await Promise.all([client.request(operations.Me), client.request(operations.GetVibe, { id: 1 })]);

    expect(transport.requests).toHaveLength(1);
    expect(transport.requests[0]!.headers.authorization).toBe("Bearer hc_at_old");
  });

  it("rejects requests with SignedOutError when signed out, without sending them", async () => {
    const transport = new MockTransport([]);
    const client = new HardcoverClient({ auth: new OAuthSession({ clientId: "my-app", store: memoryStore() }), transport });

    await expect(client.request(operations.Me)).rejects.toBeInstanceOf(SignedOutError);
    expect(transport.requests).toHaveLength(0);
  });
});

describe("switching users", () => {
  it("asks who's signed in again after someone else signs in on the same client", async () => {
    const meResponse = (id: number): MockResponse => ({ status: 200, body: { data: { me: [{ id }] } } });
    const transport = new MockTransport([meResponse(1), tokenResponse("second"), meResponse(2)]);
    const session = new OAuthSession({ clientId: "my-app", redirectUri: "myapp://cb", store: memoryStore(fresh), transport, random, now });
    const client = new HardcoverClient({ auth: session, transport });

    expect(await client.me.id()).toBe(1);

    const attempt = session.authorize({ scopes: ["read:me"] });
    await session.completeAuthorization(`myapp://cb?code=c&state=${attempt.state}`, attempt);

    expect(await client.me.id()).toBe(2);
  });

  it("keeps the cached user across a refresh, which is the same user", async () => {
    const transport = new MockTransport([{ status: 200, body: { data: { me: [{ id: 1 }] } } }, tokenResponse("new")]);
    const session = new OAuthSession({ clientId: "my-app", store: memoryStore(fresh), transport, now });
    const client = new HardcoverClient({ auth: session, transport });

    await client.me.get();
    await session.refreshAfterUnauthorized("hc_at_old");
    await client.me.get();

    expect(transport.requests.filter((r) => r.url.endsWith("/graphql"))).toHaveLength(1);
  });
});

describe("stores", () => {
  function fakeSecureStorage() {
    const items = new Map<string, string>();
    const storage: SecureKeyValue = {
      getItemAsync: async (key) => items.get(key) ?? null,
      setItemAsync: async (key, value) => void items.set(key, value),
      deleteItemAsync: async (key) => void items.delete(key),
    };
    return { items, storage };
  }

  it("secureStore keeps the shared JSON shape under the app's key and deletes on sign-out", async () => {
    const { items, storage } = fakeSecureStorage();
    const store = secureStore(storage, "shelfie-hardcover");

    await store.set(fresh);
    expect(JSON.parse(items.get("shelfie-hardcover")!)).toEqual(fresh);
    expect(await store.get()).toEqual(fresh);

    await store.set(null);
    expect(items.has("shelfie-hardcover")).toBe(false);
  });

  it("secureStore reads damaged data as signed out instead of failing", async () => {
    const { items, storage } = fakeSecureStorage();
    const store = secureStore(storage, "k");

    items.set("k", "{not json");
    expect(await store.get()).toBeNull();

    items.set("k", JSON.stringify({ accessToken: 42 }));
    expect(await store.get()).toBeNull();
  });

  it("refreshes inside the store's lock", async () => {
    const events: string[] = [];
    const inner = memoryStore(expiring);
    const store: TokenStore = {
      get: () => inner.get(),
      set: async (tokens) => {
        events.push("set");
        await inner.set(tokens);
      },
      lock: async (fn) => {
        events.push("lock");
        const result = await fn();
        events.push("unlock");
        return result;
      },
    };

    const transport = new MockTransport([tokenResponse("new")]);
    await new OAuthSession({ clientId: "my-app", store, transport, now }).getAccessToken();

    expect(events).toEqual(["lock", "set", "unlock"]);
  });

  it("stores the new pair before the new access token is used", async () => {
    const order: string[] = [];
    const inner = memoryStore(expiring);
    const store: TokenStore = {
      get: () => inner.get(),
      set: async (tokens) => {
        order.push(`stored ${tokens?.accessToken}`);
        await inner.set(tokens);
      },
    };

    const responses = [tokenResponse("new"), meOk];
    const transport = new MockTransport(responses);
    const recording = {
      send: (request: Parameters<MockTransport["send"]>[0]) => {
        if (request.headers.authorization) order.push(`sent ${request.headers.authorization}`);
        return transport.send(request);
      },
    };

    const session = new OAuthSession({ clientId: "my-app", store, transport: recording, now });
    await new HardcoverClient({ auth: session, transport: recording }).request(operations.Me);

    expect(order).toEqual(["stored hc_at_new", "sent Bearer hc_at_new"]);
  });
});

describe("device sign-in", () => {
  it("stops polling when cancelled", async () => {
    const controller = new AbortController();
    const transport = new MockTransport([
      { status: 200, body: { device_code: "dc", user_code: "U", verification_uri: "https://hardcover.app/link", expires_in: 900, interval: 5 } },
    ]);
    const session = new OAuthSession({
      clientId: "tv-app",
      store: memoryStore(),
      transport,
      now,
      sleep: async () => controller.abort(),
    });

    await expect(session.signInWithDevice({ scopes: ["read:library"], onCode: () => {}, signal: controller.signal })).rejects.toThrow();
    expect(transport.requests).toHaveLength(1);
  });
});

describe("sign-out", () => {
  it("does nothing on the server and calls nobody when already signed out", async () => {
    const transport = new MockTransport([]);
    const reasons: string[] = [];
    const session = new OAuthSession({ clientId: "my-app", store: memoryStore(), transport, onSignedOut: (r) => reasons.push(r) });

    await session.signOut();

    expect(transport.requests).toHaveLength(0);
    expect(reasons).toEqual([]);
  });
});

describe("random source", () => {
  // Runs `fn` as if on React Native without a crypto polyfill.
  async function withoutCrypto(fn: () => unknown) {
    const original = Object.getOwnPropertyDescriptor(globalThis, "crypto");
    Object.defineProperty(globalThis, "crypto", { value: undefined, configurable: true });

    try {
      await fn();
    } finally {
      Object.defineProperty(globalThis, "crypto", original!);
    }
  }

  it("explains how to add one when the runtime has none", async () => {
    await withoutCrypto(() => expect(() => defaultRandomSource()).toThrow(/react-native-get-random-values/));
  });

  it("isn't needed to refresh, so a restored session works without one", async () => {
    await withoutCrypto(async () => {
      const transport = new MockTransport([tokenResponse("new")]);
      const session = new OAuthSession({ clientId: "my-app", store: memoryStore(expiring), transport, now });

      expect(await session.getAccessToken()).toBe("hc_at_new");
    });
  });
});

// A transport that holds the token endpoint's answers until the test lets them
// go, so a refresh can be left in flight while something else happens. Each
// grant type gets its own answer, whatever order the requests arrive in.
function heldTokenEndpoint(answers: { refresh: MockResponse; code?: MockResponse }) {
  const others = new MockTransport([meOk, meOk, meOk, { status: 200, body: "" }, { status: 200, body: "" }]);
  const sent: string[] = [];
  let release!: () => void;
  const released = new Promise<void>((resolve) => (release = resolve));

  const transport = {
    async send(request: Parameters<MockTransport["send"]>[0]) {
      sent.push(request.url.split("/").pop()!);
      if (!request.url.endsWith("/oauth2/token")) return others.send(request);

      await released;
      const grant = new URLSearchParams(request.body).get("grant_type");
      const answer = grant === "refresh_token" ? answers.refresh : answers.code!;
      return new MockTransport([answer]).send(request);
    },
  };

  return { transport, release, sent };
}

describe("races with an in-flight refresh", () => {
  it("doesn't bring tokens back when the user signs out while a refresh is in flight", async () => {
    const { transport, release, sent } = heldTokenEndpoint({ refresh: tokenResponse("late") });
    const store = memoryStore(expiring);
    const session = new OAuthSession({ clientId: "my-app", store, transport, now });

    const request = session.getAccessToken();
    await session.signOut();
    release();

    await expect(request).rejects.toBeInstanceOf(SignedOutError);
    expect(await store.get()).toBeNull();
    expect(await session.isSignedIn()).toBe(false);

    // The late pair is retired on the server: revoke for the old pair, then for the late one.
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(sent.filter((endpoint) => endpoint === "revoke")).toHaveLength(2);
  });

  it("keeps a new user's sign-in when the previous user's refresh lands after it", async () => {
    const { transport, release } = heldTokenEndpoint({ refresh: tokenResponse("late"), code: tokenResponse("newuser") });
    const store = memoryStore(expiring);
    const session = new OAuthSession({ clientId: "my-app", redirectUri: "myapp://cb", store, transport, random, now });

    const request = session.getAccessToken();

    const attempt = session.authorize({ scopes: ["read:library"] });
    const signIn = session.completeAuthorization(`myapp://cb?code=c&state=${attempt.state}`, attempt);
    release();

    await signIn;
    await expect(request).rejects.toBeInstanceOf(SignedOutError);
    expect((await store.get())?.accessToken).toBe("hc_at_newuser");
  });

  it("refreshes once for many requests near expiry", async () => {
    const transport = new MockTransport([tokenResponse("new")]);
    const session = new OAuthSession({ clientId: "my-app", store: memoryStore(expiring), transport, now });

    const tokens = await Promise.all([session.getAccessToken(), session.getAccessToken(), session.getAccessToken()]);

    expect(tokens).toEqual(["hc_at_new", "hc_at_new", "hc_at_new"]);
    expect(transport.requests).toHaveLength(1);
  });

  it("lets a sign-in that lands during the first store read win", async () => {
    let finishRead!: (tokens: TokenSet | null) => void;
    const slowStore: TokenStore = {
      get: () => new Promise((resolve) => (finishRead = resolve)),
      set: async () => {},
    };
    const transport = new MockTransport([tokenResponse("new")]);
    const session = new OAuthSession({ clientId: "my-app", redirectUri: "myapp://cb", store: slowStore, transport, random, now });

    const firstRead = session.isSignedIn();
    const attempt = session.authorize({ scopes: ["read:library"] });
    await session.completeAuthorization(`myapp://cb?code=c&state=${attempt.state}`, attempt);
    finishRead(null);

    expect(await firstRead).toBe(true);
    expect(await session.getAccessToken()).toBe("hc_at_new");
  });
});

describe("failures around the session", () => {
  it("keeps the new pair in memory when the store can't save it, so the spent refresh token is never sent again", async () => {
    const inner = memoryStore(expiring);
    let failNextWrite = true;
    const store: TokenStore = {
      get: () => inner.get(),
      set: async (tokens) => {
        if (failNextWrite) {
          failNextWrite = false;
          throw new Error("Keychain is locked");
        }
        await inner.set(tokens);
      },
    };
    const transport = new MockTransport([tokenResponse("new")]);
    const session = new OAuthSession({ clientId: "my-app", store, transport, now });

    await expect(session.getAccessToken()).rejects.toThrow("Keychain is locked");

    expect(await session.getAccessToken()).toBe("hc_at_new");
    expect(await session.refreshAfterUnauthorized("hc_at_old")).toBe("hc_at_new");
    expect(transport.requests).toHaveLength(1);
  });

  it("still signs out cleanly when the app's onSignedOut throws", async () => {
    const thrown: unknown[] = [];
    const onError = (error: unknown) => thrown.push(error);
    process.on("uncaughtException", onError);

    try {
      const store = memoryStore(fresh);
      const transport = new MockTransport([{ status: 401, body: { error: "invalid_token" } }, { status: 400, body: { error: "invalid_grant" } }]);
      const session = new OAuthSession({
        clientId: "my-app",
        store,
        transport,
        now,
        onSignedOut: () => {
          throw new Error("app bug");
        },
      });
      const client = new HardcoverClient({ auth: session, transport });

      await expect(client.request(operations.Me)).rejects.toMatchObject({ reason: "revoked" });
      expect(await store.get()).toBeNull();

      await new Promise((resolve) => setTimeout(resolve, 5));
      expect(thrown).toEqual([new Error("app bug")]);
    } finally {
      process.off("uncaughtException", onError);
    }
  });

  it("reports a sign-out in another process as signed-out", async () => {
    const reasons: string[] = [];
    let reads = 0;
    const store: TokenStore = { get: async () => (reads++ === 0 ? expiring : null), set: async () => {} };
    const session = new OAuthSession({ clientId: "my-app", store, transport: new MockTransport([]), now, onSignedOut: (r) => reasons.push(r) });

    await expect(session.getAccessToken()).rejects.toMatchObject({ reason: "signed-out" });
    expect(reasons).toEqual(["signed-out"]);
  });

  it("calls a 401 on an identity-only token that hasn't expired revoked, not expired", async () => {
    const identity: TokenSet = { accessToken: "hc_at_id", scope: "openid", expiresAt: NOW + 600_000 };
    const session = new OAuthSession({ clientId: "my-app", store: memoryStore(identity), transport: new MockTransport([]), now });

    await expect(session.refreshAfterUnauthorized("hc_at_id")).rejects.toMatchObject({ reason: "revoked" });
  });
});

describe("what the session shares with the app", () => {
  it("never hands out the refresh token", async () => {
    const transport = new MockTransport([tokenResponse("new")]);
    const session = new OAuthSession({ clientId: "my-app", redirectUri: "myapp://cb", store: memoryStore(), transport, random, now });

    const attempt = session.authorize({ scopes: ["read:library"] });
    const signedIn = await session.completeAuthorization(`myapp://cb?code=c&state=${attempt.state}`, attempt);
    const current = await session.tokens();

    expect(signedIn).not.toHaveProperty("refreshToken");
    expect(current).not.toHaveProperty("refreshToken");
    expect(current).toMatchObject({ accessToken: "hc_at_new", scope: "read:library", canRefresh: true });
  });
});

describe("device sign-in cancellation", () => {
  it("doesn't start when the signal is already aborted", async () => {
    const controller = new AbortController();
    controller.abort(new Error("user closed the screen"));
    const transport = new MockTransport([]);
    const session = new OAuthSession({ clientId: "tv-app", store: memoryStore(), transport, now });

    await expect(session.signInWithDevice({ scopes: ["read:library"], onCode: () => {}, signal: controller.signal })).rejects.toThrow("user closed the screen");
    expect(transport.requests).toHaveLength(0);
  });

  it("stops during the wait, not after it", async () => {
    const controller = new AbortController();
    const transport = new MockTransport([
      { status: 200, body: { device_code: "dc", user_code: "U", verification_uri: "https://hardcover.app/link", expires_in: 900, interval: 5 } },
    ]);
    const neverWakes = () => new Promise<void>(() => {});
    const session = new OAuthSession({ clientId: "tv-app", store: memoryStore(), transport, now, sleep: neverWakes });

    const signIn = session.signInWithDevice({ scopes: ["read:library"], onCode: () => controller.abort(new Error("cancelled")), signal: controller.signal });

    await expect(signIn).rejects.toThrow("cancelled");
  });

  it("keeps polling through a network blip", async () => {
    const transport = new MockTransport([
      { status: 200, body: { device_code: "dc", user_code: "U", verification_uri: "https://hardcover.app/link", expires_in: 900, interval: 5 } },
      { network: "reset" },
      { status: 503, body: "down" },
      tokenResponse("device"),
    ]);
    const session = new OAuthSession({ clientId: "tv-app", store: memoryStore(), transport, now, sleep: async () => {} });

    const tokens = await session.signInWithDevice({ scopes: ["read:library"], onCode: () => {} });

    expect(tokens.accessToken).toBe("hc_at_device");
  });
});
