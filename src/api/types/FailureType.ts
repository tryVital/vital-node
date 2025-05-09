/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * ℹ️ This enum is non-exhaustive.
 */
export type FailureType =
    | "quantity_not_sufficient_failure"
    | "collection_process_failure"
    | "drop_off_failure"
    | "internal_lab_failure"
    | "order_entry_failure"
    | "non_failure"
    | "unknown_failure"
    | "patient_condition_failure"
    | "missing_result_calc_failure"
    | "missing_demo_aoe_calc_failure"
    | "insufficient_volume";

export const FailureType = {
    QuantityNotSufficientFailure: "quantity_not_sufficient_failure",
    CollectionProcessFailure: "collection_process_failure",
    DropOffFailure: "drop_off_failure",
    InternalLabFailure: "internal_lab_failure",
    OrderEntryFailure: "order_entry_failure",
    NonFailure: "non_failure",
    UnknownFailure: "unknown_failure",
    PatientConditionFailure: "patient_condition_failure",
    MissingResultCalcFailure: "missing_result_calc_failure",
    MissingDemoAoeCalcFailure: "missing_demo_aoe_calc_failure",
    InsufficientVolume: "insufficient_volume",
} as const;
