/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingBloodPressureChangedEventType: core.serialization.Schema<
    serializers.ClientFacingBloodPressureChangedEventType.Raw,
    Vital.ClientFacingBloodPressureChangedEventType
> = core.serialization.enum_(["daily.data.blood_pressure.created", "daily.data.blood_pressure.updated"]);

export declare namespace ClientFacingBloodPressureChangedEventType {
    type Raw = "daily.data.blood_pressure.created" | "daily.data.blood_pressure.updated";
}
