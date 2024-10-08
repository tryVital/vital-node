/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingSource } from "./ClientFacingSource";
import { ClientFacingBodyFatTimeseries } from "./ClientFacingBodyFatTimeseries";

export const GroupedBodyFat: core.serialization.ObjectSchema<serializers.GroupedBodyFat.Raw, Vital.GroupedBodyFat> =
    core.serialization.object({
        source: ClientFacingSource,
        data: core.serialization.list(ClientFacingBodyFatTimeseries),
    });

export declare namespace GroupedBodyFat {
    interface Raw {
        source: ClientFacingSource.Raw;
        data: ClientFacingBodyFatTimeseries.Raw[];
    }
}
