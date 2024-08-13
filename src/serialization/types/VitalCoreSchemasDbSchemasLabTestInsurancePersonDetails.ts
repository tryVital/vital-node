/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { Gender } from "./Gender";
import { Address } from "./Address";

export const VitalCoreSchemasDbSchemasLabTestInsurancePersonDetails: core.serialization.ObjectSchema<
    serializers.VitalCoreSchemasDbSchemasLabTestInsurancePersonDetails.Raw,
    Vital.VitalCoreSchemasDbSchemasLabTestInsurancePersonDetails
> = core.serialization.object({
    firstName: core.serialization.property("first_name", core.serialization.string()),
    lastName: core.serialization.property("last_name", core.serialization.string()),
    gender: Gender,
    address: Address,
    dob: core.serialization.string(),
    email: core.serialization.string(),
    phoneNumber: core.serialization.property("phone_number", core.serialization.string()),
});

export declare namespace VitalCoreSchemasDbSchemasLabTestInsurancePersonDetails {
    interface Raw {
        first_name: string;
        last_name: string;
        gender: Gender.Raw;
        address: Address.Raw;
        dob: string;
        email: string;
        phone_number: string;
    }
}