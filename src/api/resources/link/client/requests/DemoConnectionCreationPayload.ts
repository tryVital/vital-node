/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../../index";

/**
 * @example
 *     {
 *         userId: "user_id",
 *         provider: "apple_health_kit"
 *     }
 */
export interface DemoConnectionCreationPayload {
    /** Vital user ID */
    userId: string;
    /** Demo provider. For more information, please check out our docs (https://docs.tryvital.io/wearables/providers/test_data) */
    provider: Vital.DemoProviders;
}
