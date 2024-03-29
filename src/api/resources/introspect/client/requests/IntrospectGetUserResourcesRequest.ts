/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../..";

/**
 * @example
 *     {
 *         provider: Vital.Providers.Oura
 *     }
 */
export interface IntrospectGetUserResourcesRequest {
    userId?: string;
    provider?: Vital.Providers;
    userLimit?: number;
    cursor?: string;
}
