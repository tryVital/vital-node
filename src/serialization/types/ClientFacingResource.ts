/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingResource: core.serialization.Schema<
    serializers.ClientFacingResource.Raw,
    Vital.ClientFacingResource
> = core.serialization.enum_([
    "profile",
    "activity",
    "sleep",
    "body",
    "workouts",
    "workout_stream",
    "connection",
    "order",
    "result",
    "appointment",
    "glucose",
    "heartrate",
    "hrv",
    "ige",
    "igg",
    "blood_oxygen",
    "blood_pressure",
    "cholesterol",
    "device",
    "weight",
    "fat",
    "body_temperature",
    "body_temperature_delta",
    "meal",
    "water",
    "caffeine",
    "mindfulness_minutes",
    "steps",
    "calories_active",
    "distance",
    "floors_climbed",
    "respiratory_rate",
    "vo2_max",
    "calories_basal",
    "stress_level",
    "menstrual_cycle",
    "sleep_cycle",
    "electrocardiogram",
    "electrocardiogram_voltage",
    "afib_burden",
    "heart_rate_alert",
    "stand_hour",
    "stand_duration",
    "sleep_apnea_alert",
    "sleep_breathing_disturbance",
    "wheelchair_push",
    "forced_expiratory_volume_1",
    "forced_vital_capacity",
    "peak_expiratory_flow_rate",
    "inhaler_usage",
    "fall",
    "uv_exposure",
    "daylight_exposure",
    "handwashing",
    "basal_body_temperature",
    "workout_duration",
    "insulin_injection",
    "carbohydrates",
    "note",
    "sleep_stream",
    "hypnogram",
]);

export declare namespace ClientFacingResource {
    type Raw =
        | "profile"
        | "activity"
        | "sleep"
        | "body"
        | "workouts"
        | "workout_stream"
        | "connection"
        | "order"
        | "result"
        | "appointment"
        | "glucose"
        | "heartrate"
        | "hrv"
        | "ige"
        | "igg"
        | "blood_oxygen"
        | "blood_pressure"
        | "cholesterol"
        | "device"
        | "weight"
        | "fat"
        | "body_temperature"
        | "body_temperature_delta"
        | "meal"
        | "water"
        | "caffeine"
        | "mindfulness_minutes"
        | "steps"
        | "calories_active"
        | "distance"
        | "floors_climbed"
        | "respiratory_rate"
        | "vo2_max"
        | "calories_basal"
        | "stress_level"
        | "menstrual_cycle"
        | "sleep_cycle"
        | "electrocardiogram"
        | "electrocardiogram_voltage"
        | "afib_burden"
        | "heart_rate_alert"
        | "stand_hour"
        | "stand_duration"
        | "sleep_apnea_alert"
        | "sleep_breathing_disturbance"
        | "wheelchair_push"
        | "forced_expiratory_volume_1"
        | "forced_vital_capacity"
        | "peak_expiratory_flow_rate"
        | "inhaler_usage"
        | "fall"
        | "uv_exposure"
        | "daylight_exposure"
        | "handwashing"
        | "basal_body_temperature"
        | "workout_duration"
        | "insulin_injection"
        | "carbohydrates"
        | "note"
        | "sleep_stream"
        | "hypnogram";
}
