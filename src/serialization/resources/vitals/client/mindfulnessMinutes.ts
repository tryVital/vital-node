/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Vital from "../../../../api/index";
import * as core from "../../../../core";
import { ClientFacingMindfulnessMinutesTimeseries } from "../../../types/ClientFacingMindfulnessMinutesTimeseries";

export const Response: core.serialization.Schema<
    serializers.vitals.mindfulnessMinutes.Response.Raw,
    Vital.ClientFacingMindfulnessMinutesTimeseries[]
> = core.serialization.list(ClientFacingMindfulnessMinutesTimeseries);

export declare namespace Response {
    type Raw = ClientFacingMindfulnessMinutesTimeseries.Raw[];
}
