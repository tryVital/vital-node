/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingCholesterolChangedEventType: core.serialization.Schema<
    serializers.ClientFacingCholesterolChangedEventType.Raw,
    Vital.ClientFacingCholesterolChangedEventType
> = core.serialization.enum_(["daily.data.cholesterol.created", "daily.data.cholesterol.updated"]);

export declare namespace ClientFacingCholesterolChangedEventType {
    type Raw = "daily.data.cholesterol.created" | "daily.data.cholesterol.updated";
}
