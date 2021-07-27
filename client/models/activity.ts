import { SourceClientFacing } from "./user_models";

export interface ClientFacingActivity {
    /**
     * 
     * @type {string}
     * @memberof ClientFacingActivity
     */
    id: string;
    /**
     * Date for specified record
     * @type {Date}
     * @memberof ClientFacingActivity
     */
    date: Date;
    /**
     * Total energy consumption during the day including Basal Metabolic Rate in kilocalories.::kilocalories
     * @type {number}
     * @memberof ClientFacingActivity
     */
    caloriesTotal: number;
    /**
     * Energy consumption caused by the physical activity of the day in kilocalories.::kilocalories
     * @type {number}
     * @memberof ClientFacingActivity
     */
    caloriesActive: number;
    /**
     * Total number of steps registered during the day.::steps
     * @type {number}
     * @memberof ClientFacingActivity
     */
    steps?: number;
    /**
     * Daily physical activity as equal meters i.e. amount of walking needed to get the same amount of activity.::meters
     * @type {number}
     * @memberof ClientFacingActivity
     */
    dailyMovement?: number;
    /**
     * Number of minutes during the day with low intensity activity (e.g. household work).::minutes
     * @type {number}
     * @memberof ClientFacingActivity
     */
    low?: number;
    /**
     * Number of minutes during the day with medium intensity activity (e.g. walking).::minutes
     * @type {number}
     * @memberof ClientFacingActivity
     */
    medium?: number;
    /**
     * Number of minutes during the day with high intensity activity (e.g. running).::minutes
     * @type {number}
     * @memberof ClientFacingActivity
     */
    high?: number;
    /**
     * Source the data has come from.
     * @type {SourceClientFacing}
     * @memberof ClientFacingActivity
     */
    source: SourceClientFacing;
    user_id: string;
}


export interface ClientActivityResponse {
    activity: ClientFacingActivity;
}

