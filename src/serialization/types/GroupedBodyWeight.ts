/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const GroupedBodyWeight: core.serialization.ObjectSchema<
    serializers.GroupedBodyWeight.Raw,
    Vital.GroupedBodyWeight
> = core.serialization.object({
    source: core.serialization.lazyObject(async () => (await import("..")).ClientFacingSource),
    data: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).ClientFacingBodyWeightTimeseries)
    ),
});

export declare namespace GroupedBodyWeight {
    interface Raw {
        source: serializers.ClientFacingSource.Raw;
        data: serializers.ClientFacingBodyWeightTimeseries.Raw[];
    }
}
