/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { GroupedNote } from "./GroupedNote";

export const GroupedNoteResponse: core.serialization.ObjectSchema<
    serializers.GroupedNoteResponse.Raw,
    Vital.GroupedNoteResponse
> = core.serialization.object({
    groups: core.serialization.record(core.serialization.string(), core.serialization.list(GroupedNote)),
    next: core.serialization.string().optional(),
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
});

export declare namespace GroupedNoteResponse {
    interface Raw {
        groups: Record<string, GroupedNote.Raw[]>;
        next?: string | null;
        next_cursor?: string | null;
    }
}
