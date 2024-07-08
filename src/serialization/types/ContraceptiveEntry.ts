/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { ContraceptiveEntryType } from "./ContraceptiveEntryType";

export const ContraceptiveEntry: core.serialization.ObjectSchema<
    serializers.ContraceptiveEntry.Raw,
    Vital.ContraceptiveEntry
> = core.serialization.object({
    date: core.serialization.string(),
    type: ContraceptiveEntryType,
});

export declare namespace ContraceptiveEntry {
    interface Raw {
        date: string;
        type: ContraceptiveEntryType.Raw;
    }
}
