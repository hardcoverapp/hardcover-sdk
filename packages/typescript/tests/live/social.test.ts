// People and social against a real API. Reads: your profile, connections,
// feeds and friends on a book. Writes (only under `pnpm test:live:writes`):
// follow, like and an invites-only block on a stranger, each undone. The block
// is invites-only so a run never ends a real follow.
import { expect, it } from "vitest";
import { BlockType, LikeableType } from "../../src/index.ts";
import { describeLive, describeLiveWrites, liveClient, popularBookIds, target } from "./setup.ts";

describeLive(`social: profiles, connections, feeds (${target})`, () => {
  const client = liveClient();

  it("your profile, followers, following and feed", async () => {
    const me = await client.me.get();

    const profile = await client.users.getByUsername(me.username!.toUpperCase());
    expect(profile?.id).toBe(me.id);

    expect(Array.isArray((await client.users.followers(me.id, { limit: 5 })).items)).toBe(true);
    expect(Array.isArray((await client.users.following(me.id, { limit: 5 })).items)).toBe(true);

    const mine = await client.activities.forUser(me.id, { limit: 5 });
    for (const activity of mine.items) expect(activity.userId).toBe(me.id);

    const feed = await client.activities.following({ limit: 5 });
    for (const activity of feed.items) expect(activity.userId).not.toBe(me.id);

    // The token can read who's signed in, so every activity says whether you liked it.
    for (const activity of [...mine.items, ...feed.items]) expect(typeof activity.likedByMe).toBe("boolean");
  });

  it("a book's activity and friends", async () => {
    const [bookId] = await popularBookIds(client);

    const { items } = await client.activities.forBook(bookId!, { limit: 5 });
    for (const activity of items) expect(activity.bookId).toBe(bookId);

    const friends = await client.books.friends(bookId!);
    for (const entry of friends) expect(entry.bookId).toBe(bookId);
  });
});

describeLiveWrites(`social: follow, like, block a stranger (${target})`, () => {
  const client = liveClient();

  it("follow → unfollow, like → unlike, block → unblock", async ({ skip }) => {
    const me = await client.me.get();
    const known = new Set<number>([me.id]);
    for (const row of (await client.users.following(me.id, { limit: 100 })).items) known.add(row.followedUser.id);
    for (const row of (await client.users.followers(me.id, { limit: 100 })).items) known.add(row.user.id);

    // Someone active on a popular book who has no connection to you.
    let stranger: { userId: number; activityId: number; bookId: number } | undefined;
    for (const bookId of (await popularBookIds(client)).slice(0, 5)) {
      const { items } = await client.activities.forBook(bookId, { limit: 25 });
      const activity = items.find((a) => !known.has(a.userId));
      if (activity) {
        stranger = { userId: activity.userId, activityId: activity.id, bookId };
        break;
      }
    }
    if (!stranger) skip("no stranger's activity found");

    const { userId, activityId, bookId } = stranger!;
    const likedByMe = async () => (await client.activities.forBook(bookId, { limit: 25 })).items.find((a) => a.id === activityId)?.likedByMe;

    await client.users.follow(userId);
    expect((await client.users.following(me.id, { limit: 100 })).items.some((r) => r.followedUser.id === userId)).toBe(true);
    await client.users.unfollow(userId);
    expect((await client.users.following(me.id, { limit: 100 })).items.some((r) => r.followedUser.id === userId)).toBe(false);

    const liked = await client.likes.like(LikeableType.Activity, activityId);
    expect(await likedByMe()).toBe(true);
    const unliked = await client.likes.unlike(LikeableType.Activity, activityId);
    expect(unliked).toBe(liked - 1);
    expect(await likedByMe()).toBe(false);

    await client.users.block(userId, { type: BlockType.Invites });
    expect((await client.users.blocked()).some((b) => b.blockedUser?.id === userId && b.type === BlockType.Invites)).toBe(true);
    expect(await client.users.unblock(userId)).toBe(true);
    expect(await client.users.unblock(userId)).toBe(false);
  });
});
