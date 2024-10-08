/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Vital from "../../../../api/index";
import * as core from "../../../../core";
import { ClientFacingBloodOxygenTimeseries } from "../../../types/ClientFacingBloodOxygenTimeseries";

export const Response: core.serialization.Schema<
    serializers.vitals.bloodOxygen.Response.Raw,
    Vital.ClientFacingBloodOxygenTimeseries[]
> = core.serialization.list(ClientFacingBloodOxygenTimeseries);

export declare namespace Response {
    type Raw = ClientFacingBloodOxygenTimeseries.Raw[];
}
