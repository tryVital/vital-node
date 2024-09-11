/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { AddOnOrder } from "./AddOnOrder";

export const OrderSetRequest: core.serialization.ObjectSchema<serializers.OrderSetRequest.Raw, Vital.OrderSetRequest> =
    core.serialization.object({
        labTestIds: core.serialization.property(
            "lab_test_ids",
            core.serialization.list(core.serialization.string()).optional()
        ),
        addOn: core.serialization.property("add_on", AddOnOrder.optional()),
    });

export declare namespace OrderSetRequest {
    interface Raw {
        lab_test_ids?: string[] | null;
        add_on?: AddOnOrder.Raw | null;
    }
}