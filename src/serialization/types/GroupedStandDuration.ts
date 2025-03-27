/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingSource } from "./ClientFacingSource";
import { ClientFacingStandDurationSample } from "./ClientFacingStandDurationSample";

export const GroupedStandDuration: core.serialization.ObjectSchema<
    serializers.GroupedStandDuration.Raw,
    Vital.GroupedStandDuration
> = core.serialization.object({
    source: ClientFacingSource,
    data: core.serialization.list(ClientFacingStandDurationSample),
});

export declare namespace GroupedStandDuration {
    interface Raw {
        source: ClientFacingSource.Raw;
        data: ClientFacingStandDurationSample.Raw[];
    }
}
