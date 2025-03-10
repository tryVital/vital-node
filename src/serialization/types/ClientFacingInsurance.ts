/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ResponsibleRelationship } from "./ResponsibleRelationship";
import { VitalCoreSchemasDbSchemasLabTestInsurancePersonDetails } from "./VitalCoreSchemasDbSchemasLabTestInsurancePersonDetails";
import { CompanyDetails } from "./CompanyDetails";
import { GuarantorDetails } from "./GuarantorDetails";

export const ClientFacingInsurance: core.serialization.ObjectSchema<
    serializers.ClientFacingInsurance.Raw,
    Vital.ClientFacingInsurance
> = core.serialization.object({
    memberId: core.serialization.property("member_id", core.serialization.string()),
    payorCode: core.serialization.property("payor_code", core.serialization.string()),
    relationship: ResponsibleRelationship,
    insured: VitalCoreSchemasDbSchemasLabTestInsurancePersonDetails,
    company: CompanyDetails,
    groupId: core.serialization.property("group_id", core.serialization.string().optional()),
    guarantor: GuarantorDetails.optional(),
});

export declare namespace ClientFacingInsurance {
    interface Raw {
        member_id: string;
        payor_code: string;
        relationship: ResponsibleRelationship.Raw;
        insured: VitalCoreSchemasDbSchemasLabTestInsurancePersonDetails.Raw;
        company: CompanyDetails.Raw;
        group_id?: string | null;
        guarantor?: GuarantorDetails.Raw | null;
    }
}
