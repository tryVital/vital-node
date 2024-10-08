/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const UserSignInTokenResponse: core.serialization.ObjectSchema<
    serializers.UserSignInTokenResponse.Raw,
    Vital.UserSignInTokenResponse
> = core.serialization.object({
    userId: core.serialization.property("user_id", core.serialization.string()),
    signInToken: core.serialization.property("sign_in_token", core.serialization.string()),
});

export declare namespace UserSignInTokenResponse {
    interface Raw {
        user_id: string;
        sign_in_token: string;
    }
}
