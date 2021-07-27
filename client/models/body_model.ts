import { SourceClientFacing } from "./user_models";

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
    id: any;
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
