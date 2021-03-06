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
import { ProblemDetails } from '../model';
/**
 * BatchMetadataApi - axios parameter creator
 * @export
 */
export const BatchMetadataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} companyUid 
         * @param {string} batchMetadataUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureBatchMetadataCompanyCompanyUidBatchMetadataUidGet: async (companyUid: string, batchMetadataUid: string, culture: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyUid' is not null or undefined
            assertParamExists('apiCultureBatchMetadataCompanyCompanyUidBatchMetadataUidGet', 'companyUid', companyUid)
            // verify required parameter 'batchMetadataUid' is not null or undefined
            assertParamExists('apiCultureBatchMetadataCompanyCompanyUidBatchMetadataUidGet', 'batchMetadataUid', batchMetadataUid)
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureBatchMetadataCompanyCompanyUidBatchMetadataUidGet', 'culture', culture)
            const localVarPath = `/api/{culture}/BatchMetadata/company/{companyUid}/{batchMetadataUid}`
                .replace(`{${"companyUid"}}`, encodeURIComponent(String(companyUid)))
                .replace(`{${"batchMetadataUid"}}`, encodeURIComponent(String(batchMetadataUid)))
                .replace(`{${"culture"}}`, encodeURIComponent(String(culture)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} companyUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureBatchMetadataCompanyCompanyUidGet: async (companyUid: string, culture: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyUid' is not null or undefined
            assertParamExists('apiCultureBatchMetadataCompanyCompanyUidGet', 'companyUid', companyUid)
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureBatchMetadataCompanyCompanyUidGet', 'culture', culture)
            const localVarPath = `/api/{culture}/BatchMetadata/company/{companyUid}`
                .replace(`{${"companyUid"}}`, encodeURIComponent(String(companyUid)))
                .replace(`{${"culture"}}`, encodeURIComponent(String(culture)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BatchMetadataApi - functional programming interface
 * @export
 */
export const BatchMetadataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BatchMetadataApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} companyUid 
         * @param {string} batchMetadataUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureBatchMetadataCompanyCompanyUidBatchMetadataUidGet(companyUid: string, batchMetadataUid: string, culture: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureBatchMetadataCompanyCompanyUidBatchMetadataUidGet(companyUid, batchMetadataUid, culture, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} companyUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureBatchMetadataCompanyCompanyUidGet(companyUid: string, culture: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureBatchMetadataCompanyCompanyUidGet(companyUid, culture, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BatchMetadataApi - factory interface
 * @export
 */
export const BatchMetadataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BatchMetadataApiFp(configuration)
    return {
        /**
         * 
         * @param {string} companyUid 
         * @param {string} batchMetadataUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureBatchMetadataCompanyCompanyUidBatchMetadataUidGet(companyUid: string, batchMetadataUid: string, culture: string, options?: any): AxiosPromise<void> {
            return localVarFp.apiCultureBatchMetadataCompanyCompanyUidBatchMetadataUidGet(companyUid, batchMetadataUid, culture, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} companyUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureBatchMetadataCompanyCompanyUidGet(companyUid: string, culture: string, options?: any): AxiosPromise<void> {
            return localVarFp.apiCultureBatchMetadataCompanyCompanyUidGet(companyUid, culture, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BatchMetadataApi - interface
 * @export
 * @interface BatchMetadataApi
 */
export interface BatchMetadataApiInterface {
    /**
     * 
     * @param {string} companyUid 
     * @param {string} batchMetadataUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BatchMetadataApiInterface
     */
    apiCultureBatchMetadataCompanyCompanyUidBatchMetadataUidGet(companyUid: string, batchMetadataUid: string, culture: string, options?: any): AxiosPromise<void>;

    /**
     * 
     * @param {string} companyUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BatchMetadataApiInterface
     */
    apiCultureBatchMetadataCompanyCompanyUidGet(companyUid: string, culture: string, options?: any): AxiosPromise<void>;

}

/**
 * BatchMetadataApi - object-oriented interface
 * @export
 * @class BatchMetadataApi
 * @extends {BaseAPI}
 */
export class BatchMetadataApi extends BaseAPI implements BatchMetadataApiInterface {
    /**
     * 
     * @param {string} companyUid 
     * @param {string} batchMetadataUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BatchMetadataApi
     */
    public apiCultureBatchMetadataCompanyCompanyUidBatchMetadataUidGet(companyUid: string, batchMetadataUid: string, culture: string, options?: any) {
        return BatchMetadataApiFp(this.configuration).apiCultureBatchMetadataCompanyCompanyUidBatchMetadataUidGet(companyUid, batchMetadataUid, culture, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} companyUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BatchMetadataApi
     */
    public apiCultureBatchMetadataCompanyCompanyUidGet(companyUid: string, culture: string, options?: any) {
        return BatchMetadataApiFp(this.configuration).apiCultureBatchMetadataCompanyCompanyUidGet(companyUid, culture, options).then((request) => request(this.axios, this.basePath));
    }
}
