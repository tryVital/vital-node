/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingFallChangedEventType: core.serialization.Schema<
    serializers.ClientFacingFallChangedEventType.Raw,
    Vital.ClientFacingFallChangedEventType
> = core.serialization.enum_(["daily.data.fall.created", "daily.data.fall.updated"]);

export declare namespace ClientFacingFallChangedEventType {
    type Raw = "daily.data.fall.created" | "daily.data.fall.updated";
}
