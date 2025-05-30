/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../../../../index";

/**
 * @example
 *     {}
 */
export interface LabTestsGetOrdersRequest {
    /**
     * Search by order id, user id, patient name, shipping dob, or shipping recipient name.
     */
    searchInput?: string;
    /**
     * Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00
     */
    startDate?: Date;
    /**
     * Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59
     */
    endDate?: Date;
    /**
     * Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00
     */
    updatedStartDate?: Date;
    /**
     * Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00
     */
    updatedEndDate?: Date;
    /**
     * Filter by low level status.
     */
    status?: Vital.OrderLowLevelStatus | Vital.OrderLowLevelStatus[];
    /**
     * Order key to sort by.
     */
    orderKey?: Vital.LabTestsGetOrdersRequestOrderKey;
    /**
     * Order direction to sort by.
     */
    orderDirection?: Vital.LabTestsGetOrdersRequestOrderDirection;
    /**
     * Filter by method used to perform the lab test.
     */
    orderType?: Vital.LabTestCollectionMethod | Vital.LabTestCollectionMethod[];
    /**
     * Filter by critical order status.
     */
    isCritical?: boolean;
    /**
     * Filter by result interpretation of the lab test.
     */
    interpretation?: Vital.Interpretation;
    /**
     * Filter by activation type.
     */
    orderActivationTypes?: Vital.OrderActivationType | Vital.OrderActivationType[];
    /**
     * Filter by user ID.
     */
    userId?: string;
    /**
     * Filter by patient name.
     */
    patientName?: string;
    /**
     * Filter by shipping recipient name.
     */
    shippingRecipientName?: string;
    /**
     * Filter by order ids.
     */
    orderIds?: string | string[];
    page?: number;
    size?: number;
}
