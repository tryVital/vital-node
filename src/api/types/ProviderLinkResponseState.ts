/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ProviderLinkResponseState = "success" | "error" | "pending_provider_mfa";

export const ProviderLinkResponseState = {
    Success: "success",
    Error: "error",
    PendingProviderMfa: "pending_provider_mfa",
} as const;