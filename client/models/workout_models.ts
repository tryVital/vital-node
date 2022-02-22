import { SourceClientFacing } from './user_models';

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
  id: string;
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
  hr_zones: number[];
  /**
   * User id returned by vital create user id request. This id should be stored in your database against the user and used for all interactions with the vital api.
   * @type {string}
   * @memberof ClientFacingWorkout
   */
  user_id: string;
  /**
   * Time spent active during the workout::seconds
   * @type {number}
   * @memberof ClientFacingWorkout
   */
  moving_time?: number;
  /**
   * Elevation gain during the workout::meters
   * @type {number}
   * @memberof ClientFacingWorkout
   */
  total_elevation_gain?: number;
  /**
   * Highest point of elevation::meters
   * @type {number}
   * @memberof ClientFacingWorkout
   */
  elev_high?: number;
  /**
   * Lowest point of elevation::meters
   * @type {number}
   * @memberof ClientFacingWorkout
   */
  elev_low?: number;
  /**
   * Average speed during workout in m/s::meters/sec
   * @type {number}
   * @memberof ClientFacingWorkout
   */
  average_speed?: number;
  /**
   * Max speed during workout in m/s::meters/sec
   * @type {number}
   * @memberof ClientFacingWorkout
   */
  max_speed?: number;
  /**
   * Average watts burned during exercise::watts
   * @type {number}
   * @memberof ClientFacingWorkout
   */
  average_watts?: number;
  /**
   * Watts burned during exercise::watts
   * @type {number}
   * @memberof ClientFacingWorkout
   */
  device_watts?: number;
  /**
   * Max watts burned during exercise::watts
   * @type {number}
   * @memberof ClientFacingWorkout
   */
  max_watts?: number;
  /*
   * Weighted average watts burned during exercise::watts
   * @type {number}
   * @memberof ClientFacingWorkout
   */
  weighted_average_watts?: number;
  /**
   * Map of workouts encoded as polyline
   * @type {string}
   * @memberof ClientFacingWorkout
   */
  map?: string;
}

export interface ClientWorkoutResponse {
  /**
   *
   * @type {Array&lt;ClientFacingWorkout&gt;}
   * @memberof ClientWorkoutResponse
   */
  workouts: Array<ClientFacingWorkout>;
}

export interface ClientWorkoutStreamResponse {
  /**
   *
   * @type {Array&lt;ClientWorkoutStreamResponse&gt;}
   * @memberof ClientWorkoutStreamResponse
   */
  id: number;
  cadence?: number[];
  time: number[];
  altitude?: number[];
  velocity_smooth?: number[];
  heartrate?: number[];
  lat?: number[];
  lng?: number[];
  distance?: number[];
  power?: number[];
  resistance?: number[];
}
