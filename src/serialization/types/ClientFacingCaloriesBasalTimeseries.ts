/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingCaloriesBasalTimeseries: core.serialization.ObjectSchema<
    serializers.ClientFacingCaloriesBasalTimeseries.Raw,
    Vital.ClientFacingCaloriesBasalTimeseries
> = core.serialization.object({
    id: core.serialization.number().optional(),
    timezoneOffset: core.serialization.property("timezone_offset", core.serialization.number().optional()),
    type: core.serialization.string().optional(),
    unit: core.serialization.stringLiteral("kcal"),
    timestamp: core.serialization.date(),
    value: core.serialization.number(),
});

export declare namespace ClientFacingCaloriesBasalTimeseries {
    interface Raw {
        id?: number | null;
        timezone_offset?: number | null;
        type?: string | null;
        unit: "kcal";
        timestamp: string;
        value: number;
    }
}
