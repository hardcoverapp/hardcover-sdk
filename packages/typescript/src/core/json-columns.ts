// Types for JSON columns the schema only knows as `jsonb` (spec/03, Types for
// JSON columns).
//
// The shapes are observed from the API, not guaranteed:
// - keys stay exactly as stored (so some are snake_case, like `color_name`),
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
  contributor_role_id?: number | null;
  contributor_role_name?: string | null;
  contributor_role_blurb?: string | null;

  // An optional narrower role, e.g. a kind of translator.
  contributor_specialization_id?: number | null;
  contributor_specialization_name?: string | null;
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
  books_count?: number;
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

  /** Ids of books readers of this book also read, most similar first. */
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
 * empty column arrives as `{}`, and keys stay as stored (some snake_case).
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
