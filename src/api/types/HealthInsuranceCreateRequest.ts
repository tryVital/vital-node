/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface HealthInsuranceCreateRequest {
    /** An image of the front of the patient insurance card. */
    frontImage?: Vital.HealthInsuranceCreateRequestFrontImage;
    /** An image of the back of the patient insurance card. */
    backImage?: Vital.HealthInsuranceCreateRequestBackImage;
    /** An image of the patient signature for health insurance billing. */
    patientSignatureImage?: Vital.HealthInsuranceCreateRequestPatientSignatureImage;
    /** Textual description of what are the patient symptoms and attempted treatments. */
    subjective?: string;
    /** Textual description of what are the physician assessments and testing plans. */
    assessmentPlan?: string;
    /** Unique identifier representing a specific Health Insurance. */
    payorCode?: string;
    /** Insurance unique number assigned to a patient, usually present on the insurance card. */
    insuranceId?: string;
    /** Relationship between the patient and the insurance contractor. Values can be (Self, Spouse, Other Relationship). */
    responsibleRelationship?: Vital.ResponsibleRelationship;
    /** Responsible details when the value of responsible_relationship is not 'Self'. */
    responsibleDetails?: Vital.VitalCoreSchemasDbSchemasLabTestHealthInsurancePersonDetails;
    /** Diagnosis codes for insurance billing. */
    diagnosisCodes?: string[];
}
