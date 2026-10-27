/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type { DocumentTypeDecoration } from "../core/decoration.ts";
export type BasicTag = {
  category: string;
  spoiler: boolean;
  tag: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: boolean | null | undefined;
  _gt?: boolean | null | undefined;
  _gte?: boolean | null | undefined;
  _in?: Array<boolean> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: boolean | null | undefined;
  _lte?: boolean | null | undefined;
  _neq?: boolean | null | undefined;
  _nin?: Array<boolean> | null | undefined;
};

export type CreatePromptInput = {
  description: string;
  privacy_setting_id: number;
  question: string;
};

export type DatesReadInput = {
  action?: string | null | undefined;
  action_at?: string | null | undefined;
  edition_id?: number | null | undefined;
  finished_at?: string | null | undefined;
  finished_at_precision?: number | null | undefined;
  id?: number | null | undefined;
  progress_pages?: number | null | undefined;
  progress_seconds?: number | null | undefined;
  started_at?: string | null | undefined;
};

export type DynamicSignalInput = {
  category: string;
  count?: number | null | undefined;
  max_rating?: number | null | undefined;
  min_rating?: number | null | undefined;
  weight?: number | null | undefined;
};

export type GoalConditionInput = {
  authorBipoc?: number | null | undefined;
  authorGenderIds?: Array<number | null | undefined> | null | undefined;
  authorLgbtqia?: number | null | undefined;
  bookCategoryIds?: Array<number | null | undefined> | null | undefined;
  readingFormatId?: number | null | undefined;
};

export type GoalInput = {
  archived?: boolean | null | undefined;
  conditions: GoalConditionInput;
  description: string;
  end_date: string;
  goal: number;
  metric: string;
  privacy_setting_id?: number | null | undefined;
  start_date: string;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: number | null | undefined;
  _gt?: number | null | undefined;
  _gte?: number | null | undefined;
  _in?: Array<number> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: number | null | undefined;
  _lte?: number | null | undefined;
  _neq?: number | null | undefined;
  _nin?: Array<number> | null | undefined;
};

export type ListBookInput = {
  book_id: number;
  edition_id?: number | null | undefined;
  list_id: number;
  position?: number | null | undefined;
};

export type ListInput = {
  default_view?: string | null | undefined;
  description?: string | null | undefined;
  featured_profile?: boolean | null | undefined;
  name?: string | null | undefined;
  privacy_setting_id?: number | null | undefined;
  ranked?: boolean | null | undefined;
  url?: string | null | undefined;
};

export type ListMemberInput = {
  list_id: number;
  user_id: number;
};

export type PromptAnswerCreateInput = {
  book_id: number;
  description?: string | null | undefined;
  prompt_id: number;
};

export type ReadingJournalCreateType = {
  action_at?: string | null | undefined;
  book_id: number;
  custom?: unknown;
  edition_id?: number | null | undefined;
  entry?: string | null | undefined;
  event: string;
  metadata?: unknown;
  privacy_setting_id: number;
  tags: Array<BasicTag | null | undefined>;
};

export type ReadingJournalUpdateType = {
  action_at?: string | null | undefined;
  custom?: unknown;
  edition_id?: number | null | undefined;
  entry?: string | null | undefined;
  event?: string | null | undefined;
  metadata?: unknown;
  privacy_setting_id?: number | null | undefined;
  tags?: Array<BasicTag | null | undefined> | null | undefined;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: string | null | undefined;
  _gt?: string | null | undefined;
  _gte?: string | null | undefined;
  /** does the column match the given case-insensitive pattern */
  _ilike?: string | null | undefined;
  _in?: Array<string> | null | undefined;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: string | null | undefined;
  _is_null?: boolean | null | undefined;
  /** does the column match the given pattern */
  _like?: string | null | undefined;
  _lt?: string | null | undefined;
  _lte?: string | null | undefined;
  _neq?: string | null | undefined;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: string | null | undefined;
  _nin?: Array<string> | null | undefined;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: string | null | undefined;
  /** does the column NOT match the given pattern */
  _nlike?: string | null | undefined;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: string | null | undefined;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: string | null | undefined;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: string | null | undefined;
  /** does the column match the given SQL regular expression */
  _similar?: string | null | undefined;
};

export type TrendingDuration =
  | 'all'
  | 'month'
  | 'one_year'
  | 'three_month'
  | 'week';

export type UpdatePromptInput = {
  description: string;
  id: number;
  privacy_setting_id: number;
  question: string;
};

export type UserBookCreateInput = {
  action_at?: string | null | undefined;
  book_id: number;
  date_added?: string | null | undefined;
  edition_id?: number | null | undefined;
  finished_at_precision?: number | null | undefined;
  first_started_reading_date?: string | null | undefined;
  last_read_date?: string | null | undefined;
  media_url?: string | null | undefined;
  privacy_setting_id?: number | null | undefined;
  private_notes?: string | null | undefined;
  rating?: number | null | undefined;
  read_count?: number | null | undefined;
  recommended_by?: string | null | undefined;
  recommended_for?: string | null | undefined;
  referrer_user_id?: number | null | undefined;
  review_has_spoilers?: boolean | null | undefined;
  review_markdown?: string | null | undefined;
  review_slate?: unknown;
  reviewed_at?: string | null | undefined;
  sponsored_review?: boolean | null | undefined;
  status_id?: number | null | undefined;
  url?: string | null | undefined;
  user_date?: string | null | undefined;
  user_start_date?: string | null | undefined;
};

export type UserBookUpdateInput = {
  action_at?: string | null | undefined;
  buddy_read_privacy_setting_id?: number | null | undefined;
  date_added?: string | null | undefined;
  edition_id?: number | null | undefined;
  finished_at_precision?: number | null | undefined;
  first_started_reading_date?: string | null | undefined;
  last_read_date?: string | null | undefined;
  media_url?: string | null | undefined;
  privacy_setting_id?: number | null | undefined;
  private_notes?: string | null | undefined;
  rating?: number | null | undefined;
  read_count?: number | null | undefined;
  recommended_by?: string | null | undefined;
  recommended_for?: string | null | undefined;
  referrer_user_id?: number | null | undefined;
  review_has_spoilers?: boolean | null | undefined;
  review_markdown?: string | null | undefined;
  review_slate?: unknown;
  reviewed_at?: string | null | undefined;
  sponsored_review?: boolean | null | undefined;
  status_id?: number | null | undefined;
  url?: string | null | undefined;
  user_date?: string | null | undefined;
  user_start_date?: string | null | undefined;
};

export type VibeExclusionInput = {
  _destroy?: boolean | null | undefined;
  excluded_id: number;
  excluded_type: string;
  id?: number | null | undefined;
};

export type VibeInput = {
  description?: string | null | undefined;
  dynamic_signals?: Array<DynamicSignalInput> | null | undefined;
  privacy_setting_id?: number | null | undefined;
  title?: string | null | undefined;
  vibe_exclusions_attributes?: Array<VibeExclusionInput> | null | undefined;
  vibe_signals_attributes?: Array<VibeSignalInput> | null | undefined;
};

export type VibeSignalInput = {
  _destroy?: boolean | null | undefined;
  id?: number | null | undefined;
  position?: number | null | undefined;
  signal_type: string;
  value?: string | null | undefined;
  weight: number;
};

