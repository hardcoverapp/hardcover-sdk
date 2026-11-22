import { expect, it } from "vitest";
import { HardcoverClient, operations, type Transport } from "../src/index.ts";
import { me, setupWith } from "./helpers.ts";

it("surfaces a transport bug immediately instead of retrying it as a network failure", async () => {
  let calls = 0;
  const slept: number[] = [];
  const broken: Transport = {
    async send() {
      calls++;
      throw new Error("mock queue exhausted");
    },
  };
  const client = new HardcoverClient({ token: "hc_pat_test", transport: broken, sleep: async (ms) => void slept.push(ms) });

  await expect(client.request(operations.Me)).rejects.toThrow("mock queue exhausted");
  expect(calls).toBe(1);
  expect(slept).toEqual([]);
});

it("sends the app's User-Agent as is and names the SDK in X-Hardcover-Client", async () => {
  const { client, transport } = setupWith({ userAgent: "Shelfie/2.1" }, me());

  await client.request(operations.Me);

  const headers = transport.requests[0]!.headers;
  expect(headers["user-agent"]).toBe("Shelfie/2.1");
  expect(headers["X-Hardcover-Client"]).toMatch(/^hardcover-sdk-typescript\/[\d.]+$/);
});

it("falls back to the SDK's User-Agent when the app gives none", async () => {
  const { client, transport } = setupWith({}, me());

  await client.request(operations.Me);

  expect(transport.requests[0]!.headers["user-agent"]).toMatch(/^hardcover-sdk-typescript\/[\d.]+$/);
});
