/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Vital from "../../../../api/index";
import * as core from "../../../../core";
import { ClientFacingIgeTimeseries } from "../../../types/ClientFacingIgeTimeseries";

export const Response: core.serialization.Schema<
    serializers.vitals.ige.Response.Raw,
    Vital.ClientFacingIgeTimeseries[]
> = core.serialization.list(ClientFacingIgeTimeseries);

export declare namespace Response {
    type Raw = ClientFacingIgeTimeseries.Raw[];
}
