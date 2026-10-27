// The stats computation, step for step as shared/stats.json describes it, so
// every SDK gets the same numbers from the same library data. It mirrors the
// app's Stats page (Stats::CountedReads, lib/stats/computeStats.ts), except
// that pages and time come from finished reads (see "totals" in stats.json).
import { stats as rules } from "../generated/stats.ts";
import type { GetContributorRolesQuery, GetStatsLibraryQuery } from "../generated/graphql.ts";
import type { CachedAuthor, CachedContributor, WithJsonColumns } from "../core/json-columns.ts";
import type { StatsPeriod } from "./period.ts";

/** One library entry as the stats module fetches it, with its reads, edition and book. */
export type StatsLibraryEntry = WithJsonColumns<GetStatsLibraryQuery["user_books"][number]>;

/** Which contributor roles count as authors, for older contributor data. */
export type ContributorRoles = GetContributorRolesQuery;

/** Everything `computeStats` needs; `fetchStatsData` gets it. Plain JSON, so it can be cached. */
export interface StatsData {
  library: StatsLibraryEntry[];
  contributorRoles: ContributorRoles;
}

/** A reader's stats for one period. */
export interface ReadingStats {
  period: StatsPeriod;

  /** Distinct books finished in the period. */
  books: number;

  /** Finished reads in the period, re-reads included. */
  reads: number;

  /** Pages of the books finished in the period (audiobooks count 0). */
  pages: number;

  /** Seconds of audiobooks finished in the period. */
  secondsListened: number;

  /** Whole hours of audiobooks finished in the period. */
  hoursListened: number;

  /** Ratings of the books finished, one per book, in half stars. */
  ratings: {
    /** Unrounded; 0 when there are none. */
    average: number;
    count: number;
    /** Every half star from 0.5 to 5, low to high, including zeros. */
    distribution: { rating: number; count: number }[];
  };

  /** Reads by format: physical, ebook, audiobook, always in that order. */
  formats: { formatId: number; label: string; reads: number }[];

  /** Genre tags across the reads, most common first. */
  genres: TagCount[];

  /** Reads whose book has no genre tags. */
  genresMissing: number;

  /** Mood tags across the reads, most common first. */
  moods: TagCount[];

  /** Reads whose book has no mood tags. */
  moodsMissing: number;

  /** Authors of the books finished, most books first. Translators and other non-author credits are left out. */
  authors: AuthorCount[];

  /** Reads, pages and seconds per month (YYYY-MM), oldest first; only months with reads. */
  byMonth: { month: string; reads: number; pages: number; seconds: number }[];
}

export interface TagCount {
  tag: string;
  /** Reads whose book carries this tag. */
  reads: number;
}

export interface AuthorCount {
  author: { id: number | undefined; name: string | undefined; slug: string };
  /** Distinct books by this author finished in the period. */
  books: number;
  /** Mean of your ratings for those books, 2 decimals; null when none are rated. */
  averageRating: number | null;
}

// One finished-or-not read, after the counted-reads rules.
interface Read {
  entry: StatsLibraryEntry;
  finishedAt: string | null;
  counted: boolean;
  formatId: number | null;
  pages: number;
  seconds: number;
}

type ReadRow = StatsLibraryEntry["userBookReads"][number];
type Edition = NonNullable<StatsLibraryEntry["edition"]>;

/**
 * Computes a reader's stats for a period from data `fetchStatsData` fetched.
 * Pure and synchronous: fetch once, then compute any number of periods.
 */
export function computeStats(data: StatsData, period: StatsPeriod): ReadingStats {
  const isPrimary = primaryResolver(data.contributorRoles);

  // Every counted read in the period, in entry order, then read order.
  const reads = data.library.flatMap(countedReads).filter((read) => read.counted && inPeriod(read, period));

  // One per book, for the stats that don't repeat a book for re-reads.
  const books = firstPerEntry(reads);

  const seconds = sum(reads.map((read) => read.seconds));

  return {
    period,
    books: books.length,
    reads: reads.length,
    pages: sum(reads.map((read) => read.pages)),
    secondsListened: seconds,
    hoursListened: Math.floor(seconds / rules.totals.secondsPerHour),
    ratings: ratings(books),
    formats: formats(reads),
    ...tagCounts(reads, rules.tags.genreCategory, "genres"),
    ...tagCounts(reads, rules.tags.moodCategory, "moods"),
    authors: authors(books, isPrimary),
    byMonth: byMonth(reads),
  };
}

