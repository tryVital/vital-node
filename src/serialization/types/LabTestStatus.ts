/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const LabTestStatus: core.serialization.Schema<serializers.LabTestStatus.Raw, Vital.LabTestStatus> =
    core.serialization.enum_(["active", "pending_approval", "inactive"]);

export declare namespace LabTestStatus {
    type Raw = "active" | "pending_approval" | "inactive";
}
