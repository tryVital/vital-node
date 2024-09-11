/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const GroupKeyColumnExprGroupKey: core.serialization.Schema<
    serializers.GroupKeyColumnExprGroupKey.Raw,
    Vital.GroupKeyColumnExprGroupKey
> = core.serialization.undiscriminatedUnion([core.serialization.number(), core.serialization.stringLiteral("*")]);

export declare namespace GroupKeyColumnExprGroupKey {
    type Raw = number | "*";
}
