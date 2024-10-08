/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface TeamConfig {
    libreview: Vital.LibreConfig;
    textsEnabled?: boolean;
    pushHistoricalData?: boolean;
    providerRawData?: boolean;
    rejectDuplicateConnection?: boolean;
    sdkPerDeviceActivityTimeseries?: boolean;
    edsPreferences?: Vital.EventDestinationPreferences;
    eventTypePrefixes?: string[];
}
