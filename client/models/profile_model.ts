import { SourceClientFacing } from './user_models';

export interface ClientFacingProfile {
  /**
   * Age of user.::years
   * @type {number}
   * @memberof ClientFacingBody
   */
  age?: number;
  /**
   * Height in cm.::cm
   * @type {number}
   * @memberof ClientFacingBody
   */
  height?: number;
  /**
   * Gender of user.
   * @type {string}
   * @memberof ClientFacingBody
   */
  gender?: string;
  /**
   * Source the data has come from.
   * @type {SourceClientFacing}
   * @memberof ClientFacingBody
   */
  source: SourceClientFacing;
  /**
   * User key returned by vital create user key request. This key should be stored in your database against the user and used for all interactions with the vital api.
   * @type {string}
   * @memberof ClientFacingBody
   */
  user_id: string;
}
