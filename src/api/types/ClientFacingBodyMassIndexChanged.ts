/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingBodyMassIndexChanged {
    eventType: Vital.ClientFacingBodyMassIndexChangedEventType;
    userId: string;
    clientUserId: string;
    teamId: string;
    data: Vital.GroupedBodyMassIndex;
}
