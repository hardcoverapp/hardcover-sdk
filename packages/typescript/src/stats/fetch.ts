// Fetching what stats need: the reader's counted library, page by page, and
// the small contributor-role tables.
import type { HardcoverClient } from "../core/client.ts";
import { stats as rules } from "../generated/stats.ts";
import { operations } from "../operations.ts";
import { computeStats, type ReadingStats, type StatsData, type StatsLibraryEntry } from "./compute.ts";
import type { StatsPeriod } from "./period.ts";

const PAGE_SIZE = rules.population.pageSize;

/**
 * Fetches the signed-in reader's library data for stats: every book on the
 * Read shelf or finished at least once, with its reads, edition, tags and
 * authors. One request per 100 books, plus one for contributor roles.
 * Compute as many periods as you like from the result with `computeStats`.
 *
 * Scopes: `read:me:content`, `read:library`, `read:catalog`.
 */
export async function fetchStatsData(client: HardcoverClient): Promise<StatsData> {
  const userId = await client.me.id();
  const library: StatsLibraryEntry[] = [];

  for (let offset = 0; ; offset += PAGE_SIZE) {
    const { user_books } = await client.request(operations.GetStatsLibrary, { userId, limit: PAGE_SIZE, offset });
    library.push(...user_books);

    if (user_books.length < PAGE_SIZE) break;
  }

  const contributorRoles = await client.request(operations.GetContributorRoles);

  return { library, contributorRoles };
}

/**
 * The signed-in reader's stats for a period, e.g. `readingStats(hc, period.thisYear())`.
 * Fetches everything each time; to compute several periods, call
 * `fetchStatsData` once and `computeStats` for each.
 *
 * Scopes: `read:me:content`, `read:library`, `read:catalog`.
 */
export async function readingStats(client: HardcoverClient, period: StatsPeriod): Promise<ReadingStats> {
  return computeStats(await fetchStatsData(client), period);
}
