/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { Period } from "./Period";
import { DateTruncExprArg } from "./DateTruncExprArg";

export const DateTruncExpr: core.serialization.ObjectSchema<serializers.DateTruncExpr.Raw, Vital.DateTruncExpr> =
    core.serialization.object({
        dateTrunc: core.serialization.property("date_trunc", Period),
        arg: DateTruncExprArg,
    });

export declare namespace DateTruncExpr {
    interface Raw {
        date_trunc: Period.Raw;
        arg: DateTruncExprArg.Raw;
    }
}
