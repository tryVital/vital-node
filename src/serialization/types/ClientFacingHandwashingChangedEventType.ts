/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingHandwashingChangedEventType: core.serialization.Schema<
    serializers.ClientFacingHandwashingChangedEventType.Raw,
    Vital.ClientFacingHandwashingChangedEventType
> = core.serialization.enum_(["daily.data.handwashing.created", "daily.data.handwashing.updated"]);

export declare namespace ClientFacingHandwashingChangedEventType {
    type Raw = "daily.data.handwashing.created" | "daily.data.handwashing.updated";
}
