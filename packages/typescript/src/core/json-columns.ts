// Types for JSON columns the schema only knows as `jsonb` (spec/03, Types for
// JSON columns).
//
// The shapes are observed from the API, not guaranteed:
// - keys stay as stored, except a few snake_case ones (listed at the end of
//   this file) that also come back in camelCase, the stored key deprecated,
// - an empty column arrives as `{}`, not `null`,
// - the server can add or drop keys at any time.
//
// That's why every field is optional.

/** A cover, author photo or avatar. `{}` when there's no image. */
export interface CachedImage {
  id?: number;
  url?: string;
  width?: number;
  height?: number;

  /** Dominant color as a hex string, e.g. "#ddd8d7". */
  color?: string;

  /** The dominant color's name, e.g. "Silver". */
  colorName?: string;
  /** @deprecated Use `colorName`. Removed in a future release. */
  color_name?: string;
}

/** The person behind a credit. */
export interface CachedAuthor {
  id?: number;
  slug?: string;
  name?: string;
  image?: CachedImage;
}

/** One credited person on a book or edition. */
export interface CachedContributor {
  author?: CachedAuthor;

  /** "Author", "Narrator", "Illustrator", … */
  contribution?: string | null;

  /** The credit the site shows first. */
  primary?: boolean;

  // The role behind `contribution`, with its description.
  contributorRoleId?: number | null;
  contributorRoleName?: string | null;
  contributorRoleBlurb?: string | null;

  // An optional narrower role, e.g. a kind of translator.
  contributorSpecializationId?: number | null;
  contributorSpecializationName?: string | null;
  contributorSpecializationBlurb?: string | null;

  /** @deprecated Use `contributorRoleId`. Removed in a future release. */
  contributor_role_id?: number | null;
  /** @deprecated Use `contributorRoleName`. Removed in a future release. */
  contributor_role_name?: string | null;
  /** @deprecated Use `contributorRoleBlurb`. Removed in a future release. */
  contributor_role_blurb?: string | null;
  /** @deprecated Use `contributorSpecializationId`. Removed in a future release. */
  contributor_specialization_id?: number | null;
  /** @deprecated Use `contributorSpecializationName`. Removed in a future release. */
  contributor_specialization_name?: string | null;
  /** @deprecated Use `contributorSpecializationBlurb`. Removed in a future release. */
  contributor_specialization_blurb?: string | null;
}

/** A tag with how many readers applied it. Unlike the others, these keys are stored in camelCase. */
export interface CachedTag {
  tag?: string;
  tagSlug?: string;
  category?: string;
  categorySlug?: string;
  count?: number;
  spoilerRatio?: number;
}

/** Tags grouped by category: "Genre", "Mood", "Tag", "Content Warning", … */
export type CachedTags = {
  [category: string]: CachedTag[] | undefined;
};

/** One of a reader's most-read genres, counted from the books they've read. */
export interface CachedGenre {
  tag?: string;
  tagSlug?: string;

  /** How many of the reader's read books have this genre. */
  count?: number;
}

/** A series, as the featured-series column describes it. */
export interface CachedSeries {
  id?: number;
  name?: string;
  slug?: string;
  booksCount?: number;

  /** Books in the main numbered run, leaving out novellas and extras. */
  primaryBooksCount?: number | null;
  /** @deprecated Use `booksCount`. Removed in a future release. */
  books_count?: number;
  /** @deprecated Use `primaryBooksCount`. Removed in a future release. */
  primary_books_count?: number | null;
}

/** The series the site features for a book, e.g. "Red Rising Saga" #1. `{}` when it has none. */
export interface CachedFeaturedSeries {
  id?: number;
  series?: CachedSeries;

  /** The book's number in the series. */
  position?: number | null;

  /** The position as written, e.g. "1" or "1-3". */
  details?: string | null;

  featured?: boolean;
  collection?: boolean;
  unreleased?: boolean;
}

/** How many ratings a book has at one star value (half stars included). */
export interface RatingCount {
  rating?: number;
  count?: number;
}

/**
 * Which type each JSON column gets, by field name. The names are the same on
 * every table that has them (books, editions, authors, users, vibes).
 */
interface JsonColumns {
  cachedImage: CachedImage;
  cachedContributors: CachedContributor[];
  cachedTags: CachedTags;
  cachedFeaturedSeries: CachedFeaturedSeries;

