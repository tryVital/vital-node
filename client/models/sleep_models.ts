import { TimeseriesPoint } from './activity';
import { SourceClientFacing } from './user_models';

/**
 *
 * @export
 * @interface ClientFacingSleep
 */
export interface ClientFacingSleep {
  /**
   *
   * @type {string}
   * @memberof ClientFacingSleep
   */
  id: string;
  /**
   * Date for specified record
   * @type {Date}
   * @memberof ClientFacingSleep
   */
  date: Date;
  /**
   * UTC Time when the sleep period started
   * @type {Date}
   * @memberof ClientFacingSleep
   */
  bedtime_start: Date;
  /**
   * UTC Time when the sleep period ended
   * @type {Date}
   * @memberof ClientFacingSleep
   */
  bedtime_stop: Date;
  /**
   * Timezone offset from UTC as minutes. For example, EEST (Eastern European Summer Time, +3h) is 180. PST (Pacific Standard Time, -8h) is -480. Note that timezone information is also available in the datetime values themselves, see for example.bedtime_start.::minutes
   * @type {number}
   * @memberof ClientFacingSleep
   */
  timezone_offset?: number;
  /**
   * Total duration of the sleep period (sleep.duration = sleep.bedtime_end - sleep.bedtime_start).::seconds
   * @type {number}
   * @memberof ClientFacingSleep
   */
  duration: number;
  /**
   * Total amount of sleep registered during the sleep period (sleep.total = sleep.rem + sleep.light + sleep.deep).::seconds
   * @type {number}
   * @memberof ClientFacingSleep
   */
  total: number;
  /**
   * Total amount of awake time registered during the sleep period.::seconds
   * @type {number}
   * @memberof ClientFacingSleep
   */
  awake: number;
  /**
   * Total amount of light sleep registered during the sleep period::seconds
   * @type {number}
   * @memberof ClientFacingSleep
   */
  light: number;
  /**
   * Total amount of REM sleep registered during the sleep period, minutes::seconds
   * @type {number}
   * @memberof ClientFacingSleep
   */
  rem: number;
  /**
   * Total amount of deep (N3) sleep registered during the sleep period::seconds
   * @type {number}
   * @memberof ClientFacingSleep
   */
  deep: number;
  /**
   * The lowest heart rate (5 minutes sliding average) registered during the sleep period.::beats per minute
   * @type {number}
   * @memberof ClientFacingSleep
   */
  hr_lowest?: number;
  /**
   * The average heart rate registered during the sleep period.::beats per minute
   * @type {number}
   * @memberof ClientFacingSleep
   */
  hr_average?: number;
  /**
   * Sleep efficiency is the percentage of the sleep period spent asleep (100% * sleep.total / sleep.duration).::perc
   * @type {number}
   * @memberof ClientFacingSleep
   */
  efficiency?: number;
  /**
   * Detected latency from bedtime_start to the beginning of the first five minutes of persistent sleep.::seconds
   * @type {number}
   * @memberof ClientFacingSleep
   */
  latency?: number;
  /**
   * Skin temperature deviation from the long-term temperature average.::celcius
   * @type {number}
   * @memberof ClientFacingSleep
   */
  temperature_delta?: number;
  /**
   * The average heart rate registered during the sleep period.::beats per minute
   * @type {number}
   * @memberof ClientFacingSleep
   */
  average_hrv?: number;
  /**
   * Average respiratory rate.::breaths per minute
   * @type {number}
   * @memberof ClientFacingSleep
   */
  respiratory_rate?: number;
  /**
   * Source the data has come from.
   * @type {SourceClientFacing}
   * @memberof ClientFacingSleep
   */
  source: SourceClientFacing;
  /**
   * User id returned by vital create user id request. This id should be stored in your database against the user and used for all interactions with the vital api.
   * @type {string}
   * @memberof ClientFacingSleep
   */
  user_id: string;
  /**
   * UTC time when the sleep period started
   * @type {ClientSleepStreamResponse}
   * @memberof ClientFacingSleep
   * 
   */
  sleep_stream: ClientSleepStreamResponse[];
}

export interface ClientSleepResponse {
  /**
   *
   * @type {Array&lt;ClientFacingSleep&gt;}
   * @memberof ClientSleepResponse
   */
  sleep: ClientFacingSleep[];
}

export interface ClientSleepStreamResponse {
  /**
   *
   * @type {Array&lt;ClientFacingSleep&gt;}
   * @memberof ClientSleepResponse
   */
  hrv: TimeseriesPoint[];
  heartrate: TimeseriesPoint[];
  respiratory_rate: TimeseriesPoint[];
  hypnogram: TimeseriesPoint[];
}
