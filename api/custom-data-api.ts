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
import { CreateCustomDataCommand } from '../model';
// @ts-ignore
import { CustomData } from '../model';
// @ts-ignore
import { CustomDataDefinition } from '../model';
// @ts-ignore
import { DeleteCustomDataCommand } from '../model';
// @ts-ignore
import { ProblemDetails } from '../model';
// @ts-ignore
import { UpdateCustomDataCommand } from '../model';
/**
 * CustomDataApi - axios parameter creator
 * @export
 */
export const CustomDataApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} companyUid 
         * @param {string} productionUid 
         * @param {string} batchUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomDataCompanyUidProductionUidBatchUidGet: async (companyUid: string, productionUid: string, batchUid: string, culture: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyUid' is not null or undefined
            assertParamExists('apiCultureCustomDataCompanyUidProductionUidBatchUidGet', 'companyUid', companyUid)
            // verify required parameter 'productionUid' is not null or undefined
            assertParamExists('apiCultureCustomDataCompanyUidProductionUidBatchUidGet', 'productionUid', productionUid)
            // verify required parameter 'batchUid' is not null or undefined
            assertParamExists('apiCultureCustomDataCompanyUidProductionUidBatchUidGet', 'batchUid', batchUid)
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureCustomDataCompanyUidProductionUidBatchUidGet', 'culture', culture)
            const localVarPath = `/api/{culture}/CustomData/{companyUid}/{productionUid}/{batchUid}`
                .replace(`{${"companyUid"}}`, encodeURIComponent(String(companyUid)))
                .replace(`{${"productionUid"}}`, encodeURIComponent(String(productionUid)))
                .replace(`{${"batchUid"}}`, encodeURIComponent(String(batchUid)))
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
        apiCultureCustomDataDefinitionsCompanyUidGet: async (companyUid: string, culture: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyUid' is not null or undefined
            assertParamExists('apiCultureCustomDataDefinitionsCompanyUidGet', 'companyUid', companyUid)
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureCustomDataDefinitionsCompanyUidGet', 'culture', culture)
            const localVarPath = `/api/{culture}/CustomData/definitions/{companyUid}`
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
        /**
         * 
         * @param {string} culture 
         * @param {DeleteCustomDataCommand} [deleteCustomDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomDataDelete: async (culture: string, deleteCustomDataCommand?: DeleteCustomDataCommand, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureCustomDataDelete', 'culture', culture)
            const localVarPath = `/api/{culture}/CustomData`
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
            localVarRequestOptions.data = serializeDataIfNeeded(deleteCustomDataCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} culture 
         * @param {CreateCustomDataCommand} [createCustomDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomDataPost: async (culture: string, createCustomDataCommand?: CreateCustomDataCommand, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureCustomDataPost', 'culture', culture)
            const localVarPath = `/api/{culture}/CustomData`
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
            localVarRequestOptions.data = serializeDataIfNeeded(createCustomDataCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} culture 
         * @param {UpdateCustomDataCommand} [updateCustomDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomDataPut: async (culture: string, updateCustomDataCommand?: UpdateCustomDataCommand, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureCustomDataPut', 'culture', culture)
            const localVarPath = `/api/{culture}/CustomData`
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateCustomDataCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} uid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomDataUidGet: async (uid: string, culture: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'uid' is not null or undefined
            assertParamExists('apiCultureCustomDataUidGet', 'uid', uid)
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureCustomDataUidGet', 'culture', culture)
            const localVarPath = `/api/{culture}/CustomData/{uid}`
                .replace(`{${"uid"}}`, encodeURIComponent(String(uid)))
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
 * CustomDataApi - functional programming interface
 * @export
 */
export const CustomDataApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomDataApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} companyUid 
         * @param {string} productionUid 
         * @param {string} batchUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureCustomDataCompanyUidProductionUidBatchUidGet(companyUid: string, productionUid: string, batchUid: string, culture: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CustomData>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureCustomDataCompanyUidProductionUidBatchUidGet(companyUid, productionUid, batchUid, culture, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} companyUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureCustomDataDefinitionsCompanyUidGet(companyUid: string, culture: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CustomDataDefinition>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureCustomDataDefinitionsCompanyUidGet(companyUid, culture, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} culture 
         * @param {DeleteCustomDataCommand} [deleteCustomDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureCustomDataDelete(culture: string, deleteCustomDataCommand?: DeleteCustomDataCommand, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteCustomDataCommand>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureCustomDataDelete(culture, deleteCustomDataCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} culture 
         * @param {CreateCustomDataCommand} [createCustomDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureCustomDataPost(culture: string, createCustomDataCommand?: CreateCustomDataCommand, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateCustomDataCommand>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureCustomDataPost(culture, createCustomDataCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} culture 
         * @param {UpdateCustomDataCommand} [updateCustomDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureCustomDataPut(culture: string, updateCustomDataCommand?: UpdateCustomDataCommand, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateCustomDataCommand>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureCustomDataPut(culture, updateCustomDataCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} uid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureCustomDataUidGet(uid: string, culture: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CustomData>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureCustomDataUidGet(uid, culture, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CustomDataApi - factory interface
 * @export
 */
export const CustomDataApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomDataApiFp(configuration)
    return {
        /**
         * 
         * @param {string} companyUid 
         * @param {string} productionUid 
         * @param {string} batchUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomDataCompanyUidProductionUidBatchUidGet(companyUid: string, productionUid: string, batchUid: string, culture: string, options?: any): AxiosPromise<Array<CustomData>> {
            return localVarFp.apiCultureCustomDataCompanyUidProductionUidBatchUidGet(companyUid, productionUid, batchUid, culture, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} companyUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomDataDefinitionsCompanyUidGet(companyUid: string, culture: string, options?: any): AxiosPromise<Array<CustomDataDefinition>> {
            return localVarFp.apiCultureCustomDataDefinitionsCompanyUidGet(companyUid, culture, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} culture 
         * @param {DeleteCustomDataCommand} [deleteCustomDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomDataDelete(culture: string, deleteCustomDataCommand?: DeleteCustomDataCommand, options?: any): AxiosPromise<DeleteCustomDataCommand> {
            return localVarFp.apiCultureCustomDataDelete(culture, deleteCustomDataCommand, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} culture 
         * @param {CreateCustomDataCommand} [createCustomDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomDataPost(culture: string, createCustomDataCommand?: CreateCustomDataCommand, options?: any): AxiosPromise<CreateCustomDataCommand> {
            return localVarFp.apiCultureCustomDataPost(culture, createCustomDataCommand, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} culture 
         * @param {UpdateCustomDataCommand} [updateCustomDataCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomDataPut(culture: string, updateCustomDataCommand?: UpdateCustomDataCommand, options?: any): AxiosPromise<UpdateCustomDataCommand> {
            return localVarFp.apiCultureCustomDataPut(culture, updateCustomDataCommand, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} uid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomDataUidGet(uid: string, culture: string, options?: any): AxiosPromise<Array<CustomData>> {
            return localVarFp.apiCultureCustomDataUidGet(uid, culture, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CustomDataApi - interface
 * @export
 * @interface CustomDataApi
 */
export interface CustomDataApiInterface {
    /**
     * 
     * @param {string} companyUid 
     * @param {string} productionUid 
     * @param {string} batchUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomDataApiInterface
     */
    apiCultureCustomDataCompanyUidProductionUidBatchUidGet(companyUid: string, productionUid: string, batchUid: string, culture: string, options?: any): AxiosPromise<Array<CustomData>>;

    /**
     * 
     * @param {string} companyUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomDataApiInterface
     */
    apiCultureCustomDataDefinitionsCompanyUidGet(companyUid: string, culture: string, options?: any): AxiosPromise<Array<CustomDataDefinition>>;

    /**
     * 
     * @param {string} culture 
     * @param {DeleteCustomDataCommand} [deleteCustomDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomDataApiInterface
     */
    apiCultureCustomDataDelete(culture: string, deleteCustomDataCommand?: DeleteCustomDataCommand, options?: any): AxiosPromise<DeleteCustomDataCommand>;

    /**
     * 
     * @param {string} culture 
     * @param {CreateCustomDataCommand} [createCustomDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomDataApiInterface
     */
    apiCultureCustomDataPost(culture: string, createCustomDataCommand?: CreateCustomDataCommand, options?: any): AxiosPromise<CreateCustomDataCommand>;

    /**
     * 
     * @param {string} culture 
     * @param {UpdateCustomDataCommand} [updateCustomDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomDataApiInterface
     */
    apiCultureCustomDataPut(culture: string, updateCustomDataCommand?: UpdateCustomDataCommand, options?: any): AxiosPromise<UpdateCustomDataCommand>;

    /**
     * 
     * @param {string} uid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomDataApiInterface
     */
    apiCultureCustomDataUidGet(uid: string, culture: string, options?: any): AxiosPromise<Array<CustomData>>;

}

/**
 * CustomDataApi - object-oriented interface
 * @export
 * @class CustomDataApi
 * @extends {BaseAPI}
 */
export class CustomDataApi extends BaseAPI implements CustomDataApiInterface {
    /**
     * 
     * @param {string} companyUid 
     * @param {string} productionUid 
     * @param {string} batchUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomDataApi
     */
    public apiCultureCustomDataCompanyUidProductionUidBatchUidGet(companyUid: string, productionUid: string, batchUid: string, culture: string, options?: any) {
        return CustomDataApiFp(this.configuration).apiCultureCustomDataCompanyUidProductionUidBatchUidGet(companyUid, productionUid, batchUid, culture, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} companyUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomDataApi
     */
    public apiCultureCustomDataDefinitionsCompanyUidGet(companyUid: string, culture: string, options?: any) {
        return CustomDataApiFp(this.configuration).apiCultureCustomDataDefinitionsCompanyUidGet(companyUid, culture, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} culture 
     * @param {DeleteCustomDataCommand} [deleteCustomDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomDataApi
     */
    public apiCultureCustomDataDelete(culture: string, deleteCustomDataCommand?: DeleteCustomDataCommand, options?: any) {
        return CustomDataApiFp(this.configuration).apiCultureCustomDataDelete(culture, deleteCustomDataCommand, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} culture 
     * @param {CreateCustomDataCommand} [createCustomDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomDataApi
     */
    public apiCultureCustomDataPost(culture: string, createCustomDataCommand?: CreateCustomDataCommand, options?: any) {
        return CustomDataApiFp(this.configuration).apiCultureCustomDataPost(culture, createCustomDataCommand, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} culture 
     * @param {UpdateCustomDataCommand} [updateCustomDataCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomDataApi
     */
    public apiCultureCustomDataPut(culture: string, updateCustomDataCommand?: UpdateCustomDataCommand, options?: any) {
        return CustomDataApiFp(this.configuration).apiCultureCustomDataPut(culture, updateCustomDataCommand, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} uid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomDataApi
     */
    public apiCultureCustomDataUidGet(uid: string, culture: string, options?: any) {
        return CustomDataApiFp(this.configuration).apiCultureCustomDataUidGet(uid, culture, options).then((request) => request(this.axios, this.basePath));
    }
}
