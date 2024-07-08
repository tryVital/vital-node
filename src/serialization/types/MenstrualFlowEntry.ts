/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { MenstrualFlowEntryFlow } from "./MenstrualFlowEntryFlow";

export const MenstrualFlowEntry: core.serialization.ObjectSchema<
    serializers.MenstrualFlowEntry.Raw,
    Vital.MenstrualFlowEntry
> = core.serialization.object({
    date: core.serialization.string(),
    flow: MenstrualFlowEntryFlow,
});

export declare namespace MenstrualFlowEntry {
    interface Raw {
        date: string;
        flow: MenstrualFlowEntryFlow.Raw;
    }
}
