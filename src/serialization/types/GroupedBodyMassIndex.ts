/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingSource } from "./ClientFacingSource";
import { ClientFacingBodyMassIndexSample } from "./ClientFacingBodyMassIndexSample";

export const GroupedBodyMassIndex: core.serialization.ObjectSchema<
    serializers.GroupedBodyMassIndex.Raw,
    Vital.GroupedBodyMassIndex
> = core.serialization.object({
    source: ClientFacingSource,
    data: core.serialization.list(ClientFacingBodyMassIndexSample),
});

export declare namespace GroupedBodyMassIndex {
    interface Raw {
        source: ClientFacingSource.Raw;
        data: ClientFacingBodyMassIndexSample.Raw[];
    }
}
