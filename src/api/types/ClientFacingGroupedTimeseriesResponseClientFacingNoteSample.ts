/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface ClientFacingGroupedTimeseriesResponseClientFacingNoteSample {
    /** For each matching provider or lab, a list of grouped timeseries values. */
    groups: Record<string, Vital.ClientFacingTimeseriesGroupClientFacingNoteSample[]>;
    next?: string;
    nextCursor?: string;
}
