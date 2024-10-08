/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { GroupedElectrocardiogramVoltage } from "./GroupedElectrocardiogramVoltage";

export const GroupedElectrocardiogramVoltageResponse: core.serialization.ObjectSchema<
    serializers.GroupedElectrocardiogramVoltageResponse.Raw,
    Vital.GroupedElectrocardiogramVoltageResponse
> = core.serialization.object({
    groups: core.serialization.record(
        core.serialization.string(),
        core.serialization.list(GroupedElectrocardiogramVoltage)
    ),
    next: core.serialization.string().optional(),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
});

export declare namespace GroupedElectrocardiogramVoltageResponse {
    interface Raw {
        groups: Record<string, GroupedElectrocardiogramVoltage.Raw[]>;
        next?: string | null;
        next_cursor?: string | null;
    }
}
