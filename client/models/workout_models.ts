import { SourceClientFacing } from "./user_models";

export interface ClientFacingSport {
    /**
     * 
     * @type {number}
     * @memberof ClientFacingSport
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ClientFacingSport
     */
    name: string;
}


/**
 * 
 * @export
 * @interface ClientFacingWorkout
 */
 export interface ClientFacingWorkout {
    /**
     * 
     * @type {string}
     * @memberof ClientFacingWorkout
     */
    id: any;
    /**
     * Average heart rate during workout::bpm
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    average_hr?: number;
    /**
     * Max heart rate during workout::bpm
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    max_hr?: number;
    /**
     * Cumulated distance for exercise.
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    distance?: number;
    /**
     * Start time of the workout::time
     * @type {Date}
     * @memberof ClientFacingWorkout
     */
    time_start: Date;
    /**
     * End time of the workout::time
     * @type {Date}
     * @memberof ClientFacingWorkout
     */
    time_end: Date;
    /**
     * Calories burned during the workout::kCal
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    calories: number;
    /**
     * 
     * @type {ClientFacingSport}
     * @memberof ClientFacingWorkout
     */
    sport: ClientFacingSport;
    /**
     * 
     * @type {SourceClientFacing}
     * @memberof ClientFacingWorkout
     */
    source: SourceClientFacing;
    /**
     * Time in minutes spent in different heart rate zones <50%, 50-60%, 60-70%, 70-80%, 80-90%, 90%+::seconds
     * @type {Array&lt;number&gt;}
     * @memberof ClientFacingWorkout
     */
    hr_zones: any;
    /**
     * User key returned by vital create user key request. This key should be stored in your database against the user and used for all interactions with the vital api.
     * @type {string}
     * @memberof ClientFacingWorkout
     */
    user_id: any;
    /**
     * Time spent active during the workout::seconds
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    moving_time?: any;
    /**
     * Elevation gain during the workout::meters
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    total_elevation_gain?: any;
    /**
     * Highest point of elevation::meters
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    elev_high?: any;
    /**
     * Lowest point of elevation::meters
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    elev_low?: any;
    /**
     * Average speed during workout in m/s::meters/sec
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    average_speed?: any;
    /**
     * Max speed during workout in m/s::meters/sec
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    max_speed?: any;
    /**
     * Average watts burned during exercise::watts
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    average_watts?: any;
    /**
     * Watts burned during exercise::watts
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    device_watts?: any;
    /**
     * Max watts burned during exercise::watts
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    max_watts?: any;
    /*
     * Weighted average watts burned during exercise::watts
     * @type {number}
     * @memberof ClientFacingWorkout
     */
    weighted_average_watts?: any;
    /**
     * Map of workouts encoded as polyline
     * @type {string}
     * @memberof ClientFacingWorkout
     */
    map?: any;
}

export interface ClientWorkoutResponse {
    /**
     * 
     * @type {Array&lt;ClientFacingWorkout&gt;}
     * @memberof ClientWorkoutResponse
     */
    workouts: Array<ClientFacingWorkout>;
}
