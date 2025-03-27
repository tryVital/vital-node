/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingSampleGroupingKeys } from "./ClientFacingSampleGroupingKeys";

export const ClientFacingFallSample: core.serialization.ObjectSchema<
    serializers.ClientFacingFallSample.Raw,
    Vital.ClientFacingFallSample
> = core.serialization.object({
    id: core.serialization.number().optional(),
    timezoneOffset: core.serialization.property("timezone_offset", core.serialization.number().optional()),
    type: core.serialization.string().optional(),
    unit: core.serialization.stringLiteral("count"),
    grouping: ClientFacingSampleGroupingKeys.optional(),
    timestamp: core.serialization.date(),
    start: core.serialization.date(),
    end: core.serialization.date(),
    value: core.serialization.number(),
});

export declare namespace ClientFacingFallSample {
    interface Raw {
        id?: number | null;
        timezone_offset?: number | null;
        type?: string | null;
        unit: "count";
        grouping?: ClientFacingSampleGroupingKeys.Raw | null;
        timestamp: string;
        start: string;
        end: string;
        value: number;
    }
}
