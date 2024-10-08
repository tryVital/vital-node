/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const DetectedDeviationEntryDeviation: core.serialization.Schema<
    serializers.DetectedDeviationEntryDeviation.Raw,
    Vital.DetectedDeviationEntryDeviation
> = core.serialization.enum_([
    "persistent_intermenstrual_bleeding",
    "prolonged_menstrual_periods",
    "irregular_menstrual_cycles",
    "infrequent_menstrual_cycles",
]);

export declare namespace DetectedDeviationEntryDeviation {
    type Raw =
        | "persistent_intermenstrual_bleeding"
        | "prolonged_menstrual_periods"
        | "irregular_menstrual_cycles"
        | "infrequent_menstrual_cycles";
}
