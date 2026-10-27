// Search hit shapes, observed from the search index (2026-09-28) and the docs'
// Searching guide. The index doesn't guarantee fields, so only `id` and the
// display name are required. Keys are camelCase; the SDK converts them from
// the index's snake_case (see spec/03 Casing).

export interface SearchImage {
  id?: number;
  url?: string;
  color?: string;
  colorName?: string;
  width?: number;
  height?: number;
}

/** The series the site features for a book, as on `cachedFeaturedSeries`. `{}` when it has none. */
export interface SearchFeaturedSeries {
  id?: number;
  series?: {
    id?: number;
    name?: string;
    slug?: string;
    booksCount?: number;
    primaryBooksCount?: number;
  };

  /** The book's number in the series. */
  position?: number;

  /** The position as written, e.g. "1" or "1-3". */
  details?: string;

  featured?: boolean;
  collection?: boolean;
  unreleased?: boolean;
}

export interface SearchUserRef {
  id?: number;
  username?: string;
  name?: string;
  image?: SearchImage;
}

export interface BookHit {
  id: number;
  title: string;
  subtitle?: string;
  slug?: string;
  description?: string;
  releaseDate?: string;
  releaseYear?: number;
  pages?: number;
  image?: SearchImage;
  coverColor?: string;
  authorNames?: string[];
  contributions?: {
    author?: { id?: number; name?: string; slug?: string; image?: SearchImage };
    contribution?: string;
    contributorRoleId?: number;
    contributorRoleName?: string;
    primary?: boolean;
  }[];
  isbns?: string[];
  seriesIds?: number[];
  seriesNames?: string[];
  featuredSeries?: SearchFeaturedSeries;
  featuredSeriesPosition?: number;
  genres?: string[];
  moods?: string[];
  tags?: string[];
  contentWarnings?: string[];
  alternativeTitles?: string[];
  bookCategoryId?: number;
  compilation?: boolean;
  hasAudiobook?: boolean;
  hasEbook?: boolean;
  rating?: number;
  ratingsCount?: number;
  reviewsCount?: number;
  usersCount?: number;
  usersReadCount?: number;
  listsCount?: number;
  promptsCount?: number;
  activitiesCount?: number;
}

export interface AuthorHit {
  id: number;
  name: string;
  namePersonal?: string;
  slug?: string;
  image?: SearchImage;
  alternateNames?: string[];
  books?: string[];
  booksCount?: number;
  seriesIds?: number[];
  seriesNames?: string[];
}

export interface CharacterHit {
  id: number;
  name: string;
  slug?: string;
  authorNames?: string[];
  books?: string[];
  booksCount?: number;
}

export interface ListHit {
  id: number;
  name: string;
  slug?: string;
  description?: string;
  books?: string[];
  booksCount?: number;
  likesCount?: number;
  followersCount?: number;
  user?: SearchUserRef;
}

export interface PromptHit {
  id: number;
  question: string;
  slug?: string;
  books?: string[];
  booksCount?: number;
  answersCount?: number;
  usersCount?: number;
  user?: SearchUserRef;
}

export interface PublisherHit {
  id: number;
  name: string;
  slug?: string;
  editionsCount?: number;
}

export interface SeriesHit {
  id: number;
  name: string;
  slug?: string;
  author?: { id?: number; name?: string; slug?: string; image?: SearchImage };
  authorName?: string;
  books?: string[];
  booksCount?: number;
  primaryBooksCount?: number;
  readersCount?: number;
}

export interface UserHit {
  id: number;
  username: string;
  name?: string;
  image?: SearchImage;
  flair?: string;
  location?: string;
  pro?: boolean;
  librarianRoles?: string[];
  booksCount?: number;
  followersCount?: number;
  followedUsersCount?: number;
}
