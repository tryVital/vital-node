/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingProvider } from "./ClientFacingProvider";

export const ProfileInDb: core.serialization.ObjectSchema<serializers.ProfileInDb.Raw, Vital.ProfileInDb> =
    core.serialization.object({
        data: core.serialization.string(),
        userId: core.serialization.property("user_id", core.serialization.string()),
        sourceId: core.serialization.property("source_id", core.serialization.number()),
        priorityId: core.serialization.property("priority_id", core.serialization.number().optional()),
        id: core.serialization.string(),
        source: ClientFacingProvider,
        updatedAt: core.serialization.property("updated_at", core.serialization.date().optional()),
    });

export declare namespace ProfileInDb {
    interface Raw {
        data: string;
        user_id: string;
        source_id: number;
        priority_id?: number | null;
        id: string;
        source: ClientFacingProvider.Raw;
        updated_at?: string | null;
    }
}
