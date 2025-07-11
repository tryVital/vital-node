/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

/**
 * Represent the schema for an individual biomarker result.
 */
export interface BiomarkerResult {
    name: string;
    slug?: string;
    value: number;
    result: string;
    type: Vital.ResultType;
    unit?: string;
    timestamp?: Date;
    notes?: string;
    referenceRange?: string;
    minRangeValue?: number;
    maxRangeValue?: number;
    isAboveMaxRange?: boolean;
    isBelowMinRange?: boolean;
    interpretation?: string;
    loinc?: string;
    loincSlug?: string;
    providerId?: string;
    sourceMarkers?: Vital.ParentBiomarkerData[];
    performingLaboratory?: string;
    sourceSampleId?: string;
}
