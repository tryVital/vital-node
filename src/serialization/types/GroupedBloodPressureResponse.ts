/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { GroupedBloodPressure } from "./GroupedBloodPressure";

export const GroupedBloodPressureResponse: core.serialization.ObjectSchema<
    serializers.GroupedBloodPressureResponse.Raw,
    Vital.GroupedBloodPressureResponse
> = core.serialization.object({
    groups: core.serialization.record(core.serialization.string(), core.serialization.list(GroupedBloodPressure)),
    next: core.serialization.string().optional(),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
});

export declare namespace GroupedBloodPressureResponse {
    interface Raw {
        groups: Record<string, GroupedBloodPressure.Raw[]>;
        next?: string | null;
        next_cursor?: string | null;
    }
}
