/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface GroupedVo2MaxResponse {
    /** For each matching provider or lab, a list of grouped timeseries values. */
    groups: Record<string, Vital.GroupedVo2Max[]>;
    /** The cursor for fetching the next page, or `null` if there is no more data. */
    next?: string;
    /** The cursor for fetching the next page, or `null` if there is no more data. */
    nextCursor?: string;
}
