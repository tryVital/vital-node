/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const GroupedElectrocardiogramVoltage: core.serialization.ObjectSchema<
    serializers.GroupedElectrocardiogramVoltage.Raw,
    Vital.GroupedElectrocardiogramVoltage
> = core.serialization.object({
    source: core.serialization.lazyObject(async () => (await import("..")).ClientFacingSource),
    data: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).ClientFacingElectrocardiogramVoltageTimeseries)
    ),
});

export declare namespace GroupedElectrocardiogramVoltage {
    interface Raw {
        source: serializers.ClientFacingSource.Raw;
        data: serializers.ClientFacingElectrocardiogramVoltageTimeseries.Raw[];
    }
}
