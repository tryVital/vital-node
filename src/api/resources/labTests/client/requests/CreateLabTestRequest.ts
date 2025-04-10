/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../../index";

/**
 * @example
 *     {
 *         name: "name",
 *         method: "testkit",
 *         description: "description"
 *     }
 */
export interface CreateLabTestRequest {
    markerIds?: number[];
    providerIds?: string[];
    name: string;
    method: Vital.LabTestCollectionMethod;
    description: string;
    fasting?: boolean;
}
