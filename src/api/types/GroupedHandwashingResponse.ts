/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface GroupedHandwashingResponse {
    /** For each matching provider or lab, a list of grouped timeseries values. */
    groups: Record<string, Vital.GroupedHandwashing[]>;
    /** The cursor for fetching the next page, or `null` if there is no more data. */
    next?: string;
    /** The cursor for fetching the next page, or `null` if there is no more data. */
    nextCursor?: string;
}
