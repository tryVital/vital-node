/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Vital from "../../api";
import * as core from "../../core";

export const HealthInsuranceCreateRequestBackImage: core.serialization.Schema<
    serializers.HealthInsuranceCreateRequestBackImage.Raw,
    Vital.HealthInsuranceCreateRequestBackImage
> = core.serialization
    .union(core.serialization.discriminant("contentType", "content_type"), {
        "image/jpeg": core.serialization.lazyObject(async () => (await import("..")).Jpeg),
        "image/png": core.serialization.lazyObject(async () => (await import("..")).Png),
    })
    .transform<Vital.HealthInsuranceCreateRequestBackImage>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace HealthInsuranceCreateRequestBackImage {
    type Raw = HealthInsuranceCreateRequestBackImage.ImageJpeg | HealthInsuranceCreateRequestBackImage.ImagePng;

    interface ImageJpeg extends serializers.Jpeg.Raw {
        content_type: "image/jpeg";
    }

    interface ImagePng extends serializers.Png.Raw {
        content_type: "image/png";
    }
}
