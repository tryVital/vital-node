/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingInhalerUsageChanged {
    eventType: Vital.ClientFacingInhalerUsageChangedEventType;
    userId: string;
    clientUserId: string;
    teamId: string;
    data: Vital.GroupedInhalerUsage;
}
