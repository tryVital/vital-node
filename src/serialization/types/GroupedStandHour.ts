/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingSource } from "./ClientFacingSource";
import { ClientFacingStandHourSample } from "./ClientFacingStandHourSample";

export const GroupedStandHour: core.serialization.ObjectSchema<
    serializers.GroupedStandHour.Raw,
    Vital.GroupedStandHour
> = core.serialization.object({
    source: ClientFacingSource,
    data: core.serialization.list(ClientFacingStandHourSample),
});

export declare namespace GroupedStandHour {
    interface Raw {
        source: ClientFacingSource.Raw;
        data: ClientFacingStandHourSample.Raw[];
    }
}
