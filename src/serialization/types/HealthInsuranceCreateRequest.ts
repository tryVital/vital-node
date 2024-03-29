/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const HealthInsuranceCreateRequest: core.serialization.ObjectSchema<
    serializers.HealthInsuranceCreateRequest.Raw,
    Vital.HealthInsuranceCreateRequest
> = core.serialization.object({
    frontImage: core.serialization.property(
        "front_image",
        core.serialization.lazy(async () => (await import("..")).HealthInsuranceCreateRequestFrontImage).optional()
    ),
    backImage: core.serialization.property(
        "back_image",
        core.serialization.lazy(async () => (await import("..")).HealthInsuranceCreateRequestBackImage).optional()
    ),
    patientSignatureImage: core.serialization.property(
        "patient_signature_image",
        core.serialization
            .lazy(async () => (await import("..")).HealthInsuranceCreateRequestPatientSignatureImage)
            .optional()
    ),
    subjective: core.serialization.string().optional(),
    assessmentPlan: core.serialization.property("assessment_plan", core.serialization.string().optional()),
    payorCode: core.serialization.property("payor_code", core.serialization.string().optional()),
    insuranceId: core.serialization.property("insurance_id", core.serialization.string().optional()),
    responsibleRelationship: core.serialization.property(
        "responsible_relationship",
        core.serialization.lazy(async () => (await import("..")).ResponsibleRelationship).optional()
    ),
    responsibleDetails: core.serialization.property(
        "responsible_details",
        core.serialization.lazyObject(async () => (await import("..")).PersonDetails).optional()
    ),
    diagnosisCodes: core.serialization.property(
        "diagnosis_codes",
        core.serialization.list(core.serialization.string()).optional()
    ),
});

export declare namespace HealthInsuranceCreateRequest {
    interface Raw {
        front_image?: serializers.HealthInsuranceCreateRequestFrontImage.Raw | null;
        back_image?: serializers.HealthInsuranceCreateRequestBackImage.Raw | null;
        patient_signature_image?: serializers.HealthInsuranceCreateRequestPatientSignatureImage.Raw | null;
        subjective?: string | null;
        assessment_plan?: string | null;
        payor_code?: string | null;
        insurance_id?: string | null;
        responsible_relationship?: serializers.ResponsibleRelationship.Raw | null;
        responsible_details?: serializers.PersonDetails.Raw | null;
        diagnosis_codes?: string[] | null;
    }
}
