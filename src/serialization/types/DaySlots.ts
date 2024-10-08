/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { TimeSlot } from "./TimeSlot";

export const DaySlots: core.serialization.ObjectSchema<serializers.DaySlots.Raw, Vital.DaySlots> =
    core.serialization.object({
        date: core.serialization.string(),
        slots: core.serialization.list(TimeSlot),
    });

export declare namespace DaySlots {
    interface Raw {
        date: string;
        slots: TimeSlot.Raw[];
    }
}
