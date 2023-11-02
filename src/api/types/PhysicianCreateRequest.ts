/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface PhysicianCreateRequest {
    firstName: string;
    lastName: string;
    email?: string;
    npi: string;
    licensedStates?: string[];
    /** An image of the physician signature for health insurance billing */
    signatureImage?: Vital.PhysicianCreateRequestSignatureImage;
}