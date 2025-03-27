/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingStandDurationSample {
    /** Deprecated */
    id?: number;
    /** Time zone UTC offset in seconds. Positive offset indicates east of UTC; negative offset indicates west of UTC; and null indicates the time zone information is unavailable at source. */
    timezoneOffset?: number;
    /** The reading type of the measurement. This is applicable only to Cholesterol, IGG, IGE and InsulinInjection. */
    type?: string;
    unit: "min";
    grouping?: Vital.ClientFacingSampleGroupingKeys;
    /** Depracated. The start time (inclusive) of the interval. */
    timestamp: Date;
    /** The start time (inclusive) of the interval. */
    start: Date;
    /** The end time (exclusive) of the interval. */
    end: Date;
    /** The recorded value for the interval. */
    value: number;
}
