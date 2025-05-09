/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { AggregationResult } from "./AggregationResult";

export const AggregationResponse: core.serialization.ObjectSchema<
    serializers.AggregationResponse.Raw,
    Vital.AggregationResponse
> = core.serialization.object({
    results: core.serialization.list(AggregationResult),
});

export declare namespace AggregationResponse {
    interface Raw {
        results: AggregationResult.Raw[];
    }
}
