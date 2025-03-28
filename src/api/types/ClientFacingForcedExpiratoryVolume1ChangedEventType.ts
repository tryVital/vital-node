/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ClientFacingForcedExpiratoryVolume1ChangedEventType =
    | "daily.data.forced_expiratory_volume_1.created"
    | "daily.data.forced_expiratory_volume_1.updated";

export const ClientFacingForcedExpiratoryVolume1ChangedEventType = {
    DailyDataForcedExpiratoryVolume1Created: "daily.data.forced_expiratory_volume_1.created",
    DailyDataForcedExpiratoryVolume1Updated: "daily.data.forced_expiratory_volume_1.updated",
} as const;
