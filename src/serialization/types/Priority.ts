/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const Priority: core.serialization.Schema<serializers.Priority.Raw, Vital.Priority> = core.serialization.enum_([
    "routine",
    "urgent",
    "asap",
    "stat",
]);

export declare namespace Priority {
    type Raw = "routine" | "urgent" | "asap" | "stat";
}
