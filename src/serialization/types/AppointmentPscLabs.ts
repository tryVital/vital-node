/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const AppointmentPscLabs: core.serialization.Schema<
    serializers.AppointmentPscLabs.Raw,
    Vital.AppointmentPscLabs
> = core.serialization.stringLiteral("quest");

export declare namespace AppointmentPscLabs {
    type Raw = "quest";
}