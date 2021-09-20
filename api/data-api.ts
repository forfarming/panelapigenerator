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
import { CreateDataCommand } from '../model';
// @ts-ignore
import { DeleteDataCommand } from '../model';
// @ts-ignore
import { ProblemDetails } from '../model';
// @ts-ignore
import { UpdateDataCommand } from '../model';
/**
 * DataApi - axios parameter creator
 * @export
 */
export const DataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} culture 
         * @param {DeleteDataCommand} [deleteDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureDataDelete: async (culture: string, deleteDataCommand?: DeleteDataCommand, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureDataDelete', 'culture', culture)
            const localVarPath = `/api/{culture}/Data`
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
            localVarRequestOptions.data = serializeDataIfNeeded(deleteDataCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} culture 
         * @param {string} [data] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureDataPost: async (culture: string, data?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureDataPost', 'culture', culture)
            const localVarPath = `/api/{culture}/Data`
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
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


            if (data !== undefined) { 
                localVarFormParams.append('data', data as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} culture 
         * @param {string} [data] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureDataPut: async (culture: string, data?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureDataPut', 'culture', culture)
            const localVarPath = `/api/{culture}/Data`
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
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


            if (data !== undefined) { 
                localVarFormParams.append('data', data as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DataApi - functional programming interface
 * @export
 */
export const DataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DataApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} culture 
         * @param {DeleteDataCommand} [deleteDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureDataDelete(culture: string, deleteDataCommand?: DeleteDataCommand, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteDataCommand>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureDataDelete(culture, deleteDataCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} culture 
         * @param {string} [data] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureDataPost(culture: string, data?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateDataCommand>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureDataPost(culture, data, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} culture 
         * @param {string} [data] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureDataPut(culture: string, data?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateDataCommand>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureDataPut(culture, data, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DataApi - factory interface
 * @export
 */
export const DataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DataApiFp(configuration)
    return {
        /**
         * 
         * @param {string} culture 
         * @param {DeleteDataCommand} [deleteDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureDataDelete(culture: string, deleteDataCommand?: DeleteDataCommand, options?: any): AxiosPromise<DeleteDataCommand> {
            return localVarFp.apiCultureDataDelete(culture, deleteDataCommand, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} culture 
         * @param {string} [data] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureDataPost(culture: string, data?: string, options?: any): AxiosPromise<CreateDataCommand> {
            return localVarFp.apiCultureDataPost(culture, data, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} culture 
         * @param {string} [data] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureDataPut(culture: string, data?: string, options?: any): AxiosPromise<UpdateDataCommand> {
            return localVarFp.apiCultureDataPut(culture, data, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DataApi - interface
 * @export
 * @interface DataApi
 */
export interface DataApiInterface {
    /**
     * 
     * @param {string} culture 
     * @param {DeleteDataCommand} [deleteDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApiInterface
     */
    apiCultureDataDelete(culture: string, deleteDataCommand?: DeleteDataCommand, options?: any): AxiosPromise<DeleteDataCommand>;

    /**
     * 
     * @param {string} culture 
     * @param {string} [data] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApiInterface
     */
    apiCultureDataPost(culture: string, data?: string, options?: any): AxiosPromise<CreateDataCommand>;

    /**
     * 
     * @param {string} culture 
     * @param {string} [data] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApiInterface
     */
    apiCultureDataPut(culture: string, data?: string, options?: any): AxiosPromise<UpdateDataCommand>;

}

/**
 * DataApi - object-oriented interface
 * @export
 * @class DataApi
 * @extends {BaseAPI}
 */
export class DataApi extends BaseAPI implements DataApiInterface {
    /**
     * 
     * @param {string} culture 
     * @param {DeleteDataCommand} [deleteDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    public apiCultureDataDelete(culture: string, deleteDataCommand?: DeleteDataCommand, options?: any) {
        return DataApiFp(this.configuration).apiCultureDataDelete(culture, deleteDataCommand, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} culture 
     * @param {string} [data] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    public apiCultureDataPost(culture: string, data?: string, options?: any) {
        return DataApiFp(this.configuration).apiCultureDataPost(culture, data, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} culture 
     * @param {string} [data] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataApi
     */
    public apiCultureDataPut(culture: string, data?: string, options?: any) {
        return DataApiFp(this.configuration).apiCultureDataPut(culture, data, options).then((request) => request(this.axios, this.basePath));
    }
}
