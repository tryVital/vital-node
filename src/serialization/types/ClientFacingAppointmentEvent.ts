/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { AppointmentEventStatus } from "./AppointmentEventStatus";

export const ClientFacingAppointmentEvent: core.serialization.ObjectSchema<
    serializers.ClientFacingAppointmentEvent.Raw,
    Vital.ClientFacingAppointmentEvent
> = core.serialization.object({
    createdAt: core.serialization.property("created_at", core.serialization.date()),
    status: AppointmentEventStatus,
    data: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace ClientFacingAppointmentEvent {
    interface Raw {
        created_at: string;
        status: AppointmentEventStatus.Raw;
        data?: Record<string, unknown> | null;
    }
}
