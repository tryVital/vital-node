/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../../index";

/**
 * @example
 *     {
 *         username: "username",
 *         password: "password",
 *         provider: Vital.Providers.Oura,
 *         authType: Vital.AuthType.Password
 *     }
 */
export interface PasswordAuthLink {
    vitalLinkToken?: string;
    username: string;
    password: string;
    provider: Vital.Providers;
    authType: Vital.AuthType;
}
