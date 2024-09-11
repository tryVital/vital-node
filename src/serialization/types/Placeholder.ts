/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const Placeholder: core.serialization.ObjectSchema<serializers.Placeholder.Raw, Vital.Placeholder> =
    core.serialization.object({
        placeholder: core.serialization.boolean(),
    });

export declare namespace Placeholder {
    interface Raw {
        placeholder: boolean;
    }
}