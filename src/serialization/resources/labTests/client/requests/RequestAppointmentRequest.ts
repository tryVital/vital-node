/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vital from "../../../../../api/index";
import * as core from "../../../../../core";
import { UsAddress } from "../../../../types/UsAddress";
import { AppointmentProvider } from "../../../../types/AppointmentProvider";

export const RequestAppointmentRequest: core.serialization.Schema<
    serializers.RequestAppointmentRequest.Raw,
    Vital.RequestAppointmentRequest
> = core.serialization.object({
    address: UsAddress,
    provider: AppointmentProvider,
});

export declare namespace RequestAppointmentRequest {
    interface Raw {
        address: UsAddress.Raw;
        provider: AppointmentProvider.Raw;
    }
}
