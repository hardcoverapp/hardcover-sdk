// JSON columns (cachedImage, cachedContributors, cachedTags, cachedFeaturedSeries,
// cachedHeaderImage, cachedSimilarBookIds, cachedCover, cachedGenres,
// cachedBookIds) come back typed, with their contents exactly as stored (spec/03).
import { describe, expect, expectTypeOf, it } from "vitest";
import type {
  Book,
  BookSummary,
  CachedContributor,
  CachedFeaturedSeries,
  CachedGenre,
  CachedImage,
  CachedTags,
  GetVibeBookIdsQuery,
  LibraryListItem,
  UserProfile,
  WithJsonColumns,
} from "../src/index.ts";
import { ok, setup } from "./helpers.ts";

// Shapes as the API returned them for Red Rising (2026-10-20).
const redRising = {
  id: 427473,
  slug: "red-rising",
  title: "Red Rising",
  subtitle: null,
  pages: 382,
  rating: 4.19,
  releaseYear: 2014,
  audioSeconds: null,
  ratingsCount: 8000,
  usersCount: 11581,

  cachedImage: {
    id: 1889221,
    url: "https://assets.hardcover.app/editions/26096001/3897005112280259.jpg",
    color: "#ddd8d7",
    color_name: "Silver",
    width: 311,
    height: 475,
  },

  cachedContributors: [
    {
      author: { id: 232665, slug: "pierce-brown", name: "Pierce Brown", image: {} },
      contribution: "Author",
      contributor_role_id: 1,
      primary: true,
    },
  ],

  cachedFeaturedSeries: {
    id: 3336,
    series: {
      id: 1033,
      name: "Red Rising Saga",
      slug: "red-rising-saga",
      books_count: 16,
      primary_books_count: 6,
    },
    details: "1",
    position: 1,
    featured: true,
    collection: false,
    unreleased: false,
  },
};

// A book with no cover, no contributors and no series: the columns hold `{}` or `[]`.
const bare = {
  ...redRising,
  id: 3036994,
  title: "Bare",
  cachedImage: {},
  cachedContributors: [],
  cachedFeaturedSeries: {},
};

describe("JSON columns", () => {
  it("are typed on the public types, wherever they appear", () => {
    expectTypeOf<BookSummary["cachedImage"]>().toEqualTypeOf<CachedImage>();
    expectTypeOf<BookSummary["cachedContributors"]>().toEqualTypeOf<CachedContributor[]>();
    expectTypeOf<BookSummary["cachedFeaturedSeries"]>().toEqualTypeOf<CachedFeaturedSeries>();
    expectTypeOf<Book["cachedTags"]>().toEqualTypeOf<CachedTags>();
    expectTypeOf<Book["cachedHeaderImage"]>().toEqualTypeOf<CachedImage>();
    expectTypeOf<UserProfile["cachedCover"]>().toEqualTypeOf<CachedImage>();
    expectTypeOf<UserProfile["cachedGenres"]>().toEqualTypeOf<CachedGenre[]>();

    type VibeBookIds = NonNullable<WithJsonColumns<GetVibeBookIdsQuery>["vibes_by_pk"]>;
    expectTypeOf<VibeBookIds["cachedBookIds"]>().toEqualTypeOf<number[]>();

    // Not in a built-in fragment, but typed for anyone who selects it.
    expectTypeOf<WithJsonColumns<{ cachedSimilarBookIds: unknown }>["cachedSimilarBookIds"]>().toEqualTypeOf<number[]>();

    // Nested inside another type: a library row's book.
    expectTypeOf<LibraryListItem["book"]["cachedImage"]>().toEqualTypeOf<CachedImage>();
  });

  it("reach callers as stored, including empty columns", async () => {
    // Trending is two requests: the ids, then the books.
    const trendingIds = ok({ books_trending: { ids: [427473, 3036994], error: null } });
    const books = ok({ books: [redRising, bare] });
    const { client } = setup(trendingIds, books);

    const { items } = await client.books.trending({ duration: "week", limit: 2 });
    const [first, second] = items;

    // No casts needed, and the stored keys (color_name, books_count) are untouched.
    expect(first?.cachedFeaturedSeries.series?.name).toBe("Red Rising Saga");
    expect(first?.cachedFeaturedSeries.position).toBe(1);
    expect(first?.cachedImage.color_name).toBe("Silver");

    const primary = first?.cachedContributors.find((contributor) => contributor.primary);
    expect(primary?.author?.name).toBe("Pierce Brown");

    // Empty columns are `{}`, so their fields read as undefined.
    expect(second?.cachedImage.url).toBeUndefined();
    expect(second?.cachedFeaturedSeries.series).toBeUndefined();
  });
});
