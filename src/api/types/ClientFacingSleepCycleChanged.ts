/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingSleepCycleChanged {
    eventType: Vital.ClientFacingSleepCycleChangedEventType;
    userId: string;
    clientUserId: string;
    teamId: string;
    data: Vital.ClientFacingSleepCycle;
}
