/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingTimeseriesGroupClientFacingHeartRateAlertSample } from "./ClientFacingTimeseriesGroupClientFacingHeartRateAlertSample";

export const ClientFacingGroupedTimeseriesResponseClientFacingHeartRateAlertSample: core.serialization.ObjectSchema<
    serializers.ClientFacingGroupedTimeseriesResponseClientFacingHeartRateAlertSample.Raw,
    Vital.ClientFacingGroupedTimeseriesResponseClientFacingHeartRateAlertSample
> = core.serialization.object({
    groups: core.serialization.record(
        core.serialization.string(),
        core.serialization.list(ClientFacingTimeseriesGroupClientFacingHeartRateAlertSample)
    ),
    next: core.serialization.string().optional(),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
});

export declare namespace ClientFacingGroupedTimeseriesResponseClientFacingHeartRateAlertSample {
    interface Raw {
        groups: Record<string, ClientFacingTimeseriesGroupClientFacingHeartRateAlertSample.Raw[]>;
        next?: string | null;
        next_cursor?: string | null;
    }
}