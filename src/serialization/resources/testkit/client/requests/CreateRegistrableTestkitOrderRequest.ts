/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../index";
import * as Vital from "../../../../../api/index";
import * as core from "../../../../../core";
import { ShippingAddressWithValidation } from "../../../../types/ShippingAddressWithValidation";

export const CreateRegistrableTestkitOrderRequest: core.serialization.Schema<
    serializers.CreateRegistrableTestkitOrderRequest.Raw,
    Vital.CreateRegistrableTestkitOrderRequest
> = core.serialization.object({
    userId: core.serialization.property("user_id", core.serialization.string()),
    labTestId: core.serialization.property("lab_test_id", core.serialization.string()),
    shippingDetails: core.serialization.property("shipping_details", ShippingAddressWithValidation),
    passthrough: core.serialization.string().optional(),
});

export declare namespace CreateRegistrableTestkitOrderRequest {
    interface Raw {
        user_id: string;
        lab_test_id: string;
        shipping_details: ShippingAddressWithValidation.Raw;
        passthrough?: string | null;
    }
}
