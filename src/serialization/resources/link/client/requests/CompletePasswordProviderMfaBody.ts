/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Vital from "../../../../../api";
import * as core from "../../../../../core";

export const CompletePasswordProviderMfaBody: core.serialization.Schema<
    serializers.CompletePasswordProviderMfaBody.Raw,
    Omit<Vital.CompletePasswordProviderMfaBody, "vitalLinkToken">
> = core.serialization.object({
    mfaCode: core.serialization.property("mfa_code", core.serialization.string()),
});

export declare namespace CompletePasswordProviderMfaBody {
    interface Raw {
        mfa_code: string;
    }
}
