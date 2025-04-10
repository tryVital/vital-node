/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingBodyTemperatureDeltaSampleSensorLocation } from "./ClientFacingBodyTemperatureDeltaSampleSensorLocation";

export const ClientFacingBodyTemperatureDeltaSample: core.serialization.ObjectSchema<
    serializers.ClientFacingBodyTemperatureDeltaSample.Raw,
    Vital.ClientFacingBodyTemperatureDeltaSample
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
        ClientFacingBodyTemperatureDeltaSampleSensorLocation.optional()
    ),
});

export declare namespace ClientFacingBodyTemperatureDeltaSample {
    interface Raw {
        id?: number | null;
        timezone_offset?: number | null;
        type?: string | null;
        unit: "\u00B0C";
        timestamp: string;
        start: string;
        end: string;
        value: number;
        sensor_location?: ClientFacingBodyTemperatureDeltaSampleSensorLocation.Raw | null;
    }
}
