/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const SingleUserResourceResponse: core.serialization.ObjectSchema<
    serializers.SingleUserResourceResponse.Raw,
    Vital.SingleUserResourceResponse
> = core.serialization.object({
    userId: core.serialization.property("user_id", core.serialization.string()),
    provider: core.serialization.record(
        core.serialization.string(),
        core.serialization.record(
            core.serialization.string(),
            core.serialization.lazyObject(async () => (await import("..")).SingleResourceStatistics)
        )
    ),
});

export declare namespace SingleUserResourceResponse {
    interface Raw {
        user_id: string;
        provider: Record<string, Record<string, serializers.SingleResourceStatistics.Raw>>;
    }
}
