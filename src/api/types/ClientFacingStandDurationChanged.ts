/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingStandDurationChanged {
    eventType: Vital.ClientFacingStandDurationChangedEventType;
    userId: string;
    clientUserId: string;
    teamId: string;
    data: Vital.GroupedStandDuration;
}
