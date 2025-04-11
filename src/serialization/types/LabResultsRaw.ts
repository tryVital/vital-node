/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { LabResultsMetadata } from "./LabResultsMetadata";
import { LabResultsRawResults } from "./LabResultsRawResults";
import { MissingBiomarkerResult } from "./MissingBiomarkerResult";
import { SampleData } from "./SampleData";

export const LabResultsRaw: core.serialization.ObjectSchema<serializers.LabResultsRaw.Raw, Vital.LabResultsRaw> =
    core.serialization.object({
        metadata: LabResultsMetadata,
        results: LabResultsRawResults,
        missingResults: core.serialization.property(
            "missing_results",
            core.serialization.list(MissingBiomarkerResult).optional()
        ),
        sampleInformation: core.serialization.property(
            "sample_information",
            core.serialization.record(core.serialization.string(), SampleData.optional()).optional()
        ),
    });

export declare namespace LabResultsRaw {
    interface Raw {
        metadata: LabResultsMetadata.Raw;
        results: LabResultsRawResults.Raw;
        missing_results?: MissingBiomarkerResult.Raw[] | null;
        sample_information?: Record<string, SampleData.Raw | null | undefined> | null;
    }
}
