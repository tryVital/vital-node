/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientFacingStreamAltitude: core.serialization.Schema<
    serializers.ClientFacingStreamAltitude.Raw,
    Vital.ClientFacingStreamAltitude
> = core.serialization.undiscriminatedUnion([
    core.serialization.list(core.serialization.number().optional()),
    core.serialization.list(core.serialization.number()),
]);

export declare namespace ClientFacingStreamAltitude {
    type Raw = (number | null | undefined)[] | number[];
}