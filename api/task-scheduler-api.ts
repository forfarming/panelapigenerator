/* tslint:disable */
/* eslint-disable */
/**
 * Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { SendEmailCommand } from '../model';
/**
 * TaskSchedulerApi - axios parameter creator
 * @export
 */
export const TaskSchedulerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {SendEmailCommand} [sendEmailCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskSchedulerPost: async (sendEmailCommand?: SendEmailCommand, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/TaskScheduler`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(sendEmailCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TaskSchedulerApi - functional programming interface
 * @export
 */
export const TaskSchedulerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TaskSchedulerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {SendEmailCommand} [sendEmailCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async taskSchedulerPost(sendEmailCommand?: SendEmailCommand, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.taskSchedulerPost(sendEmailCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TaskSchedulerApi - factory interface
 * @export
 */
export const TaskSchedulerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TaskSchedulerApiFp(configuration)
    return {
        /**
         * 
         * @param {SendEmailCommand} [sendEmailCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        taskSchedulerPost(sendEmailCommand?: SendEmailCommand, options?: any): AxiosPromise<void> {
            return localVarFp.taskSchedulerPost(sendEmailCommand, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TaskSchedulerApi - interface
 * @export
 * @interface TaskSchedulerApi
 */
export interface TaskSchedulerApiInterface {
    /**
     * 
     * @param {SendEmailCommand} [sendEmailCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskSchedulerApiInterface
     */
    taskSchedulerPost(sendEmailCommand?: SendEmailCommand, options?: any): AxiosPromise<void>;

}

/**
 * TaskSchedulerApi - object-oriented interface
 * @export
 * @class TaskSchedulerApi
 * @extends {BaseAPI}
 */
export class TaskSchedulerApi extends BaseAPI implements TaskSchedulerApiInterface {
    /**
     * 
     * @param {SendEmailCommand} [sendEmailCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskSchedulerApi
     */
    public taskSchedulerPost(sendEmailCommand?: SendEmailCommand, options?: any) {
        return TaskSchedulerApiFp(this.configuration).taskSchedulerPost(sendEmailCommand, options).then((request) => request(this.axios, this.basePath));
    }
}
