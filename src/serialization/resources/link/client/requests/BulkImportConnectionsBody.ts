/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vital from "../../../../../api/index";
import * as core from "../../../../../core";
import { OAuthProviders } from "../../../../types/OAuthProviders";
import { ConnectionRecipe } from "../../../../types/ConnectionRecipe";

export const BulkImportConnectionsBody: core.serialization.Schema<
    serializers.BulkImportConnectionsBody.Raw,
    Vital.BulkImportConnectionsBody
> = core.serialization.object({
    provider: OAuthProviders,
    connections: core.serialization.list(ConnectionRecipe),
    waitForCompletion: core.serialization.property("wait_for_completion", core.serialization.boolean().optional()),
});

export declare namespace BulkImportConnectionsBody {
    interface Raw {
        provider: OAuthProviders.Raw;
        connections: ConnectionRecipe.Raw[];
        wait_for_completion?: boolean | null;
    }
}
