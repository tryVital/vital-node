/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingElectrocardiogramClassification: core.serialization.Schema<
    serializers.ClientFacingElectrocardiogramClassification.Raw,
    Vital.ClientFacingElectrocardiogramClassification
> = core.serialization.enum_(["sinus_rhythm", "atrial_fibrillation", "inconclusive"]);

export declare namespace ClientFacingElectrocardiogramClassification {
    type Raw = "sinus_rhythm" | "atrial_fibrillation" | "inconclusive";
}