/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface AppointmentLocation {
    location: Vital.LngLat;
    address: Vital.UsAddress;
    code: string;
    name: string;
    ianaTimezone?: string;
}
