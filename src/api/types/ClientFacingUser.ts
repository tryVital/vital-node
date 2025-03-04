/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingUser {
    /** User id returned by vital create user request. This id should be stored in your database against the user and used for all interactions with the vital api. */
    userId: string;
    /** Your team id. */
    teamId: string;
    /** A unique ID representing the end user. Typically this will be a user ID from your application. Personally identifiable information, such as an email address or phone number, should not be used in the client_user_id. */
    clientUserId: string;
    /** When your item is created */
    createdOn: Date;
    /** A list of the users connected sources. */
    connectedSources: Vital.ConnectedSourceClientFacing[];
    /**
     *     Fallback time zone of the user, in the form of a valid IANA tzdatabase identifier (e.g., `Europe/London` or `America/Los_Angeles`).
     *     Used when pulling data from sources that are completely time zone agnostic (e.g., all time is relative to UTC clock, without any time zone attributions on data points).
     */
    fallbackTimeZone?: Vital.FallbackTimeZone;
    /** Fallback date of birth of the user, in YYYY-mm-dd format. Used for calculating max heartrate for providers that don not provide users' age. */
    fallbackBirthDate?: Vital.FallbackBirthDate;
    /** Starting bound for user [data ingestion bounds](https://docs.tryvital.io/wearables/providers/data-ingestion-bounds). */
    ingestionStart?: string;
    /** Ending bound for user [data ingestion bounds](https://docs.tryvital.io/wearables/providers/data-ingestion-bounds). */
    ingestionEnd?: string;
}
