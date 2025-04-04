/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ChronotypeValueMacroExpr: core.serialization.ObjectSchema<
    serializers.ChronotypeValueMacroExpr.Raw,
    Vital.ChronotypeValueMacroExpr
> = core.serialization.object({
    valueMacro: core.serialization.property("value_macro", core.serialization.stringLiteral("chronotype")),
    version: core.serialization.stringLiteral("automatic").optional(),
});

export declare namespace ChronotypeValueMacroExpr {
    interface Raw {
        value_macro: "chronotype";
        version?: "automatic" | null;
    }
}
