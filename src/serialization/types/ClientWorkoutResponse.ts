/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientWorkoutResponse: core.serialization.ObjectSchema<
    serializers.ClientWorkoutResponse.Raw,
    Vital.ClientWorkoutResponse
> = core.serialization.object({
    workouts: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).ClientFacingWorkout)
    ),
});

export declare namespace ClientWorkoutResponse {
    interface Raw {
        workouts: serializers.ClientFacingWorkout.Raw[];
    }
}
