/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { Patient } from "./Patient";
import { Observation } from "./Observation";

export const VitalCoreProvidersLabTestLabsSchemasResultsFhirEntryItemResource: core.serialization.Schema<
    serializers.VitalCoreProvidersLabTestLabsSchemasResultsFhirEntryItemResource.Raw,
    Vital.VitalCoreProvidersLabTestLabsSchemasResultsFhirEntryItemResource
> = core.serialization.undiscriminatedUnion([Patient, Observation]);

export declare namespace VitalCoreProvidersLabTestLabsSchemasResultsFhirEntryItemResource {
    type Raw = Patient.Raw | Observation.Raw;
}
