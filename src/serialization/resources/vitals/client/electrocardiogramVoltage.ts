/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Vital from "../../../../api/index";
import * as core from "../../../../core";
import { ClientFacingElectrocardiogramVoltageTimeseries } from "../../../types/ClientFacingElectrocardiogramVoltageTimeseries";

export const Response: core.serialization.Schema<
    serializers.vitals.electrocardiogramVoltage.Response.Raw,
    Vital.ClientFacingElectrocardiogramVoltageTimeseries[]
> = core.serialization.list(ClientFacingElectrocardiogramVoltageTimeseries);

export declare namespace Response {
    type Raw = ClientFacingElectrocardiogramVoltageTimeseries.Raw[];
}
