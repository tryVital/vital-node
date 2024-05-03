/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Vital from "../../../../../api";
import * as core from "../../../../../core";
import { Providers } from "../../../../types/Providers";
import { AuthType } from "../../../../types/AuthType";

export const PasswordAuthLink: core.serialization.Schema<
    serializers.PasswordAuthLink.Raw,
    Omit<Vital.PasswordAuthLink, "vitalLinkToken">
> = core.serialization.object({
    username: core.serialization.string(),
    password: core.serialization.string(),
    provider: Providers,
    authType: core.serialization.property("auth_type", AuthType),
});

export declare namespace PasswordAuthLink {
    interface Raw {
        username: string;
        password: string;
        provider: Providers.Raw;
        auth_type: AuthType.Raw;
    }
}
