/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface ProfileInDb {
    id: string;
    data?: unknown;
    userId: string;
    sourceId: number;
    priorityId?: number;
    source: Vital.ClientFacingProvider;
    createdAt?: Date;
    updatedAt?: Date;
}
