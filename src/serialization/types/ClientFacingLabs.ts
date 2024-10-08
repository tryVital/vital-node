/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingLabs: core.serialization.Schema<serializers.ClientFacingLabs.Raw, Vital.ClientFacingLabs> =
    core.serialization.enum_(["quest", "labcorp", "bioreference"]);

export declare namespace ClientFacingLabs {
    type Raw = "quest" | "labcorp" | "bioreference";
}
