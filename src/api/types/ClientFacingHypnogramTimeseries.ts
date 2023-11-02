/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ClientFacingHypnogramTimeseries {
    /** Deprecated */
    id?: number;
    /** Time zone UTC offset in seconds. Positive offset indicates east of UTC; negative offset indicates west of UTC; and null indicates the time zone information is unavailable at source. */
    timezoneOffset?: number;
    /** The reading type of the measurement. This is applicable only to Cholesterol, IGG and IGE. */
    type?: string;
    /** enum: 1: deep, 2: light, 3: rem, 4: awake, -1: missing_data. */
    unit: string;
    /** Depracated. The start time (inclusive) of the interval. */
    timestamp: Date;
    /** The start time (inclusive) of the interval. */
    start: Date;
    /** The end time (exclusive) of the interval. */
    end: Date;
    /** Hypnogram for sleep stages {"deep": 1, "light": 2, "rem": 3, "awake": 4, "manual": 5, "missing_data": -1} */
    value: number;
}