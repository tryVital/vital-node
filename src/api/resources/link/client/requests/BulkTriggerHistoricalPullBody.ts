/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../../index";

/**
 * @example
 *     {
 *         userIds: ["user_ids"],
 *         provider: "oura"
 *     }
 */
export interface BulkTriggerHistoricalPullBody {
    userIds: string[];
    provider: Vital.OAuthProviders;
}
