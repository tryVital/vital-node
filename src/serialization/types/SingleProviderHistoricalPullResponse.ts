/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const SingleProviderHistoricalPullResponse: core.serialization.ObjectSchema<
    serializers.SingleProviderHistoricalPullResponse.Raw,
    Vital.SingleProviderHistoricalPullResponse
> = core.serialization.object({
    pulled: core.serialization.record(
        core.serialization.string(),
        core.serialization.lazyObject(async () => (await import("..")).SingleHistoricalPullStatistics)
    ),
    notPulled: core.serialization.property(
        "not_pulled",
        core.serialization.list(core.serialization.lazy(async () => (await import("..")).ClientFacingResource))
    ),
});

export declare namespace SingleProviderHistoricalPullResponse {
    interface Raw {
        pulled: Record<string, serializers.SingleHistoricalPullStatistics.Raw>;
        not_pulled: serializers.ClientFacingResource.Raw[];
    }
}
