import type { HardcoverClient } from "../core/client.ts";
import { ActionError, NotFoundError } from "../core/errors.ts";
import type { WithJsonColumns } from "../core/json-columns.ts";
import { PrivacySetting } from "../generated/enums.ts";
import type {
  GetFollowedPromptsQuery,
  GetPromptAnswersForUserQuery,
  PromptAnswerFragment,
  PromptSummaryFragment,
  Prompts_Bool_Exp,
  Prompts_Order_By,
} from "../generated/graphql.ts";
import { operations } from "../operations.ts";
import type { BookSummary } from "./books.ts";
import { capped, DEFAULT_LIMIT, toPage, type Page, type PageOptions } from "./page.ts";
import { required } from "./shared.ts";

export type Prompt = WithJsonColumns<PromptSummaryFragment>;
export type PromptAnswer = WithJsonColumns<PromptAnswerFragment>;
export type PromptAnswerWithBook = WithJsonColumns<GetPromptAnswersForUserQuery["prompt_answers"][number]>;
export type FollowedPrompt = WithJsonColumns<GetFollowedPromptsQuery["followed_prompts"][number]>;

/** A book given as an answer to a prompt, with how many readers picked it. */
export interface PromptBook {
  answersCount: number;
  book: BookSummary;
}

/** A prompt a book was given as an answer to, with how many readers picked it there. */
export interface PromptForBook {
  answersCount: number;
  prompt: Prompt;
}

export interface PromptListOptions extends PageOptions {
  /** "popular" (most answered first, the default) or "newest". */
  sort?: "popular" | "newest";

  /** Only the prompts Hardcover features. */
  featured?: boolean;
}

/**
 * A new prompt. Prompts are always public. The question must be unique and
 * at most 140 characters; the server checks both.
 */
export interface PromptInput {
  question: string;

  /** Required by the server. Say what kind of answers you're after. */
  description: string;
}

export interface PromptAnswerOptions {
  /** Why this book: shown with the answer. */
  description?: string | null;
}

/** An answer, and how many readers have now picked that book for the prompt. */
export interface PromptAnswerResult {
  answer: PromptAnswer;
  answersCount: number;
}

// delete_prompt's message for a prompt that doesn't exist or isn't yours.
const PROMPT_NOT_FOUND = "Prompt not found";

const SORTS: Record<NonNullable<PromptListOptions["sort"]>, Prompts_Order_By[]> = {
  popular: [{ answers_count: "desc" }, { id: "desc" }],
  newest: [{ created_at: "desc" }, { id: "desc" }],
};

/**
 * Prompts: community questions ("What's your favorite cozy fantasy?") that
 * readers answer with books. The site ranks a prompt's books by how many
 * readers picked each one.
 */
export class PromptsResource {
  private readonly client: HardcoverClient;

  constructor(client: HardcoverClient) {
    this.client = client;
  }

  // ---- Reading prompts ----

  /** Scopes: `read:prompts`. */
  async get(id: number): Promise<Prompt | null> {
    const { prompts_by_pk } = await this.client.request(operations.GetPrompt, { id });

    return prompts_by_pk ?? null;
  }

  /** Scopes: `read:prompts`. */
  async getBySlug(slug: string): Promise<Prompt | null> {
    const { prompts } = await this.client.request(operations.GetPromptBySlug, { slug });

    return prompts[0] ?? null;
  }

  /** Browse prompts, most answered first unless `sort` says otherwise. Scopes: `read:prompts`. */
  async list({ sort = "popular", featured, limit: requested = DEFAULT_LIMIT, offset = 0 }: PromptListOptions = {}): Promise<Page<Prompt>> {
    const limit = capped("prompts", requested);
    const where: Prompts_Bool_Exp = featured === undefined ? {} : { featured: { _eq: featured } };

    const { prompts } = await this.client.request(operations.GetPrompts, {
      where,
      orderBy: SORTS[sort],
      limit,
      offset,
    });

    return toPage(prompts, limit, offset);
  }

  /** Prompts the signed-in user asked, newest first. Scopes: `read:me:content`, `read:prompts`. */
  async mine(options: PageOptions = {}): Promise<Page<Prompt>> {
    return this.forUser(await this.client.me.id(), options);
  }

  /** Prompts someone asked, newest first. Scopes: `read:prompts`. */
  async forUser(userId: number, { limit: requested = DEFAULT_LIMIT, offset = 0 }: PageOptions = {}): Promise<Page<Prompt>> {
    const limit = capped("prompts", requested);
    const { prompts } = await this.client.request(operations.GetPromptsForUser, { userId, limit, offset });

    return toPage(prompts, limit, offset);
  }

  /** A prompt's books, most picked first: the ranking the site shows. Scopes: `read:prompts`. */
  async books(promptId: number, { limit: requested = DEFAULT_LIMIT, offset = 0 }: PageOptions = {}): Promise<Page<PromptBook>> {
    const limit = capped("prompt_books_summary", requested);
    const { prompt_books_summary } = await this.client.request(operations.GetPromptBooks, { promptId, limit, offset });

    // A row can lose its book (merged or removed); skip those.
    const books: PromptBook[] = [];
    for (const row of prompt_books_summary) {
      if (row.book) books.push({ answersCount: row.answersCount ?? 0, book: row.book });
    }

    // hasMore follows the rows the API returned, even if a few were skipped.
    return { ...toPage(books, limit, offset), hasMore: prompt_books_summary.length === limit };
  }

