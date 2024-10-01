/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../../index";

/**
 * @example
 *     {
 *         body: {
 *             firstLine: "first_line",
 *             city: "city",
 *             state: "state",
 *             zipCode: "zip_code"
 *         }
 *     }
 */
export interface LabTestsGetPhlebotomyAppointmentAvailabilityRequest {
    /**
     * Start date for appointment availability
     */
    startDate?: string;
    /**
     * At-home phlebotomy appointment address.
     */
    body: Vital.UsAddress;
}