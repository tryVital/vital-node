/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const SleepColumnExprSleep: core.serialization.Schema<
    serializers.SleepColumnExprSleep.Raw,
    Vital.SleepColumnExprSleep
> = core.serialization.enum_([
    "session_start",
    "session_end",
    "state",
    "type",
    "duration_second",
    "stage_asleep_second",
    "stage_awake_second",
    "stage_light_second",
    "stage_rem_second",
    "stage_deep_second",
    "stage_unknown_second",
    "latency_second",
    "heart_rate_minimum",
    "heart_rate_mean",
    "heart_rate_maximum",
    "heart_rate_dip",
    "efficiency",
    "hrv_mean_rmssd",
    "hrv_mean_sdnn",
    "skin_temperature_delta",
    "respiratory_rate",
    "score",
    "source_type",
    "source_provider",
    "source_app_id",
]);

export declare namespace SleepColumnExprSleep {
    type Raw =
        | "session_start"
        | "session_end"
        | "state"
        | "type"
        | "duration_second"
        | "stage_asleep_second"
        | "stage_awake_second"
        | "stage_light_second"
        | "stage_rem_second"
        | "stage_deep_second"
        | "stage_unknown_second"
        | "latency_second"
        | "heart_rate_minimum"
        | "heart_rate_mean"
        | "heart_rate_maximum"
        | "heart_rate_dip"
        | "efficiency"
        | "hrv_mean_rmssd"
        | "hrv_mean_sdnn"
        | "skin_temperature_delta"
        | "respiratory_rate"
        | "score"
        | "source_type"
        | "source_provider"
        | "source_app_id";
}
