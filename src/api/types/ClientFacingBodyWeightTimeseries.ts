/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ClientFacingBodyWeightTimeseries {
    id?: number;
    timezoneOffset?: number;
    type?: string;
    /** Measured in kilograms (kg). */
    unit: string;
    /** The timestamp of the measurement. */
    timestamp: Date;
    /** The value of the measurement. */
    value: number;
}
