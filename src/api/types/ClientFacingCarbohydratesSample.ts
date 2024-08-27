/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ClientFacingCarbohydratesSample {
    id?: number;
    timezoneOffset?: number;
    type?: string;
    /** Measured in grams. */
    unit: string;
    /** Depracated. The start time (inclusive) of the interval. */
    timestamp: Date;
    /** The start time (inclusive) of the interval. */
    start: Date;
    /** The end time (exclusive) of the interval. */
    end: Date;
    /** The recorded value for the interval. */
    value: number;
}