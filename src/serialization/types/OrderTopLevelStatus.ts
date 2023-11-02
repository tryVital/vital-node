/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const OrderTopLevelStatus: core.serialization.Schema<
    serializers.OrderTopLevelStatus.Raw,
    Vital.OrderTopLevelStatus
> = core.serialization.enum_(["received", "collecting_sample", "sample_with_lab", "completed", "cancelled", "failed"]);

export declare namespace OrderTopLevelStatus {
    type Raw = "received" | "collecting_sample" | "sample_with_lab" | "completed" | "cancelled" | "failed";
}