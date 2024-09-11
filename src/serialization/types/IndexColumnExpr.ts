/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { IndexColumnExprIndex } from "./IndexColumnExprIndex";

export const IndexColumnExpr: core.serialization.ObjectSchema<serializers.IndexColumnExpr.Raw, Vital.IndexColumnExpr> =
    core.serialization.object({
        index: IndexColumnExprIndex,
    });

export declare namespace IndexColumnExpr {
    interface Raw {
        index: IndexColumnExprIndex.Raw;
    }
}