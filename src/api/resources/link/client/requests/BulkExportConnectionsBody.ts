/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../../index";

/**
 * @example
 *     {
 *         provider: "oura"
 *     }
 */
export interface BulkExportConnectionsBody {
    teamId?: Vital.LinkBulkExportRequestTeamId;
    userIds?: string[];
    provider: Vital.OAuthProviders;
    nextToken?: string;
}
