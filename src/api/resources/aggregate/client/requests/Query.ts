/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../../index";

/**
 * @example
 *     {
 *         timeframe: {
 *             type: "relative",
 *             anchor: "anchor",
 *             past: {
 *                 unit: "minute"
 *             }
 *         },
 *         instructions: [{
 *                 select: [{
 *                         arg: {
 *                             sleep: "session_start"
 *                         },
 *                         func: "mean"
 *                     }]
 *             }]
 *     }
 */
export interface Query {
    timeframe: Vital.QueryTimeframe;
    instructions: Vital.QueryInstruction[];
    config?: Vital.QueryConfig;
}
