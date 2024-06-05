/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Vital from "../../../../api";
import * as core from "../../../../core";
import { ClientFacingVo2MaxTimeseries } from "../../../types/ClientFacingVo2MaxTimeseries";

export const Response: core.serialization.Schema<
    serializers.vitals.vo2Max.Response.Raw,
    Vital.ClientFacingVo2MaxTimeseries[]
> = core.serialization.list(ClientFacingVo2MaxTimeseries);

export declare namespace Response {
    type Raw = ClientFacingVo2MaxTimeseries.Raw[];
}