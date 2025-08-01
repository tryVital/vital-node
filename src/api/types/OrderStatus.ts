/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * ℹ️ This enum is non-exhaustive.
 */
export type OrderStatus =
    | "received.walk_in_test.ordered"
    | "received.walk_in_test.requisition_created"
    | "received.walk_in_test.requisition_bypassed"
    | "completed.walk_in_test.completed"
    | "sample_with_lab.walk_in_test.partial_results"
    | "failed.walk_in_test.sample_error"
    | "cancelled.walk_in_test.cancelled"
    | "collecting_sample.walk_in_test.appointment_pending"
    | "collecting_sample.walk_in_test.appointment_scheduled"
    | "collecting_sample.walk_in_test.appointment_cancelled"
    | "collecting_sample.walk_in_test.redraw_available"
    | "received.at_home_phlebotomy.ordered"
    | "received.at_home_phlebotomy.requisition_created"
    | "received.at_home_phlebotomy.requisition_bypassed"
    | "collecting_sample.at_home_phlebotomy.appointment_pending"
    | "collecting_sample.at_home_phlebotomy.appointment_scheduled"
    | "collecting_sample.at_home_phlebotomy.draw_completed"
    | "collecting_sample.at_home_phlebotomy.appointment_cancelled"
    | "completed.at_home_phlebotomy.completed"
    | "sample_with_lab.at_home_phlebotomy.partial_results"
    | "cancelled.at_home_phlebotomy.cancelled"
    | "failed.at_home_phlebotomy.sample_error"
    | "received.testkit.ordered"
    | "received.testkit.awaiting_registration"
    | "received.testkit.requisition_created"
    | "received.testkit.requisition_bypassed"
    | "received.testkit.registered"
    | "collecting_sample.testkit.transit_customer"
    | "collecting_sample.testkit.out_for_delivery"
    | "collecting_sample.testkit.with_customer"
    | "collecting_sample.testkit.transit_lab"
    | "sample_with_lab.testkit.delivered_to_lab"
    | "completed.testkit.completed"
    | "failed.testkit.failure_to_deliver_to_customer"
    | "failed.testkit.failure_to_deliver_to_lab"
    | "failed.testkit.sample_error"
    | "failed.testkit.lost"
    | "cancelled.testkit.cancelled"
    | "cancelled.testkit.do_not_process"
    | "collecting_sample.testkit.problem_in_transit_customer"
    | "collecting_sample.testkit.problem_in_transit_lab"
    | "received.on_site_collection.ordered"
    | "received.on_site_collection.requisition_created"
    | "received.on_site_collection.requisition_bypassed"
    | "sample_with_lab.on_site_collection.draw_completed"
    | "completed.on_site_collection.completed"
    | "cancelled.on_site_collection.cancelled"
    | "sample_with_lab.on_site_collection.partial_results"
    | "failed.on_site_collection.sample_error";

