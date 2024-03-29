/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const GroupedBodyFatResponse: core.serialization.ObjectSchema<
    serializers.GroupedBodyFatResponse.Raw,
    Vital.GroupedBodyFatResponse
> = core.serialization.object({
    groups: core.serialization.record(
        core.serialization.string(),
        core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).GroupedBodyFat))
    ),
    next: core.serialization.string().optional(),
});

export declare namespace GroupedBodyFatResponse {
    interface Raw {
        groups: Record<string, serializers.GroupedBodyFat.Raw[]>;
        next?: string | null;
    }
}