// Counted reads

// The reads one library entry stands for (shared/stats.json "countedReads").
function countedReads(entry: StatsLibraryEntry): Read[] {
  const rows = [...entry.userBookReads].sort((a, b) => a.id - b.id);
  const lastReadDate = entry.lastReadDate;

  // No read rows: the entry itself is one finished read.
  if (rows.length === 0) return [syntheticRead(entry)];

  // The only finish date is on the entry: fold it onto a row that can carry it.
  const eligible = rows.filter((row) => row.finishedAtPrecision !== rules.countedReads.unknownPrecision);
  const needsFallback = Boolean(lastReadDate) && rows.every((row) => !row.finishedAt) && eligible.length > 0;

  const carrier = needsFallback
    ? (eligible.find((row) => !row.startedAt) ?? eligible.find((row) => row.startedAt! <= lastReadDate!))
    : undefined;

  const reads = rows.map((row) => {
    const carried = row === carrier;

    return readFromRow(entry, row, {
      counted: carried || isFinished(row),
      finishedAt: row.finishedAt ?? (carried ? lastReadDate : null),
    });
  });

  // Every row is a later, unfinished re-read: the completion gets its own read.
  if (needsFallback && !carrier) reads.push(syntheticRead(entry));

  // The entry is in the library's read population, so it counts at least once.
  if (!reads.some((read) => read.counted)) {
    const floor = floorRow(rows);
    reads[rows.indexOf(floor)]!.counted = true;
  }

  return reads;
}

// Finished, with or without a known date.
function isFinished(row: ReadRow): boolean {
  if (row.finishedAt) return true;

  return row.finishedAtPrecision !== null && Number(row.progress ?? 0) >= rules.countedReads.completeProgress;
}

// A dateless row, else the most recently started (ties: highest id).
function floorRow(rows: ReadRow[]): ReadRow {
  const dateless = rows.find((row) => !row.startedAt);
  if (dateless) return dateless;

  return [...rows].sort((a, b) => (a.startedAt! === b.startedAt! ? b.id - a.id : a.startedAt! < b.startedAt! ? 1 : -1))[0]!;
}

function readFromRow(entry: StatsLibraryEntry, row: ReadRow, { counted, finishedAt }: { counted: boolean; finishedAt: string | null }): Read {
  // Format falls back to the entry's edition; pages and seconds use the row's own edition, then the book.
  const formatId = row.edition?.readingFormatId ?? entry.edition?.readingFormatId ?? null;

  return { entry, finishedAt, counted, formatId, ...amounts(entry, row.edition, formatId) };
}

function syntheticRead(entry: StatsLibraryEntry): Read {
  const formatId = entry.edition?.readingFormatId ?? null;

  return { entry, finishedAt: entry.lastReadDate, counted: true, formatId, ...amounts(entry, entry.edition, formatId) };
}

function amounts(entry: StatsLibraryEntry, edition: Edition | null, formatId: number | null) {
  if (formatId === rules.readValues.audioFormatId) {
    return { pages: 0, seconds: edition?.audioSeconds ?? entry.book.audioSeconds ?? 0 };
  }

  return { pages: edition?.pages ?? entry.book.pages ?? 0, seconds: 0 };
}

// Periods

function inPeriod(read: Read, period: StatsPeriod): boolean {
  if (period.kind === "life") return true;
  if (!read.finishedAt) return false;

  // Dates compare as text: YYYY-MM-DD sorts in date order.
  const day = read.finishedAt.slice(0, 10);

  return period.from <= day && day <= period.to;
}

function firstPerEntry(reads: Read[]): Read[] {
  const seen = new Set<number>();

  return reads.filter((read) => {
    if (seen.has(read.entry.id)) return false;
    seen.add(read.entry.id);
    return true;
  });
}

// Breakdowns

function ratings(books: Read[]): ReadingStats["ratings"] {
  const counts = new Map<number, number>(rules.ratings.buckets.map((bucket) => [bucket, 0]));

  for (const { entry } of books) {
    if (entry.rating === null || entry.rating === undefined) continue;

    // Half stars only: 4.3 or 0 count nowhere.
    const rounded = Math.round(Number(entry.rating) * 10) / 10;
    if (counts.has(rounded)) counts.set(rounded, counts.get(rounded)! + 1);
  }

  const distribution = [...counts].map(([rating, count]) => ({ rating, count }));
  const count = sum(distribution.map((bucket) => bucket.count));
  const total = sum(distribution.map((bucket) => bucket.rating * bucket.count));

  return { average: count ? total / count : 0, count, distribution };
}

