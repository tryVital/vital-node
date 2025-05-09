/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * ℹ️ This enum is non-exhaustive.
 */
export type HistoricalPullNonRetriableErrorDetails =
    | "non_retriable_error"
    | "unexpected_error"
    | "retry_quota_exhausted";

export const HistoricalPullNonRetriableErrorDetails = {
    NonRetriableError: "non_retriable_error",
    UnexpectedError: "unexpected_error",
    RetryQuotaExhausted: "retry_quota_exhausted",
} as const;
