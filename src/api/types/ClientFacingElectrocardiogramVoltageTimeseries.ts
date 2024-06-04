/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ClientFacingElectrocardiogramVoltageTimeseries {
    id?: number;
    timezoneOffset?: number;
    /** The lead of the measurement. */
    type?: string;
    /** Measured in mV. */
    unit: string;
    /** The timestamp of the measurement. */
    timestamp: string;
    /** The value of the measurement. */
    value: number;
}
