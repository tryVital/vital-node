/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingWaistCircumferenceChangedEventType } from "./ClientFacingWaistCircumferenceChangedEventType";
import { GroupedWaistCircumference } from "./GroupedWaistCircumference";

export const ClientFacingWaistCircumferenceChanged: core.serialization.ObjectSchema<
    serializers.ClientFacingWaistCircumferenceChanged.Raw,
    Vital.ClientFacingWaistCircumferenceChanged
> = core.serialization.object({
    eventType: core.serialization.property("event_type", ClientFacingWaistCircumferenceChangedEventType),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: GroupedWaistCircumference,
});

export declare namespace ClientFacingWaistCircumferenceChanged {
    interface Raw {
        event_type: ClientFacingWaistCircumferenceChangedEventType.Raw;
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: GroupedWaistCircumference.Raw;
    }
}
