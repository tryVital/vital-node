/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ClientFacingMenstrualCycle {
    id: string;
    periodStart: string;
    periodEnd?: string;
    cycleEnd?: string;
    isPredicted?: boolean;
    menstrualFlow?: Vital.MenstrualFlowEntry[];
    cervicalMucus?: Vital.CervicalMucusEntry[];
    intermenstrualBleeding?: Vital.IntermenstrualBleedingEntry[];
    contraceptive?: Vital.ContraceptiveEntry[];
    detectedDeviations?: Vital.DetectedDeviationEntry[];
    ovulationTest?: Vital.OvulationTestEntry[];
    homePregnancyTest?: Vital.HomePregnancyTestEntry[];
    homeProgesteroneTest?: Vital.HomeProgesteroneTestEntry[];
    sexualActivity?: Vital.SexualActivityEntry[];
    basalBodyTemperature?: Vital.BasalBodyTemperatureEntry[];
    sourceProvider: Vital.ClientFacingMenstrualCycleSourceProvider;
    /** ℹ️ This enum is non-exhaustive. */
    sourceType: Vital.ClientFacingMenstrualCycleSourceType;
    sourceAppId?: string;
    sourceDeviceId?: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    source: Vital.ClientFacingSource;
}
