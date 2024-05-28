/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";
import { PostOrderPatient } from "./PostOrderPatient";
import { PostOrderPhysician } from "./PostOrderPhysician";
import { PostOrderServiceRequest } from "./PostOrderServiceRequest";
import { PostOrderQuestionnaireResponse } from "./PostOrderQuestionnaireResponse";
import { PostOrderCoverage } from "./PostOrderCoverage";

export const VitalCoreSchemasRequestSchemasOrdersEntryItemResource: core.serialization.Schema<
    serializers.VitalCoreSchemasRequestSchemasOrdersEntryItemResource.Raw,
    Vital.VitalCoreSchemasRequestSchemasOrdersEntryItemResource
> = core.serialization.undiscriminatedUnion([
    PostOrderPatient,
    PostOrderPhysician,
    PostOrderServiceRequest,
    PostOrderQuestionnaireResponse,
    PostOrderCoverage,
]);

export declare namespace VitalCoreSchemasRequestSchemasOrdersEntryItemResource {
    type Raw =
        | PostOrderPatient.Raw
        | PostOrderPhysician.Raw
        | PostOrderServiceRequest.Raw
        | PostOrderQuestionnaireResponse.Raw
        | PostOrderCoverage.Raw;
}
