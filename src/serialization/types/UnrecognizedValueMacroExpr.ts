/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const UnrecognizedValueMacroExpr: core.serialization.ObjectSchema<
    serializers.UnrecognizedValueMacroExpr.Raw,
    Vital.UnrecognizedValueMacroExpr
> = core.serialization.object({
    valueMacro: core.serialization.property("value_macro", core.serialization.string()),
});

export declare namespace UnrecognizedValueMacroExpr {
    interface Raw {
        value_macro: string;
    }
}
