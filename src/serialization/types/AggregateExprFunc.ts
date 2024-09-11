/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const AggregateExprFunc: core.serialization.Schema<serializers.AggregateExprFunc.Raw, Vital.AggregateExprFunc> =
    core.serialization.enum_(["mean", "min", "max", "sum", "count", "median", "stddev", "oldest", "newest"]);

export declare namespace AggregateExprFunc {
    type Raw = "mean" | "min" | "max" | "sum" | "count" | "median" | "stddev" | "oldest" | "newest";
}