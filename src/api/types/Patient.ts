/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface Patient {
    birthDate: Vital.PatientBirthDate;
    name: Vital.VitalCoreProvidersLabTestLabsSchemasResultsFhirNameItem[];
    gender: string;
    identifier: Vital.VitalCoreProvidersLabTestLabsSchemasResultsFhirIdentifierItem[];
}
