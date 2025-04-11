/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * ℹ️ This enum is non-exhaustive.
 */
export type AppointmentEventStatus = "pending" | "scheduled" | "completed" | "cancelled" | "in_progress";

export const AppointmentEventStatus = {
    Pending: "pending",
    Scheduled: "scheduled",
    Completed: "completed",
    Cancelled: "cancelled",
    InProgress: "in_progress",
} as const;
