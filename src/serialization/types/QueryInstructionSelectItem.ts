/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { AggregateExpr } from "./AggregateExpr";
import { SleepColumnExpr } from "./SleepColumnExpr";
import { ActivityColumnExpr } from "./ActivityColumnExpr";
import { WorkoutColumnExpr } from "./WorkoutColumnExpr";
import { BodyColumnExpr } from "./BodyColumnExpr";
import { IndexColumnExpr } from "./IndexColumnExpr";
import { GroupKeyColumnExpr } from "./GroupKeyColumnExpr";
import { SleepScoreValueMacroExpr } from "./SleepScoreValueMacroExpr";
import { ChronotypeValueMacroExpr } from "./ChronotypeValueMacroExpr";
import { UnrecognizedValueMacroExpr } from "./UnrecognizedValueMacroExpr";

export const QueryInstructionSelectItem: core.serialization.Schema<
    serializers.QueryInstructionSelectItem.Raw,
    Vital.QueryInstructionSelectItem
> = core.serialization.undiscriminatedUnion([
    AggregateExpr,
    SleepColumnExpr,
    ActivityColumnExpr,
    WorkoutColumnExpr,
    BodyColumnExpr,
    IndexColumnExpr,
    GroupKeyColumnExpr,
    SleepScoreValueMacroExpr,
    ChronotypeValueMacroExpr,
    UnrecognizedValueMacroExpr,
]);

export declare namespace QueryInstructionSelectItem {
    type Raw =
        | AggregateExpr.Raw
        | SleepColumnExpr.Raw
        | ActivityColumnExpr.Raw
        | WorkoutColumnExpr.Raw
        | BodyColumnExpr.Raw
        | IndexColumnExpr.Raw
        | GroupKeyColumnExpr.Raw
        | SleepScoreValueMacroExpr.Raw
        | ChronotypeValueMacroExpr.Raw
        | UnrecognizedValueMacroExpr.Raw;
}
