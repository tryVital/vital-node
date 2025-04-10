/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingFatChangedEventType } from "./ClientFacingFatChangedEventType";
import { GroupedBodyFat } from "./GroupedBodyFat";

export const ClientFacingFatChanged: core.serialization.ObjectSchema<
    serializers.ClientFacingFatChanged.Raw,
    Vital.ClientFacingFatChanged
> = core.serialization.object({
    eventType: core.serialization.property("event_type", ClientFacingFatChangedEventType),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: GroupedBodyFat,
});

export declare namespace ClientFacingFatChanged {
    interface Raw {
        event_type: ClientFacingFatChangedEventType.Raw;
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: GroupedBodyFat.Raw;
    }
}
