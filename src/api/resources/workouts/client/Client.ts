/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Vital from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Workouts {
    interface Options {
        environment?: core.Supplier<environments.VitalEnvironment | string>;
        apiKey: core.Supplier<string>;
    }

    interface RequestOptions {
        timeoutInSeconds?: number;
        maxRetries?: number;
    }
}

export class Workouts {
    constructor(protected readonly _options: Workouts.Options) {}

    /**
     * Get Daily workout for user_id
     * @throws {@link Vital.UnprocessableEntityError}
     *
     * @example
     *     await vital.workouts.get("user_id", {
     *         startDate: "start_date"
     *     })
     */
    public async get(
        userId: string,
        request: Vital.WorkoutsGetRequest,
        requestOptions?: Workouts.RequestOptions
    ): Promise<Vital.ClientWorkoutResponse> {
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
                `v2/summary/workouts/${userId}`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tryvital/vital-node",
                "X-Fern-SDK-Version": "3.1.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ClientWorkoutResponse.parseOrThrow(_response.body, {
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
     * Get Daily workout for user_id
     * @throws {@link Vital.UnprocessableEntityError}
     *
     * @example
     *     await vital.workouts.getRaw("user_id", {
     *         startDate: "start_date"
     *     })
     */
    public async getRaw(
        userId: string,
        request: Vital.WorkoutsGetRawRequest,
        requestOptions?: Workouts.RequestOptions
    ): Promise<Vital.RawWorkout> {
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
                `v2/summary/workouts/${userId}/raw`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tryvital/vital-node",
                "X-Fern-SDK-Version": "3.1.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.RawWorkout.parseOrThrow(_response.body, {
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
     * @throws {@link Vital.UnprocessableEntityError}
     *
     * @example
     *     await vital.workouts.getByWorkoutId("workout_id")
     */
    public async getByWorkoutId(
        workoutId: string,
        requestOptions?: Workouts.RequestOptions
    ): Promise<Vital.ClientFacingStream> {
        const _response = await core.fetcher({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.VitalEnvironment.Production,
                `v2/timeseries/workouts/${workoutId}/stream`
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@tryvital/vital-node",
                "X-Fern-SDK-Version": "3.1.13",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
        });
        if (_response.ok) {
            return await serializers.ClientFacingStream.parseOrThrow(_response.body, {
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

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "x-vital-api-key": apiKeyValue };
    }
}
