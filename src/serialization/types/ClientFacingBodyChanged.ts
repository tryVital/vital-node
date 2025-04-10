/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingBodyChangedEventType } from "./ClientFacingBodyChangedEventType";
import { ClientFacingBody } from "./ClientFacingBody";

export const ClientFacingBodyChanged: core.serialization.ObjectSchema<
    serializers.ClientFacingBodyChanged.Raw,
    Vital.ClientFacingBodyChanged
> = core.serialization.object({
    eventType: core.serialization.property("event_type", ClientFacingBodyChangedEventType),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: ClientFacingBody,
});

export declare namespace ClientFacingBodyChanged {
    interface Raw {
        event_type: ClientFacingBodyChangedEventType.Raw;
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: ClientFacingBody.Raw;
    }
}
