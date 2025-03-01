/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingVo2MaxChangedEventType: core.serialization.Schema<
    serializers.ClientFacingVo2MaxChangedEventType.Raw,
    Vital.ClientFacingVo2MaxChangedEventType
> = core.serialization.enum_(["daily.data.vo2_max.created", "daily.data.vo2_max.updated"]);

export declare namespace ClientFacingVo2MaxChangedEventType {
    type Raw = "daily.data.vo2_max.created" | "daily.data.vo2_max.updated";
}
