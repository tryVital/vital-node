/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { VitalSleepStage } from "./VitalSleepStage";
import { SleepCycleSourceProvider } from "./SleepCycleSourceProvider";
import { SleepCycleSourceType } from "./SleepCycleSourceType";

export const SleepCycle: core.serialization.ObjectSchema<serializers.SleepCycle.Raw, Vital.SleepCycle> =
    core.serialization.object({
        id: core.serialization.string(),
        sleepId: core.serialization.property("sleep_id", core.serialization.string()),
        sessionStart: core.serialization.property("session_start", core.serialization.date()),
        sessionEnd: core.serialization.property("session_end", core.serialization.date()),
        stageStartOffsetSecond: core.serialization.property(
            "stage_start_offset_second",
            core.serialization.list(core.serialization.number())
        ),
        stageEndOffsetSecond: core.serialization.property(
            "stage_end_offset_second",
            core.serialization.list(core.serialization.number())
        ),
        stageType: core.serialization.property("stage_type", core.serialization.list(VitalSleepStage)),
        timeZone: core.serialization.property("time_zone", core.serialization.string().optional()),
        sourceProvider: core.serialization.property("source_provider", SleepCycleSourceProvider),
        sourceType: core.serialization.property("source_type", SleepCycleSourceType),
        sourceAppId: core.serialization.property("source_app_id", core.serialization.string().optional()),
    });

export declare namespace SleepCycle {
    interface Raw {
        id: string;
        sleep_id: string;
        session_start: string;
        session_end: string;
        stage_start_offset_second: number[];
        stage_end_offset_second: number[];
        stage_type: VitalSleepStage.Raw[];
        time_zone?: string | null;
        source_provider: SleepCycleSourceProvider.Raw;
        source_type: SleepCycleSourceType.Raw;
        source_app_id?: string | null;
    }
}
