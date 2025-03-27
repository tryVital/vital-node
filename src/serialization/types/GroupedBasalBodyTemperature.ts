/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingSource } from "./ClientFacingSource";
import { ClientFacingBasalBodyTemperatureSample } from "./ClientFacingBasalBodyTemperatureSample";

export const GroupedBasalBodyTemperature: core.serialization.ObjectSchema<
    serializers.GroupedBasalBodyTemperature.Raw,
    Vital.GroupedBasalBodyTemperature
> = core.serialization.object({
    source: ClientFacingSource,
    data: core.serialization.list(ClientFacingBasalBodyTemperatureSample),
});

export declare namespace GroupedBasalBodyTemperature {
    interface Raw {
        source: ClientFacingSource.Raw;
        data: ClientFacingBasalBodyTemperatureSample.Raw[];
    }
}
