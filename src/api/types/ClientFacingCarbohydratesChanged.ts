/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingCarbohydratesChanged {
    eventType: Vital.ClientFacingCarbohydratesChangedEventType;
    userId: string;
    clientUserId: string;
    teamId: string;
    data: Vital.GroupedCarbohydrates;
}
