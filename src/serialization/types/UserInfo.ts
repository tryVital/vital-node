/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { Address } from "./Address";
import { GuarantorDetails } from "./GuarantorDetails";
import { Race } from "./Race";
import { Ethnicity } from "./Ethnicity";
import { SexualOrientation } from "./SexualOrientation";
import { GenderIdentity } from "./GenderIdentity";

export const UserInfo: core.serialization.ObjectSchema<serializers.UserInfo.Raw, Vital.UserInfo> =
    core.serialization.object({
        firstName: core.serialization.property("first_name", core.serialization.string()),
        lastName: core.serialization.property("last_name", core.serialization.string()),
        email: core.serialization.string(),
        phoneNumber: core.serialization.property("phone_number", core.serialization.string()),
        gender: core.serialization.string(),
        dob: core.serialization.string(),
        address: Address,
        medicalProxy: core.serialization.property("medical_proxy", GuarantorDetails.optional()),
        race: Race.optional(),
        ethnicity: Ethnicity.optional(),
        sexualOrientation: core.serialization.property("sexual_orientation", SexualOrientation.optional()),
        genderIdentity: core.serialization.property("gender_identity", GenderIdentity.optional()),
    });

export declare namespace UserInfo {
    interface Raw {
        first_name: string;
        last_name: string;
        email: string;
        phone_number: string;
        gender: string;
        dob: string;
        address: Address.Raw;
        medical_proxy?: GuarantorDetails.Raw | null;
        race?: Race.Raw | null;
        ethnicity?: Ethnicity.Raw | null;
        sexual_orientation?: SexualOrientation.Raw | null;
        gender_identity?: GenderIdentity.Raw | null;
    }
}