  /** The prompts a book was given as an answer to, where it was picked most first. Scopes: `read:prompts`. */
  async forBook(bookId: number, { limit: requested = DEFAULT_LIMIT, offset = 0 }: PageOptions = {}): Promise<Page<PromptForBook>> {
    const limit = capped("prompt_books_summary", requested);
    const { prompt_books_summary } = await this.client.request(operations.GetPromptsForBook, { bookId, limit, offset });

    const prompts: PromptForBook[] = [];
    for (const row of prompt_books_summary) {
      if (row.prompt) prompts.push({ answersCount: row.answersCount ?? 0, prompt: row.prompt });
    }

    return { ...toPage(prompts, limit, offset), hasMore: prompt_books_summary.length === limit };
  }

  /** The signed-in user's answers to a prompt, newest first. Scopes: `read:me:content`, `read:prompts`. */
  async myAnswers(promptId: number): Promise<PromptAnswerWithBook[]> {
    const userId = await this.client.me.id();
    const { prompt_answers } = await this.client.request(operations.GetPromptAnswersForUser, { userId, promptId });

    return prompt_answers;
  }

  /** Prompts the signed-in user follows, most recently followed first. Scopes: `read:me:content`, `read:prompts`. */
  async following({ limit = DEFAULT_LIMIT, offset = 0 }: PageOptions = {}): Promise<Page<FollowedPrompt>> {
    const userId = await this.client.me.id();
    const { followed_prompts } = await this.client.request(operations.GetFollowedPrompts, { userId, limit, offset });

    return toPage(followed_prompts, limit, offset);
  }

  // ---- Asking ----

  /** Asks a new prompt. Prompts are always public. Scopes: `write:prompts`. */
  async create({ question, description }: PromptInput): Promise<Prompt> {
    const object = { question, description, privacy_setting_id: PrivacySetting.Public };
    const { insert_prompt } = await this.client.request(operations.CreatePrompt, { object });

    return required(insert_prompt?.prompt, "insert_prompt", "prompt");
  }

  /**
   * Changes your prompt. Once it has more than 5 answers, the server only
   * changes the description and keeps the question, so answers stay on topic.
   * Two requests: the API's update takes the whole prompt, so the current one
   * is read and merged first.
   * Scopes: `read:prompts`, `write:prompts`.
   */
  async update(id: number, patch: Partial<PromptInput>): Promise<Prompt> {
    const current = await this.get(id);
    if (!current) throw new NotFoundError("prompt", id);

    const object = {
      id,
      question: patch.question ?? current.question,
      description: patch.description ?? current.description,
      privacy_setting_id: PrivacySetting.Public,
    };

    const { update_prompt } = await this.client.request(operations.UpdatePrompt, { object });

    return required(update_prompt?.prompt, "update_prompt", "prompt");
  }

  /**
   * Deletes your prompt. Throws NotFoundError when it doesn't exist or isn't
   * yours. The server refuses, as ActionError, a prompt with more than 10
   * answers or one other readers have answered or bookmarked.
   * Scopes: `write:prompts`.
   */
  async delete(id: number): Promise<void> {
    try {
      const { delete_prompt } = await this.client.request(operations.DeletePrompt, { id });

      if (!delete_prompt?.id) throw new NotFoundError("prompt", id);
    } catch (error) {
      // The action reports a missing prompt as a message, not a null row.
      if (error instanceof ActionError && error.messages.includes(PROMPT_NOT_FOUND)) {
        throw new NotFoundError("prompt", id, { cause: error });
      }

      throw error;
    }
  }

  // ---- Answering ----

  /**
   * Answers a prompt with a book. Answering with the same book again returns
   * the existing answer and updates its description, so this is safe to
   * repeat. The server writes the journal entry.
   * Scopes: `write:prompts`.
   */
  async answer(promptId: number, bookId: number, { description }: PromptAnswerOptions = {}): Promise<PromptAnswerResult> {
    const object = {
      prompt_id: promptId,
      book_id: bookId,
      ...(description !== undefined && { description }),
    };

    const { insert_prompt_answer } = await this.client.request(operations.AnswerPrompt, { object });

    const answer = required(insert_prompt_answer?.promptAnswer, "insert_prompt_answer", "prompt answer");
    const answersCount = insert_prompt_answer?.promptBook?.answersCount ?? 0;

    return { answer, answersCount };
  }

  /** Changes why you picked a book. Scopes: `write:prompts`. */
  async updateAnswer(answerId: number, { description }: PromptAnswerOptions): Promise<PromptAnswer> {
    const { update_prompt_answers_by_pk } = await this.client.request(operations.UpdatePromptAnswer, {
      id: answerId,
      description: description ?? null,
    });

    if (!update_prompt_answers_by_pk) throw new NotFoundError("prompt answer", answerId);
    return update_prompt_answers_by_pk;
  }

  /** Takes back your answer. Scopes: `write:prompts`. */
  async deleteAnswer(answerId: number): Promise<void> {
    const { delete_prompt_answer } = await this.client.request(operations.DeletePromptAnswer, { id: answerId });

    if (!delete_prompt_answer?.id) throw new NotFoundError("prompt answer", answerId);
  }

  // ---- Following ----

  /** Follows a prompt, so its new answers show up for you. Safe to repeat. Scopes: `write:prompts`. */
  async follow(promptId: number): Promise<void> {
    await this.client.request(operations.FollowPrompt, { promptId });
  }

  /** Stops following a prompt. Returns false if you weren't following it. Scopes: `write:prompts`. */
  async unfollow(promptId: number): Promise<boolean> {
    const { delete_followed_prompt } = await this.client.request(operations.UnfollowPrompt, { promptId });

    return delete_followed_prompt?.success ?? false;
  }
}
