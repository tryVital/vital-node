/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const GroupedCaloriesActive: core.serialization.ObjectSchema<
    serializers.GroupedCaloriesActive.Raw,
    Vital.GroupedCaloriesActive
> = core.serialization.object({
    source: core.serialization.lazyObject(async () => (await import("..")).ClientFacingSource),
    data: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).ClientFacingCaloriesActiveTimeseries)
    ),
});

export declare namespace GroupedCaloriesActive {
    interface Raw {
        source: serializers.ClientFacingSource.Raw;
        data: serializers.ClientFacingCaloriesActiveTimeseries.Raw[];
    }
}