/** order by aggregate values of table "activities" */
export type Activities_Aggregate_Order_By = {
  avg?: Activities_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Activities_Max_Order_By | null | undefined;
  min?: Activities_Min_Order_By | null | undefined;
  stddev?: Activities_Stddev_Order_By | null | undefined;
  stddev_pop?: Activities_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Activities_Stddev_Samp_Order_By | null | undefined;
  sum?: Activities_Sum_Order_By | null | undefined;
  var_pop?: Activities_Var_Pop_Order_By | null | undefined;
  var_samp?: Activities_Var_Samp_Order_By | null | undefined;
  variance?: Activities_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "activities" */
export type Activities_Avg_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "activities". All fields are combined with a logical 'AND'. */
export type Activities_Bool_Exp = {
  _and?: Array<Activities_Bool_Exp> | null | undefined;
  _not?: Activities_Bool_Exp | null | undefined;
  _or?: Array<Activities_Bool_Exp> | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  book_id?: Int_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  data?: Jsonb_Comparison_Exp | null | undefined;
  event?: String_Comparison_Exp | null | undefined;
  followers?: Followed_Users_Bool_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  likes?: Likes_Bool_Exp | null | undefined;
  likes_count?: Int_Comparison_Exp | null | undefined;
  object_type?: String_Comparison_Exp | null | undefined;
  privacy_setting?: Privacy_Settings_Bool_Exp | null | undefined;
  privacy_setting_id?: Int_Comparison_Exp | null | undefined;
  uid?: String_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "activities" */
export type Activities_Max_Order_By = {
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  event?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  uid?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "activities" */
export type Activities_Min_Order_By = {
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  event?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  uid?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "activities" */
export type Activities_Stddev_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "activities" */
export type Activities_Stddev_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "activities" */
export type Activities_Stddev_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "activities" */
export type Activities_Sum_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "activities" */
export type Activities_Var_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "activities" */
export type Activities_Var_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "activities" */
export type Activities_Variance_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by aggregate values of table "authors" */
export type Authors_Aggregate_Order_By = {
  avg?: Authors_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Authors_Max_Order_By | null | undefined;
  min?: Authors_Min_Order_By | null | undefined;
  stddev?: Authors_Stddev_Order_By | null | undefined;
  stddev_pop?: Authors_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Authors_Stddev_Samp_Order_By | null | undefined;
  sum?: Authors_Sum_Order_By | null | undefined;
  var_pop?: Authors_Var_Pop_Order_By | null | undefined;
  var_samp?: Authors_Var_Samp_Order_By | null | undefined;
  variance?: Authors_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "authors" */
export type Authors_Avg_Order_By = {
  alias_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  born_year?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  death_year?: Order_By | null | undefined;
  gender_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "authors". All fields are combined with a logical 'AND'. */
export type Authors_Bool_Exp = {
  _and?: Array<Authors_Bool_Exp> | null | undefined;
  _not?: Authors_Bool_Exp | null | undefined;
  _or?: Array<Authors_Bool_Exp> | null | undefined;
  alias?: Authors_Bool_Exp | null | undefined;
  alias_id?: Int_Comparison_Exp | null | undefined;
  alternate_names?: Jsonb_Comparison_Exp | null | undefined;
  bio?: String_Comparison_Exp | null | undefined;
  books_count?: Int_Comparison_Exp | null | undefined;
  born_date?: Date_Comparison_Exp | null | undefined;
  born_year?: Int_Comparison_Exp | null | undefined;
  cached_image?: Jsonb_Comparison_Exp | null | undefined;
  canonical?: Authors_Bool_Exp | null | undefined;
  canonical_id?: Int_Comparison_Exp | null | undefined;
  contributions?: Contributions_Bool_Exp | null | undefined;
  contributions_aggregate?: Contributions_Aggregate_Bool_Exp | null | undefined;
  creator?: Users_Bool_Exp | null | undefined;
  death_date?: Date_Comparison_Exp | null | undefined;
  death_year?: Int_Comparison_Exp | null | undefined;
  gender_id?: Int_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  identifiers?: Jsonb_Comparison_Exp | null | undefined;
  image?: Images_Bool_Exp | null | undefined;
  image_id?: Int_Comparison_Exp | null | undefined;
  is_bipoc?: Boolean_Comparison_Exp | null | undefined;
  is_lgbtq?: Boolean_Comparison_Exp | null | undefined;
  links?: Jsonb_Comparison_Exp | null | undefined;
  location?: String_Comparison_Exp | null | undefined;
  locked?: Boolean_Comparison_Exp | null | undefined;
  name?: String_Comparison_Exp | null | undefined;
  name_personal?: String_Comparison_Exp | null | undefined;
  object_type?: String_Comparison_Exp | null | undefined;
  slug?: String_Comparison_Exp | null | undefined;
  state?: String_Comparison_Exp | null | undefined;
  title?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamp_Comparison_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
  users_count?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "authors" */
export type Authors_Max_Order_By = {
  alias_id?: Order_By | null | undefined;
  bio?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  born_date?: Order_By | null | undefined;
  born_year?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  death_date?: Order_By | null | undefined;
  death_year?: Order_By | null | undefined;
  gender_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  location?: Order_By | null | undefined;
  name?: Order_By | null | undefined;
  name_personal?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  title?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by min() on columns of table "authors" */
export type Authors_Min_Order_By = {
  alias_id?: Order_By | null | undefined;
  bio?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  born_date?: Order_By | null | undefined;
  born_year?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  death_date?: Order_By | null | undefined;
  death_year?: Order_By | null | undefined;
  gender_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  location?: Order_By | null | undefined;
  name?: Order_By | null | undefined;
  name_personal?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  title?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** Ordering options when selecting data from "authors". */
export type Authors_Order_By = {
  alias_aggregate?: Authors_Aggregate_Order_By | null | undefined;
  alias_id?: Order_By | null | undefined;
  alternate_names?: Order_By | null | undefined;
  bio?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  born_date?: Order_By | null | undefined;
  born_year?: Order_By | null | undefined;
  cached_image?: Order_By | null | undefined;
  canonical?: Authors_Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  contributions_aggregate?: Contributions_Aggregate_Order_By | null | undefined;
  creator?: Users_Order_By | null | undefined;
  death_date?: Order_By | null | undefined;
  death_year?: Order_By | null | undefined;
  gender_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  identifiers?: Order_By | null | undefined;
  image?: Images_Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  is_bipoc?: Order_By | null | undefined;
  is_lgbtq?: Order_By | null | undefined;
  links?: Order_By | null | undefined;
  location?: Order_By | null | undefined;
  locked?: Order_By | null | undefined;
  name?: Order_By | null | undefined;
  name_personal?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  title?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "authors" */
export type Authors_Stddev_Order_By = {
  alias_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  born_year?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  death_year?: Order_By | null | undefined;
  gender_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "authors" */
export type Authors_Stddev_Pop_Order_By = {
  alias_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  born_year?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  death_year?: Order_By | null | undefined;
  gender_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "authors" */
export type Authors_Stddev_Samp_Order_By = {
  alias_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  born_year?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  death_year?: Order_By | null | undefined;
  gender_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by sum() on columns of table "authors" */
export type Authors_Sum_Order_By = {
  alias_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  born_year?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  death_year?: Order_By | null | undefined;
  gender_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "authors" */
export type Authors_Var_Pop_Order_By = {
  alias_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  born_year?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  death_year?: Order_By | null | undefined;
  gender_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "authors" */
export type Authors_Var_Samp_Order_By = {
  alias_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  born_year?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  death_year?: Order_By | null | undefined;
  gender_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by variance() on columns of table "authors" */
export type Authors_Variance_Order_By = {
  alias_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  born_year?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  death_year?: Order_By | null | undefined;
  gender_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: number | null | undefined;
  _gt?: number | null | undefined;
  _gte?: number | null | undefined;
  _in?: Array<number> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: number | null | undefined;
  _lte?: number | null | undefined;
  _neq?: number | null | undefined;
  _nin?: Array<number> | null | undefined;
};

/** order by aggregate values of table "book_characters" */
export type Book_Characters_Aggregate_Order_By = {
  avg?: Book_Characters_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Book_Characters_Max_Order_By | null | undefined;
  min?: Book_Characters_Min_Order_By | null | undefined;
  stddev?: Book_Characters_Stddev_Order_By | null | undefined;
  stddev_pop?: Book_Characters_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Book_Characters_Stddev_Samp_Order_By | null | undefined;
  sum?: Book_Characters_Sum_Order_By | null | undefined;
  var_pop?: Book_Characters_Var_Pop_Order_By | null | undefined;
  var_samp?: Book_Characters_Var_Samp_Order_By | null | undefined;
  variance?: Book_Characters_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "book_characters" */
export type Book_Characters_Avg_Order_By = {
  book_id?: Order_By | null | undefined;
  character_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "book_characters". All fields are combined with a logical 'AND'. */
export type Book_Characters_Bool_Exp = {
  _and?: Array<Book_Characters_Bool_Exp> | null | undefined;
  _not?: Book_Characters_Bool_Exp | null | undefined;
  _or?: Array<Book_Characters_Bool_Exp> | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  book_id?: Bigint_Comparison_Exp | null | undefined;
  character?: Characters_Bool_Exp | null | undefined;
  character_id?: Bigint_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  only_mentioned?: Boolean_Comparison_Exp | null | undefined;
  position?: Int_Comparison_Exp | null | undefined;
  spoiler?: Boolean_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "book_characters" */
export type Book_Characters_Max_Order_By = {
  book_id?: Order_By | null | undefined;
  character_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
};

/** order by min() on columns of table "book_characters" */
export type Book_Characters_Min_Order_By = {
  book_id?: Order_By | null | undefined;
  character_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "book_characters" */
export type Book_Characters_Stddev_Order_By = {
  book_id?: Order_By | null | undefined;
  character_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "book_characters" */
export type Book_Characters_Stddev_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  character_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "book_characters" */
export type Book_Characters_Stddev_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  character_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
};

/** order by sum() on columns of table "book_characters" */
export type Book_Characters_Sum_Order_By = {
  book_id?: Order_By | null | undefined;
  character_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "book_characters" */
export type Book_Characters_Var_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  character_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "book_characters" */
export type Book_Characters_Var_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  character_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
};

/** order by variance() on columns of table "book_characters" */
export type Book_Characters_Variance_Order_By = {
  book_id?: Order_By | null | undefined;
  character_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
};

/** order by aggregate values of table "book_mappings" */
export type Book_Mappings_Aggregate_Order_By = {
  avg?: Book_Mappings_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Book_Mappings_Max_Order_By | null | undefined;
  min?: Book_Mappings_Min_Order_By | null | undefined;
  stddev?: Book_Mappings_Stddev_Order_By | null | undefined;
  stddev_pop?: Book_Mappings_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Book_Mappings_Stddev_Samp_Order_By | null | undefined;
  sum?: Book_Mappings_Sum_Order_By | null | undefined;
  var_pop?: Book_Mappings_Var_Pop_Order_By | null | undefined;
  var_samp?: Book_Mappings_Var_Samp_Order_By | null | undefined;
  variance?: Book_Mappings_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "book_mappings" */
export type Book_Mappings_Avg_Order_By = {
  attempts?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  external_data_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "book_mappings". All fields are combined with a logical 'AND'. */
export type Book_Mappings_Bool_Exp = {
  _and?: Array<Book_Mappings_Bool_Exp> | null | undefined;
  _not?: Book_Mappings_Bool_Exp | null | undefined;
  _or?: Array<Book_Mappings_Bool_Exp> | null | undefined;
  attempts?: Int_Comparison_Exp | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  book_id?: Int_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  edition?: Editions_Bool_Exp | null | undefined;
  edition_id?: Int_Comparison_Exp | null | undefined;
  external_data_id?: Int_Comparison_Exp | null | undefined;
  external_id?: String_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  loaded?: Boolean_Comparison_Exp | null | undefined;
  loaded_at?: Timestamp_Comparison_Exp | null | undefined;
  normalized_at?: Timestamp_Comparison_Exp | null | undefined;
  original_book_id?: Int_Comparison_Exp | null | undefined;
  platform?: Platforms_Bool_Exp | null | undefined;
  platform_id?: Int_Comparison_Exp | null | undefined;
  state?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  verified?: Boolean_Comparison_Exp | null | undefined;
  verified_at?: Timestamp_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "book_mappings" */
export type Book_Mappings_Max_Order_By = {
  attempts?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  external_data_id?: Order_By | null | undefined;
  external_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  loaded_at?: Order_By | null | undefined;
  normalized_at?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  verified_at?: Order_By | null | undefined;
};

/** order by min() on columns of table "book_mappings" */
export type Book_Mappings_Min_Order_By = {
  attempts?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  external_data_id?: Order_By | null | undefined;
  external_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  loaded_at?: Order_By | null | undefined;
  normalized_at?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  verified_at?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "book_mappings" */
export type Book_Mappings_Stddev_Order_By = {
  attempts?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  external_data_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "book_mappings" */
export type Book_Mappings_Stddev_Pop_Order_By = {
  attempts?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  external_data_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "book_mappings" */
export type Book_Mappings_Stddev_Samp_Order_By = {
  attempts?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  external_data_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "book_mappings" */
export type Book_Mappings_Sum_Order_By = {
  attempts?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  external_data_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "book_mappings" */
export type Book_Mappings_Var_Pop_Order_By = {
  attempts?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  external_data_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "book_mappings" */
export type Book_Mappings_Var_Samp_Order_By = {
  attempts?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  external_data_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "book_mappings" */
export type Book_Mappings_Variance_Order_By = {
  attempts?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  external_data_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
};

export type Book_Series_Aggregate_Bool_Exp = {
  avg?: Book_Series_Aggregate_Bool_Exp_Avg | null | undefined;
  bool_and?: Book_Series_Aggregate_Bool_Exp_Bool_And | null | undefined;
  bool_or?: Book_Series_Aggregate_Bool_Exp_Bool_Or | null | undefined;
  corr?: Book_Series_Aggregate_Bool_Exp_Corr | null | undefined;
  count?: Book_Series_Aggregate_Bool_Exp_Count | null | undefined;
  covar_samp?: Book_Series_Aggregate_Bool_Exp_Covar_Samp | null | undefined;
  max?: Book_Series_Aggregate_Bool_Exp_Max | null | undefined;
  min?: Book_Series_Aggregate_Bool_Exp_Min | null | undefined;
  stddev_samp?: Book_Series_Aggregate_Bool_Exp_Stddev_Samp | null | undefined;
  sum?: Book_Series_Aggregate_Bool_Exp_Sum | null | undefined;
  var_samp?: Book_Series_Aggregate_Bool_Exp_Var_Samp | null | undefined;
};

export type Book_Series_Aggregate_Bool_Exp_Avg = {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Book_Series_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type Book_Series_Aggregate_Bool_Exp_Bool_And = {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Book_Series_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Book_Series_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Book_Series_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Book_Series_Aggregate_Bool_Exp_Corr = {
  arguments: Book_Series_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: boolean | null | undefined;
  filter?: Book_Series_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type Book_Series_Aggregate_Bool_Exp_Corr_Arguments = {
  X: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type Book_Series_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Book_Series_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Book_Series_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

export type Book_Series_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: Book_Series_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: boolean | null | undefined;
  filter?: Book_Series_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type Book_Series_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type Book_Series_Aggregate_Bool_Exp_Max = {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Book_Series_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type Book_Series_Aggregate_Bool_Exp_Min = {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Book_Series_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type Book_Series_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Book_Series_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type Book_Series_Aggregate_Bool_Exp_Sum = {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Book_Series_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type Book_Series_Aggregate_Bool_Exp_Var_Samp = {
  arguments: Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Book_Series_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

/** order by aggregate values of table "book_series" */
export type Book_Series_Aggregate_Order_By = {
  avg?: Book_Series_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Book_Series_Max_Order_By | null | undefined;
  min?: Book_Series_Min_Order_By | null | undefined;
  stddev?: Book_Series_Stddev_Order_By | null | undefined;
  stddev_pop?: Book_Series_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Book_Series_Stddev_Samp_Order_By | null | undefined;
  sum?: Book_Series_Sum_Order_By | null | undefined;
  var_pop?: Book_Series_Var_Pop_Order_By | null | undefined;
  var_samp?: Book_Series_Var_Samp_Order_By | null | undefined;
  variance?: Book_Series_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "book_series" */
export type Book_Series_Avg_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  series_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "book_series". All fields are combined with a logical 'AND'. */
export type Book_Series_Bool_Exp = {
  _and?: Array<Book_Series_Bool_Exp> | null | undefined;
  _not?: Book_Series_Bool_Exp | null | undefined;
  _or?: Array<Book_Series_Bool_Exp> | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  book_id?: Int_Comparison_Exp | null | undefined;
  compilation?: Boolean_Comparison_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  details?: String_Comparison_Exp | null | undefined;
  featured?: Boolean_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  position?: Float8_Comparison_Exp | null | undefined;
  series?: Series_Bool_Exp | null | undefined;
  series_id?: Int_Comparison_Exp | null | undefined;
  updated_at?: Timestamp_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "book_series" */
export type Book_Series_Max_Order_By = {
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  details?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  series_id?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
};

/** order by min() on columns of table "book_series" */
export type Book_Series_Min_Order_By = {
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  details?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  series_id?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
};

/** Ordering options when selecting data from "book_series". */
export type Book_Series_Order_By = {
  book?: Books_Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  compilation?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  details?: Order_By | null | undefined;
  featured?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  series?: Series_Order_By | null | undefined;
  series_id?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
};

/** select columns of table "book_series" */
export type Book_Series_Select_Column =
  /** column name */
  | 'book_id'
  /** column name */
  | 'compilation'
  /** column name */
  | 'created_at'
  /** column name */
  | 'details'
  /** column name */
  | 'featured'
  /** column name */
  | 'id'
  /** column name */
  | 'position'
  /** column name */
  | 'series_id'
  /** column name */
  | 'updated_at';

/** select "book_series_aggregate_bool_exp_avg_arguments_columns" columns of table "book_series" */
export type Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Avg_Arguments_Columns =
  /** column name */
  | 'position';

/** select "book_series_aggregate_bool_exp_bool_and_arguments_columns" columns of table "book_series" */
export type Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'compilation'
  /** column name */
  | 'featured';

/** select "book_series_aggregate_bool_exp_bool_or_arguments_columns" columns of table "book_series" */
export type Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'compilation'
  /** column name */
  | 'featured';

/** select "book_series_aggregate_bool_exp_corr_arguments_columns" columns of table "book_series" */
export type Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Corr_Arguments_Columns =
  /** column name */
  | 'position';

/** select "book_series_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "book_series" */
export type Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns =
  /** column name */
  | 'position';

/** select "book_series_aggregate_bool_exp_max_arguments_columns" columns of table "book_series" */
export type Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Max_Arguments_Columns =
  /** column name */
  | 'position';

/** select "book_series_aggregate_bool_exp_min_arguments_columns" columns of table "book_series" */
export type Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Min_Arguments_Columns =
  /** column name */
  | 'position';

/** select "book_series_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "book_series" */
export type Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns =
  /** column name */
  | 'position';

/** select "book_series_aggregate_bool_exp_sum_arguments_columns" columns of table "book_series" */
export type Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Sum_Arguments_Columns =
  /** column name */
  | 'position';

/** select "book_series_aggregate_bool_exp_var_samp_arguments_columns" columns of table "book_series" */
export type Book_Series_Select_Column_Book_Series_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns =
  /** column name */
  | 'position';

/** order by stddev() on columns of table "book_series" */
export type Book_Series_Stddev_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  series_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "book_series" */
export type Book_Series_Stddev_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  series_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "book_series" */
export type Book_Series_Stddev_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  series_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "book_series" */
export type Book_Series_Sum_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  series_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "book_series" */
export type Book_Series_Var_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  series_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "book_series" */
export type Book_Series_Var_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  series_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "book_series" */
export type Book_Series_Variance_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  series_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "book_statuses". All fields are combined with a logical 'AND'. */
export type Book_Statuses_Bool_Exp = {
  _and?: Array<Book_Statuses_Bool_Exp> | null | undefined;
  _not?: Book_Statuses_Bool_Exp | null | undefined;
  _or?: Array<Book_Statuses_Bool_Exp> | null | undefined;
  books?: Books_Bool_Exp | null | undefined;
  books_aggregate?: Books_Aggregate_Bool_Exp | null | undefined;
  id?: Smallint_Comparison_Exp | null | undefined;
  name?: String_Comparison_Exp | null | undefined;
};

/** Ordering options when selecting data from "book_statuses". */
export type Book_Statuses_Order_By = {
  books_aggregate?: Books_Aggregate_Order_By | null | undefined;
  id?: Order_By | null | undefined;
  name?: Order_By | null | undefined;
};

export type Books_Aggregate_Bool_Exp = {
  bool_and?: Books_Aggregate_Bool_Exp_Bool_And | null | undefined;
  bool_or?: Books_Aggregate_Bool_Exp_Bool_Or | null | undefined;
  count?: Books_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Books_Aggregate_Bool_Exp_Bool_And = {
  arguments: Books_Select_Column_Books_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Books_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Books_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Books_Select_Column_Books_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Books_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Books_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Books_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Books_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "books" */
export type Books_Aggregate_Order_By = {
  avg?: Books_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Books_Max_Order_By | null | undefined;
  min?: Books_Min_Order_By | null | undefined;
  stddev?: Books_Stddev_Order_By | null | undefined;
  stddev_pop?: Books_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Books_Stddev_Samp_Order_By | null | undefined;
  sum?: Books_Sum_Order_By | null | undefined;
  var_pop?: Books_Var_Pop_Order_By | null | undefined;
  var_samp?: Books_Var_Samp_Order_By | null | undefined;
  variance?: Books_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "books" */
export type Books_Avg_Order_By = {
  activities_count?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book_category_id?: Order_By | null | undefined;
  book_status_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  default_audio_edition_id?: Order_By | null | undefined;
  default_cover_edition_id?: Order_By | null | undefined;
  default_ebook_edition_id?: Order_By | null | undefined;
  default_physical_edition_id?: Order_By | null | undefined;
  editions_count?: Order_By | null | undefined;
  featured_book_series_id?: Order_By | null | undefined;
  header_image_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  import_platform_id?: Order_By | null | undefined;
  journals_count?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  literary_type_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  parent_book_id?: Order_By | null | undefined;
  prompts_count?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  ratings_count?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  reviews_count?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "books". All fields are combined with a logical 'AND'. */
export type Books_Bool_Exp = {
  _and?: Array<Books_Bool_Exp> | null | undefined;
  _not?: Books_Bool_Exp | null | undefined;
  _or?: Array<Books_Bool_Exp> | null | undefined;
  activities_count?: Int_Comparison_Exp | null | undefined;
  alternative_titles?: Json_Comparison_Exp | null | undefined;
  audio_seconds?: Int_Comparison_Exp | null | undefined;
  book_category_id?: Int_Comparison_Exp | null | undefined;
  book_characters?: Book_Characters_Bool_Exp | null | undefined;
  book_mappings?: Book_Mappings_Bool_Exp | null | undefined;
  book_series?: Book_Series_Bool_Exp | null | undefined;
  book_series_aggregate?: Book_Series_Aggregate_Bool_Exp | null | undefined;
  book_status?: Book_Statuses_Bool_Exp | null | undefined;
  book_status_id?: Smallint_Comparison_Exp | null | undefined;
  cached_contributors?: Json_Comparison_Exp | null | undefined;
  cached_featured_series?: Jsonb_Comparison_Exp | null | undefined;
  cached_header_image?: Jsonb_Comparison_Exp | null | undefined;
  cached_image?: Jsonb_Comparison_Exp | null | undefined;
  cached_similar_book_ids?: Jsonb_Comparison_Exp | null | undefined;
  cached_similar_books_updated_at?: Timestamp_Comparison_Exp | null | undefined;
  cached_tags?: Jsonb_Comparison_Exp | null | undefined;
  canonical?: Books_Bool_Exp | null | undefined;
  canonical_id?: Int_Comparison_Exp | null | undefined;
  collection_import_results?: Collection_Import_Results_Bool_Exp | null | undefined;
  compilation?: Boolean_Comparison_Exp | null | undefined;
  contributions?: Contributions_Bool_Exp | null | undefined;
  contributions_aggregate?: Contributions_Aggregate_Bool_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  created_by_user_id?: Int_Comparison_Exp | null | undefined;
  curation_status?: Int_Comparison_Exp | null | undefined;
  default_audio_edition?: Editions_Bool_Exp | null | undefined;
  default_audio_edition_id?: Int_Comparison_Exp | null | undefined;
  default_cover_edition?: Editions_Bool_Exp | null | undefined;
  default_cover_edition_id?: Int_Comparison_Exp | null | undefined;
  default_ebook_edition?: Editions_Bool_Exp | null | undefined;
  default_ebook_edition_id?: Int_Comparison_Exp | null | undefined;
  default_physical_edition?: Editions_Bool_Exp | null | undefined;
  default_physical_edition_id?: Int_Comparison_Exp | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  editions?: Editions_Bool_Exp | null | undefined;
  editions_count?: Int_Comparison_Exp | null | undefined;
  featured_book_series?: Book_Series_Bool_Exp | null | undefined;
  featured_book_series_id?: Int_Comparison_Exp | null | undefined;
  header_image_id?: Int_Comparison_Exp | null | undefined;
  headline?: String_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  image?: Images_Bool_Exp | null | undefined;
  image_id?: Int_Comparison_Exp | null | undefined;
  images?: Images_Bool_Exp | null | undefined;
  import_platform_id?: Int_Comparison_Exp | null | undefined;
  is_partial_book?: Boolean_Comparison_Exp | null | undefined;
  journals_count?: Int_Comparison_Exp | null | undefined;
  links?: Jsonb_Comparison_Exp | null | undefined;
  list_books?: List_Books_Bool_Exp | null | undefined;
  list_books_aggregate?: List_Books_Aggregate_Bool_Exp | null | undefined;
  lists_count?: Int_Comparison_Exp | null | undefined;
  literary_type_id?: Int_Comparison_Exp | null | undefined;
  locked?: Boolean_Comparison_Exp | null | undefined;
  pages?: Int_Comparison_Exp | null | undefined;
  parent_book?: Books_Bool_Exp | null | undefined;
  parent_book_id?: Int_Comparison_Exp | null | undefined;
  prompt_answers?: Prompt_Answers_Bool_Exp | null | undefined;
  prompt_answers_aggregate?: Prompt_Answers_Aggregate_Bool_Exp | null | undefined;
  prompt_summaries?: Prompt_Books_Summary_Bool_Exp | null | undefined;
  prompts_count?: Int_Comparison_Exp | null | undefined;
  rating?: Numeric_Comparison_Exp | null | undefined;
  ratings_count?: Int_Comparison_Exp | null | undefined;
  ratings_distribution?: Jsonb_Comparison_Exp | null | undefined;
  release_date?: Date_Comparison_Exp | null | undefined;
  release_year?: Int_Comparison_Exp | null | undefined;
  reviews_count?: Int_Comparison_Exp | null | undefined;
  slug?: String_Comparison_Exp | null | undefined;
  state?: String_Comparison_Exp | null | undefined;
  subtitle?: String_Comparison_Exp | null | undefined;
  taggable_counts?: Taggable_Counts_Bool_Exp | null | undefined;
  taggings?: Taggings_Bool_Exp | null | undefined;
  taggings_aggregate?: Taggings_Aggregate_Bool_Exp | null | undefined;
  title?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  user_books?: User_Books_Bool_Exp | null | undefined;
  user_books_aggregate?: User_Books_Aggregate_Bool_Exp | null | undefined;
  users_count?: Int_Comparison_Exp | null | undefined;
  users_read_count?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "books" */
export type Books_Max_Order_By = {
  activities_count?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book_category_id?: Order_By | null | undefined;
  book_status_id?: Order_By | null | undefined;
  cached_similar_books_updated_at?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  default_audio_edition_id?: Order_By | null | undefined;
  default_cover_edition_id?: Order_By | null | undefined;
  default_ebook_edition_id?: Order_By | null | undefined;
  default_physical_edition_id?: Order_By | null | undefined;
  description?: Order_By | null | undefined;
  editions_count?: Order_By | null | undefined;
  featured_book_series_id?: Order_By | null | undefined;
  header_image_id?: Order_By | null | undefined;
  headline?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  import_platform_id?: Order_By | null | undefined;
  journals_count?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  literary_type_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  parent_book_id?: Order_By | null | undefined;
  prompts_count?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  ratings_count?: Order_By | null | undefined;
  release_date?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  reviews_count?: Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  subtitle?: Order_By | null | undefined;
  title?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by min() on columns of table "books" */
export type Books_Min_Order_By = {
  activities_count?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book_category_id?: Order_By | null | undefined;
  book_status_id?: Order_By | null | undefined;
  cached_similar_books_updated_at?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  default_audio_edition_id?: Order_By | null | undefined;
  default_cover_edition_id?: Order_By | null | undefined;
  default_ebook_edition_id?: Order_By | null | undefined;
  default_physical_edition_id?: Order_By | null | undefined;
  description?: Order_By | null | undefined;
  editions_count?: Order_By | null | undefined;
  featured_book_series_id?: Order_By | null | undefined;
  header_image_id?: Order_By | null | undefined;
  headline?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  import_platform_id?: Order_By | null | undefined;
  journals_count?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  literary_type_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  parent_book_id?: Order_By | null | undefined;
  prompts_count?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  ratings_count?: Order_By | null | undefined;
  release_date?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  reviews_count?: Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  subtitle?: Order_By | null | undefined;
  title?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** Ordering options when selecting data from "books". */
export type Books_Order_By = {
  activities_count?: Order_By | null | undefined;
  alternative_titles?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book_category_id?: Order_By | null | undefined;
  book_characters_aggregate?: Book_Characters_Aggregate_Order_By | null | undefined;
  book_mappings_aggregate?: Book_Mappings_Aggregate_Order_By | null | undefined;
  book_series_aggregate?: Book_Series_Aggregate_Order_By | null | undefined;
  book_status?: Book_Statuses_Order_By | null | undefined;
  book_status_id?: Order_By | null | undefined;
  cached_contributors?: Order_By | null | undefined;
  cached_featured_series?: Order_By | null | undefined;
  cached_header_image?: Order_By | null | undefined;
  cached_image?: Order_By | null | undefined;
  cached_similar_book_ids?: Order_By | null | undefined;
  cached_similar_books_updated_at?: Order_By | null | undefined;
  cached_tags?: Order_By | null | undefined;
  canonical?: Books_Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  collection_import_results_aggregate?: Collection_Import_Results_Aggregate_Order_By | null | undefined;
  compilation?: Order_By | null | undefined;
  contributions_aggregate?: Contributions_Aggregate_Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  default_audio_edition?: Editions_Order_By | null | undefined;
  default_audio_edition_id?: Order_By | null | undefined;
  default_cover_edition?: Editions_Order_By | null | undefined;
  default_cover_edition_id?: Order_By | null | undefined;
  default_ebook_edition?: Editions_Order_By | null | undefined;
  default_ebook_edition_id?: Order_By | null | undefined;
  default_physical_edition?: Editions_Order_By | null | undefined;
  default_physical_edition_id?: Order_By | null | undefined;
  description?: Order_By | null | undefined;
  editions_aggregate?: Editions_Aggregate_Order_By | null | undefined;
  editions_count?: Order_By | null | undefined;
  featured_book_series?: Book_Series_Order_By | null | undefined;
  featured_book_series_id?: Order_By | null | undefined;
  header_image_id?: Order_By | null | undefined;
  headline?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image?: Images_Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  images_aggregate?: Images_Aggregate_Order_By | null | undefined;
  import_platform_id?: Order_By | null | undefined;
  is_partial_book?: Order_By | null | undefined;
  journals_count?: Order_By | null | undefined;
  links?: Order_By | null | undefined;
  list_books_aggregate?: List_Books_Aggregate_Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  literary_type_id?: Order_By | null | undefined;
  locked?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  parent_book?: Books_Order_By | null | undefined;
  parent_book_id?: Order_By | null | undefined;
  prompt_answers_aggregate?: Prompt_Answers_Aggregate_Order_By | null | undefined;
  prompt_summaries_aggregate?: Prompt_Books_Summary_Aggregate_Order_By | null | undefined;
  prompts_count?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  ratings_count?: Order_By | null | undefined;
  ratings_distribution?: Order_By | null | undefined;
  release_date?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  reviews_count?: Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  subtitle?: Order_By | null | undefined;
  taggable_counts_aggregate?: Taggable_Counts_Aggregate_Order_By | null | undefined;
  taggings_aggregate?: Taggings_Aggregate_Order_By | null | undefined;
  title?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_books_aggregate?: User_Books_Aggregate_Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** select columns of table "books" */
export type Books_Select_Column =
  /** column name */
  | 'activities_count'
  /** column name */
  | 'alternative_titles'
  /** column name */
  | 'audio_seconds'
  /** column name */
  | 'book_category_id'
  /** column name */
  | 'book_status_id'
  /** column name */
  | 'cached_contributors'
  /** column name */
  | 'cached_featured_series'
  /** column name */
  | 'cached_header_image'
  /** column name */
  | 'cached_image'
  /** column name */
  | 'cached_similar_book_ids'
  /** column name */
  | 'cached_similar_books_updated_at'
  /** column name */
  | 'cached_tags'
  /** column name */
  | 'canonical_id'
  /** column name */
  | 'compilation'
  /** column name */
  | 'created_at'
  /** column name */
  | 'created_by_user_id'
  /** column name */
  | 'curation_status'
  /** column name */
  | 'default_audio_edition_id'
  /** column name */
  | 'default_cover_edition_id'
  /** column name */
  | 'default_ebook_edition_id'
  /** column name */
  | 'default_physical_edition_id'
  /** column name */
  | 'description'
  /** column name */
  | 'editions_count'
  /** column name */
  | 'featured_book_series_id'
  /** column name */
  | 'header_image_id'
  /** column name */
  | 'headline'
  /** column name */
  | 'id'
  /** column name */
  | 'image_id'
  /** column name */
  | 'import_platform_id'
  /** column name */
  | 'is_partial_book'
  /** column name */
  | 'journals_count'
  /** column name */
  | 'links'
  /** column name */
  | 'lists_count'
  /** column name */
  | 'literary_type_id'
  /** column name */
  | 'locked'
  /** column name */
  | 'pages'
  /** column name */
  | 'parent_book_id'
  /** column name */
  | 'prompts_count'
  /** column name */
  | 'rating'
  /** column name */
  | 'ratings_count'
  /** column name */
  | 'ratings_distribution'
  /** column name */
  | 'release_date'
  /** column name */
  | 'release_year'
  /** column name */
  | 'reviews_count'
  /** column name */
  | 'slug'
  /** column name */
  | 'state'
  /** column name */
  | 'subtitle'
  /** column name */
  | 'title'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'users_count'
  /** column name */
  | 'users_read_count';

/** select "books_aggregate_bool_exp_bool_and_arguments_columns" columns of table "books" */
export type Books_Select_Column_Books_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'compilation'
  /** column name */
  | 'is_partial_book'
  /** column name */
  | 'locked';

/** select "books_aggregate_bool_exp_bool_or_arguments_columns" columns of table "books" */
export type Books_Select_Column_Books_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'compilation'
  /** column name */
  | 'is_partial_book'
  /** column name */
  | 'locked';

/** order by stddev() on columns of table "books" */
export type Books_Stddev_Order_By = {
  activities_count?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book_category_id?: Order_By | null | undefined;
  book_status_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  default_audio_edition_id?: Order_By | null | undefined;
  default_cover_edition_id?: Order_By | null | undefined;
  default_ebook_edition_id?: Order_By | null | undefined;
  default_physical_edition_id?: Order_By | null | undefined;
  editions_count?: Order_By | null | undefined;
  featured_book_series_id?: Order_By | null | undefined;
  header_image_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  import_platform_id?: Order_By | null | undefined;
  journals_count?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  literary_type_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  parent_book_id?: Order_By | null | undefined;
  prompts_count?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  ratings_count?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  reviews_count?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "books" */
export type Books_Stddev_Pop_Order_By = {
  activities_count?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book_category_id?: Order_By | null | undefined;
  book_status_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  default_audio_edition_id?: Order_By | null | undefined;
  default_cover_edition_id?: Order_By | null | undefined;
  default_ebook_edition_id?: Order_By | null | undefined;
  default_physical_edition_id?: Order_By | null | undefined;
  editions_count?: Order_By | null | undefined;
  featured_book_series_id?: Order_By | null | undefined;
  header_image_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  import_platform_id?: Order_By | null | undefined;
  journals_count?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  literary_type_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  parent_book_id?: Order_By | null | undefined;
  prompts_count?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  ratings_count?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  reviews_count?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "books" */
export type Books_Stddev_Samp_Order_By = {
  activities_count?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book_category_id?: Order_By | null | undefined;
  book_status_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  default_audio_edition_id?: Order_By | null | undefined;
  default_cover_edition_id?: Order_By | null | undefined;
  default_ebook_edition_id?: Order_By | null | undefined;
  default_physical_edition_id?: Order_By | null | undefined;
  editions_count?: Order_By | null | undefined;
  featured_book_series_id?: Order_By | null | undefined;
  header_image_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  import_platform_id?: Order_By | null | undefined;
  journals_count?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  literary_type_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  parent_book_id?: Order_By | null | undefined;
  prompts_count?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  ratings_count?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  reviews_count?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by sum() on columns of table "books" */
export type Books_Sum_Order_By = {
  activities_count?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book_category_id?: Order_By | null | undefined;
  book_status_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  default_audio_edition_id?: Order_By | null | undefined;
  default_cover_edition_id?: Order_By | null | undefined;
  default_ebook_edition_id?: Order_By | null | undefined;
  default_physical_edition_id?: Order_By | null | undefined;
  editions_count?: Order_By | null | undefined;
  featured_book_series_id?: Order_By | null | undefined;
  header_image_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  import_platform_id?: Order_By | null | undefined;
  journals_count?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  literary_type_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  parent_book_id?: Order_By | null | undefined;
  prompts_count?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  ratings_count?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  reviews_count?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "books" */
export type Books_Var_Pop_Order_By = {
  activities_count?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book_category_id?: Order_By | null | undefined;
  book_status_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  default_audio_edition_id?: Order_By | null | undefined;
  default_cover_edition_id?: Order_By | null | undefined;
  default_ebook_edition_id?: Order_By | null | undefined;
  default_physical_edition_id?: Order_By | null | undefined;
  editions_count?: Order_By | null | undefined;
  featured_book_series_id?: Order_By | null | undefined;
  header_image_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  import_platform_id?: Order_By | null | undefined;
  journals_count?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  literary_type_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  parent_book_id?: Order_By | null | undefined;
  prompts_count?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  ratings_count?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  reviews_count?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "books" */
export type Books_Var_Samp_Order_By = {
  activities_count?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book_category_id?: Order_By | null | undefined;
  book_status_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  default_audio_edition_id?: Order_By | null | undefined;
  default_cover_edition_id?: Order_By | null | undefined;
  default_ebook_edition_id?: Order_By | null | undefined;
  default_physical_edition_id?: Order_By | null | undefined;
  editions_count?: Order_By | null | undefined;
  featured_book_series_id?: Order_By | null | undefined;
  header_image_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  import_platform_id?: Order_By | null | undefined;
  journals_count?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  literary_type_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  parent_book_id?: Order_By | null | undefined;
  prompts_count?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  ratings_count?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  reviews_count?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by variance() on columns of table "books" */
export type Books_Variance_Order_By = {
  activities_count?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book_category_id?: Order_By | null | undefined;
  book_status_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  default_audio_edition_id?: Order_By | null | undefined;
  default_cover_edition_id?: Order_By | null | undefined;
  default_ebook_edition_id?: Order_By | null | undefined;
  default_physical_edition_id?: Order_By | null | undefined;
  editions_count?: Order_By | null | undefined;
  featured_book_series_id?: Order_By | null | undefined;
  header_image_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  import_platform_id?: Order_By | null | undefined;
  journals_count?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  literary_type_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  parent_book_id?: Order_By | null | undefined;
  prompts_count?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  ratings_count?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  reviews_count?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "characters". All fields are combined with a logical 'AND'. */
export type Characters_Bool_Exp = {
  _and?: Array<Characters_Bool_Exp> | null | undefined;
  _not?: Characters_Bool_Exp | null | undefined;
  _or?: Array<Characters_Bool_Exp> | null | undefined;
  biography?: String_Comparison_Exp | null | undefined;
  book_characters?: Book_Characters_Bool_Exp | null | undefined;
  books_count?: Int_Comparison_Exp | null | undefined;
  cached_tags?: Json_Comparison_Exp | null | undefined;
  canonical?: Characters_Bool_Exp | null | undefined;
  canonical_books_count?: Int_Comparison_Exp | null | undefined;
  canonical_id?: Int_Comparison_Exp | null | undefined;
  contributions?: Contributions_Bool_Exp | null | undefined;
  contributions_aggregate?: Contributions_Aggregate_Bool_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  gender_id?: Bigint_Comparison_Exp | null | undefined;
  has_disability?: Boolean_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  image_id?: Int_Comparison_Exp | null | undefined;
  is_lgbtq?: Boolean_Comparison_Exp | null | undefined;
  is_poc?: Boolean_Comparison_Exp | null | undefined;
  locked?: Boolean_Comparison_Exp | null | undefined;
  name?: String_Comparison_Exp | null | undefined;
  object_type?: String_Comparison_Exp | null | undefined;
  openlibrary_url?: String_Comparison_Exp | null | undefined;
  slug?: String_Comparison_Exp | null | undefined;
  state?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamp_Comparison_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: string | null | undefined;
  _gt?: string | null | undefined;
  _gte?: string | null | undefined;
  /** does the column match the given case-insensitive pattern */
  _ilike?: string | null | undefined;
  _in?: Array<string> | null | undefined;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: string | null | undefined;
  _is_null?: boolean | null | undefined;
  /** does the column match the given pattern */
  _like?: string | null | undefined;
  _lt?: string | null | undefined;
  _lte?: string | null | undefined;
  _neq?: string | null | undefined;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: string | null | undefined;
  _nin?: Array<string> | null | undefined;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: string | null | undefined;
  /** does the column NOT match the given pattern */
  _nlike?: string | null | undefined;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: string | null | undefined;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: string | null | undefined;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: string | null | undefined;
  /** does the column match the given SQL regular expression */
  _similar?: string | null | undefined;
};

/** order by aggregate values of table "collection_import_results" */
export type Collection_Import_Results_Aggregate_Order_By = {
  avg?: Collection_Import_Results_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Collection_Import_Results_Max_Order_By | null | undefined;
  min?: Collection_Import_Results_Min_Order_By | null | undefined;
  stddev?: Collection_Import_Results_Stddev_Order_By | null | undefined;
  stddev_pop?: Collection_Import_Results_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Collection_Import_Results_Stddev_Samp_Order_By | null | undefined;
  sum?: Collection_Import_Results_Sum_Order_By | null | undefined;
  var_pop?: Collection_Import_Results_Var_Pop_Order_By | null | undefined;
  var_samp?: Collection_Import_Results_Var_Samp_Order_By | null | undefined;
  variance?: Collection_Import_Results_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "collection_import_results" */
export type Collection_Import_Results_Avg_Order_By = {
  book_id?: Order_By | null | undefined;
  collection_import_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  report?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "collection_import_results". All fields are combined with a logical 'AND'. */
export type Collection_Import_Results_Bool_Exp = {
  _and?: Array<Collection_Import_Results_Bool_Exp> | null | undefined;
  _not?: Collection_Import_Results_Bool_Exp | null | undefined;
  _or?: Array<Collection_Import_Results_Bool_Exp> | null | undefined;
  author?: String_Comparison_Exp | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  book_id?: Int_Comparison_Exp | null | undefined;
  collection_import?: Collection_Imports_Bool_Exp | null | undefined;
  collection_import_id?: Int_Comparison_Exp | null | undefined;
  contents?: Jsonb_Comparison_Exp | null | undefined;
  error?: String_Comparison_Exp | null | undefined;
  external_id?: String_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  report?: Int_Comparison_Exp | null | undefined;
  state?: String_Comparison_Exp | null | undefined;
  title?: String_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "collection_import_results" */
export type Collection_Import_Results_Max_Order_By = {
  author?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  collection_import_id?: Order_By | null | undefined;
  error?: Order_By | null | undefined;
  external_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  report?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  title?: Order_By | null | undefined;
};

/** order by min() on columns of table "collection_import_results" */
export type Collection_Import_Results_Min_Order_By = {
  author?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  collection_import_id?: Order_By | null | undefined;
  error?: Order_By | null | undefined;
  external_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  report?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  title?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "collection_import_results" */
export type Collection_Import_Results_Stddev_Order_By = {
  book_id?: Order_By | null | undefined;
  collection_import_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  report?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "collection_import_results" */
export type Collection_Import_Results_Stddev_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  collection_import_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  report?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "collection_import_results" */
export type Collection_Import_Results_Stddev_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  collection_import_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  report?: Order_By | null | undefined;
};

/** order by sum() on columns of table "collection_import_results" */
export type Collection_Import_Results_Sum_Order_By = {
  book_id?: Order_By | null | undefined;
  collection_import_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  report?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "collection_import_results" */
export type Collection_Import_Results_Var_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  collection_import_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  report?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "collection_import_results" */
export type Collection_Import_Results_Var_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  collection_import_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  report?: Order_By | null | undefined;
};

/** order by variance() on columns of table "collection_import_results" */
export type Collection_Import_Results_Variance_Order_By = {
  book_id?: Order_By | null | undefined;
  collection_import_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  report?: Order_By | null | undefined;
};

/** order by aggregate values of table "collection_imports" */
export type Collection_Imports_Aggregate_Order_By = {
  avg?: Collection_Imports_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Collection_Imports_Max_Order_By | null | undefined;
  min?: Collection_Imports_Min_Order_By | null | undefined;
  stddev?: Collection_Imports_Stddev_Order_By | null | undefined;
  stddev_pop?: Collection_Imports_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Collection_Imports_Stddev_Samp_Order_By | null | undefined;
  sum?: Collection_Imports_Sum_Order_By | null | undefined;
  var_pop?: Collection_Imports_Var_Pop_Order_By | null | undefined;
  var_samp?: Collection_Imports_Var_Samp_Order_By | null | undefined;
  variance?: Collection_Imports_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "collection_imports" */
export type Collection_Imports_Avg_Order_By = {
  failure_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
  processed_count?: Order_By | null | undefined;
  reimport_count?: Order_By | null | undefined;
  success_count?: Order_By | null | undefined;
  tag_resolution?: Order_By | null | undefined;
  total_count?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "collection_imports". All fields are combined with a logical 'AND'. */
export type Collection_Imports_Bool_Exp = {
  _and?: Array<Collection_Imports_Bool_Exp> | null | undefined;
  _not?: Collection_Imports_Bool_Exp | null | undefined;
  _or?: Array<Collection_Imports_Bool_Exp> | null | undefined;
  collection_import_results?: Collection_Import_Results_Bool_Exp | null | undefined;
  completed_at?: Timestamptz_Comparison_Exp | null | undefined;
  contents_key?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  current_book?: String_Comparison_Exp | null | undefined;
  error_message?: String_Comparison_Exp | null | undefined;
  failure_count?: Int_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  override_date_read?: Boolean_Comparison_Exp | null | undefined;
  override_ratings?: Boolean_Comparison_Exp | null | undefined;
  override_shelves?: Boolean_Comparison_Exp | null | undefined;
  platform_id?: Int_Comparison_Exp | null | undefined;
  processed_count?: Int_Comparison_Exp | null | undefined;
  reimport_count?: Int_Comparison_Exp | null | undefined;
  started_at?: Timestamptz_Comparison_Exp | null | undefined;
  state?: String_Comparison_Exp | null | undefined;
  success_count?: Int_Comparison_Exp | null | undefined;
  tag_resolution?: Int_Comparison_Exp | null | undefined;
  total_count?: Int_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "collection_imports" */
export type Collection_Imports_Max_Order_By = {
  completed_at?: Order_By | null | undefined;
  contents_key?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  current_book?: Order_By | null | undefined;
  error_message?: Order_By | null | undefined;
  failure_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
  processed_count?: Order_By | null | undefined;
  reimport_count?: Order_By | null | undefined;
  started_at?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  success_count?: Order_By | null | undefined;
  tag_resolution?: Order_By | null | undefined;
  total_count?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "collection_imports" */
export type Collection_Imports_Min_Order_By = {
  completed_at?: Order_By | null | undefined;
  contents_key?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  current_book?: Order_By | null | undefined;
  error_message?: Order_By | null | undefined;
  failure_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
  processed_count?: Order_By | null | undefined;
  reimport_count?: Order_By | null | undefined;
  started_at?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  success_count?: Order_By | null | undefined;
  tag_resolution?: Order_By | null | undefined;
  total_count?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "collection_imports" */
export type Collection_Imports_Stddev_Order_By = {
  failure_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
  processed_count?: Order_By | null | undefined;
  reimport_count?: Order_By | null | undefined;
  success_count?: Order_By | null | undefined;
  tag_resolution?: Order_By | null | undefined;
  total_count?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "collection_imports" */
export type Collection_Imports_Stddev_Pop_Order_By = {
  failure_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
  processed_count?: Order_By | null | undefined;
  reimport_count?: Order_By | null | undefined;
  success_count?: Order_By | null | undefined;
  tag_resolution?: Order_By | null | undefined;
  total_count?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "collection_imports" */
export type Collection_Imports_Stddev_Samp_Order_By = {
  failure_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
  processed_count?: Order_By | null | undefined;
  reimport_count?: Order_By | null | undefined;
  success_count?: Order_By | null | undefined;
  tag_resolution?: Order_By | null | undefined;
  total_count?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "collection_imports" */
export type Collection_Imports_Sum_Order_By = {
  failure_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
  processed_count?: Order_By | null | undefined;
  reimport_count?: Order_By | null | undefined;
  success_count?: Order_By | null | undefined;
  tag_resolution?: Order_By | null | undefined;
  total_count?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "collection_imports" */
export type Collection_Imports_Var_Pop_Order_By = {
  failure_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
  processed_count?: Order_By | null | undefined;
  reimport_count?: Order_By | null | undefined;
  success_count?: Order_By | null | undefined;
  tag_resolution?: Order_By | null | undefined;
  total_count?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "collection_imports" */
export type Collection_Imports_Var_Samp_Order_By = {
  failure_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
  processed_count?: Order_By | null | undefined;
  reimport_count?: Order_By | null | undefined;
  success_count?: Order_By | null | undefined;
  tag_resolution?: Order_By | null | undefined;
  total_count?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "collection_imports" */
export type Collection_Imports_Variance_Order_By = {
  failure_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  platform_id?: Order_By | null | undefined;
  processed_count?: Order_By | null | undefined;
  reimport_count?: Order_By | null | undefined;
  success_count?: Order_By | null | undefined;
  tag_resolution?: Order_By | null | undefined;
  total_count?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

export type Contributions_Aggregate_Bool_Exp = {
  count?: Contributions_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Contributions_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Contributions_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Contributions_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "contributions" */
export type Contributions_Aggregate_Order_By = {
  avg?: Contributions_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Contributions_Max_Order_By | null | undefined;
  min?: Contributions_Min_Order_By | null | undefined;
  stddev?: Contributions_Stddev_Order_By | null | undefined;
  stddev_pop?: Contributions_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Contributions_Stddev_Samp_Order_By | null | undefined;
  sum?: Contributions_Sum_Order_By | null | undefined;
  var_pop?: Contributions_Var_Pop_Order_By | null | undefined;
  var_samp?: Contributions_Var_Samp_Order_By | null | undefined;
  variance?: Contributions_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "contributions" */
export type Contributions_Avg_Order_By = {
  author_id?: Order_By | null | undefined;
  contributable_id?: Order_By | null | undefined;
  contributor_role_id?: Order_By | null | undefined;
  contributor_specialization_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "contributions". All fields are combined with a logical 'AND'. */
export type Contributions_Bool_Exp = {
  _and?: Array<Contributions_Bool_Exp> | null | undefined;
  _not?: Contributions_Bool_Exp | null | undefined;
  _or?: Array<Contributions_Bool_Exp> | null | undefined;
  author?: Authors_Bool_Exp | null | undefined;
  author_id?: Int_Comparison_Exp | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  contributable_id?: Int_Comparison_Exp | null | undefined;
  contributable_type?: String_Comparison_Exp | null | undefined;
  contribution?: String_Comparison_Exp | null | undefined;
  contributor_role?: Contributor_Roles_Bool_Exp | null | undefined;
  contributor_role_id?: Int_Comparison_Exp | null | undefined;
  contributor_role_specialization?: Contributor_Role_Specializations_Bool_Exp | null | undefined;
  contributor_specialization?: Contributor_Specializations_Bool_Exp | null | undefined;
  contributor_specialization_id?: Int_Comparison_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  updated_at?: Timestamp_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "contributions" */
export type Contributions_Max_Order_By = {
  author_id?: Order_By | null | undefined;
  contributable_id?: Order_By | null | undefined;
  contributable_type?: Order_By | null | undefined;
  contribution?: Order_By | null | undefined;
  contributor_role_id?: Order_By | null | undefined;
  contributor_specialization_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
};

/** order by min() on columns of table "contributions" */
export type Contributions_Min_Order_By = {
  author_id?: Order_By | null | undefined;
  contributable_id?: Order_By | null | undefined;
  contributable_type?: Order_By | null | undefined;
  contribution?: Order_By | null | undefined;
  contributor_role_id?: Order_By | null | undefined;
  contributor_specialization_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
};

/** select columns of table "contributions" */
export type Contributions_Select_Column =
  /** column name */
  | 'author_id'
  /** column name */
  | 'contributable_id'
  /** column name */
  | 'contributable_type'
  /** column name */
  | 'contribution'
  /** column name */
  | 'contributor_role_id'
  /** column name */
  | 'contributor_specialization_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'updated_at';

/** order by stddev() on columns of table "contributions" */
export type Contributions_Stddev_Order_By = {
  author_id?: Order_By | null | undefined;
  contributable_id?: Order_By | null | undefined;
  contributor_role_id?: Order_By | null | undefined;
  contributor_specialization_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "contributions" */
export type Contributions_Stddev_Pop_Order_By = {
  author_id?: Order_By | null | undefined;
  contributable_id?: Order_By | null | undefined;
  contributor_role_id?: Order_By | null | undefined;
  contributor_specialization_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "contributions" */
export type Contributions_Stddev_Samp_Order_By = {
  author_id?: Order_By | null | undefined;
  contributable_id?: Order_By | null | undefined;
  contributor_role_id?: Order_By | null | undefined;
  contributor_specialization_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "contributions" */
export type Contributions_Sum_Order_By = {
  author_id?: Order_By | null | undefined;
  contributable_id?: Order_By | null | undefined;
  contributor_role_id?: Order_By | null | undefined;
  contributor_specialization_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "contributions" */
export type Contributions_Var_Pop_Order_By = {
  author_id?: Order_By | null | undefined;
  contributable_id?: Order_By | null | undefined;
  contributor_role_id?: Order_By | null | undefined;
  contributor_specialization_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "contributions" */
export type Contributions_Var_Samp_Order_By = {
  author_id?: Order_By | null | undefined;
  contributable_id?: Order_By | null | undefined;
  contributor_role_id?: Order_By | null | undefined;
  contributor_specialization_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "contributions" */
export type Contributions_Variance_Order_By = {
  author_id?: Order_By | null | undefined;
  contributable_id?: Order_By | null | undefined;
  contributor_role_id?: Order_By | null | undefined;
  contributor_specialization_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "contributor_role_specializations". All fields are combined with a logical 'AND'. */
export type Contributor_Role_Specializations_Bool_Exp = {
  _and?: Array<Contributor_Role_Specializations_Bool_Exp> | null | undefined;
  _not?: Contributor_Role_Specializations_Bool_Exp | null | undefined;
  _or?: Array<Contributor_Role_Specializations_Bool_Exp> | null | undefined;
  blurb?: String_Comparison_Exp | null | undefined;
  contributor_role_id?: Int_Comparison_Exp | null | undefined;
  contributor_specialization_id?: Int_Comparison_Exp | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  primary?: Boolean_Comparison_Exp | null | undefined;
};

/** Boolean expression to filter rows from the table "contributor_roles". All fields are combined with a logical 'AND'. */
export type Contributor_Roles_Bool_Exp = {
  _and?: Array<Contributor_Roles_Bool_Exp> | null | undefined;
  _not?: Contributor_Roles_Bool_Exp | null | undefined;
  _or?: Array<Contributor_Roles_Bool_Exp> | null | undefined;
  blurb?: String_Comparison_Exp | null | undefined;
  contributor_role_category_id?: Int_Comparison_Exp | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  important?: Int_Comparison_Exp | null | undefined;
  name?: String_Comparison_Exp | null | undefined;
  primary?: Boolean_Comparison_Exp | null | undefined;
  slug?: String_Comparison_Exp | null | undefined;
};

/** Boolean expression to filter rows from the table "contributor_specializations". All fields are combined with a logical 'AND'. */
export type Contributor_Specializations_Bool_Exp = {
  _and?: Array<Contributor_Specializations_Bool_Exp> | null | undefined;
  _not?: Contributor_Specializations_Bool_Exp | null | undefined;
  _or?: Array<Contributor_Specializations_Bool_Exp> | null | undefined;
  blurb?: String_Comparison_Exp | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  name?: String_Comparison_Exp | null | undefined;
};

/** Boolean expression to filter rows from the table "countries". All fields are combined with a logical 'AND'. */
export type Countries_Bool_Exp = {
  _and?: Array<Countries_Bool_Exp> | null | undefined;
  _not?: Countries_Bool_Exp | null | undefined;
  _or?: Array<Countries_Bool_Exp> | null | undefined;
  code2?: String_Comparison_Exp | null | undefined;
  code3?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  editions?: Editions_Bool_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  intermediate_region?: String_Comparison_Exp | null | undefined;
  intermediate_region_code?: String_Comparison_Exp | null | undefined;
  iso_3166?: String_Comparison_Exp | null | undefined;
  name?: String_Comparison_Exp | null | undefined;
  phone_code?: String_Comparison_Exp | null | undefined;
  region?: String_Comparison_Exp | null | undefined;
  region_code?: String_Comparison_Exp | null | undefined;
  sub_region?: String_Comparison_Exp | null | undefined;
  sub_region_code?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamp_Comparison_Exp | null | undefined;
};

/** Ordering options when selecting data from "countries". */
export type Countries_Order_By = {
  code2?: Order_By | null | undefined;
  code3?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  editions_aggregate?: Editions_Aggregate_Order_By | null | undefined;
  id?: Order_By | null | undefined;
  intermediate_region?: Order_By | null | undefined;
  intermediate_region_code?: Order_By | null | undefined;
  iso_3166?: Order_By | null | undefined;
  name?: Order_By | null | undefined;
  phone_code?: Order_By | null | undefined;
  region?: Order_By | null | undefined;
  region_code?: Order_By | null | undefined;
  sub_region?: Order_By | null | undefined;
  sub_region_code?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: string | null | undefined;
  _gt?: string | null | undefined;
  _gte?: string | null | undefined;
  _in?: Array<string> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: string | null | undefined;
  _lte?: string | null | undefined;
  _neq?: string | null | undefined;
  _nin?: Array<string> | null | undefined;
};

/** order by aggregate values of table "editions" */
export type Editions_Aggregate_Order_By = {
  avg?: Editions_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Editions_Max_Order_By | null | undefined;
  min?: Editions_Min_Order_By | null | undefined;
  stddev?: Editions_Stddev_Order_By | null | undefined;
  stddev_pop?: Editions_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Editions_Stddev_Samp_Order_By | null | undefined;
  sum?: Editions_Sum_Order_By | null | undefined;
  var_pop?: Editions_Var_Pop_Order_By | null | undefined;
  var_samp?: Editions_Var_Samp_Order_By | null | undefined;
  variance?: Editions_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "editions" */
export type Editions_Avg_Order_By = {
  audio_seconds?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  country_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  language_id?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  publisher_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  reading_format_id?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  score?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "editions". All fields are combined with a logical 'AND'. */
export type Editions_Bool_Exp = {
  _and?: Array<Editions_Bool_Exp> | null | undefined;
  _not?: Editions_Bool_Exp | null | undefined;
  _or?: Array<Editions_Bool_Exp> | null | undefined;
  alternative_titles?: Json_Comparison_Exp | null | undefined;
  asin?: String_Comparison_Exp | null | undefined;
  audio_seconds?: Int_Comparison_Exp | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  book_id?: Int_Comparison_Exp | null | undefined;
  book_mappings?: Book_Mappings_Bool_Exp | null | undefined;
  cached_contributors?: Json_Comparison_Exp | null | undefined;
  cached_image?: Jsonb_Comparison_Exp | null | undefined;
  cached_tags?: Json_Comparison_Exp | null | undefined;
  canonical_id?: Int_Comparison_Exp | null | undefined;
  compilation?: Boolean_Comparison_Exp | null | undefined;
  contributions?: Contributions_Bool_Exp | null | undefined;
  contributions_aggregate?: Contributions_Aggregate_Bool_Exp | null | undefined;
  country?: Countries_Bool_Exp | null | undefined;
  country_id?: Int_Comparison_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  created_by_user_id?: Int_Comparison_Exp | null | undefined;
  curation_status?: Int_Comparison_Exp | null | undefined;
  edition_format?: String_Comparison_Exp | null | undefined;
  edition_information?: String_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  image?: Images_Bool_Exp | null | undefined;
  image_id?: Int_Comparison_Exp | null | undefined;
  images?: Images_Bool_Exp | null | undefined;
  isbn_10?: String_Comparison_Exp | null | undefined;
  isbn_10_valid?: Boolean_Comparison_Exp | null | undefined;
  isbn_13?: String_Comparison_Exp | null | undefined;
  isbn_13_valid?: Boolean_Comparison_Exp | null | undefined;
  isbns_match?: Boolean_Comparison_Exp | null | undefined;
  language?: Languages_Bool_Exp | null | undefined;
  language_id?: Int_Comparison_Exp | null | undefined;
  list_books?: List_Books_Bool_Exp | null | undefined;
  list_books_aggregate?: List_Books_Aggregate_Bool_Exp | null | undefined;
  lists_count?: Int_Comparison_Exp | null | undefined;
  locked?: Boolean_Comparison_Exp | null | undefined;
  normalized_at?: Timestamp_Comparison_Exp | null | undefined;
  object_type?: String_Comparison_Exp | null | undefined;
  original_book_id?: Int_Comparison_Exp | null | undefined;
  pages?: Int_Comparison_Exp | null | undefined;
  physical_format?: String_Comparison_Exp | null | undefined;
  physical_information?: String_Comparison_Exp | null | undefined;
  publisher?: Publishers_Bool_Exp | null | undefined;
  publisher_id?: Int_Comparison_Exp | null | undefined;
  rating?: Numeric_Comparison_Exp | null | undefined;
  reading_format?: Reading_Formats_Bool_Exp | null | undefined;
  reading_format_id?: Int_Comparison_Exp | null | undefined;
  release_date?: Date_Comparison_Exp | null | undefined;
  release_year?: Int_Comparison_Exp | null | undefined;
  score?: Int_Comparison_Exp | null | undefined;
  source?: String_Comparison_Exp | null | undefined;
  state?: String_Comparison_Exp | null | undefined;
  subtitle?: String_Comparison_Exp | null | undefined;
  title?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamp_Comparison_Exp | null | undefined;
  users_count?: Int_Comparison_Exp | null | undefined;
  users_read_count?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "editions" */
export type Editions_Max_Order_By = {
  asin?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  country_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  edition_format?: Order_By | null | undefined;
  edition_information?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  isbn_10?: Order_By | null | undefined;
  isbn_13?: Order_By | null | undefined;
  language_id?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  normalized_at?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  physical_format?: Order_By | null | undefined;
  physical_information?: Order_By | null | undefined;
  publisher_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  reading_format_id?: Order_By | null | undefined;
  release_date?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  score?: Order_By | null | undefined;
  source?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  subtitle?: Order_By | null | undefined;
  title?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by min() on columns of table "editions" */
export type Editions_Min_Order_By = {
  asin?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  country_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  edition_format?: Order_By | null | undefined;
  edition_information?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  isbn_10?: Order_By | null | undefined;
  isbn_13?: Order_By | null | undefined;
  language_id?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  normalized_at?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  physical_format?: Order_By | null | undefined;
  physical_information?: Order_By | null | undefined;
  publisher_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  reading_format_id?: Order_By | null | undefined;
  release_date?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  score?: Order_By | null | undefined;
  source?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  subtitle?: Order_By | null | undefined;
  title?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** Ordering options when selecting data from "editions". */
export type Editions_Order_By = {
  alternative_titles?: Order_By | null | undefined;
  asin?: Order_By | null | undefined;
  audio_seconds?: Order_By | null | undefined;
  book?: Books_Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  book_mappings_aggregate?: Book_Mappings_Aggregate_Order_By | null | undefined;
  cached_contributors?: Order_By | null | undefined;
  cached_image?: Order_By | null | undefined;
  cached_tags?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  compilation?: Order_By | null | undefined;
  contributions_aggregate?: Contributions_Aggregate_Order_By | null | undefined;
  country?: Countries_Order_By | null | undefined;
  country_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  edition_format?: Order_By | null | undefined;
  edition_information?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image?: Images_Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  images_aggregate?: Images_Aggregate_Order_By | null | undefined;
  isbn_10?: Order_By | null | undefined;
  isbn_10_valid?: Order_By | null | undefined;
  isbn_13?: Order_By | null | undefined;
  isbn_13_valid?: Order_By | null | undefined;
  isbns_match?: Order_By | null | undefined;
  language?: Languages_Order_By | null | undefined;
  language_id?: Order_By | null | undefined;
  list_books_aggregate?: List_Books_Aggregate_Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  locked?: Order_By | null | undefined;
  normalized_at?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  physical_format?: Order_By | null | undefined;
  physical_information?: Order_By | null | undefined;
  publisher?: Publishers_Order_By | null | undefined;
  publisher_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  reading_format?: Reading_Formats_Order_By | null | undefined;
  reading_format_id?: Order_By | null | undefined;
  release_date?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  score?: Order_By | null | undefined;
  source?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  subtitle?: Order_By | null | undefined;
  title?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "editions" */
export type Editions_Stddev_Order_By = {
  audio_seconds?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  country_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  language_id?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  publisher_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  reading_format_id?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  score?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "editions" */
export type Editions_Stddev_Pop_Order_By = {
  audio_seconds?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  country_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  language_id?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  publisher_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  reading_format_id?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  score?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "editions" */
export type Editions_Stddev_Samp_Order_By = {
  audio_seconds?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  country_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  language_id?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  publisher_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  reading_format_id?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  score?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by sum() on columns of table "editions" */
export type Editions_Sum_Order_By = {
  audio_seconds?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  country_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  language_id?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  publisher_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  reading_format_id?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  score?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "editions" */
export type Editions_Var_Pop_Order_By = {
  audio_seconds?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  country_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  language_id?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  publisher_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  reading_format_id?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  score?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "editions" */
export type Editions_Var_Samp_Order_By = {
  audio_seconds?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  country_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  language_id?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  publisher_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  reading_format_id?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  score?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** order by variance() on columns of table "editions" */
export type Editions_Variance_Order_By = {
  audio_seconds?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  country_id?: Order_By | null | undefined;
  created_by_user_id?: Order_By | null | undefined;
  curation_status?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  language_id?: Order_By | null | undefined;
  lists_count?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  pages?: Order_By | null | undefined;
  publisher_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  reading_format_id?: Order_By | null | undefined;
  release_year?: Order_By | null | undefined;
  score?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
  users_read_count?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "flag_statuses". All fields are combined with a logical 'AND'. */
export type Flag_Statuses_Bool_Exp = {
  _and?: Array<Flag_Statuses_Bool_Exp> | null | undefined;
  _not?: Flag_Statuses_Bool_Exp | null | undefined;
  _or?: Array<Flag_Statuses_Bool_Exp> | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  status?: String_Comparison_Exp | null | undefined;
  user_flags?: User_Flags_Bool_Exp | null | undefined;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: number | null | undefined;
  _gt?: number | null | undefined;
  _gte?: number | null | undefined;
  _in?: Array<number> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: number | null | undefined;
  _lte?: number | null | undefined;
  _neq?: number | null | undefined;
  _nin?: Array<number> | null | undefined;
};

/** order by aggregate values of table "followed_lists" */
export type Followed_Lists_Aggregate_Order_By = {
  avg?: Followed_Lists_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Followed_Lists_Max_Order_By | null | undefined;
  min?: Followed_Lists_Min_Order_By | null | undefined;
  stddev?: Followed_Lists_Stddev_Order_By | null | undefined;
  stddev_pop?: Followed_Lists_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Followed_Lists_Stddev_Samp_Order_By | null | undefined;
  sum?: Followed_Lists_Sum_Order_By | null | undefined;
  var_pop?: Followed_Lists_Var_Pop_Order_By | null | undefined;
  var_samp?: Followed_Lists_Var_Samp_Order_By | null | undefined;
  variance?: Followed_Lists_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "followed_lists" */
export type Followed_Lists_Avg_Order_By = {
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "followed_lists". All fields are combined with a logical 'AND'. */
export type Followed_Lists_Bool_Exp = {
  _and?: Array<Followed_Lists_Bool_Exp> | null | undefined;
  _not?: Followed_Lists_Bool_Exp | null | undefined;
  _or?: Array<Followed_Lists_Bool_Exp> | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  list?: Lists_Bool_Exp | null | undefined;
  list_id?: Int_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "followed_lists" */
export type Followed_Lists_Max_Order_By = {
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "followed_lists" */
export type Followed_Lists_Min_Order_By = {
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "followed_lists" */
export type Followed_Lists_Stddev_Order_By = {
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "followed_lists" */
export type Followed_Lists_Stddev_Pop_Order_By = {
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "followed_lists" */
export type Followed_Lists_Stddev_Samp_Order_By = {
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "followed_lists" */
export type Followed_Lists_Sum_Order_By = {
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "followed_lists" */
export type Followed_Lists_Var_Pop_Order_By = {
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "followed_lists" */
export type Followed_Lists_Var_Samp_Order_By = {
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "followed_lists" */
export type Followed_Lists_Variance_Order_By = {
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by aggregate values of table "followed_prompts" */
export type Followed_Prompts_Aggregate_Order_By = {
  avg?: Followed_Prompts_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Followed_Prompts_Max_Order_By | null | undefined;
  min?: Followed_Prompts_Min_Order_By | null | undefined;
  stddev?: Followed_Prompts_Stddev_Order_By | null | undefined;
  stddev_pop?: Followed_Prompts_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Followed_Prompts_Stddev_Samp_Order_By | null | undefined;
  sum?: Followed_Prompts_Sum_Order_By | null | undefined;
  var_pop?: Followed_Prompts_Var_Pop_Order_By | null | undefined;
  var_samp?: Followed_Prompts_Var_Samp_Order_By | null | undefined;
  variance?: Followed_Prompts_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "followed_prompts" */
export type Followed_Prompts_Avg_Order_By = {
  id?: Order_By | null | undefined;
  order?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "followed_prompts". All fields are combined with a logical 'AND'. */
export type Followed_Prompts_Bool_Exp = {
  _and?: Array<Followed_Prompts_Bool_Exp> | null | undefined;
  _not?: Followed_Prompts_Bool_Exp | null | undefined;
  _or?: Array<Followed_Prompts_Bool_Exp> | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  order?: Int_Comparison_Exp | null | undefined;
  prompt?: Prompts_Bool_Exp | null | undefined;
  prompt_id?: Int_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "followed_prompts" */
export type Followed_Prompts_Max_Order_By = {
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  order?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "followed_prompts" */
export type Followed_Prompts_Min_Order_By = {
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  order?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "followed_prompts" */
export type Followed_Prompts_Stddev_Order_By = {
  id?: Order_By | null | undefined;
  order?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "followed_prompts" */
export type Followed_Prompts_Stddev_Pop_Order_By = {
  id?: Order_By | null | undefined;
  order?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "followed_prompts" */
export type Followed_Prompts_Stddev_Samp_Order_By = {
  id?: Order_By | null | undefined;
  order?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "followed_prompts" */
export type Followed_Prompts_Sum_Order_By = {
  id?: Order_By | null | undefined;
  order?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "followed_prompts" */
export type Followed_Prompts_Var_Pop_Order_By = {
  id?: Order_By | null | undefined;
  order?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "followed_prompts" */
export type Followed_Prompts_Var_Samp_Order_By = {
  id?: Order_By | null | undefined;
  order?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "followed_prompts" */
export type Followed_Prompts_Variance_Order_By = {
  id?: Order_By | null | undefined;
  order?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by aggregate values of table "followed_users" */
export type Followed_Users_Aggregate_Order_By = {
  avg?: Followed_Users_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Followed_Users_Max_Order_By | null | undefined;
  min?: Followed_Users_Min_Order_By | null | undefined;
  stddev?: Followed_Users_Stddev_Order_By | null | undefined;
  stddev_pop?: Followed_Users_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Followed_Users_Stddev_Samp_Order_By | null | undefined;
  sum?: Followed_Users_Sum_Order_By | null | undefined;
  var_pop?: Followed_Users_Var_Pop_Order_By | null | undefined;
  var_samp?: Followed_Users_Var_Samp_Order_By | null | undefined;
  variance?: Followed_Users_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "followed_users" */
export type Followed_Users_Avg_Order_By = {
  followed_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "followed_users". All fields are combined with a logical 'AND'. */
export type Followed_Users_Bool_Exp = {
  _and?: Array<Followed_Users_Bool_Exp> | null | undefined;
  _not?: Followed_Users_Bool_Exp | null | undefined;
  _or?: Array<Followed_Users_Bool_Exp> | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  followed_user?: Users_Bool_Exp | null | undefined;
  followed_user_id?: Int_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "followed_users" */
export type Followed_Users_Max_Order_By = {
  created_at?: Order_By | null | undefined;
  followed_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "followed_users" */
export type Followed_Users_Min_Order_By = {
  created_at?: Order_By | null | undefined;
  followed_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "followed_users" */
export type Followed_Users_Stddev_Order_By = {
  followed_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "followed_users" */
export type Followed_Users_Stddev_Pop_Order_By = {
  followed_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "followed_users" */
export type Followed_Users_Stddev_Samp_Order_By = {
  followed_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "followed_users" */
export type Followed_Users_Sum_Order_By = {
  followed_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "followed_users" */
export type Followed_Users_Var_Pop_Order_By = {
  followed_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "followed_users" */
export type Followed_Users_Var_Samp_Order_By = {
  followed_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "followed_users" */
export type Followed_Users_Variance_Order_By = {
  followed_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

export type Follows_Aggregate_Bool_Exp = {
  count?: Follows_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Follows_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Follows_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Follows_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "follows" */
export type Follows_Aggregate_Order_By = {
  avg?: Follows_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Follows_Max_Order_By | null | undefined;
  min?: Follows_Min_Order_By | null | undefined;
  stddev?: Follows_Stddev_Order_By | null | undefined;
  stddev_pop?: Follows_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Follows_Stddev_Samp_Order_By | null | undefined;
  sum?: Follows_Sum_Order_By | null | undefined;
  var_pop?: Follows_Var_Pop_Order_By | null | undefined;
  var_samp?: Follows_Var_Samp_Order_By | null | undefined;
  variance?: Follows_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "follows" */
export type Follows_Avg_Order_By = {
  followable_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "follows". All fields are combined with a logical 'AND'. */
export type Follows_Bool_Exp = {
  _and?: Array<Follows_Bool_Exp> | null | undefined;
  _not?: Follows_Bool_Exp | null | undefined;
  _or?: Array<Follows_Bool_Exp> | null | undefined;
  author?: Authors_Bool_Exp | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  character?: Characters_Bool_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  edition?: Editions_Bool_Exp | null | undefined;
  followable_id?: Bigint_Comparison_Exp | null | undefined;
  followable_type?: String_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  list?: Lists_Bool_Exp | null | undefined;
  publisher?: Publishers_Bool_Exp | null | undefined;
  series?: Series_Bool_Exp | null | undefined;
  updated_at?: Timestamp_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Bigint_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "follows" */
export type Follows_Max_Order_By = {
  created_at?: Order_By | null | undefined;
  followable_id?: Order_By | null | undefined;
  followable_type?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "follows" */
export type Follows_Min_Order_By = {
  created_at?: Order_By | null | undefined;
  followable_id?: Order_By | null | undefined;
  followable_type?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** select columns of table "follows" */
export type Follows_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'followable_id'
  /** column name */
  | 'followable_type'
  /** column name */
  | 'id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** order by stddev() on columns of table "follows" */
export type Follows_Stddev_Order_By = {
  followable_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "follows" */
export type Follows_Stddev_Pop_Order_By = {
  followable_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "follows" */
export type Follows_Stddev_Samp_Order_By = {
  followable_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "follows" */
export type Follows_Sum_Order_By = {
  followable_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "follows" */
export type Follows_Var_Pop_Order_By = {
  followable_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "follows" */
export type Follows_Var_Samp_Order_By = {
  followable_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "follows" */
export type Follows_Variance_Order_By = {
  followable_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by aggregate values of table "goals" */
export type Goals_Aggregate_Order_By = {
  avg?: Goals_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Goals_Max_Order_By | null | undefined;
  min?: Goals_Min_Order_By | null | undefined;
  stddev?: Goals_Stddev_Order_By | null | undefined;
  stddev_pop?: Goals_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Goals_Stddev_Samp_Order_By | null | undefined;
  sum?: Goals_Sum_Order_By | null | undefined;
  var_pop?: Goals_Var_Pop_Order_By | null | undefined;
  var_samp?: Goals_Var_Samp_Order_By | null | undefined;
  variance?: Goals_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "goals" */
export type Goals_Avg_Order_By = {
  goal?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "goals". All fields are combined with a logical 'AND'. */
export type Goals_Bool_Exp = {
  _and?: Array<Goals_Bool_Exp> | null | undefined;
  _not?: Goals_Bool_Exp | null | undefined;
  _or?: Array<Goals_Bool_Exp> | null | undefined;
  archived?: Boolean_Comparison_Exp | null | undefined;
  completed_at?: Timestamptz_Comparison_Exp | null | undefined;
  conditions?: Jsonb_Comparison_Exp | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  end_date?: Date_Comparison_Exp | null | undefined;
  followers?: Followed_Users_Bool_Exp | null | undefined;
  goal?: Int_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  metric?: String_Comparison_Exp | null | undefined;
  privacy_setting_id?: Int_Comparison_Exp | null | undefined;
  progress?: Numeric_Comparison_Exp | null | undefined;
  start_date?: Date_Comparison_Exp | null | undefined;
  state?: String_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "goals" */
export type Goals_Max_Order_By = {
  completed_at?: Order_By | null | undefined;
  description?: Order_By | null | undefined;
  end_date?: Order_By | null | undefined;
  goal?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  metric?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  start_date?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "goals" */
export type Goals_Min_Order_By = {
  completed_at?: Order_By | null | undefined;
  description?: Order_By | null | undefined;
  end_date?: Order_By | null | undefined;
  goal?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  metric?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  start_date?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "goals" */
export type Goals_Stddev_Order_By = {
  goal?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "goals" */
export type Goals_Stddev_Pop_Order_By = {
  goal?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "goals" */
export type Goals_Stddev_Samp_Order_By = {
  goal?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "goals" */
export type Goals_Sum_Order_By = {
  goal?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "goals" */
export type Goals_Var_Pop_Order_By = {
  goal?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "goals" */
export type Goals_Var_Samp_Order_By = {
  goal?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "goals" */
export type Goals_Variance_Order_By = {
  goal?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by aggregate values of table "images" */
export type Images_Aggregate_Order_By = {
  avg?: Images_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Images_Max_Order_By | null | undefined;
  min?: Images_Min_Order_By | null | undefined;
  stddev?: Images_Stddev_Order_By | null | undefined;
  stddev_pop?: Images_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Images_Stddev_Samp_Order_By | null | undefined;
  sum?: Images_Sum_Order_By | null | undefined;
  var_pop?: Images_Var_Pop_Order_By | null | undefined;
  var_samp?: Images_Var_Samp_Order_By | null | undefined;
  variance?: Images_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "images" */
export type Images_Avg_Order_By = {
  height?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  imageable_id?: Order_By | null | undefined;
  ratio?: Order_By | null | undefined;
  width?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "images". All fields are combined with a logical 'AND'. */
export type Images_Bool_Exp = {
  _and?: Array<Images_Bool_Exp> | null | undefined;
  _not?: Images_Bool_Exp | null | undefined;
  _or?: Array<Images_Bool_Exp> | null | undefined;
  color?: String_Comparison_Exp | null | undefined;
  colors?: Jsonb_Comparison_Exp | null | undefined;
  height?: Int_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  imageable_id?: Int_Comparison_Exp | null | undefined;
  imageable_type?: String_Comparison_Exp | null | undefined;
  ratio?: Float8_Comparison_Exp | null | undefined;
  url?: String_Comparison_Exp | null | undefined;
  width?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "images" */
export type Images_Max_Order_By = {
  color?: Order_By | null | undefined;
  height?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  imageable_id?: Order_By | null | undefined;
  imageable_type?: Order_By | null | undefined;
  ratio?: Order_By | null | undefined;
  url?: Order_By | null | undefined;
  width?: Order_By | null | undefined;
};

/** order by min() on columns of table "images" */
export type Images_Min_Order_By = {
  color?: Order_By | null | undefined;
  height?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  imageable_id?: Order_By | null | undefined;
  imageable_type?: Order_By | null | undefined;
  ratio?: Order_By | null | undefined;
  url?: Order_By | null | undefined;
  width?: Order_By | null | undefined;
};

/** Ordering options when selecting data from "images". */
export type Images_Order_By = {
  color?: Order_By | null | undefined;
  colors?: Order_By | null | undefined;
  height?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  imageable_id?: Order_By | null | undefined;
  imageable_type?: Order_By | null | undefined;
  ratio?: Order_By | null | undefined;
  url?: Order_By | null | undefined;
  width?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "images" */
export type Images_Stddev_Order_By = {
  height?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  imageable_id?: Order_By | null | undefined;
  ratio?: Order_By | null | undefined;
  width?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "images" */
export type Images_Stddev_Pop_Order_By = {
  height?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  imageable_id?: Order_By | null | undefined;
  ratio?: Order_By | null | undefined;
  width?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "images" */
export type Images_Stddev_Samp_Order_By = {
  height?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  imageable_id?: Order_By | null | undefined;
  ratio?: Order_By | null | undefined;
  width?: Order_By | null | undefined;
};

/** order by sum() on columns of table "images" */
export type Images_Sum_Order_By = {
  height?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  imageable_id?: Order_By | null | undefined;
  ratio?: Order_By | null | undefined;
  width?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "images" */
export type Images_Var_Pop_Order_By = {
  height?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  imageable_id?: Order_By | null | undefined;
  ratio?: Order_By | null | undefined;
  width?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "images" */
export type Images_Var_Samp_Order_By = {
  height?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  imageable_id?: Order_By | null | undefined;
  ratio?: Order_By | null | undefined;
  width?: Order_By | null | undefined;
};

/** order by variance() on columns of table "images" */
export type Images_Variance_Order_By = {
  height?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  imageable_id?: Order_By | null | undefined;
  ratio?: Order_By | null | undefined;
  width?: Order_By | null | undefined;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: unknown;
  _gt?: unknown;
  _gte?: unknown;
  _in?: Array<unknown> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: unknown;
  _lte?: unknown;
  _neq?: unknown;
  _nin?: Array<unknown> | null | undefined;
};

export type Jsonb_Cast_Exp = {
  String?: String_Comparison_Exp | null | undefined;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: Jsonb_Cast_Exp | null | undefined;
  /** is the column contained in the given json value */
  _contained_in?: unknown;
  /** does the column contain the given json value at the top level */
  _contains?: unknown;
  _eq?: unknown;
  _gt?: unknown;
  _gte?: unknown;
  /** does the string exist as a top-level key in the column */
  _has_key?: string | null | undefined;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Array<string> | null | undefined;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Array<string> | null | undefined;
  _in?: Array<unknown> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: unknown;
  _lte?: unknown;
  _neq?: unknown;
  _nin?: Array<unknown> | null | undefined;
};

/** Boolean expression to filter rows from the table "languages". All fields are combined with a logical 'AND'. */
export type Languages_Bool_Exp = {
  _and?: Array<Languages_Bool_Exp> | null | undefined;
  _not?: Languages_Bool_Exp | null | undefined;
  _or?: Array<Languages_Bool_Exp> | null | undefined;
  code2?: String_Comparison_Exp | null | undefined;
  code3?: String_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  language?: String_Comparison_Exp | null | undefined;
};

/** Ordering options when selecting data from "languages". */
export type Languages_Order_By = {
  code2?: Order_By | null | undefined;
  code3?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  language?: Order_By | null | undefined;
};

/** order by aggregate values of table "likes" */
export type Likes_Aggregate_Order_By = {
  avg?: Likes_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Likes_Max_Order_By | null | undefined;
  min?: Likes_Min_Order_By | null | undefined;
  stddev?: Likes_Stddev_Order_By | null | undefined;
  stddev_pop?: Likes_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Likes_Stddev_Samp_Order_By | null | undefined;
  sum?: Likes_Sum_Order_By | null | undefined;
  var_pop?: Likes_Var_Pop_Order_By | null | undefined;
  var_samp?: Likes_Var_Samp_Order_By | null | undefined;
  variance?: Likes_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "likes" */
export type Likes_Avg_Order_By = {
  id?: Order_By | null | undefined;
  likeable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "likes". All fields are combined with a logical 'AND'. */
export type Likes_Bool_Exp = {
  _and?: Array<Likes_Bool_Exp> | null | undefined;
  _not?: Likes_Bool_Exp | null | undefined;
  _or?: Array<Likes_Bool_Exp> | null | undefined;
  activity?: Activities_Bool_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  followers?: Followed_Users_Bool_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  likeable_id?: Int_Comparison_Exp | null | undefined;
  likeable_type?: String_Comparison_Exp | null | undefined;
  list?: Lists_Bool_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_book?: User_Books_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
  vibe?: Vibes_Bool_Exp | null | undefined;
};

/** order by max() on columns of table "likes" */
export type Likes_Max_Order_By = {
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likeable_id?: Order_By | null | undefined;
  likeable_type?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "likes" */
export type Likes_Min_Order_By = {
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likeable_id?: Order_By | null | undefined;
  likeable_type?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "likes" */
export type Likes_Stddev_Order_By = {
  id?: Order_By | null | undefined;
  likeable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "likes" */
export type Likes_Stddev_Pop_Order_By = {
  id?: Order_By | null | undefined;
  likeable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "likes" */
export type Likes_Stddev_Samp_Order_By = {
  id?: Order_By | null | undefined;
  likeable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "likes" */
export type Likes_Sum_Order_By = {
  id?: Order_By | null | undefined;
  likeable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "likes" */
export type Likes_Var_Pop_Order_By = {
  id?: Order_By | null | undefined;
  likeable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "likes" */
export type Likes_Var_Samp_Order_By = {
  id?: Order_By | null | undefined;
  likeable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "likes" */
export type Likes_Variance_Order_By = {
  id?: Order_By | null | undefined;
  likeable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "links". All fields are combined with a logical 'AND'. */
export type Links_Bool_Exp = {
  _and?: Array<Links_Bool_Exp> | null | undefined;
  _not?: Links_Bool_Exp | null | undefined;
  _or?: Array<Links_Bool_Exp> | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  linkable_id?: Int_Comparison_Exp | null | undefined;
  linkable_type?: String_Comparison_Exp | null | undefined;
  social_type?: Int_Comparison_Exp | null | undefined;
  updated_at?: Timestamp_Comparison_Exp | null | undefined;
  url?: String_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  username?: String_Comparison_Exp | null | undefined;
};

/** Ordering options when selecting data from "links". */
export type Links_Order_By = {
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  linkable_id?: Order_By | null | undefined;
  linkable_type?: Order_By | null | undefined;
  social_type?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  url?: Order_By | null | undefined;
  user?: Users_Order_By | null | undefined;
  username?: Order_By | null | undefined;
};

export type List_Books_Aggregate_Bool_Exp = {
  bool_and?: List_Books_Aggregate_Bool_Exp_Bool_And | null | undefined;
  bool_or?: List_Books_Aggregate_Bool_Exp_Bool_Or | null | undefined;
  count?: List_Books_Aggregate_Bool_Exp_Count | null | undefined;
};

export type List_Books_Aggregate_Bool_Exp_Bool_And = {
  arguments: List_Books_Select_Column_List_Books_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: List_Books_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type List_Books_Aggregate_Bool_Exp_Bool_Or = {
  arguments: List_Books_Select_Column_List_Books_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: List_Books_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type List_Books_Aggregate_Bool_Exp_Count = {
  arguments?: Array<List_Books_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: List_Books_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "list_books" */
export type List_Books_Aggregate_Order_By = {
  avg?: List_Books_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: List_Books_Max_Order_By | null | undefined;
  min?: List_Books_Min_Order_By | null | undefined;
  stddev?: List_Books_Stddev_Order_By | null | undefined;
  stddev_pop?: List_Books_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: List_Books_Stddev_Samp_Order_By | null | undefined;
  sum?: List_Books_Sum_Order_By | null | undefined;
  var_pop?: List_Books_Var_Pop_Order_By | null | undefined;
  var_samp?: List_Books_Var_Samp_Order_By | null | undefined;
  variance?: List_Books_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "list_books" */
export type List_Books_Avg_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "list_books". All fields are combined with a logical 'AND'. */
export type List_Books_Bool_Exp = {
  _and?: Array<List_Books_Bool_Exp> | null | undefined;
  _not?: List_Books_Bool_Exp | null | undefined;
  _or?: Array<List_Books_Bool_Exp> | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  book_id?: Int_Comparison_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  date_added?: Timestamptz_Comparison_Exp | null | undefined;
  edition?: Editions_Bool_Exp | null | undefined;
  edition_id?: Int_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  imported?: Boolean_Comparison_Exp | null | undefined;
  list?: Lists_Bool_Exp | null | undefined;
  list_id?: Int_Comparison_Exp | null | undefined;
  merged_at?: Timestamp_Comparison_Exp | null | undefined;
  original_book_id?: Int_Comparison_Exp | null | undefined;
  original_edition_id?: Int_Comparison_Exp | null | undefined;
  position?: Int_Comparison_Exp | null | undefined;
  reason?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  user_books?: User_Books_Bool_Exp | null | undefined;
  user_books_aggregate?: User_Books_Aggregate_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "list_books" */
export type List_Books_Max_Order_By = {
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  date_added?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  merged_at?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  reason?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "list_books" */
export type List_Books_Min_Order_By = {
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  date_added?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  merged_at?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  reason?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** select columns of table "list_books" */
export type List_Books_Select_Column =
  /** column name */
  | 'book_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'date_added'
  /** column name */
  | 'edition_id'
  /** column name */
  | 'id'
  /** column name */
  | 'imported'
  /** column name */
  | 'list_id'
  /** column name */
  | 'merged_at'
  /** column name */
  | 'original_book_id'
  /** column name */
  | 'original_edition_id'
  /** column name */
  | 'position'
  /** column name */
  | 'reason'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'user_id';

/** select "list_books_aggregate_bool_exp_bool_and_arguments_columns" columns of table "list_books" */
export type List_Books_Select_Column_List_Books_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'imported';

/** select "list_books_aggregate_bool_exp_bool_or_arguments_columns" columns of table "list_books" */
export type List_Books_Select_Column_List_Books_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'imported';

/** order by stddev() on columns of table "list_books" */
export type List_Books_Stddev_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "list_books" */
export type List_Books_Stddev_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "list_books" */
export type List_Books_Stddev_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "list_books" */
export type List_Books_Sum_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "list_books" */
export type List_Books_Var_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "list_books" */
export type List_Books_Var_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "list_books" */
export type List_Books_Variance_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  list_id?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  position?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "list_members". All fields are combined with a logical 'AND'. */
export type List_Members_Bool_Exp = {
  _and?: Array<List_Members_Bool_Exp> | null | undefined;
  _not?: List_Members_Bool_Exp | null | undefined;
  _or?: Array<List_Members_Bool_Exp> | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  list?: Lists_Bool_Exp | null | undefined;
  list_id?: Int_Comparison_Exp | null | undefined;
  status?: Int_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

export type Lists_Aggregate_Bool_Exp = {
  bool_and?: Lists_Aggregate_Bool_Exp_Bool_And | null | undefined;
  bool_or?: Lists_Aggregate_Bool_Exp_Bool_Or | null | undefined;
  count?: Lists_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Lists_Aggregate_Bool_Exp_Bool_And = {
  arguments: Lists_Select_Column_Lists_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Lists_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Lists_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Lists_Select_Column_Lists_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Lists_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Lists_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Lists_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Lists_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "lists" */
export type Lists_Aggregate_Order_By = {
  avg?: Lists_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Lists_Max_Order_By | null | undefined;
  min?: Lists_Min_Order_By | null | undefined;
  stddev?: Lists_Stddev_Order_By | null | undefined;
  stddev_pop?: Lists_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Lists_Stddev_Samp_Order_By | null | undefined;
  sum?: Lists_Sum_Order_By | null | undefined;
  var_pop?: Lists_Var_Pop_Order_By | null | undefined;
  var_samp?: Lists_Var_Samp_Order_By | null | undefined;
  variance?: Lists_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "lists" */
export type Lists_Avg_Order_By = {
  books_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "lists". All fields are combined with a logical 'AND'. */
export type Lists_Bool_Exp = {
  _and?: Array<Lists_Bool_Exp> | null | undefined;
  _not?: Lists_Bool_Exp | null | undefined;
  _or?: Array<Lists_Bool_Exp> | null | undefined;
  books_count?: Int_Comparison_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  default_view?: String_Comparison_Exp | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  featured?: Boolean_Comparison_Exp | null | undefined;
  featured_profile?: Boolean_Comparison_Exp | null | undefined;
  followed_lists?: Followed_Lists_Bool_Exp | null | undefined;
  followers?: Followed_Users_Bool_Exp | null | undefined;
  followers_count?: Int_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  imported?: Boolean_Comparison_Exp | null | undefined;
  likes?: Likes_Bool_Exp | null | undefined;
  likes_count?: Int_Comparison_Exp | null | undefined;
  list_books?: List_Books_Bool_Exp | null | undefined;
  list_books_aggregate?: List_Books_Aggregate_Bool_Exp | null | undefined;
  list_members?: List_Members_Bool_Exp | null | undefined;
  name?: String_Comparison_Exp | null | undefined;
  object_type?: String_Comparison_Exp | null | undefined;
  privacy_setting?: Privacy_Settings_Bool_Exp | null | undefined;
  privacy_setting_id?: Int_Comparison_Exp | null | undefined;
  public?: Boolean_Comparison_Exp | null | undefined;
  ranked?: Boolean_Comparison_Exp | null | undefined;
  slug?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  url?: String_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "lists" */
export type Lists_Max_Order_By = {
  books_count?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  default_view?: Order_By | null | undefined;
  description?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  name?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  url?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "lists" */
export type Lists_Min_Order_By = {
  books_count?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  default_view?: Order_By | null | undefined;
  description?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  name?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  url?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** select columns of table "lists" */
export type Lists_Select_Column =
  /** column name */
  | 'books_count'
  /** column name */
  | 'created_at'
  /** column name */
  | 'default_view'
  /** column name */
  | 'description'
  /** column name */
  | 'featured'
  /** column name */
  | 'featured_profile'
  /** column name */
  | 'followers_count'
  /** column name */
  | 'id'
  /** column name */
  | 'imported'
  /** column name */
  | 'likes_count'
  /** column name */
  | 'name'
  /** column name */
  | 'object_type'
  /** column name */
  | 'privacy_setting_id'
  /** column name */
  | 'public'
  /** column name */
  | 'ranked'
  /** column name */
  | 'slug'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'url'
  /** column name */
  | 'user_id';

/** select "lists_aggregate_bool_exp_bool_and_arguments_columns" columns of table "lists" */
export type Lists_Select_Column_Lists_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'featured'
  /** column name */
  | 'featured_profile'
  /** column name */
  | 'imported'
  /** column name */
  | 'public'
  /** column name */
  | 'ranked';

/** select "lists_aggregate_bool_exp_bool_or_arguments_columns" columns of table "lists" */
export type Lists_Select_Column_Lists_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'featured'
  /** column name */
  | 'featured_profile'
  /** column name */
  | 'imported'
  /** column name */
  | 'public'
  /** column name */
  | 'ranked';

/** order by stddev() on columns of table "lists" */
export type Lists_Stddev_Order_By = {
  books_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "lists" */
export type Lists_Stddev_Pop_Order_By = {
  books_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "lists" */
export type Lists_Stddev_Samp_Order_By = {
  books_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "lists" */
export type Lists_Sum_Order_By = {
  books_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "lists" */
export type Lists_Var_Pop_Order_By = {
  books_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "lists" */
export type Lists_Var_Samp_Order_By = {
  books_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "lists" */
export type Lists_Variance_Order_By = {
  books_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "notification_channels". All fields are combined with a logical 'AND'. */
export type Notification_Channels_Bool_Exp = {
  _and?: Array<Notification_Channels_Bool_Exp> | null | undefined;
  _not?: Notification_Channels_Bool_Exp | null | undefined;
  _or?: Array<Notification_Channels_Bool_Exp> | null | undefined;
  channel?: String_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
};

export type Notification_Deliveries_Aggregate_Bool_Exp = {
  bool_and?: Notification_Deliveries_Aggregate_Bool_Exp_Bool_And | null | undefined;
  bool_or?: Notification_Deliveries_Aggregate_Bool_Exp_Bool_Or | null | undefined;
  count?: Notification_Deliveries_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Notification_Deliveries_Aggregate_Bool_Exp_Bool_And = {
  arguments: Notification_Deliveries_Select_Column_Notification_Deliveries_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Notification_Deliveries_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Notification_Deliveries_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Notification_Deliveries_Select_Column_Notification_Deliveries_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Notification_Deliveries_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Notification_Deliveries_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Notification_Deliveries_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Notification_Deliveries_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "notification_deliveries" */
export type Notification_Deliveries_Aggregate_Order_By = {
  avg?: Notification_Deliveries_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Notification_Deliveries_Max_Order_By | null | undefined;
  min?: Notification_Deliveries_Min_Order_By | null | undefined;
  stddev?: Notification_Deliveries_Stddev_Order_By | null | undefined;
  stddev_pop?: Notification_Deliveries_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Notification_Deliveries_Stddev_Samp_Order_By | null | undefined;
  sum?: Notification_Deliveries_Sum_Order_By | null | undefined;
  var_pop?: Notification_Deliveries_Var_Pop_Order_By | null | undefined;
  var_samp?: Notification_Deliveries_Var_Samp_Order_By | null | undefined;
  variance?: Notification_Deliveries_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "notification_deliveries" */
export type Notification_Deliveries_Avg_Order_By = {
  channel_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  notification_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "notification_deliveries". All fields are combined with a logical 'AND'. */
export type Notification_Deliveries_Bool_Exp = {
  _and?: Array<Notification_Deliveries_Bool_Exp> | null | undefined;
  _not?: Notification_Deliveries_Bool_Exp | null | undefined;
  _or?: Array<Notification_Deliveries_Bool_Exp> | null | undefined;
  channel?: Notification_Channels_Bool_Exp | null | undefined;
  channel_id?: Int_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  notification?: Notifications_Bool_Exp | null | undefined;
  notification_id?: Int_Comparison_Exp | null | undefined;
  read?: Boolean_Comparison_Exp | null | undefined;
  read_at?: Timestamp_Comparison_Exp | null | undefined;
  sent_at?: Timestamp_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "notification_deliveries" */
export type Notification_Deliveries_Max_Order_By = {
  channel_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  notification_id?: Order_By | null | undefined;
  read_at?: Order_By | null | undefined;
  sent_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "notification_deliveries" */
export type Notification_Deliveries_Min_Order_By = {
  channel_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  notification_id?: Order_By | null | undefined;
  read_at?: Order_By | null | undefined;
  sent_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** select columns of table "notification_deliveries" */
export type Notification_Deliveries_Select_Column =
  /** column name */
  | 'channel_id'
  /** column name */
  | 'id'
  /** column name */
  | 'notification_id'
  /** column name */
  | 'read'
  /** column name */
  | 'read_at'
  /** column name */
  | 'sent_at'
  /** column name */
  | 'user_id';

/** select "notification_deliveries_aggregate_bool_exp_bool_and_arguments_columns" columns of table "notification_deliveries" */
export type Notification_Deliveries_Select_Column_Notification_Deliveries_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'read';

/** select "notification_deliveries_aggregate_bool_exp_bool_or_arguments_columns" columns of table "notification_deliveries" */
export type Notification_Deliveries_Select_Column_Notification_Deliveries_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'read';

/** order by stddev() on columns of table "notification_deliveries" */
export type Notification_Deliveries_Stddev_Order_By = {
  channel_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  notification_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "notification_deliveries" */
export type Notification_Deliveries_Stddev_Pop_Order_By = {
  channel_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  notification_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "notification_deliveries" */
export type Notification_Deliveries_Stddev_Samp_Order_By = {
  channel_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  notification_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "notification_deliveries" */
export type Notification_Deliveries_Sum_Order_By = {
  channel_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  notification_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "notification_deliveries" */
export type Notification_Deliveries_Var_Pop_Order_By = {
  channel_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  notification_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "notification_deliveries" */
export type Notification_Deliveries_Var_Samp_Order_By = {
  channel_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  notification_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "notification_deliveries" */
export type Notification_Deliveries_Variance_Order_By = {
  channel_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  notification_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "notifications". All fields are combined with a logical 'AND'. */
export type Notifications_Bool_Exp = {
  _and?: Array<Notifications_Bool_Exp> | null | undefined;
  _not?: Notifications_Bool_Exp | null | undefined;
  _or?: Array<Notifications_Bool_Exp> | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  link?: String_Comparison_Exp | null | undefined;
  link_text?: String_Comparison_Exp | null | undefined;
  notification_deliveries?: Notification_Deliveries_Bool_Exp | null | undefined;
  notification_deliveries_aggregate?: Notification_Deliveries_Aggregate_Bool_Exp | null | undefined;
  notification_type_id?: Int_Comparison_Exp | null | undefined;
  notifierUser?: Users_Bool_Exp | null | undefined;
  notifier_user?: Users_Bool_Exp | null | undefined;
  notifier_user_id?: Int_Comparison_Exp | null | undefined;
  priority?: Int_Comparison_Exp | null | undefined;
  title?: String_Comparison_Exp | null | undefined;
  uid?: String_Comparison_Exp | null | undefined;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: number | null | undefined;
  _gt?: number | null | undefined;
  _gte?: number | null | undefined;
  _in?: Array<number> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: number | null | undefined;
  _lte?: number | null | undefined;
  _neq?: number | null | undefined;
  _nin?: Array<number> | null | undefined;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** Boolean expression to filter rows from the table "platforms". All fields are combined with a logical 'AND'. */
export type Platforms_Bool_Exp = {
  _and?: Array<Platforms_Bool_Exp> | null | undefined;
  _not?: Platforms_Bool_Exp | null | undefined;
  _or?: Array<Platforms_Bool_Exp> | null | undefined;
  book_mappings?: Book_Mappings_Bool_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  name?: String_Comparison_Exp | null | undefined;
  url?: String_Comparison_Exp | null | undefined;
};

/** Boolean expression to filter rows from the table "privacy_settings". All fields are combined with a logical 'AND'. */
export type Privacy_Settings_Bool_Exp = {
  _and?: Array<Privacy_Settings_Bool_Exp> | null | undefined;
  _not?: Privacy_Settings_Bool_Exp | null | undefined;
  _or?: Array<Privacy_Settings_Bool_Exp> | null | undefined;
  activities?: Activities_Bool_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  lists?: Lists_Bool_Exp | null | undefined;
  lists_aggregate?: Lists_Aggregate_Bool_Exp | null | undefined;
  prompts?: Prompts_Bool_Exp | null | undefined;
  setting?: String_Comparison_Exp | null | undefined;
  user_books?: User_Books_Bool_Exp | null | undefined;
  user_books_aggregate?: User_Books_Aggregate_Bool_Exp | null | undefined;
  users?: Users_Bool_Exp | null | undefined;
  users_by_activity?: Users_Bool_Exp | null | undefined;
};

/** Ordering options when selecting data from "privacy_settings". */
export type Privacy_Settings_Order_By = {
  activities_aggregate?: Activities_Aggregate_Order_By | null | undefined;
  id?: Order_By | null | undefined;
  lists_aggregate?: Lists_Aggregate_Order_By | null | undefined;
  prompts_aggregate?: Prompts_Aggregate_Order_By | null | undefined;
  setting?: Order_By | null | undefined;
  user_books_aggregate?: User_Books_Aggregate_Order_By | null | undefined;
  users_aggregate?: Users_Aggregate_Order_By | null | undefined;
  users_by_activity_aggregate?: Users_Aggregate_Order_By | null | undefined;
};

export type Prompt_Answers_Aggregate_Bool_Exp = {
  count?: Prompt_Answers_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Prompt_Answers_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Prompt_Answers_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Prompt_Answers_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "prompt_answers" */
export type Prompt_Answers_Aggregate_Order_By = {
  avg?: Prompt_Answers_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Prompt_Answers_Max_Order_By | null | undefined;
  min?: Prompt_Answers_Min_Order_By | null | undefined;
  stddev?: Prompt_Answers_Stddev_Order_By | null | undefined;
  stddev_pop?: Prompt_Answers_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Prompt_Answers_Stddev_Samp_Order_By | null | undefined;
  sum?: Prompt_Answers_Sum_Order_By | null | undefined;
  var_pop?: Prompt_Answers_Var_Pop_Order_By | null | undefined;
  var_samp?: Prompt_Answers_Var_Samp_Order_By | null | undefined;
  variance?: Prompt_Answers_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "prompt_answers" */
export type Prompt_Answers_Avg_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "prompt_answers". All fields are combined with a logical 'AND'. */
export type Prompt_Answers_Bool_Exp = {
  _and?: Array<Prompt_Answers_Bool_Exp> | null | undefined;
  _not?: Prompt_Answers_Bool_Exp | null | undefined;
  _or?: Array<Prompt_Answers_Bool_Exp> | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  book_id?: Int_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  prompt?: Prompts_Bool_Exp | null | undefined;
  prompt_book?: Prompt_Books_Summary_Bool_Exp | null | undefined;
  prompt_id?: Int_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "prompt_answers" */
export type Prompt_Answers_Max_Order_By = {
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  description?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "prompt_answers" */
export type Prompt_Answers_Min_Order_By = {
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  description?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** select columns of table "prompt_answers" */
export type Prompt_Answers_Select_Column =
  /** column name */
  | 'book_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'description'
  /** column name */
  | 'id'
  /** column name */
  | 'prompt_id'
  /** column name */
  | 'user_id';

/** order by stddev() on columns of table "prompt_answers" */
export type Prompt_Answers_Stddev_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "prompt_answers" */
export type Prompt_Answers_Stddev_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "prompt_answers" */
export type Prompt_Answers_Stddev_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "prompt_answers" */
export type Prompt_Answers_Sum_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "prompt_answers" */
export type Prompt_Answers_Var_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "prompt_answers" */
export type Prompt_Answers_Var_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "prompt_answers" */
export type Prompt_Answers_Variance_Order_By = {
  book_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by aggregate values of table "prompt_books_summary" */
export type Prompt_Books_Summary_Aggregate_Order_By = {
  avg?: Prompt_Books_Summary_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Prompt_Books_Summary_Max_Order_By | null | undefined;
  min?: Prompt_Books_Summary_Min_Order_By | null | undefined;
  stddev?: Prompt_Books_Summary_Stddev_Order_By | null | undefined;
  stddev_pop?: Prompt_Books_Summary_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Prompt_Books_Summary_Stddev_Samp_Order_By | null | undefined;
  sum?: Prompt_Books_Summary_Sum_Order_By | null | undefined;
  var_pop?: Prompt_Books_Summary_Var_Pop_Order_By | null | undefined;
  var_samp?: Prompt_Books_Summary_Var_Samp_Order_By | null | undefined;
  variance?: Prompt_Books_Summary_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "prompt_books_summary" */
export type Prompt_Books_Summary_Avg_Order_By = {
  answers_count?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "prompt_books_summary". All fields are combined with a logical 'AND'. */
export type Prompt_Books_Summary_Bool_Exp = {
  _and?: Array<Prompt_Books_Summary_Bool_Exp> | null | undefined;
  _not?: Prompt_Books_Summary_Bool_Exp | null | undefined;
  _or?: Array<Prompt_Books_Summary_Bool_Exp> | null | undefined;
  answers_count?: Bigint_Comparison_Exp | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  book_id?: Int_Comparison_Exp | null | undefined;
  prompt?: Prompts_Bool_Exp | null | undefined;
  prompt_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "prompt_books_summary" */
export type Prompt_Books_Summary_Max_Order_By = {
  answers_count?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "prompt_books_summary" */
export type Prompt_Books_Summary_Min_Order_By = {
  answers_count?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "prompt_books_summary" */
export type Prompt_Books_Summary_Stddev_Order_By = {
  answers_count?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "prompt_books_summary" */
export type Prompt_Books_Summary_Stddev_Pop_Order_By = {
  answers_count?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "prompt_books_summary" */
export type Prompt_Books_Summary_Stddev_Samp_Order_By = {
  answers_count?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "prompt_books_summary" */
export type Prompt_Books_Summary_Sum_Order_By = {
  answers_count?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "prompt_books_summary" */
export type Prompt_Books_Summary_Var_Pop_Order_By = {
  answers_count?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "prompt_books_summary" */
export type Prompt_Books_Summary_Var_Samp_Order_By = {
  answers_count?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "prompt_books_summary" */
export type Prompt_Books_Summary_Variance_Order_By = {
  answers_count?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  prompt_id?: Order_By | null | undefined;
};

/** order by aggregate values of table "prompts" */
export type Prompts_Aggregate_Order_By = {
  avg?: Prompts_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Prompts_Max_Order_By | null | undefined;
  min?: Prompts_Min_Order_By | null | undefined;
  stddev?: Prompts_Stddev_Order_By | null | undefined;
  stddev_pop?: Prompts_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Prompts_Stddev_Samp_Order_By | null | undefined;
  sum?: Prompts_Sum_Order_By | null | undefined;
  var_pop?: Prompts_Var_Pop_Order_By | null | undefined;
  var_samp?: Prompts_Var_Samp_Order_By | null | undefined;
  variance?: Prompts_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "prompts" */
export type Prompts_Avg_Order_By = {
  answers_count?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "prompts". All fields are combined with a logical 'AND'. */
export type Prompts_Bool_Exp = {
  _and?: Array<Prompts_Bool_Exp> | null | undefined;
  _not?: Prompts_Bool_Exp | null | undefined;
  _or?: Array<Prompts_Bool_Exp> | null | undefined;
  answers_count?: Int_Comparison_Exp | null | undefined;
  books_count?: Int_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  featured?: Boolean_Comparison_Exp | null | undefined;
  followed_prompts?: Followed_Prompts_Bool_Exp | null | undefined;
  followers?: Followed_Users_Bool_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  privacy_setting?: Privacy_Settings_Bool_Exp | null | undefined;
  privacy_setting_id?: Int_Comparison_Exp | null | undefined;
  prompt_answers?: Prompt_Answers_Bool_Exp | null | undefined;
  prompt_answers_aggregate?: Prompt_Answers_Aggregate_Bool_Exp | null | undefined;
  prompt_books?: Prompt_Books_Summary_Bool_Exp | null | undefined;
  question?: String_Comparison_Exp | null | undefined;
  slug?: String_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
  users_count?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "prompts" */
export type Prompts_Max_Order_By = {
  answers_count?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  description?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  question?: Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by min() on columns of table "prompts" */
export type Prompts_Min_Order_By = {
  answers_count?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  description?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  question?: Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** Ordering options when selecting data from "prompts". */
export type Prompts_Order_By = {
  answers_count?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  description?: Order_By | null | undefined;
  featured?: Order_By | null | undefined;
  followed_prompts_aggregate?: Followed_Prompts_Aggregate_Order_By | null | undefined;
  followers_aggregate?: Followed_Users_Aggregate_Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting?: Privacy_Settings_Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  prompt_answers_aggregate?: Prompt_Answers_Aggregate_Order_By | null | undefined;
  prompt_books_aggregate?: Prompt_Books_Summary_Aggregate_Order_By | null | undefined;
  question?: Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  user?: Users_Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "prompts" */
export type Prompts_Stddev_Order_By = {
  answers_count?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "prompts" */
export type Prompts_Stddev_Pop_Order_By = {
  answers_count?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "prompts" */
export type Prompts_Stddev_Samp_Order_By = {
  answers_count?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by sum() on columns of table "prompts" */
export type Prompts_Sum_Order_By = {
  answers_count?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "prompts" */
export type Prompts_Var_Pop_Order_By = {
  answers_count?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "prompts" */
export type Prompts_Var_Samp_Order_By = {
  answers_count?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** order by variance() on columns of table "prompts" */
export type Prompts_Variance_Order_By = {
  answers_count?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  users_count?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "publishers". All fields are combined with a logical 'AND'. */
export type Publishers_Bool_Exp = {
  _and?: Array<Publishers_Bool_Exp> | null | undefined;
  _not?: Publishers_Bool_Exp | null | undefined;
  _or?: Array<Publishers_Bool_Exp> | null | undefined;
  canonical_id?: Int_Comparison_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  editions?: Editions_Bool_Exp | null | undefined;
  editions_count?: Int_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  locked?: Boolean_Comparison_Exp | null | undefined;
  name?: String_Comparison_Exp | null | undefined;
  object_type?: String_Comparison_Exp | null | undefined;
  parent_id?: Int_Comparison_Exp | null | undefined;
  parent_publisher?: Publishers_Bool_Exp | null | undefined;
  slug?: String_Comparison_Exp | null | undefined;
  state?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamp_Comparison_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** Ordering options when selecting data from "publishers". */
export type Publishers_Order_By = {
  canonical_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  editions_aggregate?: Editions_Aggregate_Order_By | null | undefined;
  editions_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  locked?: Order_By | null | undefined;
  name?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  parent_id?: Order_By | null | undefined;
  parent_publisher?: Publishers_Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "reading_formats". All fields are combined with a logical 'AND'. */
export type Reading_Formats_Bool_Exp = {
  _and?: Array<Reading_Formats_Bool_Exp> | null | undefined;
  _not?: Reading_Formats_Bool_Exp | null | undefined;
  _or?: Array<Reading_Formats_Bool_Exp> | null | undefined;
  format?: String_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
};

/** Ordering options when selecting data from "reading_formats". */
export type Reading_Formats_Order_By = {
  format?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
};

/** order by aggregate values of table "reading_journals" */
export type Reading_Journals_Aggregate_Order_By = {
  avg?: Reading_Journals_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Reading_Journals_Max_Order_By | null | undefined;
  min?: Reading_Journals_Min_Order_By | null | undefined;
  stddev?: Reading_Journals_Stddev_Order_By | null | undefined;
  stddev_pop?: Reading_Journals_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Reading_Journals_Stddev_Samp_Order_By | null | undefined;
  sum?: Reading_Journals_Sum_Order_By | null | undefined;
  var_pop?: Reading_Journals_Var_Pop_Order_By | null | undefined;
  var_samp?: Reading_Journals_Var_Samp_Order_By | null | undefined;
  variance?: Reading_Journals_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "reading_journals" */
export type Reading_Journals_Avg_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "reading_journals". All fields are combined with a logical 'AND'. */
export type Reading_Journals_Bool_Exp = {
  _and?: Array<Reading_Journals_Bool_Exp> | null | undefined;
  _not?: Reading_Journals_Bool_Exp | null | undefined;
  _or?: Array<Reading_Journals_Bool_Exp> | null | undefined;
  action_at?: Timestamptz_Comparison_Exp | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  book_id?: Int_Comparison_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  custom?: Jsonb_Comparison_Exp | null | undefined;
  edition?: Editions_Bool_Exp | null | undefined;
  edition_id?: Int_Comparison_Exp | null | undefined;
  entry?: String_Comparison_Exp | null | undefined;
  event?: String_Comparison_Exp | null | undefined;
  followers?: Followed_Users_Bool_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  journal_date?: Date_Comparison_Exp | null | undefined;
  likes?: Likes_Bool_Exp | null | undefined;
  likes_count?: Int_Comparison_Exp | null | undefined;
  metadata?: Jsonb_Comparison_Exp | null | undefined;
  object_type?: String_Comparison_Exp | null | undefined;
  privacy_setting_id?: Int_Comparison_Exp | null | undefined;
  taggings?: Taggings_Bool_Exp | null | undefined;
  taggings_aggregate?: Taggings_Aggregate_Bool_Exp | null | undefined;
  updated_at?: Timestamp_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "reading_journals" */
export type Reading_Journals_Max_Order_By = {
  action_at?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  entry?: Order_By | null | undefined;
  event?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  journal_date?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "reading_journals" */
export type Reading_Journals_Min_Order_By = {
  action_at?: Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  entry?: Order_By | null | undefined;
  event?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  journal_date?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "reading_journals" */
export type Reading_Journals_Stddev_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "reading_journals" */
export type Reading_Journals_Stddev_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "reading_journals" */
export type Reading_Journals_Stddev_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "reading_journals" */
export type Reading_Journals_Sum_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "reading_journals_summary". All fields are combined with a logical 'AND'. */
export type Reading_Journals_Summary_Bool_Exp = {
  _and?: Array<Reading_Journals_Summary_Bool_Exp> | null | undefined;
  _not?: Reading_Journals_Summary_Bool_Exp | null | undefined;
  _or?: Array<Reading_Journals_Summary_Bool_Exp> | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  book_id?: Int_Comparison_Exp | null | undefined;
  followers?: Followed_Users_Bool_Exp | null | undefined;
  journals_count?: Bigint_Comparison_Exp | null | undefined;
  last_updated_at?: Timestamp_Comparison_Exp | null | undefined;
  reading_journals?: Reading_Journals_Bool_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** Ordering options when selecting data from "reading_journals_summary". */
export type Reading_Journals_Summary_Order_By = {
  book?: Books_Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  followers_aggregate?: Followed_Users_Aggregate_Order_By | null | undefined;
  journals_count?: Order_By | null | undefined;
  last_updated_at?: Order_By | null | undefined;
  reading_journals_aggregate?: Reading_Journals_Aggregate_Order_By | null | undefined;
  user?: Users_Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "reading_journals" */
export type Reading_Journals_Var_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "reading_journals" */
export type Reading_Journals_Var_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "reading_journals" */
export type Reading_Journals_Variance_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "series". All fields are combined with a logical 'AND'. */
export type Series_Bool_Exp = {
  _and?: Array<Series_Bool_Exp> | null | undefined;
  _not?: Series_Bool_Exp | null | undefined;
  _or?: Array<Series_Bool_Exp> | null | undefined;
  author?: Authors_Bool_Exp | null | undefined;
  author_id?: Int_Comparison_Exp | null | undefined;
  book_series?: Book_Series_Bool_Exp | null | undefined;
  book_series_aggregate?: Book_Series_Aggregate_Bool_Exp | null | undefined;
  books_count?: Int_Comparison_Exp | null | undefined;
  canonical?: Series_Bool_Exp | null | undefined;
  canonical_id?: Int_Comparison_Exp | null | undefined;
  creator?: Users_Bool_Exp | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  identifiers?: Jsonb_Comparison_Exp | null | undefined;
  is_completed?: Boolean_Comparison_Exp | null | undefined;
  locked?: Boolean_Comparison_Exp | null | undefined;
  name?: String_Comparison_Exp | null | undefined;
  object_type?: String_Comparison_Exp | null | undefined;
  primary_books_count?: Int_Comparison_Exp | null | undefined;
  slug?: String_Comparison_Exp | null | undefined;
  state?: String_Comparison_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** Ordering options when selecting data from "series". */
export type Series_Order_By = {
  author?: Authors_Order_By | null | undefined;
  author_id?: Order_By | null | undefined;
  book_series_aggregate?: Book_Series_Aggregate_Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  canonical?: Series_Order_By | null | undefined;
  canonical_id?: Order_By | null | undefined;
  creator?: Users_Order_By | null | undefined;
  description?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  identifiers?: Order_By | null | undefined;
  is_completed?: Order_By | null | undefined;
  locked?: Order_By | null | undefined;
  name?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  primary_books_count?: Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  state?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: number | null | undefined;
  _gt?: number | null | undefined;
  _gte?: number | null | undefined;
  _in?: Array<number> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: number | null | undefined;
  _lte?: number | null | undefined;
  _neq?: number | null | undefined;
  _nin?: Array<number> | null | undefined;
};

/** Boolean expression to filter rows from the table "tag_categories". All fields are combined with a logical 'AND'. */
export type Tag_Categories_Bool_Exp = {
  _and?: Array<Tag_Categories_Bool_Exp> | null | undefined;
  _not?: Tag_Categories_Bool_Exp | null | undefined;
  _or?: Array<Tag_Categories_Bool_Exp> | null | undefined;
  category?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  slug?: String_Comparison_Exp | null | undefined;
  tags?: Tags_Bool_Exp | null | undefined;
  tags_aggregate?: Tags_Aggregate_Bool_Exp | null | undefined;
};

/** order by aggregate values of table "taggable_counts" */
export type Taggable_Counts_Aggregate_Order_By = {
  avg?: Taggable_Counts_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Taggable_Counts_Max_Order_By | null | undefined;
  min?: Taggable_Counts_Min_Order_By | null | undefined;
  stddev?: Taggable_Counts_Stddev_Order_By | null | undefined;
  stddev_pop?: Taggable_Counts_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Taggable_Counts_Stddev_Samp_Order_By | null | undefined;
  sum?: Taggable_Counts_Sum_Order_By | null | undefined;
  var_pop?: Taggable_Counts_Var_Pop_Order_By | null | undefined;
  var_samp?: Taggable_Counts_Var_Samp_Order_By | null | undefined;
  variance?: Taggable_Counts_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "taggable_counts" */
export type Taggable_Counts_Avg_Order_By = {
  count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  spoiler_ratio?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "taggable_counts". All fields are combined with a logical 'AND'. */
export type Taggable_Counts_Bool_Exp = {
  _and?: Array<Taggable_Counts_Bool_Exp> | null | undefined;
  _not?: Taggable_Counts_Bool_Exp | null | undefined;
  _or?: Array<Taggable_Counts_Bool_Exp> | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  count?: Int_Comparison_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  hardcover_tagged?: Boolean_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  spoiler_ratio?: Float8_Comparison_Exp | null | undefined;
  tag?: Tags_Bool_Exp | null | undefined;
  tag_id?: Int_Comparison_Exp | null | undefined;
  taggable_id?: Bigint_Comparison_Exp | null | undefined;
  taggable_type?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamp_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "taggable_counts" */
export type Taggable_Counts_Max_Order_By = {
  count?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  spoiler_ratio?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
  taggable_type?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
};

/** order by min() on columns of table "taggable_counts" */
export type Taggable_Counts_Min_Order_By = {
  count?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  spoiler_ratio?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
  taggable_type?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "taggable_counts" */
export type Taggable_Counts_Stddev_Order_By = {
  count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  spoiler_ratio?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "taggable_counts" */
export type Taggable_Counts_Stddev_Pop_Order_By = {
  count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  spoiler_ratio?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "taggable_counts" */
export type Taggable_Counts_Stddev_Samp_Order_By = {
  count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  spoiler_ratio?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "taggable_counts" */
export type Taggable_Counts_Sum_Order_By = {
  count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  spoiler_ratio?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "taggable_counts" */
export type Taggable_Counts_Var_Pop_Order_By = {
  count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  spoiler_ratio?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "taggable_counts" */
export type Taggable_Counts_Var_Samp_Order_By = {
  count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  spoiler_ratio?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "taggable_counts" */
export type Taggable_Counts_Variance_Order_By = {
  count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  spoiler_ratio?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
};

export type Taggings_Aggregate_Bool_Exp = {
  bool_and?: Taggings_Aggregate_Bool_Exp_Bool_And | null | undefined;
  bool_or?: Taggings_Aggregate_Bool_Exp_Bool_Or | null | undefined;
  count?: Taggings_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Taggings_Aggregate_Bool_Exp_Bool_And = {
  arguments: Taggings_Select_Column_Taggings_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Taggings_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Taggings_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Taggings_Select_Column_Taggings_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: Taggings_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type Taggings_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Taggings_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Taggings_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "taggings" */
export type Taggings_Aggregate_Order_By = {
  avg?: Taggings_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Taggings_Max_Order_By | null | undefined;
  min?: Taggings_Min_Order_By | null | undefined;
  stddev?: Taggings_Stddev_Order_By | null | undefined;
  stddev_pop?: Taggings_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Taggings_Stddev_Samp_Order_By | null | undefined;
  sum?: Taggings_Sum_Order_By | null | undefined;
  var_pop?: Taggings_Var_Pop_Order_By | null | undefined;
  var_samp?: Taggings_Var_Samp_Order_By | null | undefined;
  variance?: Taggings_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "taggings" */
export type Taggings_Avg_Order_By = {
  id?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "taggings". All fields are combined with a logical 'AND'. */
export type Taggings_Bool_Exp = {
  _and?: Array<Taggings_Bool_Exp> | null | undefined;
  _not?: Taggings_Bool_Exp | null | undefined;
  _or?: Array<Taggings_Bool_Exp> | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  spoiler?: Boolean_Comparison_Exp | null | undefined;
  tag?: Tags_Bool_Exp | null | undefined;
  tag_id?: Int_Comparison_Exp | null | undefined;
  taggable_id?: Bigint_Comparison_Exp | null | undefined;
  taggable_type?: String_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "taggings" */
export type Taggings_Max_Order_By = {
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
  taggable_type?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "taggings" */
export type Taggings_Min_Order_By = {
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
  taggable_type?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** select columns of table "taggings" */
export type Taggings_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'spoiler'
  /** column name */
  | 'tag_id'
  /** column name */
  | 'taggable_id'
  /** column name */
  | 'taggable_type'
  /** column name */
  | 'user_id';

/** select "taggings_aggregate_bool_exp_bool_and_arguments_columns" columns of table "taggings" */
export type Taggings_Select_Column_Taggings_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'spoiler';

/** select "taggings_aggregate_bool_exp_bool_or_arguments_columns" columns of table "taggings" */
export type Taggings_Select_Column_Taggings_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'spoiler';

/** order by stddev() on columns of table "taggings" */
export type Taggings_Stddev_Order_By = {
  id?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "taggings" */
export type Taggings_Stddev_Pop_Order_By = {
  id?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "taggings" */
export type Taggings_Stddev_Samp_Order_By = {
  id?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "taggings" */
export type Taggings_Sum_Order_By = {
  id?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "taggings" */
export type Taggings_Var_Pop_Order_By = {
  id?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "taggings" */
export type Taggings_Var_Samp_Order_By = {
  id?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "taggings" */
export type Taggings_Variance_Order_By = {
  id?: Order_By | null | undefined;
  tag_id?: Order_By | null | undefined;
  taggable_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

export type Tags_Aggregate_Bool_Exp = {
  count?: Tags_Aggregate_Bool_Exp_Count | null | undefined;
};

export type Tags_Aggregate_Bool_Exp_Count = {
  arguments?: Array<Tags_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: Tags_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: Array<Tags_Bool_Exp> | null | undefined;
  _not?: Tags_Bool_Exp | null | undefined;
  _or?: Array<Tags_Bool_Exp> | null | undefined;
  count?: Int_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  slug?: String_Comparison_Exp | null | undefined;
  tag?: String_Comparison_Exp | null | undefined;
  tag_category?: Tag_Categories_Bool_Exp | null | undefined;
  tag_category_id?: Int_Comparison_Exp | null | undefined;
  taggings?: Taggings_Bool_Exp | null | undefined;
  taggings_aggregate?: Taggings_Aggregate_Bool_Exp | null | undefined;
};

/** select columns of table "tags" */
export type Tags_Select_Column =
  /** column name */
  | 'count'
  /** column name */
  | 'id'
  /** column name */
  | 'slug'
  /** column name */
  | 'tag'
  /** column name */
  | 'tag_category_id';

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: string | null | undefined;
  _gt?: string | null | undefined;
  _gte?: string | null | undefined;
  _in?: Array<string> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: string | null | undefined;
  _lte?: string | null | undefined;
  _neq?: string | null | undefined;
  _nin?: Array<string> | null | undefined;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: string | null | undefined;
  _gt?: string | null | undefined;
  _gte?: string | null | undefined;
  _in?: Array<string> | null | undefined;
  _is_null?: boolean | null | undefined;
  _lt?: string | null | undefined;
  _lte?: string | null | undefined;
  _neq?: string | null | undefined;
  _nin?: Array<string> | null | undefined;
};

/** order by aggregate values of table "user_blocks" */
export type User_Blocks_Aggregate_Order_By = {
  avg?: User_Blocks_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: User_Blocks_Max_Order_By | null | undefined;
  min?: User_Blocks_Min_Order_By | null | undefined;
  stddev?: User_Blocks_Stddev_Order_By | null | undefined;
  stddev_pop?: User_Blocks_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: User_Blocks_Stddev_Samp_Order_By | null | undefined;
  sum?: User_Blocks_Sum_Order_By | null | undefined;
  var_pop?: User_Blocks_Var_Pop_Order_By | null | undefined;
  var_samp?: User_Blocks_Var_Samp_Order_By | null | undefined;
  variance?: User_Blocks_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "user_blocks" */
export type User_Blocks_Avg_Order_By = {
  blocked_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "user_blocks". All fields are combined with a logical 'AND'. */
export type User_Blocks_Bool_Exp = {
  _and?: Array<User_Blocks_Bool_Exp> | null | undefined;
  _not?: User_Blocks_Bool_Exp | null | undefined;
  _or?: Array<User_Blocks_Bool_Exp> | null | undefined;
  blocked_user?: Users_Bool_Exp | null | undefined;
  blocked_user_id?: Int_Comparison_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  id?: Bigint_Comparison_Exp | null | undefined;
  type?: String_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "user_blocks" */
export type User_Blocks_Max_Order_By = {
  blocked_user_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  type?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "user_blocks" */
export type User_Blocks_Min_Order_By = {
  blocked_user_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  type?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "user_blocks" */
export type User_Blocks_Stddev_Order_By = {
  blocked_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "user_blocks" */
export type User_Blocks_Stddev_Pop_Order_By = {
  blocked_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "user_blocks" */
export type User_Blocks_Stddev_Samp_Order_By = {
  blocked_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "user_blocks" */
export type User_Blocks_Sum_Order_By = {
  blocked_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "user_blocks" */
export type User_Blocks_Var_Pop_Order_By = {
  blocked_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "user_blocks" */
export type User_Blocks_Var_Samp_Order_By = {
  blocked_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "user_blocks" */
export type User_Blocks_Variance_Order_By = {
  blocked_user_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

export type User_Book_Reads_Aggregate_Bool_Exp = {
  avg?: User_Book_Reads_Aggregate_Bool_Exp_Avg | null | undefined;
  corr?: User_Book_Reads_Aggregate_Bool_Exp_Corr | null | undefined;
  count?: User_Book_Reads_Aggregate_Bool_Exp_Count | null | undefined;
  covar_samp?: User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp | null | undefined;
  max?: User_Book_Reads_Aggregate_Bool_Exp_Max | null | undefined;
  min?: User_Book_Reads_Aggregate_Bool_Exp_Min | null | undefined;
  stddev_samp?: User_Book_Reads_Aggregate_Bool_Exp_Stddev_Samp | null | undefined;
  sum?: User_Book_Reads_Aggregate_Bool_Exp_Sum | null | undefined;
  var_samp?: User_Book_Reads_Aggregate_Bool_Exp_Var_Samp | null | undefined;
};

export type User_Book_Reads_Aggregate_Bool_Exp_Avg = {
  arguments: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: User_Book_Reads_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type User_Book_Reads_Aggregate_Bool_Exp_Corr = {
  arguments: User_Book_Reads_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: boolean | null | undefined;
  filter?: User_Book_Reads_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type User_Book_Reads_Aggregate_Bool_Exp_Corr_Arguments = {
  X: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type User_Book_Reads_Aggregate_Bool_Exp_Count = {
  arguments?: Array<User_Book_Reads_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: User_Book_Reads_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

export type User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: boolean | null | undefined;
  filter?: User_Book_Reads_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type User_Book_Reads_Aggregate_Bool_Exp_Max = {
  arguments: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: User_Book_Reads_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type User_Book_Reads_Aggregate_Bool_Exp_Min = {
  arguments: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: User_Book_Reads_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type User_Book_Reads_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: User_Book_Reads_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type User_Book_Reads_Aggregate_Bool_Exp_Sum = {
  arguments: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: User_Book_Reads_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

export type User_Book_Reads_Aggregate_Bool_Exp_Var_Samp = {
  arguments: User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: User_Book_Reads_Bool_Exp | null | undefined;
  predicate: Float8_Comparison_Exp;
};

/** order by aggregate values of table "user_book_reads" */
export type User_Book_Reads_Aggregate_Order_By = {
  avg?: User_Book_Reads_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: User_Book_Reads_Max_Order_By | null | undefined;
  min?: User_Book_Reads_Min_Order_By | null | undefined;
  stddev?: User_Book_Reads_Stddev_Order_By | null | undefined;
  stddev_pop?: User_Book_Reads_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: User_Book_Reads_Stddev_Samp_Order_By | null | undefined;
  sum?: User_Book_Reads_Sum_Order_By | null | undefined;
  var_pop?: User_Book_Reads_Var_Pop_Order_By | null | undefined;
  var_samp?: User_Book_Reads_Var_Samp_Order_By | null | undefined;
  variance?: User_Book_Reads_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "user_book_reads" */
export type User_Book_Reads_Avg_Order_By = {
  edition_id?: Order_By | null | undefined;
  finished_at_precision?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  progress_pages?: Order_By | null | undefined;
  progress_seconds?: Order_By | null | undefined;
  user_book_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "user_book_reads". All fields are combined with a logical 'AND'. */
export type User_Book_Reads_Bool_Exp = {
  _and?: Array<User_Book_Reads_Bool_Exp> | null | undefined;
  _not?: User_Book_Reads_Bool_Exp | null | undefined;
  _or?: Array<User_Book_Reads_Bool_Exp> | null | undefined;
  edition?: Editions_Bool_Exp | null | undefined;
  edition_id?: Int_Comparison_Exp | null | undefined;
  finished_at?: Date_Comparison_Exp | null | undefined;
  finished_at_precision?: Int_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  paused_at?: Date_Comparison_Exp | null | undefined;
  progress?: Float8_Comparison_Exp | null | undefined;
  progress_pages?: Int_Comparison_Exp | null | undefined;
  progress_seconds?: Int_Comparison_Exp | null | undefined;
  started_at?: Date_Comparison_Exp | null | undefined;
  user_book?: User_Books_Bool_Exp | null | undefined;
  user_book_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "user_book_reads" */
export type User_Book_Reads_Max_Order_By = {
  edition_id?: Order_By | null | undefined;
  finished_at?: Order_By | null | undefined;
  finished_at_precision?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  paused_at?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  progress_pages?: Order_By | null | undefined;
  progress_seconds?: Order_By | null | undefined;
  started_at?: Order_By | null | undefined;
  user_book_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "user_book_reads" */
export type User_Book_Reads_Min_Order_By = {
  edition_id?: Order_By | null | undefined;
  finished_at?: Order_By | null | undefined;
  finished_at_precision?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  paused_at?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  progress_pages?: Order_By | null | undefined;
  progress_seconds?: Order_By | null | undefined;
  started_at?: Order_By | null | undefined;
  user_book_id?: Order_By | null | undefined;
};

/** select columns of table "user_book_reads" */
export type User_Book_Reads_Select_Column =
  /** column name */
  | 'edition_id'
  /** column name */
  | 'finished_at'
  /** column name */
  | 'finished_at_precision'
  /** column name */
  | 'id'
  /** column name */
  | 'paused_at'
  /** column name */
  | 'progress'
  /** column name */
  | 'progress_pages'
  /** column name */
  | 'progress_seconds'
  /** column name */
  | 'started_at'
  /** column name */
  | 'user_book_id';

/** select "user_book_reads_aggregate_bool_exp_avg_arguments_columns" columns of table "user_book_reads" */
export type User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Avg_Arguments_Columns =
  /** column name */
  | 'progress';

/** select "user_book_reads_aggregate_bool_exp_corr_arguments_columns" columns of table "user_book_reads" */
export type User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Corr_Arguments_Columns =
  /** column name */
  | 'progress';

/** select "user_book_reads_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "user_book_reads" */
export type User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns =
  /** column name */
  | 'progress';

/** select "user_book_reads_aggregate_bool_exp_max_arguments_columns" columns of table "user_book_reads" */
export type User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Max_Arguments_Columns =
  /** column name */
  | 'progress';

/** select "user_book_reads_aggregate_bool_exp_min_arguments_columns" columns of table "user_book_reads" */
export type User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Min_Arguments_Columns =
  /** column name */
  | 'progress';

/** select "user_book_reads_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "user_book_reads" */
export type User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns =
  /** column name */
  | 'progress';

/** select "user_book_reads_aggregate_bool_exp_sum_arguments_columns" columns of table "user_book_reads" */
export type User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Sum_Arguments_Columns =
  /** column name */
  | 'progress';

/** select "user_book_reads_aggregate_bool_exp_var_samp_arguments_columns" columns of table "user_book_reads" */
export type User_Book_Reads_Select_Column_User_Book_Reads_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns =
  /** column name */
  | 'progress';

/** order by stddev() on columns of table "user_book_reads" */
export type User_Book_Reads_Stddev_Order_By = {
  edition_id?: Order_By | null | undefined;
  finished_at_precision?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  progress_pages?: Order_By | null | undefined;
  progress_seconds?: Order_By | null | undefined;
  user_book_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "user_book_reads" */
export type User_Book_Reads_Stddev_Pop_Order_By = {
  edition_id?: Order_By | null | undefined;
  finished_at_precision?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  progress_pages?: Order_By | null | undefined;
  progress_seconds?: Order_By | null | undefined;
  user_book_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "user_book_reads" */
export type User_Book_Reads_Stddev_Samp_Order_By = {
  edition_id?: Order_By | null | undefined;
  finished_at_precision?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  progress_pages?: Order_By | null | undefined;
  progress_seconds?: Order_By | null | undefined;
  user_book_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "user_book_reads" */
export type User_Book_Reads_Sum_Order_By = {
  edition_id?: Order_By | null | undefined;
  finished_at_precision?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  progress_pages?: Order_By | null | undefined;
  progress_seconds?: Order_By | null | undefined;
  user_book_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "user_book_reads" */
export type User_Book_Reads_Var_Pop_Order_By = {
  edition_id?: Order_By | null | undefined;
  finished_at_precision?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  progress_pages?: Order_By | null | undefined;
  progress_seconds?: Order_By | null | undefined;
  user_book_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "user_book_reads" */
export type User_Book_Reads_Var_Samp_Order_By = {
  edition_id?: Order_By | null | undefined;
  finished_at_precision?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  progress_pages?: Order_By | null | undefined;
  progress_seconds?: Order_By | null | undefined;
  user_book_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "user_book_reads" */
export type User_Book_Reads_Variance_Order_By = {
  edition_id?: Order_By | null | undefined;
  finished_at_precision?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  progress?: Order_By | null | undefined;
  progress_pages?: Order_By | null | undefined;
  progress_seconds?: Order_By | null | undefined;
  user_book_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "user_book_statuses". All fields are combined with a logical 'AND'. */
export type User_Book_Statuses_Bool_Exp = {
  _and?: Array<User_Book_Statuses_Bool_Exp> | null | undefined;
  _not?: User_Book_Statuses_Bool_Exp | null | undefined;
  _or?: Array<User_Book_Statuses_Bool_Exp> | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  slug?: String_Comparison_Exp | null | undefined;
  status?: String_Comparison_Exp | null | undefined;
  user_books?: User_Books_Bool_Exp | null | undefined;
  user_books_aggregate?: User_Books_Aggregate_Bool_Exp | null | undefined;
};

/** Ordering options when selecting data from "user_book_statuses". */
export type User_Book_Statuses_Order_By = {
  description?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  slug?: Order_By | null | undefined;
  status?: Order_By | null | undefined;
  user_books_aggregate?: User_Books_Aggregate_Order_By | null | undefined;
};

export type User_Books_Aggregate_Bool_Exp = {
  bool_and?: User_Books_Aggregate_Bool_Exp_Bool_And | null | undefined;
  bool_or?: User_Books_Aggregate_Bool_Exp_Bool_Or | null | undefined;
  count?: User_Books_Aggregate_Bool_Exp_Count | null | undefined;
};

export type User_Books_Aggregate_Bool_Exp_Bool_And = {
  arguments: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: User_Books_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type User_Books_Aggregate_Bool_Exp_Bool_Or = {
  arguments: User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: boolean | null | undefined;
  filter?: User_Books_Bool_Exp | null | undefined;
  predicate: Boolean_Comparison_Exp;
};

export type User_Books_Aggregate_Bool_Exp_Count = {
  arguments?: Array<User_Books_Select_Column> | null | undefined;
  distinct?: boolean | null | undefined;
  filter?: User_Books_Bool_Exp | null | undefined;
  predicate: Int_Comparison_Exp;
};

/** order by aggregate values of table "user_books" */
export type User_Books_Aggregate_Order_By = {
  avg?: User_Books_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: User_Books_Max_Order_By | null | undefined;
  min?: User_Books_Min_Order_By | null | undefined;
  stddev?: User_Books_Stddev_Order_By | null | undefined;
  stddev_pop?: User_Books_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: User_Books_Stddev_Samp_Order_By | null | undefined;
  sum?: User_Books_Sum_Order_By | null | undefined;
  var_pop?: User_Books_Var_Pop_Order_By | null | undefined;
  var_samp?: User_Books_Var_Samp_Order_By | null | undefined;
  variance?: User_Books_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "user_books" */
export type User_Books_Avg_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  mod_status?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  owned_copies?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  read_count?: Order_By | null | undefined;
  referrer_user_id?: Order_By | null | undefined;
  review_length?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "user_books". All fields are combined with a logical 'AND'. */
export type User_Books_Bool_Exp = {
  _and?: Array<User_Books_Bool_Exp> | null | undefined;
  _not?: User_Books_Bool_Exp | null | undefined;
  _or?: Array<User_Books_Bool_Exp> | null | undefined;
  book?: Books_Bool_Exp | null | undefined;
  book_id?: Int_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  date_added?: Date_Comparison_Exp | null | undefined;
  edition?: Editions_Bool_Exp | null | undefined;
  edition_id?: Int_Comparison_Exp | null | undefined;
  first_read_date?: Date_Comparison_Exp | null | undefined;
  first_started_reading_date?: Date_Comparison_Exp | null | undefined;
  followers?: Followed_Users_Bool_Exp | null | undefined;
  has_review?: Boolean_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  imported?: Boolean_Comparison_Exp | null | undefined;
  last_read_date?: Date_Comparison_Exp | null | undefined;
  likes?: Likes_Bool_Exp | null | undefined;
  likes_count?: Int_Comparison_Exp | null | undefined;
  media_url?: String_Comparison_Exp | null | undefined;
  merged_at?: Timestamp_Comparison_Exp | null | undefined;
  mod_status?: Int_Comparison_Exp | null | undefined;
  object_type?: String_Comparison_Exp | null | undefined;
  original_book_id?: Int_Comparison_Exp | null | undefined;
  original_edition_id?: Int_Comparison_Exp | null | undefined;
  owned?: Boolean_Comparison_Exp | null | undefined;
  owned_copies?: Int_Comparison_Exp | null | undefined;
  privacy_setting?: Privacy_Settings_Bool_Exp | null | undefined;
  privacy_setting_id?: Int_Comparison_Exp | null | undefined;
  private_notes?: String_Comparison_Exp | null | undefined;
  rating?: Numeric_Comparison_Exp | null | undefined;
  read_count?: Int_Comparison_Exp | null | undefined;
  reading_journal_summary?: Reading_Journals_Summary_Bool_Exp | null | undefined;
  reading_journals?: Reading_Journals_Bool_Exp | null | undefined;
  recommended_by?: String_Comparison_Exp | null | undefined;
  recommended_for?: String_Comparison_Exp | null | undefined;
  referrer?: Users_Bool_Exp | null | undefined;
  referrer_user_id?: Int_Comparison_Exp | null | undefined;
  review?: String_Comparison_Exp | null | undefined;
  review_has_spoilers?: Boolean_Comparison_Exp | null | undefined;
  review_length?: Int_Comparison_Exp | null | undefined;
  review_markdown?: String_Comparison_Exp | null | undefined;
  review_migrated?: Boolean_Comparison_Exp | null | undefined;
  review_raw?: String_Comparison_Exp | null | undefined;
  review_slate?: Jsonb_Comparison_Exp | null | undefined;
  reviewed_at?: Timestamp_Comparison_Exp | null | undefined;
  sponsored_review?: Boolean_Comparison_Exp | null | undefined;
  starred?: Boolean_Comparison_Exp | null | undefined;
  status_id?: Int_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  url?: String_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_book_reads?: User_Book_Reads_Bool_Exp | null | undefined;
  user_book_reads_aggregate?: User_Book_Reads_Aggregate_Bool_Exp | null | undefined;
  user_book_status?: User_Book_Statuses_Bool_Exp | null | undefined;
  user_books?: User_Books_Bool_Exp | null | undefined;
  user_books_aggregate?: User_Books_Aggregate_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
  viewer_buddy_read_privacy_setting_id?: Int_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "user_books" */
export type User_Books_Max_Order_By = {
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  date_added?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  first_read_date?: Order_By | null | undefined;
  first_started_reading_date?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  last_read_date?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  media_url?: Order_By | null | undefined;
  merged_at?: Order_By | null | undefined;
  mod_status?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  owned_copies?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  private_notes?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  read_count?: Order_By | null | undefined;
  recommended_by?: Order_By | null | undefined;
  recommended_for?: Order_By | null | undefined;
  referrer_user_id?: Order_By | null | undefined;
  review?: Order_By | null | undefined;
  review_length?: Order_By | null | undefined;
  review_markdown?: Order_By | null | undefined;
  review_raw?: Order_By | null | undefined;
  reviewed_at?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  url?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "user_books" */
export type User_Books_Min_Order_By = {
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  date_added?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  first_read_date?: Order_By | null | undefined;
  first_started_reading_date?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  last_read_date?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  media_url?: Order_By | null | undefined;
  merged_at?: Order_By | null | undefined;
  mod_status?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  owned_copies?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  private_notes?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  read_count?: Order_By | null | undefined;
  recommended_by?: Order_By | null | undefined;
  recommended_for?: Order_By | null | undefined;
  referrer_user_id?: Order_By | null | undefined;
  review?: Order_By | null | undefined;
  review_length?: Order_By | null | undefined;
  review_markdown?: Order_By | null | undefined;
  review_raw?: Order_By | null | undefined;
  reviewed_at?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  url?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Ordering options when selecting data from "user_books". */
export type User_Books_Order_By = {
  book?: Books_Order_By | null | undefined;
  book_id?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  date_added?: Order_By | null | undefined;
  edition?: Editions_Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  first_read_date?: Order_By | null | undefined;
  first_started_reading_date?: Order_By | null | undefined;
  followers_aggregate?: Followed_Users_Aggregate_Order_By | null | undefined;
  has_review?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  imported?: Order_By | null | undefined;
  last_read_date?: Order_By | null | undefined;
  likes_aggregate?: Likes_Aggregate_Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  media_url?: Order_By | null | undefined;
  merged_at?: Order_By | null | undefined;
  mod_status?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  owned?: Order_By | null | undefined;
  owned_copies?: Order_By | null | undefined;
  privacy_setting?: Privacy_Settings_Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  private_notes?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  read_count?: Order_By | null | undefined;
  reading_journal_summary?: Reading_Journals_Summary_Order_By | null | undefined;
  reading_journals_aggregate?: Reading_Journals_Aggregate_Order_By | null | undefined;
  recommended_by?: Order_By | null | undefined;
  recommended_for?: Order_By | null | undefined;
  referrer?: Users_Order_By | null | undefined;
  referrer_user_id?: Order_By | null | undefined;
  review?: Order_By | null | undefined;
  review_has_spoilers?: Order_By | null | undefined;
  review_length?: Order_By | null | undefined;
  review_markdown?: Order_By | null | undefined;
  review_migrated?: Order_By | null | undefined;
  review_raw?: Order_By | null | undefined;
  review_slate?: Order_By | null | undefined;
  reviewed_at?: Order_By | null | undefined;
  sponsored_review?: Order_By | null | undefined;
  starred?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  url?: Order_By | null | undefined;
  user?: Users_Order_By | null | undefined;
  user_book_reads_aggregate?: User_Book_Reads_Aggregate_Order_By | null | undefined;
  user_book_status?: User_Book_Statuses_Order_By | null | undefined;
  user_books_aggregate?: User_Books_Aggregate_Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
  viewer_buddy_read_privacy_setting_id?: Order_By | null | undefined;
};

/** select columns of table "user_books" */
export type User_Books_Select_Column =
  /** column name */
  | 'book_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'date_added'
  /** column name */
  | 'edition_id'
  /** column name */
  | 'first_read_date'
  /** column name */
  | 'first_started_reading_date'
  /** column name */
  | 'has_review'
  /** column name */
  | 'id'
  /** column name */
  | 'imported'
  /** column name */
  | 'last_read_date'
  /** column name */
  | 'likes_count'
  /** column name */
  | 'media_url'
  /** column name */
  | 'merged_at'
  /** column name */
  | 'mod_status'
  /** column name */
  | 'object_type'
  /** column name */
  | 'original_book_id'
  /** column name */
  | 'original_edition_id'
  /** column name */
  | 'owned'
  /** column name */
  | 'owned_copies'
  /** column name */
  | 'privacy_setting_id'
  /** column name */
  | 'private_notes'
  /** column name */
  | 'rating'
  /** column name */
  | 'read_count'
  /** column name */
  | 'recommended_by'
  /** column name */
  | 'recommended_for'
  /** column name */
  | 'referrer_user_id'
  /** column name */
  | 'review'
  /** column name */
  | 'review_has_spoilers'
  /** column name */
  | 'review_length'
  /** column name */
  | 'review_markdown'
  /** column name */
  | 'review_migrated'
  /** column name */
  | 'review_raw'
  /** column name */
  | 'review_slate'
  /** column name */
  | 'reviewed_at'
  /** column name */
  | 'sponsored_review'
  /** column name */
  | 'starred'
  /** column name */
  | 'status_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'url'
  /** column name */
  | 'user_id';

/** select "user_books_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_books" */
export type User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'has_review'
  /** column name */
  | 'imported'
  /** column name */
  | 'owned'
  /** column name */
  | 'review_has_spoilers'
  /** column name */
  | 'review_migrated'
  /** column name */
  | 'sponsored_review'
  /** column name */
  | 'starred';

/** select "user_books_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_books" */
export type User_Books_Select_Column_User_Books_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'has_review'
  /** column name */
  | 'imported'
  /** column name */
  | 'owned'
  /** column name */
  | 'review_has_spoilers'
  /** column name */
  | 'review_migrated'
  /** column name */
  | 'sponsored_review'
  /** column name */
  | 'starred';

/** order by stddev() on columns of table "user_books" */
export type User_Books_Stddev_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  mod_status?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  owned_copies?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  read_count?: Order_By | null | undefined;
  referrer_user_id?: Order_By | null | undefined;
  review_length?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "user_books" */
export type User_Books_Stddev_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  mod_status?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  owned_copies?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  read_count?: Order_By | null | undefined;
  referrer_user_id?: Order_By | null | undefined;
  review_length?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "user_books" */
export type User_Books_Stddev_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  mod_status?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  owned_copies?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  read_count?: Order_By | null | undefined;
  referrer_user_id?: Order_By | null | undefined;
  review_length?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "user_books" */
export type User_Books_Sum_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  mod_status?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  owned_copies?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  read_count?: Order_By | null | undefined;
  referrer_user_id?: Order_By | null | undefined;
  review_length?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "user_books" */
export type User_Books_Var_Pop_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  mod_status?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  owned_copies?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  read_count?: Order_By | null | undefined;
  referrer_user_id?: Order_By | null | undefined;
  review_length?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "user_books" */
export type User_Books_Var_Samp_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  mod_status?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  owned_copies?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  read_count?: Order_By | null | undefined;
  referrer_user_id?: Order_By | null | undefined;
  review_length?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "user_books" */
export type User_Books_Variance_Order_By = {
  book_id?: Order_By | null | undefined;
  edition_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  likes_count?: Order_By | null | undefined;
  mod_status?: Order_By | null | undefined;
  original_book_id?: Order_By | null | undefined;
  original_edition_id?: Order_By | null | undefined;
  owned_copies?: Order_By | null | undefined;
  privacy_setting_id?: Order_By | null | undefined;
  rating?: Order_By | null | undefined;
  read_count?: Order_By | null | undefined;
  referrer_user_id?: Order_By | null | undefined;
  review_length?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by aggregate values of table "user_flags" */
export type User_Flags_Aggregate_Order_By = {
  avg?: User_Flags_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: User_Flags_Max_Order_By | null | undefined;
  min?: User_Flags_Min_Order_By | null | undefined;
  stddev?: User_Flags_Stddev_Order_By | null | undefined;
  stddev_pop?: User_Flags_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: User_Flags_Stddev_Samp_Order_By | null | undefined;
  sum?: User_Flags_Sum_Order_By | null | undefined;
  var_pop?: User_Flags_Var_Pop_Order_By | null | undefined;
  var_samp?: User_Flags_Var_Samp_Order_By | null | undefined;
  variance?: User_Flags_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "user_flags" */
export type User_Flags_Avg_Order_By = {
  action_id?: Order_By | null | undefined;
  flag_status_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  reported_user_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "user_flags". All fields are combined with a logical 'AND'. */
export type User_Flags_Bool_Exp = {
  _and?: Array<User_Flags_Bool_Exp> | null | undefined;
  _not?: User_Flags_Bool_Exp | null | undefined;
  _or?: Array<User_Flags_Bool_Exp> | null | undefined;
  action_id?: Int_Comparison_Exp | null | undefined;
  action_type?: String_Comparison_Exp | null | undefined;
  category?: String_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  details?: String_Comparison_Exp | null | undefined;
  flag_status?: Flag_Statuses_Bool_Exp | null | undefined;
  flag_status_id?: Int_Comparison_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  reported_user_id?: Int_Comparison_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
  user_reported?: Users_Bool_Exp | null | undefined;
  user_submitted?: Users_Bool_Exp | null | undefined;
};

/** order by max() on columns of table "user_flags" */
export type User_Flags_Max_Order_By = {
  action_id?: Order_By | null | undefined;
  action_type?: Order_By | null | undefined;
  category?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  details?: Order_By | null | undefined;
  flag_status_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  reported_user_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by min() on columns of table "user_flags" */
export type User_Flags_Min_Order_By = {
  action_id?: Order_By | null | undefined;
  action_type?: Order_By | null | undefined;
  category?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  details?: Order_By | null | undefined;
  flag_status_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  reported_user_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "user_flags" */
export type User_Flags_Stddev_Order_By = {
  action_id?: Order_By | null | undefined;
  flag_status_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  reported_user_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "user_flags" */
export type User_Flags_Stddev_Pop_Order_By = {
  action_id?: Order_By | null | undefined;
  flag_status_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  reported_user_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "user_flags" */
export type User_Flags_Stddev_Samp_Order_By = {
  action_id?: Order_By | null | undefined;
  flag_status_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  reported_user_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "user_flags" */
export type User_Flags_Sum_Order_By = {
  action_id?: Order_By | null | undefined;
  flag_status_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  reported_user_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "user_flags" */
export type User_Flags_Var_Pop_Order_By = {
  action_id?: Order_By | null | undefined;
  flag_status_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  reported_user_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "user_flags" */
export type User_Flags_Var_Samp_Order_By = {
  action_id?: Order_By | null | undefined;
  flag_status_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  reported_user_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "user_flags" */
export type User_Flags_Variance_Order_By = {
  action_id?: Order_By | null | undefined;
  flag_status_id?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  reported_user_id?: Order_By | null | undefined;
  user_id?: Order_By | null | undefined;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Users_Avg_Order_By | null | undefined;
  count?: Order_By | null | undefined;
  max?: Users_Max_Order_By | null | undefined;
  min?: Users_Min_Order_By | null | undefined;
  stddev?: Users_Stddev_Order_By | null | undefined;
  stddev_pop?: Users_Stddev_Pop_Order_By | null | undefined;
  stddev_samp?: Users_Stddev_Samp_Order_By | null | undefined;
  sum?: Users_Sum_Order_By | null | undefined;
  var_pop?: Users_Var_Pop_Order_By | null | undefined;
  var_samp?: Users_Var_Samp_Order_By | null | undefined;
  variance?: Users_Variance_Order_By | null | undefined;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  access_level?: Order_By | null | undefined;
  account_privacy_setting_id?: Order_By | null | undefined;
  activity_privacy_settings_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  default_reading_format_id?: Order_By | null | undefined;
  followed_users_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  payment_system_id?: Order_By | null | undefined;
  referrer_id?: Order_By | null | undefined;
  sign_in_count?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Array<Users_Bool_Exp> | null | undefined;
  _not?: Users_Bool_Exp | null | undefined;
  _or?: Array<Users_Bool_Exp> | null | undefined;
  access_level?: Int_Comparison_Exp | null | undefined;
  account_privacy_setting_id?: Int_Comparison_Exp | null | undefined;
  activities?: Activities_Bool_Exp | null | undefined;
  activity_privacy_settings_id?: Int_Comparison_Exp | null | undefined;
  admin?: Boolean_Comparison_Exp | null | undefined;
  bio?: String_Comparison_Exp | null | undefined;
  birthdate?: Date_Comparison_Exp | null | undefined;
  blocked_users?: User_Blocks_Bool_Exp | null | undefined;
  books_count?: Int_Comparison_Exp | null | undefined;
  cached_cover?: Jsonb_Comparison_Exp | null | undefined;
  cached_genres?: Jsonb_Comparison_Exp | null | undefined;
  cached_image?: Jsonb_Comparison_Exp | null | undefined;
  collection_imports?: Collection_Imports_Bool_Exp | null | undefined;
  confirmation_sent_at?: Timestamp_Comparison_Exp | null | undefined;
  confirmed_at?: Timestamp_Comparison_Exp | null | undefined;
  created_at?: Timestamptz_Comparison_Exp | null | undefined;
  current_sign_in_at?: Timestamp_Comparison_Exp | null | undefined;
  default_reading_format_id?: Int_Comparison_Exp | null | undefined;
  email?: String_Comparison_Exp | null | undefined;
  email_verified?: Timestamptz_Comparison_Exp | null | undefined;
  flair?: String_Comparison_Exp | null | undefined;
  followed_by_users?: Followed_Users_Bool_Exp | null | undefined;
  followed_lists?: Followed_Lists_Bool_Exp | null | undefined;
  followed_prompts?: Followed_Prompts_Bool_Exp | null | undefined;
  followed_users?: Followed_Users_Bool_Exp | null | undefined;
  followed_users_count?: Int_Comparison_Exp | null | undefined;
  followers_count?: Int_Comparison_Exp | null | undefined;
  follows?: Follows_Bool_Exp | null | undefined;
  follows_aggregate?: Follows_Aggregate_Bool_Exp | null | undefined;
  goals?: Goals_Bool_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  image?: Images_Bool_Exp | null | undefined;
  image_id?: Int_Comparison_Exp | null | undefined;
  last_activity_at?: Timestamp_Comparison_Exp | null | undefined;
  last_sign_in_at?: Timestamp_Comparison_Exp | null | undefined;
  librarian_roles?: Jsonb_Comparison_Exp | null | undefined;
  link?: String_Comparison_Exp | null | undefined;
  links?: Links_Bool_Exp | null | undefined;
  lists?: Lists_Bool_Exp | null | undefined;
  lists_aggregate?: Lists_Aggregate_Bool_Exp | null | undefined;
  location?: String_Comparison_Exp | null | undefined;
  locked_at?: Timestamp_Comparison_Exp | null | undefined;
  membership?: String_Comparison_Exp | null | undefined;
  membership_ends_at?: Timestamp_Comparison_Exp | null | undefined;
  name?: String_Comparison_Exp | null | undefined;
  notification_deliveries?: Notification_Deliveries_Bool_Exp | null | undefined;
  notification_deliveries_aggregate?: Notification_Deliveries_Aggregate_Bool_Exp | null | undefined;
  object_type?: String_Comparison_Exp | null | undefined;
  onboarded?: Boolean_Comparison_Exp | null | undefined;
  payment_system_id?: Int_Comparison_Exp | null | undefined;
  pro?: Boolean_Comparison_Exp | null | undefined;
  prompt_answers?: Prompt_Answers_Bool_Exp | null | undefined;
  prompt_answers_aggregate?: Prompt_Answers_Aggregate_Bool_Exp | null | undefined;
  prompts?: Prompts_Bool_Exp | null | undefined;
  pronoun_personal?: String_Comparison_Exp | null | undefined;
  pronoun_possessive?: String_Comparison_Exp | null | undefined;
  referrer_id?: Int_Comparison_Exp | null | undefined;
  referrer_url?: String_Comparison_Exp | null | undefined;
  referrered_users?: User_Books_Bool_Exp | null | undefined;
  referrered_users_aggregate?: User_Books_Aggregate_Bool_Exp | null | undefined;
  remember_created_at?: Timestamp_Comparison_Exp | null | undefined;
  reported_user_flags?: User_Flags_Bool_Exp | null | undefined;
  reset_password_sent_at?: Timestamp_Comparison_Exp | null | undefined;
  sign_in_count?: Int_Comparison_Exp | null | undefined;
  status_id?: Int_Comparison_Exp | null | undefined;
  taggings?: Taggings_Bool_Exp | null | undefined;
  taggings_aggregate?: Taggings_Aggregate_Bool_Exp | null | undefined;
  timezone?: String_Comparison_Exp | null | undefined;
  unconfirmed_email?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamptz_Comparison_Exp | null | undefined;
  user_books?: User_Books_Bool_Exp | null | undefined;
  user_books_aggregate?: User_Books_Aggregate_Bool_Exp | null | undefined;
  user_flags?: User_Flags_Bool_Exp | null | undefined;
  username?: Citext_Comparison_Exp | null | undefined;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  access_level?: Order_By | null | undefined;
  account_privacy_setting_id?: Order_By | null | undefined;
  activity_privacy_settings_id?: Order_By | null | undefined;
  bio?: Order_By | null | undefined;
  birthdate?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  confirmation_sent_at?: Order_By | null | undefined;
  confirmed_at?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  current_sign_in_at?: Order_By | null | undefined;
  default_reading_format_id?: Order_By | null | undefined;
  email?: Order_By | null | undefined;
  email_verified?: Order_By | null | undefined;
  flair?: Order_By | null | undefined;
  followed_users_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  last_activity_at?: Order_By | null | undefined;
  last_sign_in_at?: Order_By | null | undefined;
  link?: Order_By | null | undefined;
  location?: Order_By | null | undefined;
  locked_at?: Order_By | null | undefined;
  membership?: Order_By | null | undefined;
  membership_ends_at?: Order_By | null | undefined;
  name?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  payment_system_id?: Order_By | null | undefined;
  pronoun_personal?: Order_By | null | undefined;
  pronoun_possessive?: Order_By | null | undefined;
  referrer_id?: Order_By | null | undefined;
  referrer_url?: Order_By | null | undefined;
  remember_created_at?: Order_By | null | undefined;
  reset_password_sent_at?: Order_By | null | undefined;
  sign_in_count?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  timezone?: Order_By | null | undefined;
  unconfirmed_email?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  username?: Order_By | null | undefined;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  access_level?: Order_By | null | undefined;
  account_privacy_setting_id?: Order_By | null | undefined;
  activity_privacy_settings_id?: Order_By | null | undefined;
  bio?: Order_By | null | undefined;
  birthdate?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  confirmation_sent_at?: Order_By | null | undefined;
  confirmed_at?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  current_sign_in_at?: Order_By | null | undefined;
  default_reading_format_id?: Order_By | null | undefined;
  email?: Order_By | null | undefined;
  email_verified?: Order_By | null | undefined;
  flair?: Order_By | null | undefined;
  followed_users_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  last_activity_at?: Order_By | null | undefined;
  last_sign_in_at?: Order_By | null | undefined;
  link?: Order_By | null | undefined;
  location?: Order_By | null | undefined;
  locked_at?: Order_By | null | undefined;
  membership?: Order_By | null | undefined;
  membership_ends_at?: Order_By | null | undefined;
  name?: Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  payment_system_id?: Order_By | null | undefined;
  pronoun_personal?: Order_By | null | undefined;
  pronoun_possessive?: Order_By | null | undefined;
  referrer_id?: Order_By | null | undefined;
  referrer_url?: Order_By | null | undefined;
  remember_created_at?: Order_By | null | undefined;
  reset_password_sent_at?: Order_By | null | undefined;
  sign_in_count?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  timezone?: Order_By | null | undefined;
  unconfirmed_email?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  username?: Order_By | null | undefined;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  access_level?: Order_By | null | undefined;
  account_privacy_setting_id?: Order_By | null | undefined;
  activities_aggregate?: Activities_Aggregate_Order_By | null | undefined;
  activity_privacy_settings_id?: Order_By | null | undefined;
  admin?: Order_By | null | undefined;
  bio?: Order_By | null | undefined;
  birthdate?: Order_By | null | undefined;
  blocked_users_aggregate?: User_Blocks_Aggregate_Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  cached_cover?: Order_By | null | undefined;
  cached_genres?: Order_By | null | undefined;
  cached_image?: Order_By | null | undefined;
  collection_imports_aggregate?: Collection_Imports_Aggregate_Order_By | null | undefined;
  confirmation_sent_at?: Order_By | null | undefined;
  confirmed_at?: Order_By | null | undefined;
  created_at?: Order_By | null | undefined;
  current_sign_in_at?: Order_By | null | undefined;
  default_reading_format_id?: Order_By | null | undefined;
  email?: Order_By | null | undefined;
  email_verified?: Order_By | null | undefined;
  flair?: Order_By | null | undefined;
  followed_by_users_aggregate?: Followed_Users_Aggregate_Order_By | null | undefined;
  followed_lists_aggregate?: Followed_Lists_Aggregate_Order_By | null | undefined;
  followed_prompts_aggregate?: Followed_Prompts_Aggregate_Order_By | null | undefined;
  followed_users_aggregate?: Followed_Users_Aggregate_Order_By | null | undefined;
  followed_users_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  follows_aggregate?: Follows_Aggregate_Order_By | null | undefined;
  goals_aggregate?: Goals_Aggregate_Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image?: Images_Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  last_activity_at?: Order_By | null | undefined;
  last_sign_in_at?: Order_By | null | undefined;
  librarian_roles?: Order_By | null | undefined;
  link?: Order_By | null | undefined;
  links?: Links_Order_By | null | undefined;
  lists_aggregate?: Lists_Aggregate_Order_By | null | undefined;
  location?: Order_By | null | undefined;
  locked_at?: Order_By | null | undefined;
  membership?: Order_By | null | undefined;
  membership_ends_at?: Order_By | null | undefined;
  name?: Order_By | null | undefined;
  notification_deliveries_aggregate?: Notification_Deliveries_Aggregate_Order_By | null | undefined;
  object_type?: Order_By | null | undefined;
  onboarded?: Order_By | null | undefined;
  payment_system_id?: Order_By | null | undefined;
  pro?: Order_By | null | undefined;
  prompt_answers_aggregate?: Prompt_Answers_Aggregate_Order_By | null | undefined;
  prompts_aggregate?: Prompts_Aggregate_Order_By | null | undefined;
  pronoun_personal?: Order_By | null | undefined;
  pronoun_possessive?: Order_By | null | undefined;
  referrer_id?: Order_By | null | undefined;
  referrer_url?: Order_By | null | undefined;
  referrered_users_aggregate?: User_Books_Aggregate_Order_By | null | undefined;
  remember_created_at?: Order_By | null | undefined;
  reported_user_flags_aggregate?: User_Flags_Aggregate_Order_By | null | undefined;
  reset_password_sent_at?: Order_By | null | undefined;
  sign_in_count?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
  taggings_aggregate?: Taggings_Aggregate_Order_By | null | undefined;
  timezone?: Order_By | null | undefined;
  unconfirmed_email?: Order_By | null | undefined;
  updated_at?: Order_By | null | undefined;
  user_books_aggregate?: User_Books_Aggregate_Order_By | null | undefined;
  user_flags_aggregate?: User_Flags_Aggregate_Order_By | null | undefined;
  username?: Order_By | null | undefined;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  access_level?: Order_By | null | undefined;
  account_privacy_setting_id?: Order_By | null | undefined;
  activity_privacy_settings_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  default_reading_format_id?: Order_By | null | undefined;
  followed_users_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  payment_system_id?: Order_By | null | undefined;
  referrer_id?: Order_By | null | undefined;
  sign_in_count?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  access_level?: Order_By | null | undefined;
  account_privacy_setting_id?: Order_By | null | undefined;
  activity_privacy_settings_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  default_reading_format_id?: Order_By | null | undefined;
  followed_users_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  payment_system_id?: Order_By | null | undefined;
  referrer_id?: Order_By | null | undefined;
  sign_in_count?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  access_level?: Order_By | null | undefined;
  account_privacy_setting_id?: Order_By | null | undefined;
  activity_privacy_settings_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  default_reading_format_id?: Order_By | null | undefined;
  followed_users_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  payment_system_id?: Order_By | null | undefined;
  referrer_id?: Order_By | null | undefined;
  sign_in_count?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  access_level?: Order_By | null | undefined;
  account_privacy_setting_id?: Order_By | null | undefined;
  activity_privacy_settings_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  default_reading_format_id?: Order_By | null | undefined;
  followed_users_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  payment_system_id?: Order_By | null | undefined;
  referrer_id?: Order_By | null | undefined;
  sign_in_count?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  access_level?: Order_By | null | undefined;
  account_privacy_setting_id?: Order_By | null | undefined;
  activity_privacy_settings_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  default_reading_format_id?: Order_By | null | undefined;
  followed_users_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  payment_system_id?: Order_By | null | undefined;
  referrer_id?: Order_By | null | undefined;
  sign_in_count?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  access_level?: Order_By | null | undefined;
  account_privacy_setting_id?: Order_By | null | undefined;
  activity_privacy_settings_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  default_reading_format_id?: Order_By | null | undefined;
  followed_users_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  payment_system_id?: Order_By | null | undefined;
  referrer_id?: Order_By | null | undefined;
  sign_in_count?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  access_level?: Order_By | null | undefined;
  account_privacy_setting_id?: Order_By | null | undefined;
  activity_privacy_settings_id?: Order_By | null | undefined;
  books_count?: Order_By | null | undefined;
  default_reading_format_id?: Order_By | null | undefined;
  followed_users_count?: Order_By | null | undefined;
  followers_count?: Order_By | null | undefined;
  id?: Order_By | null | undefined;
  image_id?: Order_By | null | undefined;
  payment_system_id?: Order_By | null | undefined;
  referrer_id?: Order_By | null | undefined;
  sign_in_count?: Order_By | null | undefined;
  status_id?: Order_By | null | undefined;
};

/** Boolean expression to filter rows from the table "vibes". All fields are combined with a logical 'AND'. */
export type Vibes_Bool_Exp = {
  _and?: Array<Vibes_Bool_Exp> | null | undefined;
  _not?: Vibes_Bool_Exp | null | undefined;
  _or?: Array<Vibes_Bool_Exp> | null | undefined;
  books_generated_at?: Timestamp_Comparison_Exp | null | undefined;
  cached_book_ids?: Jsonb_Comparison_Exp | null | undefined;
  created_at?: Timestamp_Comparison_Exp | null | undefined;
  description?: String_Comparison_Exp | null | undefined;
  featured?: Boolean_Comparison_Exp | null | undefined;
  featured_at?: Timestamp_Comparison_Exp | null | undefined;
  followers?: Followed_Users_Bool_Exp | null | undefined;
  id?: Int_Comparison_Exp | null | undefined;
  likes?: Likes_Bool_Exp | null | undefined;
  likes_count?: Int_Comparison_Exp | null | undefined;
  object_type?: String_Comparison_Exp | null | undefined;
  privacy_setting?: Privacy_Settings_Bool_Exp | null | undefined;
  privacy_setting_id?: Int_Comparison_Exp | null | undefined;
  result_type?: Int_Comparison_Exp | null | undefined;
  slug?: String_Comparison_Exp | null | undefined;
  title?: String_Comparison_Exp | null | undefined;
  updated_at?: Timestamp_Comparison_Exp | null | undefined;
  user?: Users_Bool_Exp | null | undefined;
  user_id?: Int_Comparison_Exp | null | undefined;
  vibe_type?: Int_Comparison_Exp | null | undefined;
};

export type BookSummaryFragment = { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown };

export type BookDetailFragment = { headline: string | null, description: string | null, id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseDate: string | null, editionsCount: number, cachedTags: unknown, cachedHeaderImage: unknown, ratingsDistribution: unknown, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown, contributions: Array<{ contribution: string | null, author: { id: number, slug: string | null, name: string, cachedImage: unknown, booksCount: number } | null }>, bookSeries: Array<{ position: number | null, series: { id: number, slug: string, name: string, booksCount: number, primaryBooksCount: number | null, isCompleted: boolean | null } | null }> };

export type AuthorSummaryFragment = { id: number, slug: string | null, name: string, cachedImage: unknown, booksCount: number };

export type SeriesSummaryFragment = { id: number, slug: string, name: string, booksCount: number, primaryBooksCount: number | null, isCompleted: boolean | null };

export type AuthorDetailFragment = { bio: string | null, location: string | null, id: number, slug: string | null, name: string, bornYear: number | null, deathYear: number | null, usersCount: number, canonicalId: number | null, cachedImage: unknown, booksCount: number };

export type SeriesDetailFragment = { description: string | null, id: number, slug: string, name: string, canonicalId: number | null, booksCount: number, primaryBooksCount: number | null, isCompleted: boolean | null, author: { id: number, slug: string | null, name: string, cachedImage: unknown, booksCount: number } | null };

export type EditionSummaryFragment = { id: number, title: string | null, subtitle: string | null, asin: string | null, pages: number | null, bookId: number, isbn10: string | null, isbn13: string | null, audioSeconds: number | null, releaseDate: string | null, releaseYear: number | null, readingFormatId: number, editionFormat: string | null, cachedImage: unknown, language: { code2: string | null, language: string } | null, publisher: { id: number, name: string | null, slug: string } | null };

export type JournalEntryFragment = { id: number, event: string | null, entry: string | null, metadata: unknown, bookId: number | null, editionId: number | null, privacySettingId: number, actionAt: string, createdAt: string };

export type GoalFragment = { id: number, metric: string, goal: number, progress: number, description: string | null, conditions: unknown, archived: boolean, state: string, startDate: string, endDate: string, completedAt: string | null, privacySettingId: number | null };

export type UserBookReadFragment = { id: number, progress: number | null, userBookId: number, editionId: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, pausedAt: string | null, progressPages: number | null, progressSeconds: number | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null };

export type UserBookFragment = { id: number, rating: number | null, owned: boolean, bookId: number, editionId: number | null, userId: number, statusId: number, privacySettingId: number, hasReview: boolean, readCount: number, dateAdded: string, firstStartedReadingDate: string | null, lastReadDate: string | null, updatedAt: string | null, userBookReads: Array<{ id: number, progress: number | null, userBookId: number, editionId: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, pausedAt: string | null, progressPages: number | null, progressSeconds: number | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null }> };

export type UserBookFullFragment = { id: number, rating: number | null, owned: boolean, reviewMarkdown: string | null, reviewHasSpoilers: boolean, reviewedAt: string | null, privateNotes: string | null, recommendedBy: string | null, recommendedFor: string | null, bookId: number, editionId: number | null, userId: number, statusId: number, privacySettingId: number, hasReview: boolean, readCount: number, dateAdded: string, firstStartedReadingDate: string | null, lastReadDate: string | null, updatedAt: string | null, userBookReads: Array<{ id: number, progress: number | null, userBookId: number, editionId: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, pausedAt: string | null, progressPages: number | null, progressSeconds: number | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null }> };

export type ListSummaryFragment = { id: number, slug: string | null, name: string, description: string | null, ranked: boolean, privacySettingId: number, defaultView: string, booksCount: number, likesCount: number, userId: number, createdAt: string | null, updatedAt: string | null };

export type ListBookFragment = { id: number, position: number | null, reason: string | null, listId: number, bookId: number, editionId: number | null, dateAdded: string | null };

export type PromptSummaryFragment = { id: number, slug: string, question: string, description: string, featured: boolean, answersCount: number, booksCount: number, usersCount: number, userId: number, createdAt: string | null };

export type PromptAnswerFragment = { id: number, description: string | null, promptId: number, bookId: number, userId: number, createdAt: string | null };

export type ActivityFragment = { id: number, event: string, data: unknown, objectType: string, bookId: number | null, userId: number, likesCount: number, privacySettingId: number, createdAt: string | null, user: { id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string }, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown } | null };

export type StatsEditionFragment = { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number };

export type UserProfileFragment = { id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string };

export type MeFragment = { id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, accountPrivacySettingId: number, activityPrivacySettingsId: number, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string };

export type VibeSummaryFragment = { id: number, slug: string, title: string, description: string | null, featured: boolean, vibeType: number, resultType: number, privacySettingId: number, likesCount: number, userId: number, createdAt: string, updatedAt: string, booksGeneratedAt: string | null };

export type CreateGoalMutationVariables = Exact<{
  object: GoalInput;
}>;


export type CreateGoalMutation = { insert_goal: { id: number | null, errors: Array<string | null> | null, goal: { id: number, metric: string, goal: number, progress: number, description: string | null, conditions: unknown, archived: boolean, state: string, startDate: string, endDate: string, completedAt: string | null, privacySettingId: number | null } | null } | null };

export type UpdateGoalMutationVariables = Exact<{
  id: number;
  object: GoalInput;
}>;


export type UpdateGoalMutation = { update_goal: { id: number | null, errors: Array<string | null> | null, goal: { id: number, metric: string, goal: number, progress: number, description: string | null, conditions: unknown, archived: boolean, state: string, startDate: string, endDate: string, completedAt: string | null, privacySettingId: number | null } | null } | null };

export type RefreshGoalProgressMutationVariables = Exact<{
  id: number;
}>;


export type RefreshGoalProgressMutation = { update_goal_progress: { id: number | null, errors: Array<string | null> | null, goal: { id: number, metric: string, goal: number, progress: number, description: string | null, conditions: unknown, archived: boolean, state: string, startDate: string, endDate: string, completedAt: string | null, privacySettingId: number | null } | null } | null };

export type DeleteGoalMutationVariables = Exact<{
  id: number;
}>;


export type DeleteGoalMutation = { delete_goal: { id: number | null, errors: Array<string | null> | null } | null };

export type AddJournalEntryMutationVariables = Exact<{
  object: ReadingJournalCreateType;
}>;


export type AddJournalEntryMutation = { insert_reading_journal: { id: number | null, errors: Array<string | null> | null, readingJournal: { id: number, event: string | null, entry: string | null, metadata: unknown, bookId: number | null, editionId: number | null, privacySettingId: number, actionAt: string, createdAt: string } | null } | null };

export type UpdateJournalEntryMutationVariables = Exact<{
  id: number;
  object: ReadingJournalUpdateType;
}>;


export type UpdateJournalEntryMutation = { update_reading_journal: { id: number | null, errors: Array<string | null> | null, readingJournal: { id: number, event: string | null, entry: string | null, metadata: unknown, bookId: number | null, editionId: number | null, privacySettingId: number, actionAt: string, createdAt: string } | null } | null };

export type DeleteJournalEntryMutationVariables = Exact<{
  id: number;
}>;


export type DeleteJournalEntryMutation = { delete_reading_journal: { id: number } | null };

export type ClearJournalForBookMutationVariables = Exact<{
  bookId: number;
}>;


export type ClearJournalForBookMutation = { delete_reading_journals_for_book: { ids: Array<number | null> | null } | null };

export type AddUserBookMutationVariables = Exact<{
  object: UserBookCreateInput;
}>;


export type AddUserBookMutation = { insert_user_book: { id: number | null, error: string | null, userBook: { id: number, rating: number | null, owned: boolean, reviewMarkdown: string | null, reviewHasSpoilers: boolean, reviewedAt: string | null, privateNotes: string | null, recommendedBy: string | null, recommendedFor: string | null, bookId: number, editionId: number | null, userId: number, statusId: number, privacySettingId: number, hasReview: boolean, readCount: number, dateAdded: string, firstStartedReadingDate: string | null, lastReadDate: string | null, updatedAt: string | null, userBookReads: Array<{ id: number, progress: number | null, userBookId: number, editionId: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, pausedAt: string | null, progressPages: number | null, progressSeconds: number | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null }> } | null } | null };

export type UpdateUserBookMutationVariables = Exact<{
  id: number;
  object: UserBookUpdateInput;
}>;


export type UpdateUserBookMutation = { update_user_book: { id: number | null, error: string | null, userBook: { id: number, rating: number | null, owned: boolean, reviewMarkdown: string | null, reviewHasSpoilers: boolean, reviewedAt: string | null, privateNotes: string | null, recommendedBy: string | null, recommendedFor: string | null, bookId: number, editionId: number | null, userId: number, statusId: number, privacySettingId: number, hasReview: boolean, readCount: number, dateAdded: string, firstStartedReadingDate: string | null, lastReadDate: string | null, updatedAt: string | null, userBookReads: Array<{ id: number, progress: number | null, userBookId: number, editionId: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, pausedAt: string | null, progressPages: number | null, progressSeconds: number | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null }> } | null } | null };

export type RemoveUserBookMutationVariables = Exact<{
  id: number;
}>;


export type RemoveUserBookMutation = { delete_user_book: { id: number | null, bookId: number | null, userId: number | null } | null };

export type AddUserBookReadMutationVariables = Exact<{
  userBookId: number;
  read: DatesReadInput;
}>;


export type AddUserBookReadMutation = { insert_user_book_read: { id: number | null, error: string | null, userBookRead: { id: number, progress: number | null, userBookId: number, editionId: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, pausedAt: string | null, progressPages: number | null, progressSeconds: number | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null } | null } | null };

export type UpdateUserBookReadMutationVariables = Exact<{
  id: number;
  read: DatesReadInput;
}>;


export type UpdateUserBookReadMutation = { update_user_book_read: { id: number | null, error: string | null, userBookRead: { id: number, progress: number | null, userBookId: number, editionId: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, pausedAt: string | null, progressPages: number | null, progressSeconds: number | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null } | null } | null };

export type RemoveUserBookReadMutationVariables = Exact<{
  id: number;
}>;


export type RemoveUserBookReadMutation = { delete_user_book_read: { id: number | null, error: string | null } | null };

export type MarkOwnedMutationVariables = Exact<{
  editionId: number;
}>;


export type MarkOwnedMutation = { edition_owned: { id: number | null, listBook: { id: number, position: number | null, reason: string | null, listId: number, bookId: number, editionId: number | null, dateAdded: string | null } | null } | null };

export type CreateListMutationVariables = Exact<{
  object: ListInput;
}>;


export type CreateListMutation = { insert_list: { id: number | null, errors: Array<string | null> | null, list: { id: number, slug: string | null, name: string, description: string | null, ranked: boolean, privacySettingId: number, defaultView: string, booksCount: number, likesCount: number, userId: number, createdAt: string | null, updatedAt: string | null } | null } | null };

export type UpdateListMutationVariables = Exact<{
  id: number;
  object: ListInput;
}>;


export type UpdateListMutation = { update_list: { id: number | null, errors: Array<string | null> | null, list: { id: number, slug: string | null, name: string, description: string | null, ranked: boolean, privacySettingId: number, defaultView: string, booksCount: number, likesCount: number, userId: number, createdAt: string | null, updatedAt: string | null } | null } | null };

export type DeleteListMutationVariables = Exact<{
  id: number;
}>;


export type DeleteListMutation = { delete_list: { success: boolean } | null };

export type AddBookToListMutationVariables = Exact<{
  object: ListBookInput;
}>;


export type AddBookToListMutation = { insert_list_book: { id: number | null, listBook: { id: number, position: number | null, reason: string | null, listId: number, bookId: number, editionId: number | null, dateAdded: string | null } | null } | null };

export type RemoveListBookMutationVariables = Exact<{
  id: number;
}>;


export type RemoveListBookMutation = { delete_list_book: { id: number | null, listId: number | null } | null };

export type FollowListMutationVariables = Exact<{
  listId: number;
}>;


export type FollowListMutation = { upsert_followed_list: { id: number | null, errors: Array<string | null> | null } | null };

export type UnfollowListMutationVariables = Exact<{
  listId: number;
}>;


export type UnfollowListMutation = { delete_followed_list: { success: boolean } | null };

export type InviteListMemberMutationVariables = Exact<{
  object: ListMemberInput;
}>;


export type InviteListMemberMutation = { insert_list_member: { id: number | null, listId: number | null, userId: number | null } | null };

export type RespondToListInviteMutationVariables = Exact<{
  listId: number;
  status: string;
}>;


export type RespondToListInviteMutation = { update_list_member: { status: string | null, listId: number | null, userId: number | null } | null };

export type RemoveListMemberMutationVariables = Exact<{
  listId: number;
  userId: number;
}>;


export type RemoveListMemberMutation = { delete_list_member: { removed: boolean | null, listId: number | null, userId: number | null } | null };

export type ClearListPositionsMutationVariables = Exact<{
  listId: number;
  listBookIds: Array<number> | number;
}>;


export type ClearListPositionsMutation = { update_list_books: { affectedRows: number } | null };

export type MarkNotificationsReadMutationVariables = Exact<{
  userId: number;
  ids: Array<number> | number;
  readAt: string;
}>;


export type MarkNotificationsReadMutation = { update_notification_deliveries: { affectedRows: number } | null };

export type MarkAllNotificationsReadMutationVariables = Exact<{
  userId: number;
  readAt: string;
}>;


export type MarkAllNotificationsReadMutation = { update_notification_deliveries: { affectedRows: number } | null };

export type CreatePromptMutationVariables = Exact<{
  object: CreatePromptInput;
}>;


export type CreatePromptMutation = { insert_prompt: { id: number | null, error: string | null, prompt: { id: number, slug: string, question: string, description: string, featured: boolean, answersCount: number, booksCount: number, usersCount: number, userId: number, createdAt: string | null } | null } | null };

export type UpdatePromptMutationVariables = Exact<{
  object: UpdatePromptInput;
}>;


export type UpdatePromptMutation = { update_prompt: { id: number | null, error: string | null, prompt: { id: number, slug: string, question: string, description: string, featured: boolean, answersCount: number, booksCount: number, usersCount: number, userId: number, createdAt: string | null } | null } | null };

export type DeletePromptMutationVariables = Exact<{
  id: number;
}>;


export type DeletePromptMutation = { delete_prompts_by_pk: { id: number } | null };

export type AnswerPromptMutationVariables = Exact<{
  object: PromptAnswerCreateInput;
}>;


export type AnswerPromptMutation = { insert_prompt_answer: { id: number | null, promptAnswer: { id: number, description: string | null, promptId: number, bookId: number, userId: number, createdAt: string | null } | null, promptBook: { answersCount: number | null } | null } | null };

export type UpdatePromptAnswerMutationVariables = Exact<{
  id: number;
  description?: string | null | undefined;
}>;


export type UpdatePromptAnswerMutation = { update_prompt_answers_by_pk: { id: number, description: string | null, promptId: number, bookId: number, userId: number, createdAt: string | null } | null };

export type DeletePromptAnswerMutationVariables = Exact<{
  id: number;
}>;


export type DeletePromptAnswerMutation = { delete_prompt_answer: { id: number | null, promptId: number, bookId: number } | null };

export type FollowPromptMutationVariables = Exact<{
  promptId: number;
}>;


export type FollowPromptMutation = { upsert_followed_prompt: { id: number | null, errors: Array<string | null> | null } | null };

export type UnfollowPromptMutationVariables = Exact<{
  promptId: number;
}>;


export type UnfollowPromptMutation = { delete_followed_prompt: { success: boolean } | null };

export type FollowUserMutationVariables = Exact<{
  userId: number;
}>;


export type FollowUserMutation = { insert_followed_user: { id: number | null, error: string | null } | null };

export type UnfollowUserMutationVariables = Exact<{
  userId: number;
  removeFollower: boolean;
}>;


export type UnfollowUserMutation = { delete_followed_user: { id: number | null, error: string | null } | null };

export type BlockUserMutationVariables = Exact<{
  userId: number;
  type: string;
}>;


export type BlockUserMutation = { insert_block: { id: number | null, error: string | null } | null };

export type UnblockUserMutationVariables = Exact<{
  id: number;
}>;


export type UnblockUserMutation = { delete_user_blocks_by_pk: { id: number } | null };

export type LikeMutationVariables = Exact<{
  likeableId: number;
  likeableType: string;
}>;


export type LikeMutation = { upsert_like: { id: number, likesCount: number } | null };

export type UnlikeMutationVariables = Exact<{
  likeableId: number;
  likeableType: string;
}>;


export type UnlikeMutation = { delete_like: { likesCount: number } | null };

export type DeleteActivityMutationVariables = Exact<{
  id: number;
}>;


export type DeleteActivityMutation = { delete_activities_by_pk: { id: number } | null };

export type CreateVibeMutationVariables = Exact<{
  object: VibeInput;
}>;


export type CreateVibeMutation = { insert_vibe: { id: number | null, errors: Array<string | null> | null, vibe: { id: number, slug: string, title: string, description: string | null, featured: boolean, vibeType: number, resultType: number, privacySettingId: number, likesCount: number, userId: number, createdAt: string, updatedAt: string, booksGeneratedAt: string | null } | null } | null };

export type UpdateVibeMutationVariables = Exact<{
  id: number;
  object: VibeInput;
}>;


export type UpdateVibeMutation = { update_vibe: { id: number | null, errors: Array<string | null> | null, vibe: { id: number, slug: string, title: string, description: string | null, featured: boolean, vibeType: number, resultType: number, privacySettingId: number, likesCount: number, userId: number, createdAt: string, updatedAt: string, booksGeneratedAt: string | null } | null } | null };

export type DeleteVibeMutationVariables = Exact<{
  id: number;
}>;


export type DeleteVibeMutation = { delete_vibe: { success: boolean } | null };

export type GetAuthorQueryVariables = Exact<{
  id: number;
}>;


export type GetAuthorQuery = { authors_by_pk: { bio: string | null, location: string | null, id: number, slug: string | null, name: string, bornYear: number | null, deathYear: number | null, usersCount: number, canonicalId: number | null, cachedImage: unknown, booksCount: number } | null };

export type GetAuthorBySlugQueryVariables = Exact<{
  slug: string;
}>;


export type GetAuthorBySlugQuery = { authors: Array<{ bio: string | null, location: string | null, id: number, slug: string | null, name: string, bornYear: number | null, deathYear: number | null, usersCount: number, canonicalId: number | null, cachedImage: unknown, booksCount: number }> };

export type GetAuthorBooksQueryVariables = Exact<{
  authorId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetAuthorBooksQuery = { books: Array<{ id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown }> };

export type GetAuthorSeriesQueryVariables = Exact<{
  authorId: number;
}>;


export type GetAuthorSeriesQuery = { series: Array<{ id: number, slug: string, name: string, booksCount: number, primaryBooksCount: number | null, isCompleted: boolean | null }> };

export type GetSeriesQueryVariables = Exact<{
  id: number;
}>;


export type GetSeriesQuery = { series_by_pk: { description: string | null, id: number, slug: string, name: string, canonicalId: number | null, booksCount: number, primaryBooksCount: number | null, isCompleted: boolean | null, author: { id: number, slug: string | null, name: string, cachedImage: unknown, booksCount: number } | null } | null };

export type GetSeriesBySlugQueryVariables = Exact<{
  slug: string;
}>;


export type GetSeriesBySlugQuery = { series: Array<{ description: string | null, id: number, slug: string, name: string, canonicalId: number | null, booksCount: number, primaryBooksCount: number | null, isCompleted: boolean | null, author: { id: number, slug: string | null, name: string, cachedImage: unknown, booksCount: number } | null }> };

export type GetSeriesBooksQueryVariables = Exact<{
  seriesId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetSeriesBooksQuery = { book_series: Array<{ position: number | null, details: string | null, compilation: boolean, featured: boolean, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown } | null }> };

export type GetBookQueryVariables = Exact<{
  id: number;
}>;


export type GetBookQuery = { books_by_pk: { headline: string | null, description: string | null, id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseDate: string | null, editionsCount: number, cachedTags: unknown, cachedHeaderImage: unknown, ratingsDistribution: unknown, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown, contributions: Array<{ contribution: string | null, author: { id: number, slug: string | null, name: string, cachedImage: unknown, booksCount: number } | null }>, bookSeries: Array<{ position: number | null, series: { id: number, slug: string, name: string, booksCount: number, primaryBooksCount: number | null, isCompleted: boolean | null } | null }> } | null };

export type GetBookBySlugQueryVariables = Exact<{
  slug: string;
}>;


export type GetBookBySlugQuery = { books: Array<{ headline: string | null, description: string | null, id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseDate: string | null, editionsCount: number, cachedTags: unknown, cachedHeaderImage: unknown, ratingsDistribution: unknown, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown, contributions: Array<{ contribution: string | null, author: { id: number, slug: string | null, name: string, cachedImage: unknown, booksCount: number } | null }>, bookSeries: Array<{ position: number | null, series: { id: number, slug: string, name: string, booksCount: number, primaryBooksCount: number | null, isCompleted: boolean | null } | null }> }> };

export type GetBooksQueryVariables = Exact<{
  ids: Array<number> | number;
}>;


export type GetBooksQuery = { books: Array<{ id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown }> };

export type GetEditionsForBookQueryVariables = Exact<{
  bookId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetEditionsForBookQuery = { editions: Array<{ id: number, title: string | null, subtitle: string | null, asin: string | null, pages: number | null, bookId: number, isbn10: string | null, isbn13: string | null, audioSeconds: number | null, releaseDate: string | null, releaseYear: number | null, readingFormatId: number, editionFormat: string | null, cachedImage: unknown, language: { code2: string | null, language: string } | null, publisher: { id: number, name: string | null, slug: string } | null }> };

export type FindEditionsByIsbnQueryVariables = Exact<{
  isbns: Array<string> | string;
}>;


export type FindEditionsByIsbnQuery = { editions: Array<{ id: number, title: string | null, subtitle: string | null, asin: string | null, pages: number | null, bookId: number, isbn10: string | null, isbn13: string | null, audioSeconds: number | null, releaseDate: string | null, releaseYear: number | null, readingFormatId: number, editionFormat: string | null, cachedImage: unknown, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown }, language: { code2: string | null, language: string } | null, publisher: { id: number, name: string | null, slug: string } | null }> };

export type TrendingBookIdsQueryVariables = Exact<{
  duration?: TrendingDuration | null | undefined;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type TrendingBookIdsQuery = { books_trending: { ids: Array<number | null> | null, error: string | null } | null };

export type SimilarBookIdsQueryVariables = Exact<{
  id: number;
}>;


export type SimilarBookIdsQuery = { books_by_pk: { id: number, cachedSimilarBookIds: unknown, cachedSimilarBooksUpdatedAt: string | null } | null };

export type ReleasedBooksQueryVariables = Exact<{
  from: string;
  to: string;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type ReleasedBooksQuery = { books: Array<{ id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown }> };

export type GetEditionQueryVariables = Exact<{
  id: number;
}>;


export type GetEditionQuery = { editions_by_pk: { id: number, title: string | null, subtitle: string | null, asin: string | null, pages: number | null, bookId: number, isbn10: string | null, isbn13: string | null, audioSeconds: number | null, releaseDate: string | null, releaseYear: number | null, readingFormatId: number, editionFormat: string | null, cachedImage: unknown, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown }, language: { code2: string | null, language: string } | null, publisher: { id: number, name: string | null, slug: string } | null } | null };

export type FindBookMappingsQueryVariables = Exact<{
  platformId: number;
  externalIds: Array<string> | string;
}>;


export type FindBookMappingsQuery = { book_mappings: Array<{ externalId: string, editionId: number | null, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown } }> };

export type GetJournalForBookQueryVariables = Exact<{
  userId: number;
  bookId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetJournalForBookQuery = { reading_journals: Array<{ id: number, event: string | null, entry: string | null, metadata: unknown, bookId: number | null, editionId: number | null, privacySettingId: number, actionAt: string, createdAt: string }> };

export type GetGoalsQueryVariables = Exact<{
  userId: number;
  includeArchived?: boolean | null | undefined;
}>;


export type GetGoalsQuery = { goals: Array<{ id: number, metric: string, goal: number, progress: number, description: string | null, conditions: unknown, archived: boolean, state: string, startDate: string, endDate: string, completedAt: string | null, privacySettingId: number | null }> };

export type GetGoalQueryVariables = Exact<{
  id: number;
}>;


export type GetGoalQuery = { goals_by_pk: { id: number, metric: string, goal: number, progress: number, description: string | null, conditions: unknown, archived: boolean, state: string, startDate: string, endDate: string, completedAt: string | null, privacySettingId: number | null } | null };

export type GetLibraryQueryVariables = Exact<{
  userId: number;
  statusIds?: Array<number> | number | null | undefined;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
  orderBy?: Array<User_Books_Order_By> | User_Books_Order_By | null | undefined;
}>;


export type GetLibraryQuery = { user_books: Array<{ id: number, rating: number | null, owned: boolean, bookId: number, editionId: number | null, userId: number, statusId: number, privacySettingId: number, hasReview: boolean, readCount: number, dateAdded: string, firstStartedReadingDate: string | null, lastReadDate: string | null, updatedAt: string | null, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown }, edition: { id: number, title: string | null, subtitle: string | null, asin: string | null, pages: number | null, bookId: number, isbn10: string | null, isbn13: string | null, audioSeconds: number | null, releaseDate: string | null, releaseYear: number | null, readingFormatId: number, editionFormat: string | null, cachedImage: unknown, language: { code2: string | null, language: string } | null, publisher: { id: number, name: string | null, slug: string } | null } | null, userBookReads: Array<{ id: number, progress: number | null, userBookId: number, editionId: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, pausedAt: string | null, progressPages: number | null, progressSeconds: number | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null }> }> };

export type CountLibraryQueryVariables = Exact<{
  userId: number;
  statusIds?: Array<number> | number | null | undefined;
}>;


export type CountLibraryQuery = { user_books_aggregate: { aggregate: { count: number } | null } };

export type GetUserBookForBookQueryVariables = Exact<{
  userId: number;
  bookId: number;
}>;


export type GetUserBookForBookQuery = { user_books: Array<{ id: number, rating: number | null, owned: boolean, reviewMarkdown: string | null, reviewHasSpoilers: boolean, reviewedAt: string | null, privateNotes: string | null, recommendedBy: string | null, recommendedFor: string | null, bookId: number, editionId: number | null, userId: number, statusId: number, privacySettingId: number, hasReview: boolean, readCount: number, dateAdded: string, firstStartedReadingDate: string | null, lastReadDate: string | null, updatedAt: string | null, edition: { id: number, title: string | null, subtitle: string | null, asin: string | null, pages: number | null, bookId: number, isbn10: string | null, isbn13: string | null, audioSeconds: number | null, releaseDate: string | null, releaseYear: number | null, readingFormatId: number, editionFormat: string | null, cachedImage: unknown, language: { code2: string | null, language: string } | null, publisher: { id: number, name: string | null, slug: string } | null } | null, userBookReads: Array<{ id: number, progress: number | null, userBookId: number, editionId: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, pausedAt: string | null, progressPages: number | null, progressSeconds: number | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null }> }> };

export type GetUserBookQueryVariables = Exact<{
  id: number;
}>;


export type GetUserBookQuery = { user_books_by_pk: { id: number, rating: number | null, owned: boolean, reviewMarkdown: string | null, reviewHasSpoilers: boolean, reviewedAt: string | null, privateNotes: string | null, recommendedBy: string | null, recommendedFor: string | null, bookId: number, editionId: number | null, userId: number, statusId: number, privacySettingId: number, hasReview: boolean, readCount: number, dateAdded: string, firstStartedReadingDate: string | null, lastReadDate: string | null, updatedAt: string | null, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown }, edition: { id: number, title: string | null, subtitle: string | null, asin: string | null, pages: number | null, bookId: number, isbn10: string | null, isbn13: string | null, audioSeconds: number | null, releaseDate: string | null, releaseYear: number | null, readingFormatId: number, editionFormat: string | null, cachedImage: unknown, language: { code2: string | null, language: string } | null, publisher: { id: number, name: string | null, slug: string } | null } | null, userBookReads: Array<{ id: number, progress: number | null, userBookId: number, editionId: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, pausedAt: string | null, progressPages: number | null, progressSeconds: number | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null }> } | null };

export type GetLibraryChangesQueryVariables = Exact<{
  userId: number;
  after?: string | null | undefined;
  afterId?: number | null | undefined;
  limit?: number | null | undefined;
}>;


export type GetLibraryChangesQuery = { user_books: Array<{ id: number, rating: number | null, owned: boolean, bookId: number, editionId: number | null, userId: number, statusId: number, privacySettingId: number, hasReview: boolean, readCount: number, dateAdded: string, firstStartedReadingDate: string | null, lastReadDate: string | null, updatedAt: string | null, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown }, edition: { id: number, title: string | null, subtitle: string | null, asin: string | null, pages: number | null, bookId: number, isbn10: string | null, isbn13: string | null, audioSeconds: number | null, releaseDate: string | null, releaseYear: number | null, readingFormatId: number, editionFormat: string | null, cachedImage: unknown, language: { code2: string | null, language: string } | null, publisher: { id: number, name: string | null, slug: string } | null } | null, userBookReads: Array<{ id: number, progress: number | null, userBookId: number, editionId: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, pausedAt: string | null, progressPages: number | null, progressSeconds: number | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null }> }> };

export type GetLibraryIdsQueryVariables = Exact<{
  userId: number;
}>;


export type GetLibraryIdsQuery = { user_books: Array<{ id: number }> };

export type GetFinishedReadsQueryVariables = Exact<{
  userId: number;
  from: string;
  to: string;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetFinishedReadsQuery = { user_book_reads: Array<{ id: number, progress: number | null, userBookId: number, editionId: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, pausedAt: string | null, progressPages: number | null, progressSeconds: number | null, userBook: { id: number, rating: number | null, bookId: number, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown } } | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null }> };

export type GetOwnedBooksQueryVariables = Exact<{
  userId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetOwnedBooksQuery = { lists: Array<{ id: number, listBooks: Array<{ id: number, position: number | null, reason: string | null, listId: number, bookId: number, editionId: number | null, dateAdded: string | null, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown }, edition: { id: number, title: string | null, subtitle: string | null, asin: string | null, pages: number | null, bookId: number, isbn10: string | null, isbn13: string | null, audioSeconds: number | null, releaseDate: string | null, releaseYear: number | null, readingFormatId: number, editionFormat: string | null, cachedImage: unknown, language: { code2: string | null, language: string } | null, publisher: { id: number, name: string | null, slug: string } | null } | null }> }> };

export type GetListsForUserQueryVariables = Exact<{
  userId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetListsForUserQuery = { lists: Array<{ id: number, slug: string | null, name: string, description: string | null, ranked: boolean, privacySettingId: number, defaultView: string, booksCount: number, likesCount: number, userId: number, createdAt: string | null, updatedAt: string | null }> };

export type GetListQueryVariables = Exact<{
  id: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetListQuery = { lists_by_pk: { id: number, slug: string | null, name: string, description: string | null, ranked: boolean, privacySettingId: number, defaultView: string, booksCount: number, likesCount: number, userId: number, createdAt: string | null, updatedAt: string | null, listBooks: Array<{ id: number, position: number | null, reason: string | null, listId: number, bookId: number, editionId: number | null, dateAdded: string | null, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown } }> } | null };

export type FindListBookQueryVariables = Exact<{
  listId: number;
  bookId: number;
}>;


export type FindListBookQuery = { list_books: Array<{ id: number, position: number | null, reason: string | null, listId: number, bookId: number, editionId: number | null, dateAdded: string | null }> };

export type GetFollowedListsQueryVariables = Exact<{
  userId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetFollowedListsQuery = { followed_lists: Array<{ id: number, createdAt: string, list: { id: number, slug: string | null, name: string, description: string | null, ranked: boolean, privacySettingId: number, defaultView: string, booksCount: number, likesCount: number, userId: number, createdAt: string | null, updatedAt: string | null } }> };

export type GetListMembersQueryVariables = Exact<{
  listId: number;
}>;


export type GetListMembersQuery = { list_members: Array<{ id: number, status: number, listId: number, userId: number, createdAt: string, user: { id: number, username: string | null, name: string | null, cachedImage: unknown } | null }> };

export type GetListMembershipsQueryVariables = Exact<{
  userId: number;
}>;


export type GetListMembershipsQuery = { list_members: Array<{ id: number, status: number, listId: number, userId: number, createdAt: string, list: { id: number, slug: string | null, name: string, description: string | null, ranked: boolean, privacySettingId: number, defaultView: string, booksCount: number, likesCount: number, userId: number, createdAt: string | null, updatedAt: string | null } | null }> };

export type GetListBookIdsQueryVariables = Exact<{
  listId: number;
}>;


export type GetListBookIdsQuery = { list_books: Array<{ id: number }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me: Array<{ id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, accountPrivacySettingId: number, activityPrivacySettingsId: number, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string }> };

export type GetNotificationsQueryVariables = Exact<{
  userId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetNotificationsQuery = { notification_deliveries: Array<{ id: number, read: boolean, readAt: string | null, sentAt: string | null, notification: { id: number, title: string, description: string, link: string | null, priority: number | null, linkText: string | null, notificationTypeId: number, createdAt: string, notifierUser: { id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string } | null } | null }> };

export type CountUnreadNotificationsQueryVariables = Exact<{
  userId: number;
}>;


export type CountUnreadNotificationsQuery = { notification_deliveries_aggregate: { aggregate: { count: number } | null } };

export type GetPromptQueryVariables = Exact<{
  id: number;
}>;


export type GetPromptQuery = { prompts_by_pk: { id: number, slug: string, question: string, description: string, featured: boolean, answersCount: number, booksCount: number, usersCount: number, userId: number, createdAt: string | null } | null };

export type GetPromptBySlugQueryVariables = Exact<{
  slug: string;
}>;


export type GetPromptBySlugQuery = { prompts: Array<{ id: number, slug: string, question: string, description: string, featured: boolean, answersCount: number, booksCount: number, usersCount: number, userId: number, createdAt: string | null }> };

export type GetPromptsQueryVariables = Exact<{
  where: Prompts_Bool_Exp;
  orderBy: Array<Prompts_Order_By> | Prompts_Order_By;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetPromptsQuery = { prompts: Array<{ id: number, slug: string, question: string, description: string, featured: boolean, answersCount: number, booksCount: number, usersCount: number, userId: number, createdAt: string | null }> };

export type GetPromptsForUserQueryVariables = Exact<{
  userId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetPromptsForUserQuery = { prompts: Array<{ id: number, slug: string, question: string, description: string, featured: boolean, answersCount: number, booksCount: number, usersCount: number, userId: number, createdAt: string | null }> };

export type GetPromptBooksQueryVariables = Exact<{
  promptId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetPromptBooksQuery = { prompt_books_summary: Array<{ answersCount: number | null, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown } | null }> };

export type GetPromptsForBookQueryVariables = Exact<{
  bookId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetPromptsForBookQuery = { prompt_books_summary: Array<{ answersCount: number | null, prompt: { id: number, slug: string, question: string, description: string, featured: boolean, answersCount: number, booksCount: number, usersCount: number, userId: number, createdAt: string | null } | null }> };

export type GetPromptAnswersForUserQueryVariables = Exact<{
  userId: number;
  promptId: number;
}>;


export type GetPromptAnswersForUserQuery = { prompt_answers: Array<{ id: number, description: string | null, promptId: number, bookId: number, userId: number, createdAt: string | null, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown } }> };

export type GetFollowedPromptsQueryVariables = Exact<{
  userId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetFollowedPromptsQuery = { followed_prompts: Array<{ id: number, createdAt: string | null, prompt: { id: number, slug: string, question: string, description: string, featured: boolean, answersCount: number, booksCount: number, usersCount: number, userId: number, createdAt: string | null } }> };

export type SearchQueryVariables = Exact<{
  query: string;
  queryType?: string | null | undefined;
  page?: number | null | undefined;
  perPage?: number | null | undefined;
  fields?: string | null | undefined;
  weights?: string | null | undefined;
  typos?: string | null | undefined;
  sort?: string | null | undefined;
  filterBy?: string | null | undefined;
}>;


export type SearchQuery = { search: { ids: Array<number | null> | null, results: unknown, query: string | null, page: number | null, error: string | null, queryType: string | null, perPage: number | null } | null };

export type GetUserQueryVariables = Exact<{
  id: number;
}>;


export type GetUserQuery = { users_by_pk: { id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string } | null };

export type GetUserByUsernameQueryVariables = Exact<{
  username: string;
}>;


export type GetUserByUsernameQuery = { users: Array<{ id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string }> };

export type GetFollowersQueryVariables = Exact<{
  userId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetFollowersQuery = { followed_users: Array<{ id: number, createdAt: string | null, user: { id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string } }> };

export type GetFollowingQueryVariables = Exact<{
  userId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetFollowingQuery = { followed_users: Array<{ id: number, createdAt: string | null, followedUser: { id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string } }> };

export type GetBlockedUsersQueryVariables = Exact<{
  userId: number;
}>;


export type GetBlockedUsersQuery = { user_blocks: Array<{ id: number, type: string, createdAt: string, blockedUser: { id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string } | null }> };

export type GetFriendsForBookQueryVariables = Exact<{
  userId: number;
  bookId: number;
  limit?: number | null | undefined;
}>;


export type GetFriendsForBookQuery = { following_user_books: Array<{ userBook: { id: number, rating: number | null, owned: boolean, reviewMarkdown: string | null, reviewHasSpoilers: boolean, reviewedAt: string | null, bookId: number, editionId: number | null, userId: number, statusId: number, privacySettingId: number, hasReview: boolean, readCount: number, dateAdded: string, firstStartedReadingDate: string | null, lastReadDate: string | null, updatedAt: string | null, user: { id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string }, userBookReads: Array<{ id: number, progress: number | null, userBookId: number, editionId: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, pausedAt: string | null, progressPages: number | null, progressSeconds: number | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null }> } | null }> };

export type GetActivitiesForUserQueryVariables = Exact<{
  userId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetActivitiesForUserQuery = { activities: Array<{ id: number, event: string, data: unknown, objectType: string, bookId: number | null, userId: number, likesCount: number, privacySettingId: number, createdAt: string | null, user: { id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string }, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown } | null }> };

export type GetActivitiesForBookQueryVariables = Exact<{
  bookId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetActivitiesForBookQuery = { activities: Array<{ id: number, event: string, data: unknown, objectType: string, bookId: number | null, userId: number, likesCount: number, privacySettingId: number, createdAt: string | null, user: { id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string }, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown } | null }> };

export type GetFollowingActivitiesQueryVariables = Exact<{
  userId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetFollowingActivitiesQuery = { activities: Array<{ id: number, event: string, data: unknown, objectType: string, bookId: number | null, userId: number, likesCount: number, privacySettingId: number, createdAt: string | null, user: { id: number, username: string | null, name: string | null, bio: string | null, flair: string | null, pro: boolean, admin: boolean, cachedImage: unknown, cachedCover: unknown, cachedGenres: unknown, booksCount: number, followersCount: number, followedUsersCount: number, createdAt: string }, book: { id: number, slug: string | null, title: string | null, subtitle: string | null, pages: number | null, rating: number | null, releaseYear: number | null, audioSeconds: number | null, ratingsCount: number, usersCount: number, cachedImage: unknown, cachedContributors: unknown, cachedFeaturedSeries: unknown } | null }> };

export type GetStatsLibraryQueryVariables = Exact<{
  userId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetStatsLibraryQuery = { user_books: Array<{ id: number, rating: number | null, statusId: number, readCount: number, lastReadDate: string | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null, book: { id: number, title: string | null, slug: string | null, pages: number | null, audioSeconds: number | null, cachedTags: unknown, cachedContributors: unknown, cachedImage: unknown }, userBookReads: Array<{ id: number, progress: number | null, startedAt: string | null, finishedAt: string | null, finishedAtPrecision: number | null, edition: { id: number, pages: number | null, audioSeconds: number | null, readingFormatId: number } | null }> }> };

export type GetContributorRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContributorRolesQuery = { contributor_roles: Array<{ id: number, primary: boolean }>, contributor_role_specializations: Array<{ primary: boolean | null, contributorRoleId: number, contributorSpecializationId: number }> };

export type GetVibesForUserQueryVariables = Exact<{
  userId: number;
  limit?: number | null | undefined;
  offset?: number | null | undefined;
}>;


export type GetVibesForUserQuery = { vibes: Array<{ id: number, slug: string, title: string, description: string | null, featured: boolean, vibeType: number, resultType: number, privacySettingId: number, likesCount: number, userId: number, createdAt: string, updatedAt: string, booksGeneratedAt: string | null }> };

export type GetVibeQueryVariables = Exact<{
  id: number;
}>;


export type GetVibeQuery = { vibes_by_pk: { id: number, slug: string, title: string, description: string | null, featured: boolean, vibeType: number, resultType: number, privacySettingId: number, likesCount: number, userId: number, createdAt: string, updatedAt: string, booksGeneratedAt: string | null } | null };

export type GetVibeBookIdsQueryVariables = Exact<{
  id: number;
}>;


export type GetVibeBookIdsQuery = { vibes_by_pk: { id: number, updatedAt: string, booksGeneratedAt: string | null, cachedBookIds: unknown } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const BookSummaryFragmentDoc = new TypedDocumentString(`
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
    `, {"fragmentName":"BookSummary"}) as unknown as TypedDocumentString<BookSummaryFragment, unknown>;
export const AuthorSummaryFragmentDoc = new TypedDocumentString(`
    fragment AuthorSummary on authors {
  id
  slug
  name
  cachedImage: cached_image
  booksCount: books_count
}
    `, {"fragmentName":"AuthorSummary"}) as unknown as TypedDocumentString<AuthorSummaryFragment, unknown>;
export const SeriesSummaryFragmentDoc = new TypedDocumentString(`
    fragment SeriesSummary on series {
  id
  slug
  name
  booksCount: books_count
  primaryBooksCount: primary_books_count
  isCompleted: is_completed
}
    `, {"fragmentName":"SeriesSummary"}) as unknown as TypedDocumentString<SeriesSummaryFragment, unknown>;
export const BookDetailFragmentDoc = new TypedDocumentString(`
    fragment BookDetail on books {
  ...BookSummary
  headline
  description
  releaseDate: release_date
  editionsCount: editions_count
  cachedTags: cached_tags
  cachedHeaderImage: cached_header_image
  ratingsDistribution: ratings_distribution
  contributions {
    contribution
    author {
      ...AuthorSummary
    }
  }
  bookSeries: book_series(where: { series: { canonical_id: { _is_null: true } } }) {
    position
    series {
      ...SeriesSummary
    }
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment AuthorSummary on authors {
  id
  slug
  name
  cachedImage: cached_image
  booksCount: books_count
}
fragment SeriesSummary on series {
  id
  slug
  name
  booksCount: books_count
  primaryBooksCount: primary_books_count
  isCompleted: is_completed
}`, {"fragmentName":"BookDetail"}) as unknown as TypedDocumentString<BookDetailFragment, unknown>;
export const AuthorDetailFragmentDoc = new TypedDocumentString(`
    fragment AuthorDetail on authors {
  ...AuthorSummary
  bio
  bornYear: born_year
  deathYear: death_year
  location
  usersCount: users_count
  canonicalId: canonical_id
}
    fragment AuthorSummary on authors {
  id
  slug
  name
  cachedImage: cached_image
  booksCount: books_count
}`, {"fragmentName":"AuthorDetail"}) as unknown as TypedDocumentString<AuthorDetailFragment, unknown>;
export const SeriesDetailFragmentDoc = new TypedDocumentString(`
    fragment SeriesDetail on series {
  ...SeriesSummary
  description
  canonicalId: canonical_id
  author {
    ...AuthorSummary
  }
}
    fragment AuthorSummary on authors {
  id
  slug
  name
  cachedImage: cached_image
  booksCount: books_count
}
fragment SeriesSummary on series {
  id
  slug
  name
  booksCount: books_count
  primaryBooksCount: primary_books_count
  isCompleted: is_completed
}`, {"fragmentName":"SeriesDetail"}) as unknown as TypedDocumentString<SeriesDetailFragment, unknown>;
export const EditionSummaryFragmentDoc = new TypedDocumentString(`
    fragment EditionSummary on editions {
  id
  bookId: book_id
  title
  subtitle
  isbn10: isbn_10
  isbn13: isbn_13
  asin
  pages
  audioSeconds: audio_seconds
  releaseDate: release_date
  releaseYear: release_year
  readingFormatId: reading_format_id
  editionFormat: edition_format
  cachedImage: cached_image
  language {
    code2
    language
  }
  publisher {
    id
    name
    slug
  }
}
    `, {"fragmentName":"EditionSummary"}) as unknown as TypedDocumentString<EditionSummaryFragment, unknown>;
export const JournalEntryFragmentDoc = new TypedDocumentString(`
    fragment JournalEntry on reading_journals {
  id
  bookId: book_id
  editionId: edition_id
  event
  entry
  metadata
  privacySettingId: privacy_setting_id
  actionAt: action_at
  createdAt: created_at
}
    `, {"fragmentName":"JournalEntry"}) as unknown as TypedDocumentString<JournalEntryFragment, unknown>;
export const GoalFragmentDoc = new TypedDocumentString(`
    fragment Goal on goals {
  id
  metric
  goal
  progress
  description
  startDate: start_date
  endDate: end_date
  conditions
  archived
  completedAt: completed_at
  state
  privacySettingId: privacy_setting_id
}
    `, {"fragmentName":"Goal"}) as unknown as TypedDocumentString<GoalFragment, unknown>;
export const UserBookReadFragmentDoc = new TypedDocumentString(`
    fragment UserBookRead on user_book_reads {
  id
  userBookId: user_book_id
  editionId: edition_id
  startedAt: started_at
  finishedAt: finished_at
  finishedAtPrecision: finished_at_precision
  pausedAt: paused_at
  progress
  progressPages: progress_pages
  progressSeconds: progress_seconds
  edition {
    id
    pages
    audioSeconds: audio_seconds
    readingFormatId: reading_format_id
  }
}
    `, {"fragmentName":"UserBookRead"}) as unknown as TypedDocumentString<UserBookReadFragment, unknown>;
export const UserBookFragmentDoc = new TypedDocumentString(`
    fragment UserBook on user_books {
  id
  bookId: book_id
  editionId: edition_id
  userId: user_id
  statusId: status_id
  rating
  privacySettingId: privacy_setting_id
  hasReview: has_review
  owned
  readCount: read_count
  dateAdded: date_added
  firstStartedReadingDate: first_started_reading_date
  lastReadDate: last_read_date
  updatedAt: updated_at
  userBookReads: user_book_reads(order_by: { id: desc }) {
    ...UserBookRead
  }
}
    fragment UserBookRead on user_book_reads {
  id
  userBookId: user_book_id
  editionId: edition_id
  startedAt: started_at
  finishedAt: finished_at
  finishedAtPrecision: finished_at_precision
  pausedAt: paused_at
  progress
  progressPages: progress_pages
  progressSeconds: progress_seconds
  edition {
    id
    pages
    audioSeconds: audio_seconds
    readingFormatId: reading_format_id
  }
}`, {"fragmentName":"UserBook"}) as unknown as TypedDocumentString<UserBookFragment, unknown>;
export const UserBookFullFragmentDoc = new TypedDocumentString(`
    fragment UserBookFull on user_books {
  ...UserBook
  reviewMarkdown: review_markdown
  reviewHasSpoilers: review_has_spoilers
  reviewedAt: reviewed_at
  privateNotes: private_notes
  recommendedBy: recommended_by
  recommendedFor: recommended_for
}
    fragment UserBookRead on user_book_reads {
  id
  userBookId: user_book_id
  editionId: edition_id
  startedAt: started_at
  finishedAt: finished_at
  finishedAtPrecision: finished_at_precision
  pausedAt: paused_at
  progress
  progressPages: progress_pages
  progressSeconds: progress_seconds
  edition {
    id
    pages
    audioSeconds: audio_seconds
    readingFormatId: reading_format_id
  }
}
fragment UserBook on user_books {
  id
  bookId: book_id
  editionId: edition_id
  userId: user_id
  statusId: status_id
  rating
  privacySettingId: privacy_setting_id
  hasReview: has_review
  owned
  readCount: read_count
  dateAdded: date_added
  firstStartedReadingDate: first_started_reading_date
  lastReadDate: last_read_date
  updatedAt: updated_at
  userBookReads: user_book_reads(order_by: { id: desc }) {
    ...UserBookRead
  }
}`, {"fragmentName":"UserBookFull"}) as unknown as TypedDocumentString<UserBookFullFragment, unknown>;
export const ListSummaryFragmentDoc = new TypedDocumentString(`
    fragment ListSummary on lists {
  id
  slug
  name
  description
  privacySettingId: privacy_setting_id
  ranked
  defaultView: default_view
  booksCount: books_count
  likesCount: likes_count
  userId: user_id
  createdAt: created_at
  updatedAt: updated_at
}
    `, {"fragmentName":"ListSummary"}) as unknown as TypedDocumentString<ListSummaryFragment, unknown>;
export const ListBookFragmentDoc = new TypedDocumentString(`
    fragment ListBook on list_books {
  id
  listId: list_id
  bookId: book_id
  editionId: edition_id
  position
  reason
  dateAdded: date_added
}
    `, {"fragmentName":"ListBook"}) as unknown as TypedDocumentString<ListBookFragment, unknown>;
export const PromptSummaryFragmentDoc = new TypedDocumentString(`
    fragment PromptSummary on prompts {
  id
  slug
  question
  description
  featured
  answersCount: answers_count
  booksCount: books_count
  usersCount: users_count
  userId: user_id
  createdAt: created_at
}
    `, {"fragmentName":"PromptSummary"}) as unknown as TypedDocumentString<PromptSummaryFragment, unknown>;
export const PromptAnswerFragmentDoc = new TypedDocumentString(`
    fragment PromptAnswer on prompt_answers {
  id
  promptId: prompt_id
  bookId: book_id
  userId: user_id
  description
  createdAt: created_at
}
    `, {"fragmentName":"PromptAnswer"}) as unknown as TypedDocumentString<PromptAnswerFragment, unknown>;
export const UserProfileFragmentDoc = new TypedDocumentString(`
    fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}
    `, {"fragmentName":"UserProfile"}) as unknown as TypedDocumentString<UserProfileFragment, unknown>;
export const ActivityFragmentDoc = new TypedDocumentString(`
    fragment Activity on activities {
  id
  event
  objectType: object_type
  data
  bookId: book_id
  userId: user_id
  likesCount: likes_count
  privacySettingId: privacy_setting_id
  createdAt: created_at
  user {
    ...UserProfile
  }
  book {
    ...BookSummary
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}`, {"fragmentName":"Activity"}) as unknown as TypedDocumentString<ActivityFragment, unknown>;
export const StatsEditionFragmentDoc = new TypedDocumentString(`
    fragment StatsEdition on editions {
  id
  pages
  audioSeconds: audio_seconds
  readingFormatId: reading_format_id
}
    `, {"fragmentName":"StatsEdition"}) as unknown as TypedDocumentString<StatsEditionFragment, unknown>;
export const MeFragmentDoc = new TypedDocumentString(`
    fragment Me on users {
  ...UserProfile
  accountPrivacySettingId: account_privacy_setting_id
  activityPrivacySettingsId: activity_privacy_settings_id
}
    fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}`, {"fragmentName":"Me"}) as unknown as TypedDocumentString<MeFragment, unknown>;
export const VibeSummaryFragmentDoc = new TypedDocumentString(`
    fragment VibeSummary on vibes {
  id
  slug
  title
  description
  vibeType: vibe_type
  resultType: result_type
  privacySettingId: privacy_setting_id
  featured
  likesCount: likes_count
  userId: user_id
  createdAt: created_at
  updatedAt: updated_at
  booksGeneratedAt: books_generated_at
}
    `, {"fragmentName":"VibeSummary"}) as unknown as TypedDocumentString<VibeSummaryFragment, unknown>;
export const CreateGoalDocument = new TypedDocumentString(`
    mutation CreateGoal($object: GoalInput!) {
  insert_goal(object: $object) {
    id
    errors
    goal {
      ...Goal
    }
  }
}
    fragment Goal on goals {
  id
  metric
  goal
  progress
  description
  startDate: start_date
  endDate: end_date
  conditions
  archived
  completedAt: completed_at
  state
  privacySettingId: privacy_setting_id
}`) as unknown as TypedDocumentString<CreateGoalMutation, CreateGoalMutationVariables>;
export const UpdateGoalDocument = new TypedDocumentString(`
    mutation UpdateGoal($id: Int!, $object: GoalInput!) {
  update_goal(id: $id, object: $object) {
    id
    errors
    goal {
      ...Goal
    }
  }
}
    fragment Goal on goals {
  id
  metric
  goal
  progress
  description
  startDate: start_date
  endDate: end_date
  conditions
  archived
  completedAt: completed_at
  state
  privacySettingId: privacy_setting_id
}`) as unknown as TypedDocumentString<UpdateGoalMutation, UpdateGoalMutationVariables>;
export const RefreshGoalProgressDocument = new TypedDocumentString(`
    mutation RefreshGoalProgress($id: Int!) {
  update_goal_progress(id: $id) {
    id
    errors
    goal {
      ...Goal
    }
  }
}
    fragment Goal on goals {
  id
  metric
  goal
  progress
  description
  startDate: start_date
  endDate: end_date
  conditions
  archived
  completedAt: completed_at
  state
  privacySettingId: privacy_setting_id
}`) as unknown as TypedDocumentString<RefreshGoalProgressMutation, RefreshGoalProgressMutationVariables>;
export const DeleteGoalDocument = new TypedDocumentString(`
    mutation DeleteGoal($id: Int!) {
  delete_goal(id: $id) {
    id
    errors
  }
}
    `) as unknown as TypedDocumentString<DeleteGoalMutation, DeleteGoalMutationVariables>;
export const AddJournalEntryDocument = new TypedDocumentString(`
    mutation AddJournalEntry($object: ReadingJournalCreateType!) {
  insert_reading_journal(object: $object) {
    id
    errors
    readingJournal: reading_journal {
      ...JournalEntry
    }
  }
}
    fragment JournalEntry on reading_journals {
  id
  bookId: book_id
  editionId: edition_id
  event
  entry
  metadata
  privacySettingId: privacy_setting_id
  actionAt: action_at
  createdAt: created_at
}`) as unknown as TypedDocumentString<AddJournalEntryMutation, AddJournalEntryMutationVariables>;
export const UpdateJournalEntryDocument = new TypedDocumentString(`
    mutation UpdateJournalEntry($id: Int!, $object: ReadingJournalUpdateType!) {
  update_reading_journal(id: $id, object: $object) {
    id
    errors
    readingJournal: reading_journal {
      ...JournalEntry
    }
  }
}
    fragment JournalEntry on reading_journals {
  id
  bookId: book_id
  editionId: edition_id
  event
  entry
  metadata
  privacySettingId: privacy_setting_id
  actionAt: action_at
  createdAt: created_at
}`) as unknown as TypedDocumentString<UpdateJournalEntryMutation, UpdateJournalEntryMutationVariables>;
export const DeleteJournalEntryDocument = new TypedDocumentString(`
    mutation DeleteJournalEntry($id: Int!) {
  delete_reading_journal(id: $id) {
    id
  }
}
    `) as unknown as TypedDocumentString<DeleteJournalEntryMutation, DeleteJournalEntryMutationVariables>;
export const ClearJournalForBookDocument = new TypedDocumentString(`
    mutation ClearJournalForBook($bookId: Int!) {
  delete_reading_journals_for_book(book_id: $bookId) {
    ids
  }
}
    `) as unknown as TypedDocumentString<ClearJournalForBookMutation, ClearJournalForBookMutationVariables>;
export const AddUserBookDocument = new TypedDocumentString(`
    mutation AddUserBook($object: UserBookCreateInput!) {
  insert_user_book(object: $object) {
    id
    error
    userBook: user_book {
      ...UserBookFull
    }
  }
}
    fragment UserBookRead on user_book_reads {
  id
  userBookId: user_book_id
  editionId: edition_id
  startedAt: started_at
  finishedAt: finished_at
  finishedAtPrecision: finished_at_precision
  pausedAt: paused_at
  progress
  progressPages: progress_pages
  progressSeconds: progress_seconds
  edition {
    id
    pages
    audioSeconds: audio_seconds
    readingFormatId: reading_format_id
  }
}
fragment UserBook on user_books {
  id
  bookId: book_id
  editionId: edition_id
  userId: user_id
  statusId: status_id
  rating
  privacySettingId: privacy_setting_id
  hasReview: has_review
  owned
  readCount: read_count
  dateAdded: date_added
  firstStartedReadingDate: first_started_reading_date
  lastReadDate: last_read_date
  updatedAt: updated_at
  userBookReads: user_book_reads(order_by: { id: desc }) {
    ...UserBookRead
  }
}
fragment UserBookFull on user_books {
  ...UserBook
  reviewMarkdown: review_markdown
  reviewHasSpoilers: review_has_spoilers
  reviewedAt: reviewed_at
  privateNotes: private_notes
  recommendedBy: recommended_by
  recommendedFor: recommended_for
}`) as unknown as TypedDocumentString<AddUserBookMutation, AddUserBookMutationVariables>;
export const UpdateUserBookDocument = new TypedDocumentString(`
    mutation UpdateUserBook($id: Int!, $object: UserBookUpdateInput!) {
  update_user_book(id: $id, object: $object) {
    id
    error
    userBook: user_book {
      ...UserBookFull
    }
  }
}
    fragment UserBookRead on user_book_reads {
  id
  userBookId: user_book_id
  editionId: edition_id
  startedAt: started_at
  finishedAt: finished_at
  finishedAtPrecision: finished_at_precision
  pausedAt: paused_at
  progress
  progressPages: progress_pages
  progressSeconds: progress_seconds
  edition {
    id
    pages
    audioSeconds: audio_seconds
    readingFormatId: reading_format_id
  }
}
fragment UserBook on user_books {
  id
  bookId: book_id
  editionId: edition_id
  userId: user_id
  statusId: status_id
  rating
  privacySettingId: privacy_setting_id
  hasReview: has_review
  owned
  readCount: read_count
  dateAdded: date_added
  firstStartedReadingDate: first_started_reading_date
  lastReadDate: last_read_date
  updatedAt: updated_at
  userBookReads: user_book_reads(order_by: { id: desc }) {
    ...UserBookRead
  }
}
fragment UserBookFull on user_books {
  ...UserBook
  reviewMarkdown: review_markdown
  reviewHasSpoilers: review_has_spoilers
  reviewedAt: reviewed_at
  privateNotes: private_notes
  recommendedBy: recommended_by
  recommendedFor: recommended_for
}`) as unknown as TypedDocumentString<UpdateUserBookMutation, UpdateUserBookMutationVariables>;
export const RemoveUserBookDocument = new TypedDocumentString(`
    mutation RemoveUserBook($id: Int!) {
  delete_user_book(id: $id) {
    id
    bookId: book_id
    userId: user_id
  }
}
    `) as unknown as TypedDocumentString<RemoveUserBookMutation, RemoveUserBookMutationVariables>;
export const AddUserBookReadDocument = new TypedDocumentString(`
    mutation AddUserBookRead($userBookId: Int!, $read: DatesReadInput!) {
  insert_user_book_read(user_book_id: $userBookId, user_book_read: $read) {
    id
    error
    userBookRead: user_book_read {
      ...UserBookRead
    }
  }
}
    fragment UserBookRead on user_book_reads {
  id
  userBookId: user_book_id
  editionId: edition_id
  startedAt: started_at
  finishedAt: finished_at
  finishedAtPrecision: finished_at_precision
  pausedAt: paused_at
  progress
  progressPages: progress_pages
  progressSeconds: progress_seconds
  edition {
    id
    pages
    audioSeconds: audio_seconds
    readingFormatId: reading_format_id
  }
}`) as unknown as TypedDocumentString<AddUserBookReadMutation, AddUserBookReadMutationVariables>;
export const UpdateUserBookReadDocument = new TypedDocumentString(`
    mutation UpdateUserBookRead($id: Int!, $read: DatesReadInput!) {
  update_user_book_read(id: $id, object: $read) {
    id
    error
    userBookRead: user_book_read {
      ...UserBookRead
    }
  }
}
    fragment UserBookRead on user_book_reads {
  id
  userBookId: user_book_id
  editionId: edition_id
  startedAt: started_at
  finishedAt: finished_at
  finishedAtPrecision: finished_at_precision
  pausedAt: paused_at
  progress
  progressPages: progress_pages
  progressSeconds: progress_seconds
  edition {
    id
    pages
    audioSeconds: audio_seconds
    readingFormatId: reading_format_id
  }
}`) as unknown as TypedDocumentString<UpdateUserBookReadMutation, UpdateUserBookReadMutationVariables>;
export const RemoveUserBookReadDocument = new TypedDocumentString(`
    mutation RemoveUserBookRead($id: Int!) {
  delete_user_book_read(id: $id) {
    id
    error
  }
}
    `) as unknown as TypedDocumentString<RemoveUserBookReadMutation, RemoveUserBookReadMutationVariables>;
export const MarkOwnedDocument = new TypedDocumentString(`
    mutation MarkOwned($editionId: Int!) {
  edition_owned(id: $editionId) {
    id
    listBook: list_book {
      ...ListBook
    }
  }
}
    fragment ListBook on list_books {
  id
  listId: list_id
  bookId: book_id
  editionId: edition_id
  position
  reason
  dateAdded: date_added
}`) as unknown as TypedDocumentString<MarkOwnedMutation, MarkOwnedMutationVariables>;
export const CreateListDocument = new TypedDocumentString(`
    mutation CreateList($object: ListInput!) {
  insert_list(object: $object) {
    id
    errors
    list {
      ...ListSummary
    }
  }
}
    fragment ListSummary on lists {
  id
  slug
  name
  description
  privacySettingId: privacy_setting_id
  ranked
  defaultView: default_view
  booksCount: books_count
  likesCount: likes_count
  userId: user_id
  createdAt: created_at
  updatedAt: updated_at
}`) as unknown as TypedDocumentString<CreateListMutation, CreateListMutationVariables>;
export const UpdateListDocument = new TypedDocumentString(`
    mutation UpdateList($id: Int!, $object: ListInput!) {
  update_list(id: $id, object: $object) {
    id
    errors
    list {
      ...ListSummary
    }
  }
}
    fragment ListSummary on lists {
  id
  slug
  name
  description
  privacySettingId: privacy_setting_id
  ranked
  defaultView: default_view
  booksCount: books_count
  likesCount: likes_count
  userId: user_id
  createdAt: created_at
  updatedAt: updated_at
}`) as unknown as TypedDocumentString<UpdateListMutation, UpdateListMutationVariables>;
export const DeleteListDocument = new TypedDocumentString(`
    mutation DeleteList($id: Int!) {
  delete_list(id: $id) {
    success
  }
}
    `) as unknown as TypedDocumentString<DeleteListMutation, DeleteListMutationVariables>;
export const AddBookToListDocument = new TypedDocumentString(`
    mutation AddBookToList($object: ListBookInput!) {
  insert_list_book(object: $object) {
    id
    listBook: list_book {
      ...ListBook
    }
  }
}
    fragment ListBook on list_books {
  id
  listId: list_id
  bookId: book_id
  editionId: edition_id
  position
  reason
  dateAdded: date_added
}`) as unknown as TypedDocumentString<AddBookToListMutation, AddBookToListMutationVariables>;
export const RemoveListBookDocument = new TypedDocumentString(`
    mutation RemoveListBook($id: Int!) {
  delete_list_book(id: $id) {
    id
    listId: list_id
  }
}
    `) as unknown as TypedDocumentString<RemoveListBookMutation, RemoveListBookMutationVariables>;
export const FollowListDocument = new TypedDocumentString(`
    mutation FollowList($listId: Int!) {
  upsert_followed_list(list_id: $listId) {
    id
    errors
  }
}
    `) as unknown as TypedDocumentString<FollowListMutation, FollowListMutationVariables>;
export const UnfollowListDocument = new TypedDocumentString(`
    mutation UnfollowList($listId: Int!) {
  delete_followed_list(list_id: $listId) {
    success
  }
}
    `) as unknown as TypedDocumentString<UnfollowListMutation, UnfollowListMutationVariables>;
export const InviteListMemberDocument = new TypedDocumentString(`
    mutation InviteListMember($object: ListMemberInput!) {
  insert_list_member(object: $object) {
    id
    listId: list_id
    userId: user_id
  }
}
    `) as unknown as TypedDocumentString<InviteListMemberMutation, InviteListMemberMutationVariables>;
export const RespondToListInviteDocument = new TypedDocumentString(`
    mutation RespondToListInvite($listId: Int!, $status: String!) {
  update_list_member(list_id: $listId, status: $status) {
    listId: list_id
    userId: user_id
    status
  }
}
    `) as unknown as TypedDocumentString<RespondToListInviteMutation, RespondToListInviteMutationVariables>;
export const RemoveListMemberDocument = new TypedDocumentString(`
    mutation RemoveListMember($listId: Int!, $userId: Int!) {
  delete_list_member(list_id: $listId, user_id: $userId) {
    listId: list_id
    userId: user_id
    removed
  }
}
    `) as unknown as TypedDocumentString<RemoveListMemberMutation, RemoveListMemberMutationVariables>;
export const ClearListPositionsDocument = new TypedDocumentString(`
    mutation ClearListPositions($listId: Int!, $listBookIds: [Int!]!) {
  update_list_books(
    where: { list_id: { _eq: $listId }, id: { _in: $listBookIds } }
    _set: { position: null }
  ) {
    affectedRows: affected_rows
  }
}
    `) as unknown as TypedDocumentString<ClearListPositionsMutation, ClearListPositionsMutationVariables>;
export const MarkNotificationsReadDocument = new TypedDocumentString(`
    mutation MarkNotificationsRead($userId: Int!, $ids: [bigint!]!, $readAt: timestamp!) {
  update_notification_deliveries(
    where: { user_id: { _eq: $userId }, id: { _in: $ids }, read: { _eq: false } }
    _set: { read: true, read_at: $readAt }
  ) {
    affectedRows: affected_rows
  }
}
    `) as unknown as TypedDocumentString<MarkNotificationsReadMutation, MarkNotificationsReadMutationVariables>;
export const MarkAllNotificationsReadDocument = new TypedDocumentString(`
    mutation MarkAllNotificationsRead($userId: Int!, $readAt: timestamp!) {
  update_notification_deliveries(
    where: { user_id: { _eq: $userId }, channel_id: { _eq: 1 }, read: { _eq: false } }
    _set: { read: true, read_at: $readAt }
  ) {
    affectedRows: affected_rows
  }
}
    `) as unknown as TypedDocumentString<MarkAllNotificationsReadMutation, MarkAllNotificationsReadMutationVariables>;
export const CreatePromptDocument = new TypedDocumentString(`
    mutation CreatePrompt($object: CreatePromptInput!) {
  insert_prompt(object: $object) {
    id
    error
    prompt {
      ...PromptSummary
    }
  }
}
    fragment PromptSummary on prompts {
  id
  slug
  question
  description
  featured
  answersCount: answers_count
  booksCount: books_count
  usersCount: users_count
  userId: user_id
  createdAt: created_at
}`) as unknown as TypedDocumentString<CreatePromptMutation, CreatePromptMutationVariables>;
export const UpdatePromptDocument = new TypedDocumentString(`
    mutation UpdatePrompt($object: UpdatePromptInput!) {
  update_prompt(object: $object) {
    id
    error
    prompt {
      ...PromptSummary
    }
  }
}
    fragment PromptSummary on prompts {
  id
  slug
  question
  description
  featured
  answersCount: answers_count
  booksCount: books_count
  usersCount: users_count
  userId: user_id
  createdAt: created_at
}`) as unknown as TypedDocumentString<UpdatePromptMutation, UpdatePromptMutationVariables>;
export const DeletePromptDocument = new TypedDocumentString(`
    mutation DeletePrompt($id: Int!) {
  delete_prompts_by_pk(id: $id) {
    id
  }
}
    `) as unknown as TypedDocumentString<DeletePromptMutation, DeletePromptMutationVariables>;
export const AnswerPromptDocument = new TypedDocumentString(`
    mutation AnswerPrompt($object: PromptAnswerCreateInput!) {
  insert_prompt_answer(object: $object) {
    id
    promptAnswer: prompt_answer {
      ...PromptAnswer
    }
    promptBook: prompt_book {
      answersCount: answers_count
    }
  }
}
    fragment PromptAnswer on prompt_answers {
  id
  promptId: prompt_id
  bookId: book_id
  userId: user_id
  description
  createdAt: created_at
}`) as unknown as TypedDocumentString<AnswerPromptMutation, AnswerPromptMutationVariables>;
export const UpdatePromptAnswerDocument = new TypedDocumentString(`
    mutation UpdatePromptAnswer($id: Int!, $description: String) {
  update_prompt_answers_by_pk(
    pk_columns: { id: $id }
    _set: { description: $description }
  ) {
    ...PromptAnswer
  }
}
    fragment PromptAnswer on prompt_answers {
  id
  promptId: prompt_id
  bookId: book_id
  userId: user_id
  description
  createdAt: created_at
}`) as unknown as TypedDocumentString<UpdatePromptAnswerMutation, UpdatePromptAnswerMutationVariables>;
export const DeletePromptAnswerDocument = new TypedDocumentString(`
    mutation DeletePromptAnswer($id: Int!) {
  delete_prompt_answer(id: $id) {
    id
    promptId: prompt_id
    bookId: book_id
  }
}
    `) as unknown as TypedDocumentString<DeletePromptAnswerMutation, DeletePromptAnswerMutationVariables>;
export const FollowPromptDocument = new TypedDocumentString(`
    mutation FollowPrompt($promptId: Int!) {
  upsert_followed_prompt(prompt_id: $promptId) {
    id
    errors
  }
}
    `) as unknown as TypedDocumentString<FollowPromptMutation, FollowPromptMutationVariables>;
export const UnfollowPromptDocument = new TypedDocumentString(`
    mutation UnfollowPrompt($promptId: Int!) {
  delete_followed_prompt(prompt_id: $promptId) {
    success
  }
}
    `) as unknown as TypedDocumentString<UnfollowPromptMutation, UnfollowPromptMutationVariables>;
export const FollowUserDocument = new TypedDocumentString(`
    mutation FollowUser($userId: Int!) {
  insert_followed_user(user_id: $userId) {
    id
    error
  }
}
    `) as unknown as TypedDocumentString<FollowUserMutation, FollowUserMutationVariables>;
export const UnfollowUserDocument = new TypedDocumentString(`
    mutation UnfollowUser($userId: Int!, $removeFollower: Boolean!) {
  delete_followed_user(user_id: $userId, remove_follower: $removeFollower) {
    id
    error
  }
}
    `) as unknown as TypedDocumentString<UnfollowUserMutation, UnfollowUserMutationVariables>;
export const BlockUserDocument = new TypedDocumentString(`
    mutation BlockUser($userId: Int!, $type: String!) {
  insert_block(blocked_user_id: $userId, type: $type) {
    id
    error
  }
}
    `) as unknown as TypedDocumentString<BlockUserMutation, BlockUserMutationVariables>;
export const UnblockUserDocument = new TypedDocumentString(`
    mutation UnblockUser($id: bigint!) {
  delete_user_blocks_by_pk(id: $id) {
    id
  }
}
    `) as unknown as TypedDocumentString<UnblockUserMutation, UnblockUserMutationVariables>;
export const LikeDocument = new TypedDocumentString(`
    mutation Like($likeableId: Int!, $likeableType: String!) {
  upsert_like(likeable_id: $likeableId, likeable_type: $likeableType) {
    id
    likesCount: likes_count
  }
}
    `) as unknown as TypedDocumentString<LikeMutation, LikeMutationVariables>;
export const UnlikeDocument = new TypedDocumentString(`
    mutation Unlike($likeableId: Int!, $likeableType: String!) {
  delete_like(likeable_id: $likeableId, likeable_type: $likeableType) {
    likesCount: likes_count
  }
}
    `) as unknown as TypedDocumentString<UnlikeMutation, UnlikeMutationVariables>;
export const DeleteActivityDocument = new TypedDocumentString(`
    mutation DeleteActivity($id: Int!) {
  delete_activities_by_pk(id: $id) {
    id
  }
}
    `) as unknown as TypedDocumentString<DeleteActivityMutation, DeleteActivityMutationVariables>;
export const CreateVibeDocument = new TypedDocumentString(`
    mutation CreateVibe($object: VibeInput!) {
  insert_vibe(object: $object) {
    id
    errors
    vibe {
      ...VibeSummary
    }
  }
}
    fragment VibeSummary on vibes {
  id
  slug
  title
  description
  vibeType: vibe_type
  resultType: result_type
  privacySettingId: privacy_setting_id
  featured
  likesCount: likes_count
  userId: user_id
  createdAt: created_at
  updatedAt: updated_at
  booksGeneratedAt: books_generated_at
}`) as unknown as TypedDocumentString<CreateVibeMutation, CreateVibeMutationVariables>;
export const UpdateVibeDocument = new TypedDocumentString(`
    mutation UpdateVibe($id: Int!, $object: VibeInput!) {
  update_vibe(id: $id, object: $object) {
    id
    errors
    vibe {
      ...VibeSummary
    }
  }
}
    fragment VibeSummary on vibes {
  id
  slug
  title
  description
  vibeType: vibe_type
  resultType: result_type
  privacySettingId: privacy_setting_id
  featured
  likesCount: likes_count
  userId: user_id
  createdAt: created_at
  updatedAt: updated_at
  booksGeneratedAt: books_generated_at
}`) as unknown as TypedDocumentString<UpdateVibeMutation, UpdateVibeMutationVariables>;
export const DeleteVibeDocument = new TypedDocumentString(`
    mutation DeleteVibe($id: Int!) {
  delete_vibe(id: $id) {
    success
  }
}
    `) as unknown as TypedDocumentString<DeleteVibeMutation, DeleteVibeMutationVariables>;
export const GetAuthorDocument = new TypedDocumentString(`
    query GetAuthor($id: Int!) {
  authors_by_pk(id: $id) {
    ...AuthorDetail
  }
}
    fragment AuthorSummary on authors {
  id
  slug
  name
  cachedImage: cached_image
  booksCount: books_count
}
fragment AuthorDetail on authors {
  ...AuthorSummary
  bio
  bornYear: born_year
  deathYear: death_year
  location
  usersCount: users_count
  canonicalId: canonical_id
}`) as unknown as TypedDocumentString<GetAuthorQuery, GetAuthorQueryVariables>;
export const GetAuthorBySlugDocument = new TypedDocumentString(`
    query GetAuthorBySlug($slug: String!) {
  authors(where: { slug: { _eq: $slug } }, limit: 1) {
    ...AuthorDetail
  }
}
    fragment AuthorSummary on authors {
  id
  slug
  name
  cachedImage: cached_image
  booksCount: books_count
}
fragment AuthorDetail on authors {
  ...AuthorSummary
  bio
  bornYear: born_year
  deathYear: death_year
  location
  usersCount: users_count
  canonicalId: canonical_id
}`) as unknown as TypedDocumentString<GetAuthorBySlugQuery, GetAuthorBySlugQueryVariables>;
export const GetAuthorBooksDocument = new TypedDocumentString(`
    query GetAuthorBooks($authorId: Int!, $limit: Int = 25, $offset: Int = 0) {
  books(
    where: { book_status_id: { _eq: 1 }, contributions: { author_id: { _eq: $authorId } } }
    order_by: [{ users_count: desc }, { id: asc }]
    limit: $limit
    offset: $offset
  ) {
    ...BookSummary
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}`) as unknown as TypedDocumentString<GetAuthorBooksQuery, GetAuthorBooksQueryVariables>;
export const GetAuthorSeriesDocument = new TypedDocumentString(`
    query GetAuthorSeries($authorId: Int!) {
  series(
    where: {
      canonical_id: { _is_null: true }
      book_series: {
        book: { book_status_id: { _eq: 1 }, contributions: { author_id: { _eq: $authorId } } }
      }
    }
    order_by: { name: asc }
  ) {
    ...SeriesSummary
  }
}
    fragment SeriesSummary on series {
  id
  slug
  name
  booksCount: books_count
  primaryBooksCount: primary_books_count
  isCompleted: is_completed
}`) as unknown as TypedDocumentString<GetAuthorSeriesQuery, GetAuthorSeriesQueryVariables>;
export const GetSeriesDocument = new TypedDocumentString(`
    query GetSeries($id: Int!) {
  series_by_pk(id: $id) {
    ...SeriesDetail
  }
}
    fragment AuthorSummary on authors {
  id
  slug
  name
  cachedImage: cached_image
  booksCount: books_count
}
fragment SeriesSummary on series {
  id
  slug
  name
  booksCount: books_count
  primaryBooksCount: primary_books_count
  isCompleted: is_completed
}
fragment SeriesDetail on series {
  ...SeriesSummary
  description
  canonicalId: canonical_id
  author {
    ...AuthorSummary
  }
}`) as unknown as TypedDocumentString<GetSeriesQuery, GetSeriesQueryVariables>;
export const GetSeriesBySlugDocument = new TypedDocumentString(`
    query GetSeriesBySlug($slug: String!) {
  series(where: { slug: { _eq: $slug } }, limit: 1) {
    ...SeriesDetail
  }
}
    fragment AuthorSummary on authors {
  id
  slug
  name
  cachedImage: cached_image
  booksCount: books_count
}
fragment SeriesSummary on series {
  id
  slug
  name
  booksCount: books_count
  primaryBooksCount: primary_books_count
  isCompleted: is_completed
}
fragment SeriesDetail on series {
  ...SeriesSummary
  description
  canonicalId: canonical_id
  author {
    ...AuthorSummary
  }
}`) as unknown as TypedDocumentString<GetSeriesBySlugQuery, GetSeriesBySlugQueryVariables>;
export const GetSeriesBooksDocument = new TypedDocumentString(`
    query GetSeriesBooks($seriesId: Int!, $limit: Int = 50, $offset: Int = 0) {
  book_series(
    where: { series_id: { _eq: $seriesId }, book: { book_status_id: { _eq: 1 } } }
    order_by: [{ position: asc_nulls_last }, { book: { users_count: desc } }, { id: asc }]
    limit: $limit
    offset: $offset
  ) {
    position
    details
    compilation
    featured
    book {
      ...BookSummary
    }
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}`) as unknown as TypedDocumentString<GetSeriesBooksQuery, GetSeriesBooksQueryVariables>;
export const GetBookDocument = new TypedDocumentString(`
    query GetBook($id: Int!) {
  books_by_pk(id: $id) {
    ...BookDetail
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment BookDetail on books {
  ...BookSummary
  headline
  description
  releaseDate: release_date
  editionsCount: editions_count
  cachedTags: cached_tags
  cachedHeaderImage: cached_header_image
  ratingsDistribution: ratings_distribution
  contributions {
    contribution
    author {
      ...AuthorSummary
    }
  }
  bookSeries: book_series(where: { series: { canonical_id: { _is_null: true } } }) {
    position
    series {
      ...SeriesSummary
    }
  }
}
fragment AuthorSummary on authors {
  id
  slug
  name
  cachedImage: cached_image
  booksCount: books_count
}
fragment SeriesSummary on series {
  id
  slug
  name
  booksCount: books_count
  primaryBooksCount: primary_books_count
  isCompleted: is_completed
}`) as unknown as TypedDocumentString<GetBookQuery, GetBookQueryVariables>;
export const GetBookBySlugDocument = new TypedDocumentString(`
    query GetBookBySlug($slug: String!) {
  books(where: { slug: { _eq: $slug } }, limit: 1) {
    ...BookDetail
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment BookDetail on books {
  ...BookSummary
  headline
  description
  releaseDate: release_date
  editionsCount: editions_count
  cachedTags: cached_tags
  cachedHeaderImage: cached_header_image
  ratingsDistribution: ratings_distribution
  contributions {
    contribution
    author {
      ...AuthorSummary
    }
  }
  bookSeries: book_series(where: { series: { canonical_id: { _is_null: true } } }) {
    position
    series {
      ...SeriesSummary
    }
  }
}
fragment AuthorSummary on authors {
  id
  slug
  name
  cachedImage: cached_image
  booksCount: books_count
}
fragment SeriesSummary on series {
  id
  slug
  name
  booksCount: books_count
  primaryBooksCount: primary_books_count
  isCompleted: is_completed
}`) as unknown as TypedDocumentString<GetBookBySlugQuery, GetBookBySlugQueryVariables>;
export const GetBooksDocument = new TypedDocumentString(`
    query GetBooks($ids: [Int!]!) {
  books(where: { id: { _in: $ids } }) {
    ...BookSummary
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}`) as unknown as TypedDocumentString<GetBooksQuery, GetBooksQueryVariables>;
export const GetEditionsForBookDocument = new TypedDocumentString(`
    query GetEditionsForBook($bookId: Int!, $limit: Int = 25, $offset: Int = 0) {
  editions(
    where: { book_id: { _eq: $bookId } }
    order_by: { users_count: desc }
    limit: $limit
    offset: $offset
  ) {
    ...EditionSummary
  }
}
    fragment EditionSummary on editions {
  id
  bookId: book_id
  title
  subtitle
  isbn10: isbn_10
  isbn13: isbn_13
  asin
  pages
  audioSeconds: audio_seconds
  releaseDate: release_date
  releaseYear: release_year
  readingFormatId: reading_format_id
  editionFormat: edition_format
  cachedImage: cached_image
  language {
    code2
    language
  }
  publisher {
    id
    name
    slug
  }
}`) as unknown as TypedDocumentString<GetEditionsForBookQuery, GetEditionsForBookQueryVariables>;
export const FindEditionsByIsbnDocument = new TypedDocumentString(`
    query FindEditionsByIsbn($isbns: [String!]!) {
  editions(
    where: { _or: [{ isbn_13: { _in: $isbns } }, { isbn_10: { _in: $isbns } }] }
    order_by: { users_count: desc }
  ) {
    ...EditionSummary
    book {
      ...BookSummary
    }
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment EditionSummary on editions {
  id
  bookId: book_id
  title
  subtitle
  isbn10: isbn_10
  isbn13: isbn_13
  asin
  pages
  audioSeconds: audio_seconds
  releaseDate: release_date
  releaseYear: release_year
  readingFormatId: reading_format_id
  editionFormat: edition_format
  cachedImage: cached_image
  language {
    code2
    language
  }
  publisher {
    id
    name
    slug
  }
}`) as unknown as TypedDocumentString<FindEditionsByIsbnQuery, FindEditionsByIsbnQueryVariables>;
export const TrendingBookIdsDocument = new TypedDocumentString(`
    query TrendingBookIds($duration: TrendingDuration = month, $limit: Int = 25, $offset: Int = 0) {
  books_trending(duration: $duration, limit: $limit, offset: $offset) {
    ids
    error
  }
}
    `) as unknown as TypedDocumentString<TrendingBookIdsQuery, TrendingBookIdsQueryVariables>;
export const SimilarBookIdsDocument = new TypedDocumentString(`
    query SimilarBookIds($id: Int!) {
  books_by_pk(id: $id) {
    id
    cachedSimilarBookIds: cached_similar_book_ids
    cachedSimilarBooksUpdatedAt: cached_similar_books_updated_at
  }
}
    `) as unknown as TypedDocumentString<SimilarBookIdsQuery, SimilarBookIdsQueryVariables>;
export const ReleasedBooksDocument = new TypedDocumentString(`
    query ReleasedBooks($from: date!, $to: date!, $limit: Int = 25, $offset: Int = 0) {
  books(
    where: { release_date: { _gte: $from, _lte: $to }, book_status_id: { _eq: 1 } }
    order_by: [{ users_count: desc }, { id: asc }]
    limit: $limit
    offset: $offset
  ) {
    ...BookSummary
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}`) as unknown as TypedDocumentString<ReleasedBooksQuery, ReleasedBooksQueryVariables>;
export const GetEditionDocument = new TypedDocumentString(`
    query GetEdition($id: Int!) {
  editions_by_pk(id: $id) {
    ...EditionSummary
    book {
      ...BookSummary
    }
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment EditionSummary on editions {
  id
  bookId: book_id
  title
  subtitle
  isbn10: isbn_10
  isbn13: isbn_13
  asin
  pages
  audioSeconds: audio_seconds
  releaseDate: release_date
  releaseYear: release_year
  readingFormatId: reading_format_id
  editionFormat: edition_format
  cachedImage: cached_image
  language {
    code2
    language
  }
  publisher {
    id
    name
    slug
  }
}`) as unknown as TypedDocumentString<GetEditionQuery, GetEditionQueryVariables>;
export const FindBookMappingsDocument = new TypedDocumentString(`
    query FindBookMappings($platformId: Int!, $externalIds: [String!]!) {
  book_mappings(
    where: {
      platform_id: { _eq: $platformId }
      external_id: { _in: $externalIds }
      book: { book_status_id: { _eq: 1 } }
    }
    order_by: { id: asc }
  ) {
    externalId: external_id
    editionId: edition_id
    book {
      ...BookSummary
    }
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}`) as unknown as TypedDocumentString<FindBookMappingsQuery, FindBookMappingsQueryVariables>;
export const GetJournalForBookDocument = new TypedDocumentString(`
    query GetJournalForBook($userId: Int!, $bookId: Int!, $limit: Int = 25, $offset: Int = 0) {
  reading_journals(
    where: { user_id: { _eq: $userId }, book_id: { _eq: $bookId } }
    order_by: { action_at: desc }
    limit: $limit
    offset: $offset
  ) {
    ...JournalEntry
  }
}
    fragment JournalEntry on reading_journals {
  id
  bookId: book_id
  editionId: edition_id
  event
  entry
  metadata
  privacySettingId: privacy_setting_id
  actionAt: action_at
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetJournalForBookQuery, GetJournalForBookQueryVariables>;
export const GetGoalsDocument = new TypedDocumentString(`
    query GetGoals($userId: Int!, $includeArchived: Boolean = false) {
  goals(
    where: {
      user_id: { _eq: $userId }
      _or: [{ archived: { _eq: false } }, { archived: { _eq: $includeArchived } }]
    }
    order_by: { end_date: desc }
  ) {
    ...Goal
  }
}
    fragment Goal on goals {
  id
  metric
  goal
  progress
  description
  startDate: start_date
  endDate: end_date
  conditions
  archived
  completedAt: completed_at
  state
  privacySettingId: privacy_setting_id
}`) as unknown as TypedDocumentString<GetGoalsQuery, GetGoalsQueryVariables>;
export const GetGoalDocument = new TypedDocumentString(`
    query GetGoal($id: Int!) {
  goals_by_pk(id: $id) {
    ...Goal
  }
}
    fragment Goal on goals {
  id
  metric
  goal
  progress
  description
  startDate: start_date
  endDate: end_date
  conditions
  archived
  completedAt: completed_at
  state
  privacySettingId: privacy_setting_id
}`) as unknown as TypedDocumentString<GetGoalQuery, GetGoalQueryVariables>;
export const GetLibraryDocument = new TypedDocumentString(`
    query GetLibrary($userId: Int!, $statusIds: [Int!] = [1, 2, 3, 4, 5, 6], $limit: Int = 25, $offset: Int = 0, $orderBy: [user_books_order_by!] = [{ updated_at: desc_nulls_last }]) {
  user_books(
    where: { user_id: { _eq: $userId }, status_id: { _in: $statusIds } }
    order_by: $orderBy
    limit: $limit
    offset: $offset
  ) {
    ...UserBook
    book {
      ...BookSummary
    }
    edition {
      ...EditionSummary
    }
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment EditionSummary on editions {
  id
  bookId: book_id
  title
  subtitle
  isbn10: isbn_10
  isbn13: isbn_13
  asin
  pages
  audioSeconds: audio_seconds
  releaseDate: release_date
  releaseYear: release_year
  readingFormatId: reading_format_id
  editionFormat: edition_format
  cachedImage: cached_image
  language {
    code2
    language
  }
  publisher {
    id
    name
    slug
  }
}
fragment UserBookRead on user_book_reads {
  id
  userBookId: user_book_id
  editionId: edition_id
  startedAt: started_at
  finishedAt: finished_at
  finishedAtPrecision: finished_at_precision
  pausedAt: paused_at
  progress
  progressPages: progress_pages
  progressSeconds: progress_seconds
  edition {
    id
    pages
    audioSeconds: audio_seconds
    readingFormatId: reading_format_id
  }
}
fragment UserBook on user_books {
  id
  bookId: book_id
  editionId: edition_id
  userId: user_id
  statusId: status_id
  rating
  privacySettingId: privacy_setting_id
  hasReview: has_review
  owned
  readCount: read_count
  dateAdded: date_added
  firstStartedReadingDate: first_started_reading_date
  lastReadDate: last_read_date
  updatedAt: updated_at
  userBookReads: user_book_reads(order_by: { id: desc }) {
    ...UserBookRead
  }
}`) as unknown as TypedDocumentString<GetLibraryQuery, GetLibraryQueryVariables>;
export const CountLibraryDocument = new TypedDocumentString(`
    query CountLibrary($userId: Int!, $statusIds: [Int!] = [1, 2, 3, 4, 5, 6]) {
  user_books_aggregate(
    where: { user_id: { _eq: $userId }, status_id: { _in: $statusIds } }
  ) {
    aggregate {
      count
    }
  }
}
    `) as unknown as TypedDocumentString<CountLibraryQuery, CountLibraryQueryVariables>;
export const GetUserBookForBookDocument = new TypedDocumentString(`
    query GetUserBookForBook($userId: Int!, $bookId: Int!) {
  user_books(
    where: { user_id: { _eq: $userId }, book_id: { _eq: $bookId } }
    limit: 1
  ) {
    ...UserBookFull
    edition {
      ...EditionSummary
    }
  }
}
    fragment EditionSummary on editions {
  id
  bookId: book_id
  title
  subtitle
  isbn10: isbn_10
  isbn13: isbn_13
  asin
  pages
  audioSeconds: audio_seconds
  releaseDate: release_date
  releaseYear: release_year
  readingFormatId: reading_format_id
  editionFormat: edition_format
  cachedImage: cached_image
  language {
    code2
    language
  }
  publisher {
    id
    name
    slug
  }
}
fragment UserBookRead on user_book_reads {
  id
  userBookId: user_book_id
  editionId: edition_id
  startedAt: started_at
  finishedAt: finished_at
  finishedAtPrecision: finished_at_precision
  pausedAt: paused_at
  progress
  progressPages: progress_pages
  progressSeconds: progress_seconds
  edition {
    id
    pages
    audioSeconds: audio_seconds
    readingFormatId: reading_format_id
  }
}
fragment UserBook on user_books {
  id
  bookId: book_id
  editionId: edition_id
  userId: user_id
  statusId: status_id
  rating
  privacySettingId: privacy_setting_id
  hasReview: has_review
  owned
  readCount: read_count
  dateAdded: date_added
  firstStartedReadingDate: first_started_reading_date
  lastReadDate: last_read_date
  updatedAt: updated_at
  userBookReads: user_book_reads(order_by: { id: desc }) {
    ...UserBookRead
  }
}
fragment UserBookFull on user_books {
  ...UserBook
  reviewMarkdown: review_markdown
  reviewHasSpoilers: review_has_spoilers
  reviewedAt: reviewed_at
  privateNotes: private_notes
  recommendedBy: recommended_by
  recommendedFor: recommended_for
}`) as unknown as TypedDocumentString<GetUserBookForBookQuery, GetUserBookForBookQueryVariables>;
export const GetUserBookDocument = new TypedDocumentString(`
    query GetUserBook($id: Int!) {
  user_books_by_pk(id: $id) {
    ...UserBookFull
    book {
      ...BookSummary
    }
    edition {
      ...EditionSummary
    }
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment EditionSummary on editions {
  id
  bookId: book_id
  title
  subtitle
  isbn10: isbn_10
  isbn13: isbn_13
  asin
  pages
  audioSeconds: audio_seconds
  releaseDate: release_date
  releaseYear: release_year
  readingFormatId: reading_format_id
  editionFormat: edition_format
  cachedImage: cached_image
  language {
    code2
    language
  }
  publisher {
    id
    name
    slug
  }
}
fragment UserBookRead on user_book_reads {
  id
  userBookId: user_book_id
  editionId: edition_id
  startedAt: started_at
  finishedAt: finished_at
  finishedAtPrecision: finished_at_precision
  pausedAt: paused_at
  progress
  progressPages: progress_pages
  progressSeconds: progress_seconds
  edition {
    id
    pages
    audioSeconds: audio_seconds
    readingFormatId: reading_format_id
  }
}
fragment UserBook on user_books {
  id
  bookId: book_id
  editionId: edition_id
  userId: user_id
  statusId: status_id
  rating
  privacySettingId: privacy_setting_id
  hasReview: has_review
  owned
  readCount: read_count
  dateAdded: date_added
  firstStartedReadingDate: first_started_reading_date
  lastReadDate: last_read_date
  updatedAt: updated_at
  userBookReads: user_book_reads(order_by: { id: desc }) {
    ...UserBookRead
  }
}
fragment UserBookFull on user_books {
  ...UserBook
  reviewMarkdown: review_markdown
  reviewHasSpoilers: review_has_spoilers
  reviewedAt: reviewed_at
  privateNotes: private_notes
  recommendedBy: recommended_by
  recommendedFor: recommended_for
}`) as unknown as TypedDocumentString<GetUserBookQuery, GetUserBookQueryVariables>;
export const GetLibraryChangesDocument = new TypedDocumentString(`
    query GetLibraryChanges($userId: Int!, $after: timestamptz = "1970-01-01T00:00:00Z", $afterId: Int = 0, $limit: Int = 25) {
  user_books(
    where: {
      user_id: { _eq: $userId }
      _or: [
        { updated_at: { _gt: $after } }
        { updated_at: { _eq: $after }, id: { _gt: $afterId } }
      ]
    }
    order_by: [{ updated_at: asc }, { id: asc }]
    limit: $limit
  ) {
    ...UserBook
    book {
      ...BookSummary
    }
    edition {
      ...EditionSummary
    }
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment EditionSummary on editions {
  id
  bookId: book_id
  title
  subtitle
  isbn10: isbn_10
  isbn13: isbn_13
  asin
  pages
  audioSeconds: audio_seconds
  releaseDate: release_date
  releaseYear: release_year
  readingFormatId: reading_format_id
  editionFormat: edition_format
  cachedImage: cached_image
  language {
    code2
    language
  }
  publisher {
    id
    name
    slug
  }
}
fragment UserBookRead on user_book_reads {
  id
  userBookId: user_book_id
  editionId: edition_id
  startedAt: started_at
  finishedAt: finished_at
  finishedAtPrecision: finished_at_precision
  pausedAt: paused_at
  progress
  progressPages: progress_pages
  progressSeconds: progress_seconds
  edition {
    id
    pages
    audioSeconds: audio_seconds
    readingFormatId: reading_format_id
  }
}
fragment UserBook on user_books {
  id
  bookId: book_id
  editionId: edition_id
  userId: user_id
  statusId: status_id
  rating
  privacySettingId: privacy_setting_id
  hasReview: has_review
  owned
  readCount: read_count
  dateAdded: date_added
  firstStartedReadingDate: first_started_reading_date
  lastReadDate: last_read_date
  updatedAt: updated_at
  userBookReads: user_book_reads(order_by: { id: desc }) {
    ...UserBookRead
  }
}`) as unknown as TypedDocumentString<GetLibraryChangesQuery, GetLibraryChangesQueryVariables>;
export const GetLibraryIdsDocument = new TypedDocumentString(`
    query GetLibraryIds($userId: Int!) {
  user_books(where: { user_id: { _eq: $userId } }) {
    id
  }
}
    `) as unknown as TypedDocumentString<GetLibraryIdsQuery, GetLibraryIdsQueryVariables>;
export const GetFinishedReadsDocument = new TypedDocumentString(`
    query GetFinishedReads($userId: Int!, $from: date!, $to: date!, $limit: Int = 25, $offset: Int = 0) {
  user_book_reads(
    where: {
      user_book: { user_id: { _eq: $userId } }
      finished_at: { _gte: $from, _lte: $to }
    }
    order_by: [{ finished_at: desc }, { id: desc }]
    limit: $limit
    offset: $offset
  ) {
    ...UserBookRead
    userBook: user_book {
      id
      bookId: book_id
      rating
      book {
        ...BookSummary
      }
    }
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment UserBookRead on user_book_reads {
  id
  userBookId: user_book_id
  editionId: edition_id
  startedAt: started_at
  finishedAt: finished_at
  finishedAtPrecision: finished_at_precision
  pausedAt: paused_at
  progress
  progressPages: progress_pages
  progressSeconds: progress_seconds
  edition {
    id
    pages
    audioSeconds: audio_seconds
    readingFormatId: reading_format_id
  }
}`) as unknown as TypedDocumentString<GetFinishedReadsQuery, GetFinishedReadsQueryVariables>;
export const GetOwnedBooksDocument = new TypedDocumentString(`
    query GetOwnedBooks($userId: Int!, $limit: Int = 25, $offset: Int = 0) {
  lists(where: { user_id: { _eq: $userId }, slug: { _eq: "owned" } }, limit: 1) {
    id
    listBooks: list_books(
      order_by: [{ date_added: desc }, { id: desc }]
      limit: $limit
      offset: $offset
    ) {
      ...ListBook
      book {
        ...BookSummary
      }
      edition {
        ...EditionSummary
      }
    }
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment EditionSummary on editions {
  id
  bookId: book_id
  title
  subtitle
  isbn10: isbn_10
  isbn13: isbn_13
  asin
  pages
  audioSeconds: audio_seconds
  releaseDate: release_date
  releaseYear: release_year
  readingFormatId: reading_format_id
  editionFormat: edition_format
  cachedImage: cached_image
  language {
    code2
    language
  }
  publisher {
    id
    name
    slug
  }
}
fragment ListBook on list_books {
  id
  listId: list_id
  bookId: book_id
  editionId: edition_id
  position
  reason
  dateAdded: date_added
}`) as unknown as TypedDocumentString<GetOwnedBooksQuery, GetOwnedBooksQueryVariables>;
export const GetListsForUserDocument = new TypedDocumentString(`
    query GetListsForUser($userId: Int!, $limit: Int = 25, $offset: Int = 0) {
  lists(
    where: { user_id: { _eq: $userId } }
    order_by: { updated_at: desc_nulls_last }
    limit: $limit
    offset: $offset
  ) {
    ...ListSummary
  }
}
    fragment ListSummary on lists {
  id
  slug
  name
  description
  privacySettingId: privacy_setting_id
  ranked
  defaultView: default_view
  booksCount: books_count
  likesCount: likes_count
  userId: user_id
  createdAt: created_at
  updatedAt: updated_at
}`) as unknown as TypedDocumentString<GetListsForUserQuery, GetListsForUserQueryVariables>;
export const GetListDocument = new TypedDocumentString(`
    query GetList($id: Int!, $limit: Int = 50, $offset: Int = 0) {
  lists_by_pk(id: $id) {
    ...ListSummary
    listBooks: list_books(
      order_by: { position: asc }
      limit: $limit
      offset: $offset
    ) {
      ...ListBook
      book {
        ...BookSummary
      }
    }
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment ListSummary on lists {
  id
  slug
  name
  description
  privacySettingId: privacy_setting_id
  ranked
  defaultView: default_view
  booksCount: books_count
  likesCount: likes_count
  userId: user_id
  createdAt: created_at
  updatedAt: updated_at
}
fragment ListBook on list_books {
  id
  listId: list_id
  bookId: book_id
  editionId: edition_id
  position
  reason
  dateAdded: date_added
}`) as unknown as TypedDocumentString<GetListQuery, GetListQueryVariables>;
export const FindListBookDocument = new TypedDocumentString(`
    query FindListBook($listId: Int!, $bookId: Int!) {
  list_books(
    where: { list_id: { _eq: $listId }, book_id: { _eq: $bookId } }
    limit: 1
  ) {
    ...ListBook
  }
}
    fragment ListBook on list_books {
  id
  listId: list_id
  bookId: book_id
  editionId: edition_id
  position
  reason
  dateAdded: date_added
}`) as unknown as TypedDocumentString<FindListBookQuery, FindListBookQueryVariables>;
export const GetFollowedListsDocument = new TypedDocumentString(`
    query GetFollowedLists($userId: Int!, $limit: Int = 25, $offset: Int = 0) {
  followed_lists(
    where: { user_id: { _eq: $userId } }
    order_by: { created_at: desc }
    limit: $limit
    offset: $offset
  ) {
    id
    createdAt: created_at
    list {
      ...ListSummary
    }
  }
}
    fragment ListSummary on lists {
  id
  slug
  name
  description
  privacySettingId: privacy_setting_id
  ranked
  defaultView: default_view
  booksCount: books_count
  likesCount: likes_count
  userId: user_id
  createdAt: created_at
  updatedAt: updated_at
}`) as unknown as TypedDocumentString<GetFollowedListsQuery, GetFollowedListsQueryVariables>;
export const GetListMembersDocument = new TypedDocumentString(`
    query GetListMembers($listId: Int!) {
  list_members(
    where: { list_id: { _eq: $listId } }
    order_by: { created_at: asc }
  ) {
    id
    listId: list_id
    userId: user_id
    status
    createdAt: created_at
    user {
      id
      username
      name
      cachedImage: cached_image
    }
  }
}
    `) as unknown as TypedDocumentString<GetListMembersQuery, GetListMembersQueryVariables>;
export const GetListMembershipsDocument = new TypedDocumentString(`
    query GetListMemberships($userId: Int!) {
  list_members(
    where: { user_id: { _eq: $userId } }
    order_by: { created_at: desc }
  ) {
    id
    listId: list_id
    userId: user_id
    status
    createdAt: created_at
    list {
      ...ListSummary
    }
  }
}
    fragment ListSummary on lists {
  id
  slug
  name
  description
  privacySettingId: privacy_setting_id
  ranked
  defaultView: default_view
  booksCount: books_count
  likesCount: likes_count
  userId: user_id
  createdAt: created_at
  updatedAt: updated_at
}`) as unknown as TypedDocumentString<GetListMembershipsQuery, GetListMembershipsQueryVariables>;
export const GetListBookIdsDocument = new TypedDocumentString(`
    query GetListBookIds($listId: Int!) {
  list_books(where: { list_id: { _eq: $listId } }, order_by: { id: asc }) {
    id
  }
}
    `) as unknown as TypedDocumentString<GetListBookIdsQuery, GetListBookIdsQueryVariables>;
export const MeDocument = new TypedDocumentString(`
    query Me {
  me {
    ...Me
  }
}
    fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}
fragment Me on users {
  ...UserProfile
  accountPrivacySettingId: account_privacy_setting_id
  activityPrivacySettingsId: activity_privacy_settings_id
}`) as unknown as TypedDocumentString<MeQuery, MeQueryVariables>;
export const GetNotificationsDocument = new TypedDocumentString(`
    query GetNotifications($userId: Int!, $limit: Int = 25, $offset: Int = 0) {
  notification_deliveries(
    where: { user_id: { _eq: $userId }, channel_id: { _eq: 1 } }
    order_by: [{ sent_at: desc }, { id: desc }]
    limit: $limit
    offset: $offset
  ) {
    id
    read
    readAt: read_at
    sentAt: sent_at
    notification {
      id
      title
      description
      link
      linkText: link_text
      notificationTypeId: notification_type_id
      priority
      createdAt: created_at
      notifierUser: notifier_user {
        ...UserProfile
      }
    }
  }
}
    fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetNotificationsQuery, GetNotificationsQueryVariables>;
export const CountUnreadNotificationsDocument = new TypedDocumentString(`
    query CountUnreadNotifications($userId: Int!) {
  notification_deliveries_aggregate(
    where: { user_id: { _eq: $userId }, channel_id: { _eq: 1 }, read: { _eq: false } }
  ) {
    aggregate {
      count
    }
  }
}
    `) as unknown as TypedDocumentString<CountUnreadNotificationsQuery, CountUnreadNotificationsQueryVariables>;
export const GetPromptDocument = new TypedDocumentString(`
    query GetPrompt($id: Int!) {
  prompts_by_pk(id: $id) {
    ...PromptSummary
  }
}
    fragment PromptSummary on prompts {
  id
  slug
  question
  description
  featured
  answersCount: answers_count
  booksCount: books_count
  usersCount: users_count
  userId: user_id
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetPromptQuery, GetPromptQueryVariables>;
export const GetPromptBySlugDocument = new TypedDocumentString(`
    query GetPromptBySlug($slug: String!) {
  prompts(where: { slug: { _eq: $slug } }, limit: 1) {
    ...PromptSummary
  }
}
    fragment PromptSummary on prompts {
  id
  slug
  question
  description
  featured
  answersCount: answers_count
  booksCount: books_count
  usersCount: users_count
  userId: user_id
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetPromptBySlugQuery, GetPromptBySlugQueryVariables>;
export const GetPromptsDocument = new TypedDocumentString(`
    query GetPrompts($where: prompts_bool_exp!, $orderBy: [prompts_order_by!]!, $limit: Int = 25, $offset: Int = 0) {
  prompts(where: $where, order_by: $orderBy, limit: $limit, offset: $offset) {
    ...PromptSummary
  }
}
    fragment PromptSummary on prompts {
  id
  slug
  question
  description
  featured
  answersCount: answers_count
  booksCount: books_count
  usersCount: users_count
  userId: user_id
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetPromptsQuery, GetPromptsQueryVariables>;
export const GetPromptsForUserDocument = new TypedDocumentString(`
    query GetPromptsForUser($userId: Int!, $limit: Int = 25, $offset: Int = 0) {
  prompts(
    where: { user_id: { _eq: $userId } }
    order_by: { created_at: desc }
    limit: $limit
    offset: $offset
  ) {
    ...PromptSummary
  }
}
    fragment PromptSummary on prompts {
  id
  slug
  question
  description
  featured
  answersCount: answers_count
  booksCount: books_count
  usersCount: users_count
  userId: user_id
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetPromptsForUserQuery, GetPromptsForUserQueryVariables>;
export const GetPromptBooksDocument = new TypedDocumentString(`
    query GetPromptBooks($promptId: Int!, $limit: Int = 25, $offset: Int = 0) {
  prompt_books_summary(
    where: { prompt_id: { _eq: $promptId } }
    order_by: { answers_count: desc }
    limit: $limit
    offset: $offset
  ) {
    answersCount: answers_count
    book {
      ...BookSummary
    }
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}`) as unknown as TypedDocumentString<GetPromptBooksQuery, GetPromptBooksQueryVariables>;
export const GetPromptsForBookDocument = new TypedDocumentString(`
    query GetPromptsForBook($bookId: Int!, $limit: Int = 25, $offset: Int = 0) {
  prompt_books_summary(
    where: { book_id: { _eq: $bookId } }
    order_by: { answers_count: desc }
    limit: $limit
    offset: $offset
  ) {
    answersCount: answers_count
    prompt {
      ...PromptSummary
    }
  }
}
    fragment PromptSummary on prompts {
  id
  slug
  question
  description
  featured
  answersCount: answers_count
  booksCount: books_count
  usersCount: users_count
  userId: user_id
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetPromptsForBookQuery, GetPromptsForBookQueryVariables>;
export const GetPromptAnswersForUserDocument = new TypedDocumentString(`
    query GetPromptAnswersForUser($userId: Int!, $promptId: Int!) {
  prompt_answers(
    where: { user_id: { _eq: $userId }, prompt_id: { _eq: $promptId } }
    order_by: { created_at: desc }
  ) {
    ...PromptAnswer
    book {
      ...BookSummary
    }
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment PromptAnswer on prompt_answers {
  id
  promptId: prompt_id
  bookId: book_id
  userId: user_id
  description
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetPromptAnswersForUserQuery, GetPromptAnswersForUserQueryVariables>;
export const GetFollowedPromptsDocument = new TypedDocumentString(`
    query GetFollowedPrompts($userId: Int!, $limit: Int = 25, $offset: Int = 0) {
  followed_prompts(
    where: { user_id: { _eq: $userId } }
    order_by: { created_at: desc }
    limit: $limit
    offset: $offset
  ) {
    id
    createdAt: created_at
    prompt {
      ...PromptSummary
    }
  }
}
    fragment PromptSummary on prompts {
  id
  slug
  question
  description
  featured
  answersCount: answers_count
  booksCount: books_count
  usersCount: users_count
  userId: user_id
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetFollowedPromptsQuery, GetFollowedPromptsQueryVariables>;
export const SearchDocument = new TypedDocumentString(`
    query Search($query: String!, $queryType: String = "book", $page: Int = 1, $perPage: Int = 25, $fields: String, $weights: String, $typos: String, $sort: String, $filterBy: String) {
  search(
    query: $query
    query_type: $queryType
    page: $page
    per_page: $perPage
    fields: $fields
    weights: $weights
    typos: $typos
    sort: $sort
    filter_by: $filterBy
  ) {
    ids
    results
    query
    queryType: query_type
    page
    perPage: per_page
    error
  }
}
    `) as unknown as TypedDocumentString<SearchQuery, SearchQueryVariables>;
export const GetUserDocument = new TypedDocumentString(`
    query GetUser($id: Int!) {
  users_by_pk(id: $id) {
    ...UserProfile
  }
}
    fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetUserQuery, GetUserQueryVariables>;
export const GetUserByUsernameDocument = new TypedDocumentString(`
    query GetUserByUsername($username: citext!) {
  users(where: { username: { _eq: $username } }, limit: 1) {
    ...UserProfile
  }
}
    fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetUserByUsernameQuery, GetUserByUsernameQueryVariables>;
export const GetFollowersDocument = new TypedDocumentString(`
    query GetFollowers($userId: Int!, $limit: Int = 25, $offset: Int = 0) {
  followed_users(
    where: { followed_user_id: { _eq: $userId } }
    order_by: { created_at: desc }
    limit: $limit
    offset: $offset
  ) {
    id
    createdAt: created_at
    user {
      ...UserProfile
    }
  }
}
    fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetFollowersQuery, GetFollowersQueryVariables>;
export const GetFollowingDocument = new TypedDocumentString(`
    query GetFollowing($userId: Int!, $limit: Int = 25, $offset: Int = 0) {
  followed_users(
    where: { user_id: { _eq: $userId } }
    order_by: { created_at: desc }
    limit: $limit
    offset: $offset
  ) {
    id
    createdAt: created_at
    followedUser: followed_user {
      ...UserProfile
    }
  }
}
    fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetFollowingQuery, GetFollowingQueryVariables>;
export const GetBlockedUsersDocument = new TypedDocumentString(`
    query GetBlockedUsers($userId: Int!) {
  user_blocks(
    where: { user_id: { _eq: $userId } }
    order_by: { created_at: desc }
  ) {
    id
    type
    createdAt: created_at
    blockedUser: blocked_user {
      ...UserProfile
    }
  }
}
    fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetBlockedUsersQuery, GetBlockedUsersQueryVariables>;
export const GetFriendsForBookDocument = new TypedDocumentString(`
    query GetFriendsForBook($userId: Int!, $bookId: Int!, $limit: Int = 25) {
  following_user_books(
    where: { user_id: { _eq: $userId }, book_id: { _eq: $bookId } }
    limit: $limit
  ) {
    userBook: user_book {
      ...UserBook
      reviewMarkdown: review_markdown
      reviewHasSpoilers: review_has_spoilers
      reviewedAt: reviewed_at
      user {
        ...UserProfile
      }
    }
  }
}
    fragment UserBookRead on user_book_reads {
  id
  userBookId: user_book_id
  editionId: edition_id
  startedAt: started_at
  finishedAt: finished_at
  finishedAtPrecision: finished_at_precision
  pausedAt: paused_at
  progress
  progressPages: progress_pages
  progressSeconds: progress_seconds
  edition {
    id
    pages
    audioSeconds: audio_seconds
    readingFormatId: reading_format_id
  }
}
fragment UserBook on user_books {
  id
  bookId: book_id
  editionId: edition_id
  userId: user_id
  statusId: status_id
  rating
  privacySettingId: privacy_setting_id
  hasReview: has_review
  owned
  readCount: read_count
  dateAdded: date_added
  firstStartedReadingDate: first_started_reading_date
  lastReadDate: last_read_date
  updatedAt: updated_at
  userBookReads: user_book_reads(order_by: { id: desc }) {
    ...UserBookRead
  }
}
fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetFriendsForBookQuery, GetFriendsForBookQueryVariables>;
export const GetActivitiesForUserDocument = new TypedDocumentString(`
    query GetActivitiesForUser($userId: Int!, $limit: Int = 25, $offset: Int = 0) {
  activities(
    where: { user_id: { _eq: $userId } }
    order_by: { created_at: desc }
    limit: $limit
    offset: $offset
  ) {
    ...Activity
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment Activity on activities {
  id
  event
  objectType: object_type
  data
  bookId: book_id
  userId: user_id
  likesCount: likes_count
  privacySettingId: privacy_setting_id
  createdAt: created_at
  user {
    ...UserProfile
  }
  book {
    ...BookSummary
  }
}
fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetActivitiesForUserQuery, GetActivitiesForUserQueryVariables>;
export const GetActivitiesForBookDocument = new TypedDocumentString(`
    query GetActivitiesForBook($bookId: Int!, $limit: Int = 25, $offset: Int = 0) {
  activities(
    where: { book_id: { _eq: $bookId } }
    order_by: { created_at: desc }
    limit: $limit
    offset: $offset
  ) {
    ...Activity
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment Activity on activities {
  id
  event
  objectType: object_type
  data
  bookId: book_id
  userId: user_id
  likesCount: likes_count
  privacySettingId: privacy_setting_id
  createdAt: created_at
  user {
    ...UserProfile
  }
  book {
    ...BookSummary
  }
}
fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetActivitiesForBookQuery, GetActivitiesForBookQueryVariables>;
export const GetFollowingActivitiesDocument = new TypedDocumentString(`
    query GetFollowingActivities($userId: Int!, $limit: Int = 25, $offset: Int = 0) {
  activities(
    where: { user: { followed_by_users: { user_id: { _eq: $userId } } } }
    order_by: { created_at: desc }
    limit: $limit
    offset: $offset
  ) {
    ...Activity
  }
}
    fragment BookSummary on books {
  id
  slug
  title
  subtitle
  releaseYear: release_year
  pages
  audioSeconds: audio_seconds
  rating
  ratingsCount: ratings_count
  usersCount: users_count
  cachedImage: cached_image
  cachedContributors: cached_contributors
  cachedFeaturedSeries: cached_featured_series
}
fragment Activity on activities {
  id
  event
  objectType: object_type
  data
  bookId: book_id
  userId: user_id
  likesCount: likes_count
  privacySettingId: privacy_setting_id
  createdAt: created_at
  user {
    ...UserProfile
  }
  book {
    ...BookSummary
  }
}
fragment UserProfile on users {
  id
  username
  name
  bio
  flair
  cachedImage: cached_image
  cachedCover: cached_cover
  cachedGenres: cached_genres
  booksCount: books_count
  followersCount: followers_count
  followedUsersCount: followed_users_count
  pro
  admin
  createdAt: created_at
}`) as unknown as TypedDocumentString<GetFollowingActivitiesQuery, GetFollowingActivitiesQueryVariables>;
export const GetStatsLibraryDocument = new TypedDocumentString(`
    query GetStatsLibrary($userId: Int!, $limit: Int = 100, $offset: Int = 0) {
  user_books(
    where: {
      user_id: { _eq: $userId }
      _or: [{ status_id: { _eq: 3 } }, { read_count: { _gte: 1 } }]
    }
    order_by: [{ id: asc }]
    limit: $limit
    offset: $offset
  ) {
    id
    statusId: status_id
    readCount: read_count
    lastReadDate: last_read_date
    rating
    edition {
      ...StatsEdition
    }
    book {
      id
      title
      slug
      pages
      audioSeconds: audio_seconds
      cachedTags: cached_tags
      cachedContributors: cached_contributors
      cachedImage: cached_image
    }
    userBookReads: user_book_reads(order_by: [{ id: asc }]) {
      id
      startedAt: started_at
      finishedAt: finished_at
      finishedAtPrecision: finished_at_precision
      progress
      edition {
        ...StatsEdition
      }
    }
  }
}
    fragment StatsEdition on editions {
  id
  pages
  audioSeconds: audio_seconds
  readingFormatId: reading_format_id
}`) as unknown as TypedDocumentString<GetStatsLibraryQuery, GetStatsLibraryQueryVariables>;
export const GetContributorRolesDocument = new TypedDocumentString(`
    query GetContributorRoles {
  contributor_roles {
    id
    primary
  }
  contributor_role_specializations(where: { primary: { _is_null: false } }) {
    contributorRoleId: contributor_role_id
    contributorSpecializationId: contributor_specialization_id
    primary
  }
}
    `) as unknown as TypedDocumentString<GetContributorRolesQuery, GetContributorRolesQueryVariables>;
export const GetVibesForUserDocument = new TypedDocumentString(`
    query GetVibesForUser($userId: Int!, $limit: Int = 25, $offset: Int = 0) {
  vibes(
    where: { user_id: { _eq: $userId } }
    order_by: { updated_at: desc }
    limit: $limit
    offset: $offset
  ) {
    ...VibeSummary
  }
}
    fragment VibeSummary on vibes {
  id
  slug
  title
  description
  vibeType: vibe_type
  resultType: result_type
  privacySettingId: privacy_setting_id
  featured
  likesCount: likes_count
  userId: user_id
  createdAt: created_at
  updatedAt: updated_at
  booksGeneratedAt: books_generated_at
}`) as unknown as TypedDocumentString<GetVibesForUserQuery, GetVibesForUserQueryVariables>;
export const GetVibeDocument = new TypedDocumentString(`
    query GetVibe($id: Int!) {
  vibes_by_pk(id: $id) {
    ...VibeSummary
  }
}
    fragment VibeSummary on vibes {
  id
  slug
  title
  description
  vibeType: vibe_type
  resultType: result_type
  privacySettingId: privacy_setting_id
  featured
  likesCount: likes_count
  userId: user_id
  createdAt: created_at
  updatedAt: updated_at
  booksGeneratedAt: books_generated_at
}`) as unknown as TypedDocumentString<GetVibeQuery, GetVibeQueryVariables>;
export const GetVibeBookIdsDocument = new TypedDocumentString(`
    query GetVibeBookIds($id: Int!) {
  vibes_by_pk(id: $id) {
    id
    updatedAt: updated_at
    booksGeneratedAt: books_generated_at
    cachedBookIds: cached_book_ids
  }
}
    `) as unknown as TypedDocumentString<GetVibeBookIdsQuery, GetVibeBookIdsQueryVariables>;