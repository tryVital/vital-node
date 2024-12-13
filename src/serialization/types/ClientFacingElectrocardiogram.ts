/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { ClientFacingElectrocardiogramClassification } from "./ClientFacingElectrocardiogramClassification";
import { ClientFacingElectrocardiogramInconclusiveCause } from "./ClientFacingElectrocardiogramInconclusiveCause";
import { ClientFacingElectrocardiogramSourceProvider } from "./ClientFacingElectrocardiogramSourceProvider";
import { ClientFacingElectrocardiogramSourceType } from "./ClientFacingElectrocardiogramSourceType";
import { ClientFacingSource } from "./ClientFacingSource";

export const ClientFacingElectrocardiogram: core.serialization.ObjectSchema<
    serializers.ClientFacingElectrocardiogram.Raw,
    Vital.ClientFacingElectrocardiogram
> = core.serialization.object({
    id: core.serialization.string(),
    sessionStart: core.serialization.property("session_start", core.serialization.date()),
    sessionEnd: core.serialization.property("session_end", core.serialization.date()),
    voltageSampleCount: core.serialization.property("voltage_sample_count", core.serialization.number()),
    heartRateMean: core.serialization.property("heart_rate_mean", core.serialization.number().optional()),
    samplingFrequencyHz: core.serialization.property("sampling_frequency_hz", core.serialization.number().optional()),
    classification: ClientFacingElectrocardiogramClassification.optional(),
    inconclusiveCause: core.serialization.property(
        "inconclusive_cause",
        ClientFacingElectrocardiogramInconclusiveCause.optional()
    ),
    algorithmVersion: core.serialization.property("algorithm_version", core.serialization.string().optional()),
    timeZone: core.serialization.property("time_zone", core.serialization.string().optional()),
    sourceProvider: core.serialization.property("source_provider", ClientFacingElectrocardiogramSourceProvider),
    sourceType: core.serialization.property("source_type", ClientFacingElectrocardiogramSourceType),
    sourceAppId: core.serialization.property("source_app_id", core.serialization.string().optional()),
    sourceDeviceModel: core.serialization.property("source_device_model", core.serialization.string().optional()),
    userId: core.serialization.property("user_id", core.serialization.string()),
    source: ClientFacingSource,
});

export declare namespace ClientFacingElectrocardiogram {
    interface Raw {
        id: string;
        session_start: string;
        session_end: string;
        voltage_sample_count: number;
        heart_rate_mean?: number | null;
        sampling_frequency_hz?: number | null;
        classification?: ClientFacingElectrocardiogramClassification.Raw | null;
        inconclusive_cause?: ClientFacingElectrocardiogramInconclusiveCause.Raw | null;
        algorithm_version?: string | null;
        time_zone?: string | null;
        source_provider: ClientFacingElectrocardiogramSourceProvider.Raw;
        source_type: ClientFacingElectrocardiogramSourceType.Raw;
        source_app_id?: string | null;
        source_device_model?: string | null;
        user_id: string;
        source: ClientFacingSource.Raw;
    }
}