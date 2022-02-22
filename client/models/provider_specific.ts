/**
 *
 * @export
 * @interface ClientFacingSourceSpecific
 */
export interface ClientFacingSourceSpecific {
  /**
   *
   * @type {string}
   * @memberof ClientFacingSourceSpecific
   */
  id: string;
  /**
   * Date for specified record
   * @type {Date}
   * @memberof ClientFacingSourceSpecific
   */
  date: Date;
  /**
   * Type of data, activity/sleep/workouts/body
   * @type {string}
   * @memberof ClientFacingSourceSpecific
   */
  type: 'activity' | 'sleep' | 'body' | 'workouts';
  /**
   * JSON data that is specific to the device
   * @type {any | string}
   * @memberof ClientFacingSourceSpecific
   */
  data: unknown;
  /**
   * User id returned by vital create user id request. This id should be stored in your database against the user and used for all interactions with the vital api.
   * @type {string}
   * @memberof ClientFacingSourceSpecific
   */
  user_id: string;
}

export interface ClientProviderSpecificResponse {
  /**
   *
   * @type {Array&lt;ClientFacingSourceSpecific&gt;}
   * @memberof ClientProviderSpecificResponse
   */
  provider_specific: ClientFacingSourceSpecific[];
}
