/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface LabResultsRaw {
    metadata: Vital.LabResultsMetadata;
    results: Vital.LabResultsRawResults;
    missingResults?: Vital.MissingBiomarkerResult[];
    sampleInformation?: Record<string, Vital.SampleData | undefined>;
}
