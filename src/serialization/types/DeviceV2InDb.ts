/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingProvider } from "./ClientFacingProvider";

export const DeviceV2InDb: core.serialization.ObjectSchema<serializers.DeviceV2InDb.Raw, Vital.DeviceV2InDb> =
    core.serialization.object({
        data: core.serialization.record(core.serialization.string(), core.serialization.unknown()),
        providerId: core.serialization.property("provider_id", core.serialization.string()),
        userId: core.serialization.property("user_id", core.serialization.string()),
        sourceId: core.serialization.property("source_id", core.serialization.number()),
        id: core.serialization.string(),
        source: ClientFacingProvider,
    });

export declare namespace DeviceV2InDb {
    interface Raw {
        data: Record<string, unknown>;
        provider_id: string;
        user_id: string;
        source_id: number;
        id: string;
        source: ClientFacingProvider.Raw;
    }
}
