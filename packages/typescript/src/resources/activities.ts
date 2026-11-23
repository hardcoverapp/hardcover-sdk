import type { HardcoverClient } from "../core/client.ts";
import { NotFoundError, ScopeError } from "../core/errors.ts";
import type { WithJsonColumns } from "../core/json-columns.ts";
import type { ActivityFragment } from "../generated/graphql.ts";
import { operations } from "../operations.ts";
import { capped, DEFAULT_LIMIT, toPage, type Page, type PageOptions } from "./page.ts";

/**
 * An entry in an activity feed. `event` says what happened (e.g. a status
 * change or a review) and `data` holds the details the site shows; its shape
 * depends on the event, so it isn't typed.
 *
 * `likedByMe` says whether the signed-in reader has liked it, for a filled
 * heart. It's `null` when the token can't read who that reader is (it lacks
 * `read:me:content`).
 */
export type Activity = Omit<WithJsonColumns<ActivityFragment>, "viewer_likes"> & { likedByMe: boolean | null };

type RawActivity = WithJsonColumns<ActivityFragment>;

// No reader has this id, so the like lookup matches nothing when we don't know who's signed in.
const NO_VIEWER = 0;

/** Activity feeds: what readers did, as the site shows it. */
export class ActivitiesResource {
  private readonly client: HardcoverClient;

  constructor(client: HardcoverClient) {
    this.client = client;
  }

  /**
   * A reader's activity, newest first.
   * Scopes: `read:social` (with `read:me:content` too, `likedByMe` says whether you liked each one; without it, it's null).
   */
  async forUser(userId: number, { limit: requested = DEFAULT_LIMIT, offset = 0 }: PageOptions = {}): Promise<Page<Activity>> {
    const limit = capped("activities", requested);
    const viewer = await this.#viewer();
    const { activities } = await this.client.request(operations.GetActivitiesForUser, { userId, viewerId: viewer ?? NO_VIEWER, limit, offset });

    return toPage(withLikes(activities, viewer), limit, offset);
  }

  /**
   * Activity about a book, newest first.
   * Scopes: `read:social` (with `read:me:content` too, `likedByMe` says whether you liked each one; without it, it's null).
   */
  async forBook(bookId: number, { limit: requested = DEFAULT_LIMIT, offset = 0 }: PageOptions = {}): Promise<Page<Activity>> {
    const limit = capped("activities", requested);
    const viewer = await this.#viewer();
    const { activities } = await this.client.request(operations.GetActivitiesForBook, { bookId, viewerId: viewer ?? NO_VIEWER, limit, offset });

    return toPage(withLikes(activities, viewer), limit, offset);
  }

  /** Activity from the people the signed-in user follows, newest first. Scopes: `read:me:content`, `read:social`. */
  async following({ limit: requested = DEFAULT_LIMIT, offset = 0 }: PageOptions = {}): Promise<Page<Activity>> {
    const limit = capped("activities", requested);
    const userId = await this.client.me.id();
    const { activities } = await this.client.request(operations.GetFollowingActivities, { userId, viewerId: userId, limit, offset });

    return toPage(withLikes(activities, userId), limit, offset);
  }

  // The signed-in reader's id, or null when the token can't read it. me.id()
  // is cached, so this costs one request per client at most.
  async #viewer(): Promise<number | null> {
    try {
      return await this.client.me.id();
    } catch (error) {
      if (error instanceof ScopeError) return null;
      throw error;
    }
  }

  /** Deletes one of your own activity entries. Scopes: `write:social`. */
  async delete(id: number): Promise<void> {
    const { delete_activities_by_pk } = await this.client.request(operations.DeleteActivity, { id });

    if (!delete_activities_by_pk) throw new NotFoundError("activity", id);
  }
}


/** The reader's own like, as a flag; null when we don't know who the reader is. */
function withLikes(activities: RawActivity[], viewer: number | null): Activity[] {
  return activities.map(({ viewer_likes, ...activity }) => ({
    ...activity,
    likedByMe: viewer === null ? null : viewer_likes.length > 0,
  }));
}
