/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { HistoricalPullCompleted } from "./HistoricalPullCompleted";

export const ClientFacingSleepBreathingDisturbanceHistoricalPullCompleted: core.serialization.ObjectSchema<
    serializers.ClientFacingSleepBreathingDisturbanceHistoricalPullCompleted.Raw,
    Vital.ClientFacingSleepBreathingDisturbanceHistoricalPullCompleted
> = core.serialization.object({
    eventType: core.serialization.property(
        "event_type",
        core.serialization.stringLiteral("historical.data.sleep_breathing_disturbance.created")
    ),
    userId: core.serialization.property("user_id", core.serialization.string()),
    clientUserId: core.serialization.property("client_user_id", core.serialization.string()),
    teamId: core.serialization.property("team_id", core.serialization.string()),
    data: HistoricalPullCompleted,
});

export declare namespace ClientFacingSleepBreathingDisturbanceHistoricalPullCompleted {
    interface Raw {
        event_type: "historical.data.sleep_breathing_disturbance.created";
        user_id: string;
        client_user_id: string;
        team_id: string;
        data: HistoricalPullCompleted.Raw;
    }
}
