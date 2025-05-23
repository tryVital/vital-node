/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingInhalerUsageChangedEventType: core.serialization.Schema<
    serializers.ClientFacingInhalerUsageChangedEventType.Raw,
    Vital.ClientFacingInhalerUsageChangedEventType
> = core.serialization.enum_(["daily.data.inhaler_usage.created", "daily.data.inhaler_usage.updated"]);

export declare namespace ClientFacingInhalerUsageChangedEventType {
    type Raw = "daily.data.inhaler_usage.created" | "daily.data.inhaler_usage.updated";
}
