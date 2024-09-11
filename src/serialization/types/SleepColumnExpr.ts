/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { SleepColumnExprSleep } from "./SleepColumnExprSleep";

export const SleepColumnExpr: core.serialization.ObjectSchema<serializers.SleepColumnExpr.Raw, Vital.SleepColumnExpr> =
    core.serialization.object({
        sleep: SleepColumnExprSleep,
    });

export declare namespace SleepColumnExpr {
    interface Raw {
        sleep: SleepColumnExprSleep.Raw;
    }
}