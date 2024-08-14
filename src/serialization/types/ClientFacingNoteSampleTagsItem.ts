/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const ClientFacingNoteSampleTagsItem: core.serialization.Schema<
    serializers.ClientFacingNoteSampleTagsItem.Raw,
    Vital.ClientFacingNoteSampleTagsItem
> = core.serialization.enum_(["food", "exercise", "insulin_injection", "unspecified"]);

export declare namespace ClientFacingNoteSampleTagsItem {
    type Raw = "food" | "exercise" | "insulin_injection" | "unspecified";
}
