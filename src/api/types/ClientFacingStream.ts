/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface ClientFacingStream {
    /** RPM for cycling, Steps per minute for running */
    cadence?: Vital.ClientFacingStreamCadence;
    time?: number[];
    /** Data points for altitude */
    altitude?: Vital.ClientFacingStreamAltitude;
    /** Velocity in m/s */
    velocitySmooth?: Vital.ClientFacingStreamVelocitySmooth;
    /** Heart rate in bpm */
    heartrate?: Vital.ClientFacingStreamHeartrate;
    /** Latitude for data point */
    lat?: Vital.ClientFacingStreamLat;
    /** Longitude for data point */
    lng?: Vital.ClientFacingStreamLng;
    /** Cumulated distance for exercise */
    distance?: Vital.ClientFacingStreamDistance;
    /** Power in watts */
    power?: Vital.ClientFacingStreamPower;
    /** Resistance on bike */
    resistance?: Vital.ClientFacingStreamResistance;
}
