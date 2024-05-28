/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ValueQuantity: core.serialization.ObjectSchema<serializers.ValueQuantity.Raw, Vital.ValueQuantity> =
    core.serialization.object({
        value: core.serialization.number(),
        comparator: core.serialization.string(),
        unit: core.serialization.string(),
    });

export declare namespace ValueQuantity {
    interface Raw {
        value: number;
        comparator: string;
        unit: string;
    }
}
