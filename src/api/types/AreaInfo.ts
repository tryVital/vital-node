/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface AreaInfo {
    zipCode: string;
    phlebotomy: Vital.PhlebotomyAreaInfo;
    centralLabs: Record<string, Vital.PscAreaInfo>;
}