export const OrderStatus = {
    ReceivedWalkInTestOrdered: "received.walk_in_test.ordered",
    ReceivedWalkInTestRequisitionCreated: "received.walk_in_test.requisition_created",
    ReceivedWalkInTestRequisitionBypassed: "received.walk_in_test.requisition_bypassed",
    CompletedWalkInTestCompleted: "completed.walk_in_test.completed",
    SampleWithLabWalkInTestPartialResults: "sample_with_lab.walk_in_test.partial_results",
    FailedWalkInTestSampleError: "failed.walk_in_test.sample_error",
    CancelledWalkInTestCancelled: "cancelled.walk_in_test.cancelled",
    CollectingSampleWalkInTestAppointmentPending: "collecting_sample.walk_in_test.appointment_pending",
    CollectingSampleWalkInTestAppointmentScheduled: "collecting_sample.walk_in_test.appointment_scheduled",
    CollectingSampleWalkInTestAppointmentCancelled: "collecting_sample.walk_in_test.appointment_cancelled",
    CollectingSampleWalkInTestRedrawAvailable: "collecting_sample.walk_in_test.redraw_available",
    ReceivedAtHomePhlebotomyOrdered: "received.at_home_phlebotomy.ordered",
    ReceivedAtHomePhlebotomyRequisitionCreated: "received.at_home_phlebotomy.requisition_created",
    ReceivedAtHomePhlebotomyRequisitionBypassed: "received.at_home_phlebotomy.requisition_bypassed",
    CollectingSampleAtHomePhlebotomyAppointmentPending: "collecting_sample.at_home_phlebotomy.appointment_pending",
    CollectingSampleAtHomePhlebotomyAppointmentScheduled: "collecting_sample.at_home_phlebotomy.appointment_scheduled",
    CollectingSampleAtHomePhlebotomyDrawCompleted: "collecting_sample.at_home_phlebotomy.draw_completed",
    CollectingSampleAtHomePhlebotomyAppointmentCancelled: "collecting_sample.at_home_phlebotomy.appointment_cancelled",
    CompletedAtHomePhlebotomyCompleted: "completed.at_home_phlebotomy.completed",
    SampleWithLabAtHomePhlebotomyPartialResults: "sample_with_lab.at_home_phlebotomy.partial_results",
    CancelledAtHomePhlebotomyCancelled: "cancelled.at_home_phlebotomy.cancelled",
    FailedAtHomePhlebotomySampleError: "failed.at_home_phlebotomy.sample_error",
    ReceivedTestkitOrdered: "received.testkit.ordered",
    ReceivedTestkitAwaitingRegistration: "received.testkit.awaiting_registration",
    ReceivedTestkitRequisitionCreated: "received.testkit.requisition_created",
    ReceivedTestkitRequisitionBypassed: "received.testkit.requisition_bypassed",
    ReceivedTestkitRegistered: "received.testkit.registered",
    CollectingSampleTestkitTransitCustomer: "collecting_sample.testkit.transit_customer",
    CollectingSampleTestkitOutForDelivery: "collecting_sample.testkit.out_for_delivery",
    CollectingSampleTestkitWithCustomer: "collecting_sample.testkit.with_customer",
    CollectingSampleTestkitTransitLab: "collecting_sample.testkit.transit_lab",
    SampleWithLabTestkitDeliveredToLab: "sample_with_lab.testkit.delivered_to_lab",
    CompletedTestkitCompleted: "completed.testkit.completed",
    FailedTestkitFailureToDeliverToCustomer: "failed.testkit.failure_to_deliver_to_customer",
    FailedTestkitFailureToDeliverToLab: "failed.testkit.failure_to_deliver_to_lab",
    FailedTestkitSampleError: "failed.testkit.sample_error",
    FailedTestkitLost: "failed.testkit.lost",
    CancelledTestkitCancelled: "cancelled.testkit.cancelled",
    CancelledTestkitDoNotProcess: "cancelled.testkit.do_not_process",
    CollectingSampleTestkitProblemInTransitCustomer: "collecting_sample.testkit.problem_in_transit_customer",
    CollectingSampleTestkitProblemInTransitLab: "collecting_sample.testkit.problem_in_transit_lab",
    ReceivedOnSiteCollectionOrdered: "received.on_site_collection.ordered",
    ReceivedOnSiteCollectionRequisitionCreated: "received.on_site_collection.requisition_created",
    ReceivedOnSiteCollectionRequisitionBypassed: "received.on_site_collection.requisition_bypassed",
    SampleWithLabOnSiteCollectionDrawCompleted: "sample_with_lab.on_site_collection.draw_completed",
    CompletedOnSiteCollectionCompleted: "completed.on_site_collection.completed",
    CancelledOnSiteCollectionCancelled: "cancelled.on_site_collection.cancelled",
    SampleWithLabOnSiteCollectionPartialResults: "sample_with_lab.on_site_collection.partial_results",
    FailedOnSiteCollectionSampleError: "failed.on_site_collection.sample_error",
} as const;
