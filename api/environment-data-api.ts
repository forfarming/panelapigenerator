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
import { CreateBatchCommand } from '../model';
// @ts-ignore
import { CreateEnvironmentDataCommand } from '../model';
// @ts-ignore
import { DeleteDataCommand } from '../model';
// @ts-ignore
import { DeleteEnvironmentDataCommand } from '../model';
// @ts-ignore
import { ProblemDetails } from '../model';
// @ts-ignore
import { UpdateEnvironmentDataCommand } from '../model';
/**
 * EnvironmentDataApi - axios parameter creator
 * @export
 */
export const EnvironmentDataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} culture 
         * @param {DeleteEnvironmentDataCommand} [deleteEnvironmentDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureEnvironmentDataDelete: async (culture: string, deleteEnvironmentDataCommand?: DeleteEnvironmentDataCommand, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureEnvironmentDataDelete', 'culture', culture)
            const localVarPath = `/api/{culture}/EnvironmentData`
                .replace(`{${"culture"}}`, encodeURIComponent(String(culture)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deleteEnvironmentDataCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} culture 
         * @param {CreateEnvironmentDataCommand} [createEnvironmentDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureEnvironmentDataPost: async (culture: string, createEnvironmentDataCommand?: CreateEnvironmentDataCommand, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureEnvironmentDataPost', 'culture', culture)
            const localVarPath = `/api/{culture}/EnvironmentData`
                .replace(`{${"culture"}}`, encodeURIComponent(String(culture)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(createEnvironmentDataCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} culture 
         * @param {UpdateEnvironmentDataCommand} [updateEnvironmentDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureEnvironmentDataPut: async (culture: string, updateEnvironmentDataCommand?: UpdateEnvironmentDataCommand, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureEnvironmentDataPut', 'culture', culture)
            const localVarPath = `/api/{culture}/EnvironmentData`
                .replace(`{${"culture"}}`, encodeURIComponent(String(culture)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateEnvironmentDataCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EnvironmentDataApi - functional programming interface
 * @export
 */
export const EnvironmentDataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EnvironmentDataApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} culture 
         * @param {DeleteEnvironmentDataCommand} [deleteEnvironmentDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureEnvironmentDataDelete(culture: string, deleteEnvironmentDataCommand?: DeleteEnvironmentDataCommand, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteDataCommand>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureEnvironmentDataDelete(culture, deleteEnvironmentDataCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} culture 
         * @param {CreateEnvironmentDataCommand} [createEnvironmentDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureEnvironmentDataPost(culture: string, createEnvironmentDataCommand?: CreateEnvironmentDataCommand, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateBatchCommand>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureEnvironmentDataPost(culture, createEnvironmentDataCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} culture 
         * @param {UpdateEnvironmentDataCommand} [updateEnvironmentDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureEnvironmentDataPut(culture: string, updateEnvironmentDataCommand?: UpdateEnvironmentDataCommand, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateBatchCommand>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureEnvironmentDataPut(culture, updateEnvironmentDataCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EnvironmentDataApi - factory interface
 * @export
 */
export const EnvironmentDataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EnvironmentDataApiFp(configuration)
    return {
        /**
         * 
         * @param {string} culture 
         * @param {DeleteEnvironmentDataCommand} [deleteEnvironmentDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureEnvironmentDataDelete(culture: string, deleteEnvironmentDataCommand?: DeleteEnvironmentDataCommand, options?: any): AxiosPromise<DeleteDataCommand> {
            return localVarFp.apiCultureEnvironmentDataDelete(culture, deleteEnvironmentDataCommand, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} culture 
         * @param {CreateEnvironmentDataCommand} [createEnvironmentDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureEnvironmentDataPost(culture: string, createEnvironmentDataCommand?: CreateEnvironmentDataCommand, options?: any): AxiosPromise<CreateBatchCommand> {
            return localVarFp.apiCultureEnvironmentDataPost(culture, createEnvironmentDataCommand, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} culture 
         * @param {UpdateEnvironmentDataCommand} [updateEnvironmentDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureEnvironmentDataPut(culture: string, updateEnvironmentDataCommand?: UpdateEnvironmentDataCommand, options?: any): AxiosPromise<CreateBatchCommand> {
            return localVarFp.apiCultureEnvironmentDataPut(culture, updateEnvironmentDataCommand, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EnvironmentDataApi - interface
 * @export
 * @interface EnvironmentDataApi
 */
export interface EnvironmentDataApiInterface {
    /**
     * 
     * @param {string} culture 
     * @param {DeleteEnvironmentDataCommand} [deleteEnvironmentDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentDataApiInterface
     */
    apiCultureEnvironmentDataDelete(culture: string, deleteEnvironmentDataCommand?: DeleteEnvironmentDataCommand, options?: any): AxiosPromise<DeleteDataCommand>;

    /**
     * 
     * @param {string} culture 
     * @param {CreateEnvironmentDataCommand} [createEnvironmentDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentDataApiInterface
     */
    apiCultureEnvironmentDataPost(culture: string, createEnvironmentDataCommand?: CreateEnvironmentDataCommand, options?: any): AxiosPromise<CreateBatchCommand>;

    /**
     * 
     * @param {string} culture 
     * @param {UpdateEnvironmentDataCommand} [updateEnvironmentDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentDataApiInterface
     */
    apiCultureEnvironmentDataPut(culture: string, updateEnvironmentDataCommand?: UpdateEnvironmentDataCommand, options?: any): AxiosPromise<CreateBatchCommand>;

}

/**
 * EnvironmentDataApi - object-oriented interface
 * @export
 * @class EnvironmentDataApi
 * @extends {BaseAPI}
 */
export class EnvironmentDataApi extends BaseAPI implements EnvironmentDataApiInterface {
    /**
     * 
     * @param {string} culture 
     * @param {DeleteEnvironmentDataCommand} [deleteEnvironmentDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentDataApi
     */
    public apiCultureEnvironmentDataDelete(culture: string, deleteEnvironmentDataCommand?: DeleteEnvironmentDataCommand, options?: any) {
        return EnvironmentDataApiFp(this.configuration).apiCultureEnvironmentDataDelete(culture, deleteEnvironmentDataCommand, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} culture 
     * @param {CreateEnvironmentDataCommand} [createEnvironmentDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentDataApi
     */
    public apiCultureEnvironmentDataPost(culture: string, createEnvironmentDataCommand?: CreateEnvironmentDataCommand, options?: any) {
        return EnvironmentDataApiFp(this.configuration).apiCultureEnvironmentDataPost(culture, createEnvironmentDataCommand, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} culture 
     * @param {UpdateEnvironmentDataCommand} [updateEnvironmentDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EnvironmentDataApi
     */
    public apiCultureEnvironmentDataPut(culture: string, updateEnvironmentDataCommand?: UpdateEnvironmentDataCommand, options?: any) {
        return EnvironmentDataApiFp(this.configuration).apiCultureEnvironmentDataPut(culture, updateEnvironmentDataCommand, options).then((request) => request(this.axios, this.basePath));
    }
}
