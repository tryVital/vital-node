/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingStandHourChanged {
    eventType: Vital.ClientFacingStandHourChangedEventType;
    userId: string;
    clientUserId: string;
    teamId: string;
    data: Vital.GroupedStandHour;
}
