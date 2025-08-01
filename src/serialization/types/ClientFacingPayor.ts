/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as Vital from "../../api/index";
import * as core from "../../core";
import { Address } from "./Address";
import { ClientFacingPayorCodeSource } from "./ClientFacingPayorCodeSource";

export const ClientFacingPayor: core.serialization.ObjectSchema<
    serializers.ClientFacingPayor.Raw,
    Vital.ClientFacingPayor
> = core.serialization.object({
    payorCode: core.serialization.property("payor_code", core.serialization.string()),
    name: core.serialization.string(),
    aliases: core.serialization.list(core.serialization.string()),
    orgAddress: core.serialization.property("org_address", Address),
    source: ClientFacingPayorCodeSource,
});

export declare namespace ClientFacingPayor {
    interface Raw {
        payor_code: string;
        name: string;
        aliases: string[];
        org_address: Address.Raw;
        source: ClientFacingPayorCodeSource.Raw;
    }
}
