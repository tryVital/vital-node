/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ClientFacingHrvTimeseries {
    id?: number;
    timezoneOffset?: number;
    type?: string;
    /** Measured in rmssd. */
    unit: string;
    /** The timestamp of the measurement. */
    timestamp: Date;
    /** HRV calculated using rmssd during sleep */
    value: number;
}
