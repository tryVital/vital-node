/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { SleepColumnExpr } from "./SleepColumnExpr";
import { ActivityColumnExpr } from "./ActivityColumnExpr";
import { IndexColumnExpr } from "./IndexColumnExpr";
import { GroupKeyColumnExpr } from "./GroupKeyColumnExpr";

export const AggregateExprArg: core.serialization.Schema<serializers.AggregateExprArg.Raw, Vital.AggregateExprArg> =
    core.serialization.undiscriminatedUnion([SleepColumnExpr, ActivityColumnExpr, IndexColumnExpr, GroupKeyColumnExpr]);

export declare namespace AggregateExprArg {
    type Raw = SleepColumnExpr.Raw | ActivityColumnExpr.Raw | IndexColumnExpr.Raw | GroupKeyColumnExpr.Raw;
}