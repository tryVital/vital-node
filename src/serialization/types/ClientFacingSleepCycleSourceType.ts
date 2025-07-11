/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingSleepCycleSourceType: core.serialization.Schema<
    serializers.ClientFacingSleepCycleSourceType.Raw,
    Vital.ClientFacingSleepCycleSourceType
> = core.serialization.enum_([
    "unknown",
    "phone",
    "watch",
    "app",
    "multiple_sources",
    "fingerprick",
    "cuff",
    "manual_scan",
    "automatic",
    "scale",
    "chest_strap",
    "ring",
    "lab",
    "exercise_machine",
]);

export declare namespace ClientFacingSleepCycleSourceType {
    type Raw =
        | "unknown"
        | "phone"
        | "watch"
        | "app"
        | "multiple_sources"
        | "fingerprick"
        | "cuff"
        | "manual_scan"
        | "automatic"
        | "scale"
        | "chest_strap"
        | "ring"
        | "lab"
        | "exercise_machine";
}
