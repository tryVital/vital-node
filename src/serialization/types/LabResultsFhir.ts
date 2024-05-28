/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { VitalCoreProvidersLabTestLabsSchemasResultsFhirEntryItem } from "./VitalCoreProvidersLabTestLabsSchemasResultsFhirEntryItem";

export const LabResultsFhir: core.serialization.ObjectSchema<serializers.LabResultsFhir.Raw, Vital.LabResultsFhir> =
    core.serialization.object({
        resourceType: core.serialization.string(),
        type: core.serialization.string(),
        entry: core.serialization.list(VitalCoreProvidersLabTestLabsSchemasResultsFhirEntryItem),
    });

export declare namespace LabResultsFhir {
    interface Raw {
        resourceType: string;
        type: string;
        entry: VitalCoreProvidersLabTestLabsSchemasResultsFhirEntryItem.Raw[];
    }
}
