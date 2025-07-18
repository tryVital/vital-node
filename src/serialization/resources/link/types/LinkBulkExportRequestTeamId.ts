/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Vital from "../../../../api/index";
import * as core from "../../../../core";

export const LinkBulkExportRequestTeamId: core.serialization.Schema<
    serializers.LinkBulkExportRequestTeamId.Raw,
    Vital.LinkBulkExportRequestTeamId
> = core.serialization.enum_(["infer_from_context"]);

export declare namespace LinkBulkExportRequestTeamId {
    type Raw = "infer_from_context";
}
