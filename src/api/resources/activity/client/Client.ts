/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vital from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace Activity {
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

export class Activity {
    constructor(protected readonly _options: Activity.Options = {}) {}

    /**
     * Get activity summary for user_id
     *
     * @param {string} userId
     * @param {Vital.ActivityGetRequest} request
     * @param {Activity.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vital.UnprocessableEntityError}
     *
     * @example
     *     await client.activity.get("user_id", {
     *         startDate: "start_date"
     *     })
     */
    public async get(
        userId: string,
        request: Vital.ActivityGetRequest,
        requestOptions?: Activity.RequestOptions
    ): Promise<Vital.ClientActivityResponse> {
        const { provider, startDate, endDate } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (provider != null) {
            _queryParams["provider"] = provider;
        }

        _queryParams["start_date"] = startDate;
        if (endDate != null) {
            _queryParams["end_date"] = endDate;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VitalEnvironment.Production,
                `v2/summary/activity/${encodeURIComponent(userId)}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tryvital/vital-node",
                "X-Fern-SDK-Version": "3.1.316",
                "User-Agent": "@tryvital/vital-node/3.1.316",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.ClientActivityResponse.parseOrThrow(_response.body, {
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
     * Get raw activity summary for user_id
     *
     * @param {string} userId
     * @param {Vital.ActivityGetRawRequest} request
     * @param {Activity.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Vital.UnprocessableEntityError}
     *
     * @example
     *     await client.activity.getRaw("user_id", {
     *         startDate: "start_date"
     *     })
     */
    public async getRaw(
        userId: string,
        request: Vital.ActivityGetRawRequest,
        requestOptions?: Activity.RequestOptions
    ): Promise<Vital.RawActivity> {
        const { provider, startDate, endDate } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (provider != null) {
            _queryParams["provider"] = provider;
        }

        _queryParams["start_date"] = startDate;
        if (endDate != null) {
            _queryParams["end_date"] = endDate;
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VitalEnvironment.Production,
                `v2/summary/activity/${encodeURIComponent(userId)}/raw`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tryvital/vital-node",
                "X-Fern-SDK-Version": "3.1.316",
                "User-Agent": "@tryvital/vital-node/3.1.316",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.RawActivity.parseOrThrow(_response.body, {
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
