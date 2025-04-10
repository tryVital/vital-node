/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const Providers: core.serialization.Schema<serializers.Providers.Raw, Vital.Providers> =
    core.serialization.enum_([
        "oura",
        "fitbit",
        "garmin",
        "whoop",
        "strava",
        "renpho",
        "peloton",
        "wahoo",
        "zwift",
        "freestyle_libre",
        "abbott_libreview",
        "freestyle_libre_ble",
        "eight_sleep",
        "withings",
        "apple_health_kit",
        "manual",
        "ihealth",
        "google_fit",
        "beurer_api",
        "beurer_ble",
        "omron",
        "omron_ble",
        "onetouch_ble",
        "accuchek_ble",
        "contour_ble",
        "dexcom",
        "dexcom_v3",
        "hammerhead",
        "my_fitness_pal",
        "health_connect",
        "polar",
        "cronometer",
        "kardia",
        "whoop_v2",
        "ultrahuman",
        "my_fitness_pal_v2",
        "map_my_fitness",
    ]);

export declare namespace Providers {
    type Raw =
        | "oura"
        | "fitbit"
        | "garmin"
        | "whoop"
        | "strava"
        | "renpho"
        | "peloton"
        | "wahoo"
        | "zwift"
        | "freestyle_libre"
        | "abbott_libreview"
        | "freestyle_libre_ble"
        | "eight_sleep"
        | "withings"
        | "apple_health_kit"
        | "manual"
        | "ihealth"
        | "google_fit"
        | "beurer_api"
        | "beurer_ble"
        | "omron"
        | "omron_ble"
        | "onetouch_ble"
        | "accuchek_ble"
        | "contour_ble"
        | "dexcom"
        | "dexcom_v3"
        | "hammerhead"
        | "my_fitness_pal"
        | "health_connect"
        | "polar"
        | "cronometer"
        | "kardia"
        | "whoop_v2"
        | "ultrahuman"
        | "my_fitness_pal_v2"
        | "map_my_fitness";
}
