/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Vital from "../index";

export type ClientFacingOrderDetails =
    | Vital.ClientFacingOrderDetails.WalkInTest
    | Vital.ClientFacingOrderDetails.Testkit
    | Vital.ClientFacingOrderDetails.AtHomePhlebotomy;

export declare namespace ClientFacingOrderDetails {
    interface WalkInTest extends Vital.ClientFacingWalkInOrderDetails {
        type: "walk_in_test";
    }

    interface Testkit extends Vital.ClientFacingTestKitOrderDetails {
        type: "testkit";
    }

    interface AtHomePhlebotomy extends Vital.ClientFacingAtHomePhlebotomyOrderDetails {
        type: "at_home_phlebotomy";
    }
}
