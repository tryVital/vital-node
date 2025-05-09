/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * ℹ️ This enum is non-exhaustive.
 */
export type BulkOpStatus = "in_progress" | "success" | "failure" | "aborted";

export const BulkOpStatus = {
    InProgress: "in_progress",
    Success: "success",
    Failure: "failure",
    Aborted: "aborted",
} as const;
