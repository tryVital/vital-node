/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingCaloriesActiveChanged {
    eventType: Vital.ClientFacingCaloriesActiveChangedEventType;
    userId: string;
    clientUserId: string;
    teamId: string;
    data: Vital.GroupedCaloriesActive;
}
