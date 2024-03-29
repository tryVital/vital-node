/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const GroupedBodyFat: core.serialization.ObjectSchema<serializers.GroupedBodyFat.Raw, Vital.GroupedBodyFat> =
    core.serialization.object({
        source: core.serialization.lazyObject(async () => (await import("..")).ClientFacingSource),
        data: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("..")).ClientFacingBodyFatTimeseries)
        ),
    });

export declare namespace GroupedBodyFat {
    interface Raw {
        source: serializers.ClientFacingSource.Raw;
        data: serializers.ClientFacingBodyFatTimeseries.Raw[];
    }
}
