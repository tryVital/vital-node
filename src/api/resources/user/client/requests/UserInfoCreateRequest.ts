/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../..";

/**
 * @example
 *     {
 *         firstName: "first_name",
 *         lastName: "last_name",
 *         email: "email",
 *         phoneNumber: "phone_number",
 *         gender: "gender",
 *         dob: "dob",
 *         address: {
 *             firstLine: "first_line",
 *             country: "country",
 *             zip: "zip",
 *             city: "city",
 *             state: "state"
 *         }
 *     }
 */
export interface UserInfoCreateRequest {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    dob: string;
    address: Vital.Address;
}