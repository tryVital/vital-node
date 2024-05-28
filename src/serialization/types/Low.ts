/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const Low: core.serialization.ObjectSchema<serializers.Low.Raw, Vital.Low> = core.serialization.object({
    value: core.serialization.number(),
});

export declare namespace Low {
    interface Raw {
        value: number;
    }
}
