/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vital from "../../../index";
import * as serializers from "../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Testkit {
    interface Options {
        environment?: core.Supplier<environments.VitalEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
    }
}

export class Testkit {
    constructor(protected readonly _options: Testkit.Options = {}) {}

    /**
     * @param {Vital.RegisterTestkitRequest} request
     * @param {Testkit.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vital.UnprocessableEntityError}
     *
     * @example
     *     await client.testkit.register({
     *         sampleId: "sample_id",
     *         patientDetails: {
     *             firstName: "first_name",
     *             lastName: "last_name",
     *             dob: "2024-01-15T09:30:00Z",
     *             gender: "female",
     *             phoneNumber: "phone_number",
     *             email: "email"
     *         },
     *         patientAddress: {
     *             firstLine: "first_line",
     *             city: "city",
     *             state: "state",
     *             zip: "zip",
     *             country: "country"
     *         }
     *     })
     */
    public async register(
        request: Vital.RegisterTestkitRequest,
        requestOptions?: Testkit.RequestOptions
    ): Promise<Vital.PostOrderResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VitalEnvironment.Production,
                "v3/order/testkit/register"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tryvital/vital-node",
                "X-Fern-SDK-Version": "3.1.217",
                "User-Agent": "@tryvital/vital-node/3.1.217",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.RegisterTestkitRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PostOrderResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Vital.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.VitalError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VitalError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VitalTimeoutError();
            case "unknown":
                throw new errors.VitalError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Creates an order for an unregistered testkit
     *
     * @param {Vital.CreateRegistrableTestkitOrderRequest} request
     * @param {Testkit.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vital.UnprocessableEntityError}
     *
     * @example
     *     await client.testkit.createOrder({
     *         userId: "user_id",
     *         labTestId: "lab_test_id",
     *         shippingDetails: {
     *             receiverName: "receiver_name",
     *             firstLine: "first_line",
     *             city: "city",
     *             state: "state",
     *             zip: "zip",
     *             country: "country",
     *             phoneNumber: "phone_number"
     *         }
     *     })
     */
    public async createOrder(
        request: Vital.CreateRegistrableTestkitOrderRequest,
        requestOptions?: Testkit.RequestOptions
    ): Promise<Vital.PostOrderResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VitalEnvironment.Production,
                "v3/order/testkit"
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tryvital/vital-node",
                "X-Fern-SDK-Version": "3.1.217",
                "User-Agent": "@tryvital/vital-node/3.1.217",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateRegistrableTestkitOrderRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.PostOrderResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 422:
                    throw new Vital.UnprocessableEntityError(
                        serializers.HttpValidationError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.VitalError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.VitalError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.VitalTimeoutError();
            case "unknown":
                throw new errors.VitalError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "x-vital-api-key": apiKeyValue };
    }
}
