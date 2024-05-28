/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { VitalCoreSchemasRequestSchemasOrdersEntryItemResource } from "./VitalCoreSchemasRequestSchemasOrdersEntryItemResource";

export const VitalCoreSchemasRequestSchemasOrdersEntryItem: core.serialization.ObjectSchema<
    serializers.VitalCoreSchemasRequestSchemasOrdersEntryItem.Raw,
    Vital.VitalCoreSchemasRequestSchemasOrdersEntryItem
> = core.serialization.object({
    resource: VitalCoreSchemasRequestSchemasOrdersEntryItemResource,
});

export declare namespace VitalCoreSchemasRequestSchemasOrdersEntryItem {
    interface Raw {
        resource: VitalCoreSchemasRequestSchemasOrdersEntryItemResource.Raw;
    }
}
