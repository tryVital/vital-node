/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Vital from "../../../../api/index";
import * as core from "../../../../core";
import { ClientFacingDistanceTimeseries } from "../../../types/ClientFacingDistanceTimeseries";

export const Response: core.serialization.Schema<
    serializers.vitals.distance.Response.Raw,
    Vital.ClientFacingDistanceTimeseries[]
> = core.serialization.list(ClientFacingDistanceTimeseries);

export declare namespace Response {
    type Raw = ClientFacingDistanceTimeseries.Raw[];
}
