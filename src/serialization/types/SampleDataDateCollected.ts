/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { UtcTimestampWithTimezoneOffset } from "./UtcTimestampWithTimezoneOffset";

export const SampleDataDateCollected: core.serialization.Schema<
    serializers.SampleDataDateCollected.Raw,
    Vital.SampleDataDateCollected
> = core.serialization.undiscriminatedUnion([UtcTimestampWithTimezoneOffset, core.serialization.string()]);

export declare namespace SampleDataDateCollected {
    type Raw = UtcTimestampWithTimezoneOffset.Raw | string;
}