  /** A book's wide banner image. `{}` when it has none, which is most books. */
  cachedHeaderImage: CachedImage;

  /** A book's ratings per star value, lowest first, for a histogram. `[]` when it has none. */
  ratingsDistribution: RatingCount[];

  /**
   * Up to 100 ids from Hardcover's recommendations, most similar first. `[]`
   * until the site has built the list (see `books.similar`).
   */
  cachedSimilarBookIds: number[];

  /** A user's profile banner. */
  cachedCover: CachedImage;

  /** A user's most-read genres. */
  cachedGenres: CachedGenre[];

  /** A vibe's matching books, best match first. */
  cachedBookIds: number[];
}

// Codegen can only map the `jsonb` scalar as a whole (to `unknown`), so the
// per-field types are applied on top of its output here.
/**
 * A generated result type with its `cached*` JSON columns (`cachedImage`,
 * `cachedContributors`, `cachedTags`, `cachedFeaturedSeries`, …) typed, at any
 * depth. The shapes are observed, not guaranteed: every field is optional, an
 * empty column arrives as `{}`, and keys stay as stored (plus the camelCase
 * copies `withIdiomaticKeys` adds).
 */
export type WithJsonColumns<T> =
  // A list: type each item.
  T extends readonly (infer Item)[]
    ? WithJsonColumns<Item>[]
    : // An object: type each field.
      T extends object
      ? { [Field in keyof T]: TypedField<Field, T[Field]> }
      : // Anything else (string, number, null) stays as it is.
        T;

/** A JSON column gets its type; any other field is searched for nested ones. */
type TypedField<Field, Value> = Field extends keyof JsonColumns
  ? JsonColumns[Field]
  : WithJsonColumns<Value>;

// Idiomatic keys (spec/03, Casing). A few JSON column types store snake_case
// keys. The SDK adds a camelCase copy of each, mapped explicitly per type, and
// keeps the stored key as a deprecated alias until a later release removes it.
// Every other key, and every other column, is left exactly as stored.

const imageKeys = { color_name: "colorName" };

const contributorKeys = {
  contributor_role_id: "contributorRoleId",
  contributor_role_name: "contributorRoleName",
  contributor_role_blurb: "contributorRoleBlurb",
  contributor_specialization_id: "contributorSpecializationId",
  contributor_specialization_name: "contributorSpecializationName",
  contributor_specialization_blurb: "contributorSpecializationBlurb",
};

const seriesKeys = { books_count: "booksCount", primary_books_count: "primaryBooksCount" };

type Json = Record<string, unknown>;

function isObject(value: unknown): value is Json {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function copyKeys(target: unknown, keys: Record<string, string>): void {
  if (!isObject(target)) return;

  for (const [stored, idiomatic] of Object.entries(keys)) {
    if (stored in target && !(idiomatic in target)) target[idiomatic] = target[stored];
  }
}

function fixImage(image: unknown): void {
  copyKeys(image, imageKeys);
}

function fixContributors(contributors: unknown): void {
  if (!Array.isArray(contributors)) return;

  for (const contributor of contributors) {
    copyKeys(contributor, contributorKeys);
    if (isObject(contributor) && isObject(contributor.author)) fixImage(contributor.author.image);
  }
}

function fixFeaturedSeries(featured: unknown): void {
  if (isObject(featured)) copyKeys(featured.series, seriesKeys);
}

const columnFixes: Record<string, (column: unknown) => void> = {
  cachedImage: fixImage,
  cachedHeaderImage: fixImage,
  cachedCover: fixImage,
  cachedContributors: fixContributors,
  cachedFeaturedSeries: fixFeaturedSeries,
};

/**
 * Adds the camelCase copies of snake_case keys inside JSON columns, in place,
 * anywhere in a response. `request()` runs it on every result.
 */
export function withIdiomaticKeys<T>(value: T): T {
  if (Array.isArray(value)) {
    for (const item of value) withIdiomaticKeys(item);
  } else if (isObject(value)) {
    for (const [field, inner] of Object.entries(value)) {
      const fix = columnFixes[field];
      if (fix) fix(inner);
      else withIdiomaticKeys(inner);
    }
  }

  return value;
}
