/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "..";

export interface ClientFacingProviderDetailed {
    /** Name of source of information */
    name: string;
    /** Slug for designated source */
    slug: string;
    /** Description of source of information */
    description: string;
    logo?: string;
    authType?: Vital.SourceAuthType;
    supportedResources?: Vital.ClientFacingResource[];
}
