/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vital from "../../..";
import { default as URLSearchParams } from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Body {
    interface Options {
        environment?: core.Supplier<environments.VitalEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
    }
}

export class Body {
    constructor(protected readonly _options: Body.Options) {}

    /**
     * Get Daily Body data for user_id
     * @throws {@link Vital.UnprocessableEntityError}
     */
    public async get(
        userId: string,
        request: Vital.BodyGetRequest,
        requestOptions?: Body.RequestOptions
    ): Promise<Vital.ClientBodyResponse> {
        const { provider, startDate, endDate } = request;
        const _queryParams = new URLSearchParams();
        if (provider != null) {
            _queryParams.append("provider", provider);
        }

        _queryParams.append("start_date", startDate);
        if (endDate != null) {
            _queryParams.append("end_date", endDate);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VitalEnvironment.Production,
                `v2/summary/body/${userId}`
            ),
            method: "GET",
            headers: {
                "x-vital-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tryvital/vital-node",
                "X-Fern-SDK-Version": "3.0.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.ClientBodyResponse.parseOrThrow(_response.body, {
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
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
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
     * Get Daily Body data for user_id
     * @throws {@link Vital.UnprocessableEntityError}
     */
    public async getRaw(
        userId: string,
        request: Vital.BodyGetRawRequest,
        requestOptions?: Body.RequestOptions
    ): Promise<Vital.RawBody> {
        const { provider, startDate, endDate } = request;
        const _queryParams = new URLSearchParams();
        if (provider != null) {
            _queryParams.append("provider", provider);
        }

        _queryParams.append("start_date", startDate);
        if (endDate != null) {
            _queryParams.append("end_date", endDate);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VitalEnvironment.Production,
                `v2/summary/body/${userId}/raw`
            ),
            method: "GET",
            headers: {
                "x-vital-api-key": await core.Supplier.get(this._options.apiKey),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tryvital/vital-node",
                "X-Fern-SDK-Version": "3.0.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
        });
        if (_response.ok) {
            return await serializers.RawBody.parseOrThrow(_response.body, {
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
                        await serializers.HttpValidationError.parseOrThrow(_response.error.body, {
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
}