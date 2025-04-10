/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingCaloriesActiveChangedEventType: core.serialization.Schema<
    serializers.ClientFacingCaloriesActiveChangedEventType.Raw,
    Vital.ClientFacingCaloriesActiveChangedEventType
> = core.serialization.enum_(["daily.data.calories_active.created", "daily.data.calories_active.updated"]);

export declare namespace ClientFacingCaloriesActiveChangedEventType {
    type Raw = "daily.data.calories_active.created" | "daily.data.calories_active.updated";
}
