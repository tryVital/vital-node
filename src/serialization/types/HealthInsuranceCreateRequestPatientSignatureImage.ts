/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const HealthInsuranceCreateRequestPatientSignatureImage: core.serialization.Schema<
    serializers.HealthInsuranceCreateRequestPatientSignatureImage.Raw,
    Vital.HealthInsuranceCreateRequestPatientSignatureImage
> = core.serialization
    .union(core.serialization.discriminant("contentType", "content_type"), {
        "image/jpeg": core.serialization.lazyObject(async () => (await import("..")).Jpeg),
        "image/png": core.serialization.lazyObject(async () => (await import("..")).Png),
    })
    .transform<Vital.HealthInsuranceCreateRequestPatientSignatureImage>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace HealthInsuranceCreateRequestPatientSignatureImage {
    type Raw =
        | HealthInsuranceCreateRequestPatientSignatureImage.ImageJpeg
        | HealthInsuranceCreateRequestPatientSignatureImage.ImagePng;

    interface ImageJpeg extends serializers.Jpeg.Raw {
        content_type: "image/jpeg";
    }

    interface ImagePng extends serializers.Png.Raw {
        content_type: "image/png";
    }
}