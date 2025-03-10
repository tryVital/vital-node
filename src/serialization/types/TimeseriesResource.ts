/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const TimeseriesResource: core.serialization.Schema<
    serializers.TimeseriesResource.Raw,
    Vital.TimeseriesResource
> = core.serialization.enum_([
    "calories_active",
    "calories_basal",
    "distance",
    "blood_oxygen",
    "blood_pressure",
    "body_fat",
    "body_weight",
    "body_temperature",
    "body_temperature_delta",
    "cholesterol",
    "cholesterol/ldl",
    "cholesterol/hdl",
    "cholesterol/total",
    "cholesterol/triglycerides",
    "electrocardiogram_voltage",
    "floors_climbed",
    "glucose",
    "heartrate",
    "hrv",
    "hypnogram",
    "ige",
    "igg",
    "respiratory_rate",
    "steps",
    "stress_level",
    "vo2_max",
    "water",
    "caffeine",
    "mindfulness_minutes",
    "afib_burden",
    "heart_rate_alert",
    "workout_duration",
    "insulin_injection",
    "carbohydrates",
    "note",
]);

export declare namespace TimeseriesResource {
    type Raw =
        | "calories_active"
        | "calories_basal"
        | "distance"
        | "blood_oxygen"
        | "blood_pressure"
        | "body_fat"
        | "body_weight"
        | "body_temperature"
        | "body_temperature_delta"
        | "cholesterol"
        | "cholesterol/ldl"
        | "cholesterol/hdl"
        | "cholesterol/total"
        | "cholesterol/triglycerides"
        | "electrocardiogram_voltage"
        | "floors_climbed"
        | "glucose"
        | "heartrate"
        | "hrv"
        | "hypnogram"
        | "ige"
        | "igg"
        | "respiratory_rate"
        | "steps"
        | "stress_level"
        | "vo2_max"
        | "water"
        | "caffeine"
        | "mindfulness_minutes"
        | "afib_burden"
        | "heart_rate_alert"
        | "workout_duration"
        | "insulin_injection"
        | "carbohydrates"
        | "note";
}
