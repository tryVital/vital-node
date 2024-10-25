/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { Address } from "./Address";

export const GuarantorDetails: core.serialization.ObjectSchema<
    serializers.GuarantorDetails.Raw,
    Vital.GuarantorDetails
> = core.serialization.object({
    firstName: core.serialization.property("first_name", core.serialization.string()),
    lastName: core.serialization.property("last_name", core.serialization.string()),
    address: Address,
    phoneNumber: core.serialization.property("phone_number", core.serialization.string()),
    email: core.serialization.string().optional(),
});

export declare namespace GuarantorDetails {
    interface Raw {
        first_name: string;
        last_name: string;
        address: Address.Raw;
        phone_number: string;
        email?: string | null;
    }
}
