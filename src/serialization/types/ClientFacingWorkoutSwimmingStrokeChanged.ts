/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingWorkoutSwimmingStrokeChangedEventType } from "./ClientFacingWorkoutSwimmingStrokeChangedEventType";
import { GroupedWorkoutSwimmingStroke } from "./GroupedWorkoutSwimmingStroke";

export const ClientFacingWorkoutSwimmingStrokeChanged: core.serialization.ObjectSchema<
    serializers.ClientFacingWorkoutSwimmingStrokeChanged.Raw,
    Vital.ClientFacingWorkoutSwimmingStrokeChanged
> = core.serialization.object({
    eventType: core.serialization.property("event_type", ClientFacingWorkoutSwimmingStrokeChangedEventType),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: GroupedWorkoutSwimmingStroke,
});

export declare namespace ClientFacingWorkoutSwimmingStrokeChanged {
    interface Raw {
        event_type: ClientFacingWorkoutSwimmingStrokeChangedEventType.Raw;
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: GroupedWorkoutSwimmingStroke.Raw;
    }
}
