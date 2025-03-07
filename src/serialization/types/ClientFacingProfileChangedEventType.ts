/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingProfileChangedEventType: core.serialization.Schema<
    serializers.ClientFacingProfileChangedEventType.Raw,
    Vital.ClientFacingProfileChangedEventType
> = core.serialization.enum_(["daily.data.profile.created", "daily.data.profile.updated"]);

export declare namespace ClientFacingProfileChangedEventType {
    type Raw = "daily.data.profile.created" | "daily.data.profile.updated";
}
