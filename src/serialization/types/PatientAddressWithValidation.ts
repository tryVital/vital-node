/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const PatientAddressWithValidation: core.serialization.ObjectSchema<
    serializers.PatientAddressWithValidation.Raw,
    Vital.PatientAddressWithValidation
> = core.serialization.object({
    receiverName: core.serialization.property("receiver_name", core.serialization.string().optional()),
    firstLine: core.serialization.property("first_line", core.serialization.string()),
    secondLine: core.serialization.property("second_line", core.serialization.string().optional()),
    city: core.serialization.string(),
    state: core.serialization.string(),
    zip: core.serialization.string(),
    country: core.serialization.string(),
    phoneNumber: core.serialization.property("phone_number", core.serialization.string().optional()),
});

export declare namespace PatientAddressWithValidation {
    interface Raw {
        receiver_name?: string | null;
        first_line: string;
        second_line?: string | null;
        city: string;
        state: string;
        zip: string;
        country: string;
        phone_number?: string | null;
    }
}
