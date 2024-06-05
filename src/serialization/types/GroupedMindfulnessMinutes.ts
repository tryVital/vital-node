/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { ClientFacingSource } from "./ClientFacingSource";
import { ClientFacingMindfulnessMinutesTimeseries } from "./ClientFacingMindfulnessMinutesTimeseries";

export const GroupedMindfulnessMinutes: core.serialization.ObjectSchema<
    serializers.GroupedMindfulnessMinutes.Raw,
    Vital.GroupedMindfulnessMinutes
> = core.serialization.object({
    source: ClientFacingSource,
    data: core.serialization.list(ClientFacingMindfulnessMinutesTimeseries),
});

export declare namespace GroupedMindfulnessMinutes {
    interface Raw {
        source: ClientFacingSource.Raw;
        data: ClientFacingMindfulnessMinutesTimeseries.Raw[];
    }
}