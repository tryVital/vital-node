/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ActivityColumnExprActivity: core.serialization.Schema<
    serializers.ActivityColumnExprActivity.Raw,
    Vital.ActivityColumnExprActivity
> = core.serialization.enum_([
    "date",
    "calories_total",
    "calories_active",
    "steps",
    "distance_meter",
    "floors_climbed",
    "duration_active_second",
    "intensity_sedentary_second",
    "intensity_low_second",
    "intensity_medium_second",
    "intensity_high_second",
    "heart_rate_mean",
    "heart_rate_minimum",
    "heart_rate_maximum",
    "heart_rate_resting",
    "heart_rate_mean_walking",
    "wheelchair_use",
    "wheelchair_push",
    "source_type",
    "source_provider",
    "source_app_id",
    "time_zone",
    "time_zone_offset",
]);

export declare namespace ActivityColumnExprActivity {
    type Raw =
        | "date"
        | "calories_total"
        | "calories_active"
        | "steps"
        | "distance_meter"
        | "floors_climbed"
        | "duration_active_second"
        | "intensity_sedentary_second"
        | "intensity_low_second"
        | "intensity_medium_second"
        | "intensity_high_second"
        | "heart_rate_mean"
        | "heart_rate_minimum"
        | "heart_rate_maximum"
        | "heart_rate_resting"
        | "heart_rate_mean_walking"
        | "wheelchair_use"
        | "wheelchair_push"
        | "source_type"
        | "source_provider"
        | "source_app_id"
        | "time_zone"
        | "time_zone_offset";
}