function formats(reads: Read[]): ReadingStats["formats"] {
  return rules.formats.order.map(({ id, label }) => ({
    formatId: id,
    label,
    reads: reads.filter((read) => read.formatId === id).length,
  }));
}

function tagCounts<K extends "genres" | "moods">(reads: Read[], category: string, key: K) {
  const counts = new Map<string, number>();
  let missing = 0;

  for (const read of reads) {
    const tags = (read.entry.book.cachedTags?.[category] ?? []).map((tag) => tag.tag).filter((tag): tag is string => Boolean(tag));

    if (tags.length === 0) missing++;
    for (const tag of tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }

  // Array sort is stable, so ties keep first-seen order.
  const sorted = [...counts].map(([tag, count]) => ({ tag, reads: count })).sort((a, b) => b.reads - a.reads);

  return { [key]: sorted, [`${key}Missing`]: missing } as Record<K, TagCount[]> & Record<`${K}Missing`, number>;
}

function authors(books: Read[], isPrimary: (c: CachedContributor) => boolean): AuthorCount[] {
  const bySlug = new Map<string, { author: CachedAuthor & { slug: string }; ratings: number[]; entries: Set<number> }>();

  for (const { entry } of books) {
    for (const contribution of entry.book.cachedContributors ?? []) {
      const slug = contribution.author?.slug;
      if (!slug || !isPrimary(contribution) || isTranslator(contribution)) continue;

      const group = bySlug.get(slug) ?? { author: { ...contribution.author, slug }, ratings: [], entries: new Set() };
      bySlug.set(slug, group);

      // An author credited twice on one book still counts that book once.
      if (group.entries.has(entry.id)) continue;
      group.entries.add(entry.id);
      if (entry.rating !== null && entry.rating !== undefined) group.ratings.push(Number(entry.rating));
    }
  }

  return [...bySlug.values()]
    .map(({ author, ratings: rated, entries }) => ({
      author: { id: author.id, name: author.name, slug: author.slug },
      books: entries.size,
      averageRating: rated.length ? Math.round((sum(rated) / rated.length) * 100) / 100 : null,
    }))
    .sort((a, b) => b.books - a.books);
}

// Contributions here read both key styles: StatsData may come from
// `fetchStatsData` (both) or be built by hand from stored data (snake_case only).
function isTranslator(contribution: CachedContributor): boolean {
  const role = contribution.contributorRoleName ?? contribution.contributor_role_name ?? contribution.contribution ?? "";

  return role.toLowerCase() === rules.authors.translatorRole;
}

// Primary: the contribution's own flag, else its role (with a specialization
// override), else the legacy text rule for data from before roles existed.
function primaryResolver(roles: ContributorRoles) {
  const byRole = new Map(roles.contributor_roles.map((role) => [role.id, role.primary]));
  const overrides = new Map(
    roles.contributor_role_specializations
      .filter((override) => override.primary !== null)
      .map((override) => [`${override.contributorRoleId}:${override.contributorSpecializationId}`, override.primary!]),
  );

  return (contribution: CachedContributor): boolean => {
    if (typeof contribution.primary === "boolean") return contribution.primary;

    const roleId = contribution.contributorRoleId ?? contribution.contributor_role_id;
    if (roleId === null || roleId === undefined) {
      const text = (contribution.contribution ?? "").trim().toLowerCase();
      return text === "" || (rules.authors.legacyPrimaryText as readonly string[]).includes(text);
    }

    const override = overrides.get(`${roleId}:${contribution.contributorSpecializationId ?? contribution.contributor_specialization_id ?? null}`);
    if (override !== undefined) return override;

    return byRole.get(roleId) ?? false;
  };
}

function byMonth(reads: Read[]): ReadingStats["byMonth"] {
  const months = new Map<string, { reads: number; pages: number; seconds: number }>();

  for (const read of reads) {
    if (!read.finishedAt) continue;

    const month = read.finishedAt.slice(0, 7);
    const totals = months.get(month) ?? { reads: 0, pages: 0, seconds: 0 };
    totals.reads++;
    totals.pages += read.pages;
    totals.seconds += read.seconds;
    months.set(month, totals);
  }

  return [...months].sort(([a], [b]) => (a < b ? -1 : 1)).map(([month, totals]) => ({ month, ...totals }));
}

const sum = (values: number[]) => values.reduce((total, value) => total + value, 0);
