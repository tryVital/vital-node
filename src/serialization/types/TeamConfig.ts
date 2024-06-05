/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { LibreConfig } from "./LibreConfig";
import { EventDestinationPreferences } from "./EventDestinationPreferences";

export const TeamConfig: core.serialization.ObjectSchema<serializers.TeamConfig.Raw, Vital.TeamConfig> =
    core.serialization.object({
        libreview: LibreConfig,
        textsEnabled: core.serialization.property("texts_enabled", core.serialization.boolean().optional()),
        pushHistoricalData: core.serialization.property(
            "push_historical_data",
            core.serialization.boolean().optional()
        ),
        providerRawData: core.serialization.property("provider_raw_data", core.serialization.boolean().optional()),
        rejectDuplicateConnection: core.serialization.property(
            "reject_duplicate_connection",
            core.serialization.boolean().optional()
        ),
        sdkPerDeviceActivityTimeseries: core.serialization.property(
            "sdk_per_device_activity_timeseries",
            core.serialization.boolean().optional()
        ),
        edsPreferences: core.serialization.property("eds_preferences", EventDestinationPreferences.optional()),
        eventTypePrefixes: core.serialization.property(
            "event_type_prefixes",
            core.serialization.list(core.serialization.string()).optional()
        ),
    });

export declare namespace TeamConfig {
    interface Raw {
        libreview: LibreConfig.Raw;
        texts_enabled?: boolean | null;
        push_historical_data?: boolean | null;
        provider_raw_data?: boolean | null;
        reject_duplicate_connection?: boolean | null;
        sdk_per_device_activity_timeseries?: boolean | null;
        eds_preferences?: EventDestinationPreferences.Raw | null;
        event_type_prefixes?: string[] | null;
    }
}
