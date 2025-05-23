/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingWaterChangedEventType } from "./ClientFacingWaterChangedEventType";
import { GroupedWater } from "./GroupedWater";

export const ClientFacingWaterChanged: core.serialization.ObjectSchema<
    serializers.ClientFacingWaterChanged.Raw,
    Vital.ClientFacingWaterChanged
> = core.serialization.object({
    eventType: core.serialization.property("event_type", ClientFacingWaterChangedEventType),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: GroupedWater,
});

export declare namespace ClientFacingWaterChanged {
    interface Raw {
        event_type: ClientFacingWaterChangedEventType.Raw;
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: GroupedWater.Raw;
    }
}
