/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingSleepBreathingDisturbanceSampleType } from "./ClientFacingSleepBreathingDisturbanceSampleType";

export const ClientFacingSleepBreathingDisturbanceSample: core.serialization.ObjectSchema<
    serializers.ClientFacingSleepBreathingDisturbanceSample.Raw,
    Vital.ClientFacingSleepBreathingDisturbanceSample
> = core.serialization.object({
    id: core.serialization.number().optional(),
    timezoneOffset: core.serialization.property("timezone_offset", core.serialization.number().optional()),
    type: ClientFacingSleepBreathingDisturbanceSampleType.optional(),
    unit: core.serialization.stringLiteral("count"),
    timestamp: core.serialization.date(),
    start: core.serialization.date(),
    end: core.serialization.date(),
    value: core.serialization.number(),
});

export declare namespace ClientFacingSleepBreathingDisturbanceSample {
    interface Raw {
        id?: number | null;
        timezone_offset?: number | null;
        type?: ClientFacingSleepBreathingDisturbanceSampleType.Raw | null;
        unit: "count";
        timestamp: string;
        start: string;
        end: string;
        value: number;
    }
}
