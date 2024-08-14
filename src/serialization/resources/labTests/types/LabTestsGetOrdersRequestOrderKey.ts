/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Vital from "../../../../api";
import * as core from "../../../../core";

export const LabTestsGetOrdersRequestOrderKey: core.serialization.Schema<
    serializers.LabTestsGetOrdersRequestOrderKey.Raw,
    Vital.LabTestsGetOrdersRequestOrderKey
> = core.serialization.enum_(["created_at", "patient_name", "last_status"]);

export declare namespace LabTestsGetOrdersRequestOrderKey {
    type Raw = "created_at" | "patient_name" | "last_status";
}
