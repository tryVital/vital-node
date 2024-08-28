/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const SleepSummaryState: core.serialization.Schema<serializers.SleepSummaryState.Raw, Vital.SleepSummaryState> =
    core.serialization.enum_(["tentative", "confirmed"]);

export declare namespace SleepSummaryState {
    type Raw = "tentative" | "confirmed";
}
