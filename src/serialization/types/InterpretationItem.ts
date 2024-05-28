/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { CodingItem1 } from "./CodingItem1";

export const InterpretationItem: core.serialization.ObjectSchema<
    serializers.InterpretationItem.Raw,
    Vital.InterpretationItem
> = core.serialization.object({
    coding: core.serialization.list(CodingItem1),
});

export declare namespace InterpretationItem {
    interface Raw {
        coding: CodingItem1.Raw[];
    }
}
