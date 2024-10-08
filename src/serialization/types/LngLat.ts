/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const LngLat: core.serialization.ObjectSchema<serializers.LngLat.Raw, Vital.LngLat> = core.serialization.object({
    lng: core.serialization.number(),
    lat: core.serialization.number(),
});

export declare namespace LngLat {
    interface Raw {
        lng: number;
        lat: number;
    }
}
