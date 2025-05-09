/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingCarbohydratesChangedEventType } from "./ClientFacingCarbohydratesChangedEventType";
import { GroupedCarbohydrates } from "./GroupedCarbohydrates";

export const ClientFacingCarbohydratesChanged: core.serialization.ObjectSchema<
    serializers.ClientFacingCarbohydratesChanged.Raw,
    Vital.ClientFacingCarbohydratesChanged
> = core.serialization.object({
    eventType: core.serialization.property("event_type", ClientFacingCarbohydratesChangedEventType),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: GroupedCarbohydrates,
});

export declare namespace ClientFacingCarbohydratesChanged {
    interface Raw {
        event_type: ClientFacingCarbohydratesChangedEventType.Raw;
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: GroupedCarbohydrates.Raw;
    }
}
