/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Vital from "../../../../../api";
import * as core from "../../../../../core";

export const EmailProviderAuthLink: core.serialization.Schema<
    serializers.EmailProviderAuthLink.Raw,
    Omit<Vital.EmailProviderAuthLink, "vitalLinkToken">
> = core.serialization.object({
    email: core.serialization.string(),
    emailProviderAuthLinkProvider: core.serialization.property(
        "provider",
        core.serialization.lazy(async () => (await import("../../../..")).Providers).optional()
    ),
    region: core.serialization.lazy(async () => (await import("../../../..")).Region).optional(),
});

export declare namespace EmailProviderAuthLink {
    interface Raw {
        email: string;
        provider?: serializers.Providers.Raw | null;
        region?: serializers.Region.Raw | null;
    }
}
