/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../../index";

/**
 * @example
 *     {}
 */
export interface LabTestsGetPaginatedRequest {
    labTestLimit?: number;
    nextCursor?: string;
    /**
     * Filter on whether auto-generated lab tests created by Vital, manually created lab tests, or all lab tests should be returned.
     */
    generationMethod?: Vital.LabTestGenerationMethodFilter;
    /**
     * Filter by the slug of the lab for these lab tests.
     */
    labSlug?: string;
    /**
     * Filter by the collection method for these lab tests.
     */
    collectionMethod?: Vital.LabTestCollectionMethod;
    /**
     * Filter by the status of these lab tests.
     */
    status?: Vital.LabTestStatus;
    /**
     * Filter to only include lab tests containing these marker IDs.
     */
    markerIds?: number | number[];
    /**
     * Filter to only include lab tests containing these provider IDs.
     */
    providerIds?: string | string[];
    /**
     * Filter by the name of the lab test (a case-insensitive substring search).
     */
    name?: string;
    orderKey?: Vital.LabTestsGetPaginatedRequestOrderKey;
    orderDirection?: Vital.LabTestsGetPaginatedRequestOrderDirection;
}
