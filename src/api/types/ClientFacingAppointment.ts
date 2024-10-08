/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingAppointment {
    id: string;
    userId: string;
    orderId: string;
    address: Vital.UsAddress;
    location: Vital.LngLat;
    /** Time is in UTC */
    startAt?: string;
    /** Time is in UTC */
    endAt?: string;
    ianaTimezone?: string;
    type: Vital.AppointmentType;
    provider: Vital.AppointmentProvider;
    status: Vital.AppointmentStatus;
    providerId: string;
    canReschedule: boolean;
    eventStatus: Vital.AppointmentEventStatus;
    eventData?: Record<string, unknown>;
    events: Vital.ClientFacingAppointmentEvent[];
}
