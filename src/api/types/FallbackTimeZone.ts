/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface FallbackTimeZone {
    /**
     *     Fallback time zone of the user, in the form of a valid IANA tzdatabase identifier (e.g., `Europe/London` or `America/Los_Angeles`).
     *     Used when pulling data from sources that are completely time zone agnostic (e.g., all time is relative to UTC clock, without any time zone attributions on data points).
     *
     */
    id: string;
    /** Slug for designated source */
    sourceSlug: string;
    updatedAt: Date;
}
