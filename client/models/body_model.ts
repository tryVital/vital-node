import { SourceClientFacing } from './user_models';

/**
 *
 * @export
 * @interface ClientFacingBody
 */
export interface ClientFacingBody {
  /**
   *
   * @type {string}
   * @memberof ClientFacingBody
   */
  id: string;
  /**
   * Date for specified record
   * @type {Date}
   * @memberof ClientFacingBody
   */
  date: Date;
  /**
   * Weight in kg.::kg
   * @type {number}
   * @memberof ClientFacingBody
   */
  weight: number;
  /**
   * Body fat percentage.::perc
   * @type {number}
   * @memberof ClientFacingBody
   */
  fat?: number;
  /**
   * Source the data has come from.
   * @type {SourceClientFacing}
   * @memberof ClientFacingBody
   */
  source: SourceClientFacing;
  /**
   * User id returned by vital create user id request. This id should be stored in your database against the user and used for all interactions with the vital api.
   * @type {string}
   * @memberof ClientFacingBody
   */
  user_id: string;
}

/**
 *
 * @export
 * @interface ClientBodyResponse
 */
export interface ClientBodyResponse {
  /**
   *
   * @type {Array&lt;ClientFacingBody&gt;}
   * @memberof ClientBodyResponse
   */
  body: ClientFacingBody[];
}
