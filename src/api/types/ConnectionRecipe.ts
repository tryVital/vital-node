/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ConnectionRecipe {
    /** Vital User ID. The user must be created ahead of the bulk import operation. */
    userId: string;
    accessToken: string;
    refreshToken: string;
    /**
     * User ID of the data provider.
     *
     * - Fitbit: 6-character Fitbit User ID
     * - Garmin: 36-character Garmin User ID
     */
    providerId: string;
    /** Access token expiry date, in terms of UNIX epoch seconds. */
    expiresAt: number;
    /**
     * OAuth scopes of the data provider. Specify `null` if you do not
     * have any scopes on record.
     *
     * - Fitbit: Has scopes
     * - Garmin: No scope
     */
    oauthScopes?: string[];
}
