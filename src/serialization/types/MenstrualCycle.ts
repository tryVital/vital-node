/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { MenstrualFlowEntry } from "./MenstrualFlowEntry";
import { CervicalMucusEntry } from "./CervicalMucusEntry";
import { IntermenstrualBleedingEntry } from "./IntermenstrualBleedingEntry";
import { ContraceptiveEntry } from "./ContraceptiveEntry";
import { DetectedDeviationEntry } from "./DetectedDeviationEntry";
import { OvulationTestEntry } from "./OvulationTestEntry";
import { HomePregnancyTestEntry } from "./HomePregnancyTestEntry";
import { HomeProgesteroneTestEntry } from "./HomeProgesteroneTestEntry";
import { SexualActivityEntry } from "./SexualActivityEntry";
import { BasalBodyTemperatureEntry } from "./BasalBodyTemperatureEntry";
import { ClientFacingSource } from "./ClientFacingSource";

export const MenstrualCycle: core.serialization.ObjectSchema<serializers.MenstrualCycle.Raw, Vital.MenstrualCycle> =
    core.serialization.object({
        periodStart: core.serialization.property("period_start", core.serialization.string()),
        periodEnd: core.serialization.property("period_end", core.serialization.string().optional()),
        cycleEnd: core.serialization.property("cycle_end", core.serialization.string().optional()),
        isPredicted: core.serialization.property("is_predicted", core.serialization.boolean().optional()),
        menstrualFlow: core.serialization.property(
            "menstrual_flow",
            core.serialization.list(MenstrualFlowEntry).optional()
        ),
        cervicalMucus: core.serialization.property(
            "cervical_mucus",
            core.serialization.list(CervicalMucusEntry).optional()
        ),
        intermenstrualBleeding: core.serialization.property(
            "intermenstrual_bleeding",
            core.serialization.list(IntermenstrualBleedingEntry).optional()
        ),
        contraceptive: core.serialization.list(ContraceptiveEntry).optional(),
        detectedDeviations: core.serialization.property(
            "detected_deviations",
            core.serialization.list(DetectedDeviationEntry).optional()
        ),
        ovulationTest: core.serialization.property(
            "ovulation_test",
            core.serialization.list(OvulationTestEntry).optional()
        ),
        homePregnancyTest: core.serialization.property(
            "home_pregnancy_test",
            core.serialization.list(HomePregnancyTestEntry).optional()
        ),
        homeProgesteroneTest: core.serialization.property(
            "home_progesterone_test",
            core.serialization.list(HomeProgesteroneTestEntry).optional()
        ),
        sexualActivity: core.serialization.property(
            "sexual_activity",
            core.serialization.list(SexualActivityEntry).optional()
        ),
        basalBodyTemperature: core.serialization.property(
            "basal_body_temperature",
            core.serialization.list(BasalBodyTemperatureEntry).optional()
        ),
        source: ClientFacingSource,
    });

export declare namespace MenstrualCycle {
    interface Raw {
        period_start: string;
        period_end?: string | null;
        cycle_end?: string | null;
        is_predicted?: boolean | null;
        menstrual_flow?: MenstrualFlowEntry.Raw[] | null;
        cervical_mucus?: CervicalMucusEntry.Raw[] | null;
        intermenstrual_bleeding?: IntermenstrualBleedingEntry.Raw[] | null;
        contraceptive?: ContraceptiveEntry.Raw[] | null;
        detected_deviations?: DetectedDeviationEntry.Raw[] | null;
        ovulation_test?: OvulationTestEntry.Raw[] | null;
        home_pregnancy_test?: HomePregnancyTestEntry.Raw[] | null;
        home_progesterone_test?: HomeProgesteroneTestEntry.Raw[] | null;
        sexual_activity?: SexualActivityEntry.Raw[] | null;
        basal_body_temperature?: BasalBodyTemperatureEntry.Raw[] | null;
        source: ClientFacingSource.Raw;
    }
}