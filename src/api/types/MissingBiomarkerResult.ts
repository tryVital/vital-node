/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface MissingBiomarkerResult {
    name: string;
    slug: string;
    inferredFailureType: Vital.FailureType;
    note?: string;
    loinc?: string;
    loincSlug?: string;
    providerId?: string;
    sourceMarkers?: Vital.ParentBiomarkerData[];
}
