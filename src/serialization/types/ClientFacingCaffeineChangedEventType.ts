/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";

export const ClientFacingCaffeineChangedEventType: core.serialization.Schema<
    serializers.ClientFacingCaffeineChangedEventType.Raw,
    Vital.ClientFacingCaffeineChangedEventType
> = core.serialization.enum_(["daily.data.caffeine.created", "daily.data.caffeine.updated"]);

export declare namespace ClientFacingCaffeineChangedEventType {
    type Raw = "daily.data.caffeine.created" | "daily.data.caffeine.updated";
}
