/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export type QueryInstructionSelectItem =
    | Vital.AggregateExpr
    | Vital.SleepColumnExpr
    | Vital.ActivityColumnExpr
    | Vital.WorkoutColumnExpr
    | Vital.BodyColumnExpr
    | Vital.IndexColumnExpr
    | Vital.GroupKeyColumnExpr
    | Vital.SleepScoreValueMacroExpr
    | Vital.UnrecognizedValueMacroExpr;
