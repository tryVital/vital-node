/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingLeanBodyMassChanged {
    eventType: Vital.ClientFacingLeanBodyMassChangedEventType;
    userId: string;
    clientUserId: string;
    teamId: string;
    data: Vital.GroupedLeanBodyMass;
}
