/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const AllowedRadius: core.serialization.Schema<serializers.AllowedRadius.Raw, Vital.AllowedRadius> =
    core.serialization.enum_(["10", "20", "25", "50"]);

export declare namespace AllowedRadius {
    type Raw = "10" | "20" | "25" | "50";
}
