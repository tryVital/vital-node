/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export interface QueryInstruction {
    select: Vital.QueryInstructionSelectItem[];
    groupBy?: Vital.QueryInstructionGroupByItem[];
    splitBySource?: boolean;
}
