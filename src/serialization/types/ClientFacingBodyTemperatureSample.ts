/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingBodyTemperatureSampleSensorLocation } from "./ClientFacingBodyTemperatureSampleSensorLocation";

export const ClientFacingBodyTemperatureSample: core.serialization.ObjectSchema<
    serializers.ClientFacingBodyTemperatureSample.Raw,
    Vital.ClientFacingBodyTemperatureSample
> = core.serialization.object({
    id: core.serialization.number().optional(),
    timezoneOffset: core.serialization.property("timezone_offset", core.serialization.number().optional()),
    type: core.serialization.string().optional(),
    unit: core.serialization.stringLiteral("\u00B0C"),
    timestamp: core.serialization.date(),
    start: core.serialization.date(),
    end: core.serialization.date(),
    value: core.serialization.number(),
    sensorLocation: core.serialization.property(
        "sensor_location",
        ClientFacingBodyTemperatureSampleSensorLocation.optional()
    ),
});

export declare namespace ClientFacingBodyTemperatureSample {
    interface Raw {
        id?: number | null;
        timezone_offset?: number | null;
        type?: string | null;
        unit: "\u00B0C";
        timestamp: string;
        start: string;
        end: string;
        value: number;
        sensor_location?: ClientFacingBodyTemperatureSampleSensorLocation.Raw | null;
    }
}
