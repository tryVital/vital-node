/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ClientFacingCaloriesActiveTimeseries {
    id?: number;
    timezoneOffset?: number;
    type?: string;
    /** Measured in kilocalories (kcal) */
    unit: "kcal";
    /** Depracated. The start time (inclusive) of the interval. */
    timestamp: Date;
    /** The start time (inclusive) of the interval. */
    start: Date;
    /** The end time (exclusive) of the interval. */
    end: Date;
    /** Energy consumption caused by the physical activity at the time or interval::kilocalories */
    value: number;
}
