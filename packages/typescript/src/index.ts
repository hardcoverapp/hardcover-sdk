export { HardcoverClient, type Environment, type HardcoverClientOptions, type TokenSource } from "./core/client.ts";
export { allPages, DEFAULT_LIMIT } from "./resources/page.ts";
export * from "./core/errors.ts";
export type { RateLimitState } from "./core/rate-limit.ts";
export type {
  CachedAuthor,
  CachedContributor,
  CachedFeaturedSeries,
  CachedGenre,
  CachedImage,
  CachedSeries,
  CachedTag,
  CachedTags,
  WithJsonColumns,
} from "./core/json-columns.ts";
export { fetchTransport, TransportFailure, type HttpRequest, type HttpResponse, type Transport } from "./core/transport.ts";
export { operations, type Operations } from "./operations.ts";
export * from "./generated/enums.ts";
export type * from "./generated/graphql.ts";
export { localDate, type OccurredAt } from "./core/dates.ts";
export type { Page, PageOptions } from "./resources/page.ts";
export { MeResource, type Me } from "./resources/me.ts";
export {
  LibraryResource,
  type LibraryEntry,
  type LibraryChange,
  type LibraryChanges,
  type LibraryEntryForBook,
  type LibraryChangesOptions,
  type LibraryEntryPatch,
  type LibraryEntryWithBook,
  type LibraryListItem,
  type LibraryListOptions,
  type LibraryStatusFilter,
  type OwnedBook,
  type OwnedMark,
  type ReviewPatch,
  type SetStatusOptions,
} from "./resources/library.ts";
export {
  ReadsResource,
  type FinishedRead,
  type FinishedReadsOptions,
  type ProgressInput,
  type Read,
  type ReadDates,
  type UpdatedRead,
} from "./resources/reads.ts";
export {
  ListsResource,
  type AddBookOptions,
  type AddBooksResult,
  type AddedBook,
  type FollowedList,
  type InviteResponse,
  type List,
  type ListBookRow,
  type ListInput,
  type ListMember,
  type ListMembership,
  type ListWithBooks,
  type NotAddedBook,
} from "./resources/lists.ts";
export {
  SearchResource,
  type RawSearch,
  type RawSearchOptions,
  type SearchOptions,
  type SearchResults,
} from "./resources/search.ts";
export type * from "./resources/search-types.ts";
export {
  BooksResource,
  type Book,
  type BookSummary,
  type Edition,
  type EditionWithBook,
  type ExternalMatch,
  type FriendEntry,
  type ReleasedOptions,
  type TrendingOptions,
} from "./resources/books.ts";
export { JournalResource, type JournalEntry, type JournalEntryInput, type JournalTag } from "./resources/journal.ts";
export { GoalsResource, goalProgress, type Goal, type GoalFields, type GoalProgress } from "./resources/goals.ts";
export {
  VibesResource,
  type DynamicSignal,
  type Vibe,
  type VibeBooks,
  type VibeCreate,
  type VibeExclusion,
  type VibeFields,
  type VibeSignal,
  type VibeUpdate,
} from "./resources/vibes.ts";
export {
  PromptsResource,
  type FollowedPrompt,
  type Prompt,
  type PromptAnswer,
  type PromptAnswerOptions,
  type PromptAnswerResult,
  type PromptAnswerWithBook,
  type PromptBook,
  type PromptForBook,
  type PromptInput,
  type PromptListOptions,
} from "./resources/prompts.ts";
export { AuthorsResource, type Author, type SeriesSummary } from "./resources/authors.ts";
export { SeriesResource, type Series, type SeriesEntry } from "./resources/series.ts";
export {
  UsersResource,
  type BlockedUser,
  type BlockOptions,
  type Follower,
  type Following,
  type UserProfile,
} from "./resources/users.ts";
export { LikesResource } from "./resources/likes.ts";
export { ActivitiesResource, type Activity } from "./resources/activities.ts";
export { NotificationsResource, type Notification } from "./resources/notifications.ts";
