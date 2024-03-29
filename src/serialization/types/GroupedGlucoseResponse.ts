/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const GroupedGlucoseResponse: core.serialization.ObjectSchema<
    serializers.GroupedGlucoseResponse.Raw,
    Vital.GroupedGlucoseResponse
> = core.serialization.object({
    groups: core.serialization.record(
        core.serialization.string(),
        core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).GroupedGlucose))
    ),
    next: core.serialization.string().optional(),
});

export declare namespace GroupedGlucoseResponse {
    interface Raw {
        groups: Record<string, serializers.GroupedGlucose.Raw[]>;
        next?: string | null;
    }
}
