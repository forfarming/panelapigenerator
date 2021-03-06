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
import { CreateCustomizationCommand } from '../model';
// @ts-ignore
import { CustomizationField } from '../model';
// @ts-ignore
import { CustomizationProperty } from '../model';
// @ts-ignore
import { ProblemDetails } from '../model';
// @ts-ignore
import { QrCodeItem } from '../model';
/**
 * CustomizationApi - axios parameter creator
 * @export
 */
export const CustomizationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} batchUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomizationBatchDataBatchUidGet: async (batchUid: string, culture: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'batchUid' is not null or undefined
            assertParamExists('apiCultureCustomizationBatchDataBatchUidGet', 'batchUid', batchUid)
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureCustomizationBatchDataBatchUidGet', 'culture', culture)
            const localVarPath = `/api/{culture}/Customization/batchData/{batchUid}`
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
         * @param {string} templateUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomizationBatchDataPreviewCompanyUidTemplateUidGet: async (companyUid: string, templateUid: string, culture: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyUid' is not null or undefined
            assertParamExists('apiCultureCustomizationBatchDataPreviewCompanyUidTemplateUidGet', 'companyUid', companyUid)
            // verify required parameter 'templateUid' is not null or undefined
            assertParamExists('apiCultureCustomizationBatchDataPreviewCompanyUidTemplateUidGet', 'templateUid', templateUid)
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureCustomizationBatchDataPreviewCompanyUidTemplateUidGet', 'culture', culture)
            const localVarPath = `/api/{culture}/Customization/batchData/preview/{companyUid}/{templateUid}`
                .replace(`{${"companyUid"}}`, encodeURIComponent(String(companyUid)))
                .replace(`{${"templateUid"}}`, encodeURIComponent(String(templateUid)))
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
         * @param {string} templateUid 
         * @param {string} productUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomizationCompanyUidFieldsTemplateUidProductUidGet: async (companyUid: string, templateUid: string, productUid: string, culture: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyUid' is not null or undefined
            assertParamExists('apiCultureCustomizationCompanyUidFieldsTemplateUidProductUidGet', 'companyUid', companyUid)
            // verify required parameter 'templateUid' is not null or undefined
            assertParamExists('apiCultureCustomizationCompanyUidFieldsTemplateUidProductUidGet', 'templateUid', templateUid)
            // verify required parameter 'productUid' is not null or undefined
            assertParamExists('apiCultureCustomizationCompanyUidFieldsTemplateUidProductUidGet', 'productUid', productUid)
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureCustomizationCompanyUidFieldsTemplateUidProductUidGet', 'culture', culture)
            const localVarPath = `/api/{culture}/Customization/{companyUid}/fields/{templateUid}/{productUid}`
                .replace(`{${"companyUid"}}`, encodeURIComponent(String(companyUid)))
                .replace(`{${"templateUid"}}`, encodeURIComponent(String(templateUid)))
                .replace(`{${"productUid"}}`, encodeURIComponent(String(productUid)))
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
         * @param {string} productUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomizationCompanyUidProductUidGet: async (companyUid: string, productUid: string, culture: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyUid' is not null or undefined
            assertParamExists('apiCultureCustomizationCompanyUidProductUidGet', 'companyUid', companyUid)
            // verify required parameter 'productUid' is not null or undefined
            assertParamExists('apiCultureCustomizationCompanyUidProductUidGet', 'productUid', productUid)
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureCustomizationCompanyUidProductUidGet', 'culture', culture)
            const localVarPath = `/api/{culture}/Customization/{companyUid}/{productUid}`
                .replace(`{${"companyUid"}}`, encodeURIComponent(String(companyUid)))
                .replace(`{${"productUid"}}`, encodeURIComponent(String(productUid)))
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
         * @param {string} templateUid 
         * @param {string} productUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomizationCompanyUidPropertiesTemplateUidProductUidGet: async (companyUid: string, templateUid: string, productUid: string, culture: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'companyUid' is not null or undefined
            assertParamExists('apiCultureCustomizationCompanyUidPropertiesTemplateUidProductUidGet', 'companyUid', companyUid)
            // verify required parameter 'templateUid' is not null or undefined
            assertParamExists('apiCultureCustomizationCompanyUidPropertiesTemplateUidProductUidGet', 'templateUid', templateUid)
            // verify required parameter 'productUid' is not null or undefined
            assertParamExists('apiCultureCustomizationCompanyUidPropertiesTemplateUidProductUidGet', 'productUid', productUid)
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureCustomizationCompanyUidPropertiesTemplateUidProductUidGet', 'culture', culture)
            const localVarPath = `/api/{culture}/Customization/{companyUid}/properties/{templateUid}/{productUid}`
                .replace(`{${"companyUid"}}`, encodeURIComponent(String(companyUid)))
                .replace(`{${"templateUid"}}`, encodeURIComponent(String(templateUid)))
                .replace(`{${"productUid"}}`, encodeURIComponent(String(productUid)))
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
         * @param {CreateCustomizationCommand} [createCustomizationCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomizationPost: async (culture: string, createCustomizationCommand?: CreateCustomizationCommand, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureCustomizationPost', 'culture', culture)
            const localVarPath = `/api/{culture}/Customization`
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
            localVarRequestOptions.data = serializeDataIfNeeded(createCustomizationCommand, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CustomizationApi - functional programming interface
 * @export
 */
export const CustomizationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomizationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} batchUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureCustomizationBatchDataBatchUidGet(batchUid: string, culture: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<QrCodeItem>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureCustomizationBatchDataBatchUidGet(batchUid, culture, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} companyUid 
         * @param {string} templateUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureCustomizationBatchDataPreviewCompanyUidTemplateUidGet(companyUid: string, templateUid: string, culture: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<QrCodeItem>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureCustomizationBatchDataPreviewCompanyUidTemplateUidGet(companyUid, templateUid, culture, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} companyUid 
         * @param {string} templateUid 
         * @param {string} productUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureCustomizationCompanyUidFieldsTemplateUidProductUidGet(companyUid: string, templateUid: string, productUid: string, culture: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CustomizationField>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureCustomizationCompanyUidFieldsTemplateUidProductUidGet(companyUid, templateUid, productUid, culture, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} companyUid 
         * @param {string} productUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureCustomizationCompanyUidProductUidGet(companyUid: string, productUid: string, culture: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CustomizationProperty>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureCustomizationCompanyUidProductUidGet(companyUid, productUid, culture, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} companyUid 
         * @param {string} templateUid 
         * @param {string} productUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureCustomizationCompanyUidPropertiesTemplateUidProductUidGet(companyUid: string, templateUid: string, productUid: string, culture: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CustomizationProperty>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureCustomizationCompanyUidPropertiesTemplateUidProductUidGet(companyUid, templateUid, productUid, culture, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} culture 
         * @param {CreateCustomizationCommand} [createCustomizationCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureCustomizationPost(culture: string, createCustomizationCommand?: CreateCustomizationCommand, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateCustomizationCommand>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureCustomizationPost(culture, createCustomizationCommand, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CustomizationApi - factory interface
 * @export
 */
export const CustomizationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomizationApiFp(configuration)
    return {
        /**
         * 
         * @param {string} batchUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomizationBatchDataBatchUidGet(batchUid: string, culture: string, options?: any): AxiosPromise<Array<QrCodeItem>> {
            return localVarFp.apiCultureCustomizationBatchDataBatchUidGet(batchUid, culture, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} companyUid 
         * @param {string} templateUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomizationBatchDataPreviewCompanyUidTemplateUidGet(companyUid: string, templateUid: string, culture: string, options?: any): AxiosPromise<Array<QrCodeItem>> {
            return localVarFp.apiCultureCustomizationBatchDataPreviewCompanyUidTemplateUidGet(companyUid, templateUid, culture, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} companyUid 
         * @param {string} templateUid 
         * @param {string} productUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomizationCompanyUidFieldsTemplateUidProductUidGet(companyUid: string, templateUid: string, productUid: string, culture: string, options?: any): AxiosPromise<Array<CustomizationField>> {
            return localVarFp.apiCultureCustomizationCompanyUidFieldsTemplateUidProductUidGet(companyUid, templateUid, productUid, culture, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} companyUid 
         * @param {string} productUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomizationCompanyUidProductUidGet(companyUid: string, productUid: string, culture: string, options?: any): AxiosPromise<Array<CustomizationProperty>> {
            return localVarFp.apiCultureCustomizationCompanyUidProductUidGet(companyUid, productUid, culture, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} companyUid 
         * @param {string} templateUid 
         * @param {string} productUid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomizationCompanyUidPropertiesTemplateUidProductUidGet(companyUid: string, templateUid: string, productUid: string, culture: string, options?: any): AxiosPromise<Array<CustomizationProperty>> {
            return localVarFp.apiCultureCustomizationCompanyUidPropertiesTemplateUidProductUidGet(companyUid, templateUid, productUid, culture, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} culture 
         * @param {CreateCustomizationCommand} [createCustomizationCommand] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureCustomizationPost(culture: string, createCustomizationCommand?: CreateCustomizationCommand, options?: any): AxiosPromise<CreateCustomizationCommand> {
            return localVarFp.apiCultureCustomizationPost(culture, createCustomizationCommand, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CustomizationApi - interface
 * @export
 * @interface CustomizationApi
 */
export interface CustomizationApiInterface {
    /**
     * 
     * @param {string} batchUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomizationApiInterface
     */
    apiCultureCustomizationBatchDataBatchUidGet(batchUid: string, culture: string, options?: any): AxiosPromise<Array<QrCodeItem>>;

    /**
     * 
     * @param {string} companyUid 
     * @param {string} templateUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomizationApiInterface
     */
    apiCultureCustomizationBatchDataPreviewCompanyUidTemplateUidGet(companyUid: string, templateUid: string, culture: string, options?: any): AxiosPromise<Array<QrCodeItem>>;

    /**
     * 
     * @param {string} companyUid 
     * @param {string} templateUid 
     * @param {string} productUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomizationApiInterface
     */
    apiCultureCustomizationCompanyUidFieldsTemplateUidProductUidGet(companyUid: string, templateUid: string, productUid: string, culture: string, options?: any): AxiosPromise<Array<CustomizationField>>;

    /**
     * 
     * @param {string} companyUid 
     * @param {string} productUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomizationApiInterface
     */
    apiCultureCustomizationCompanyUidProductUidGet(companyUid: string, productUid: string, culture: string, options?: any): AxiosPromise<Array<CustomizationProperty>>;

    /**
     * 
     * @param {string} companyUid 
     * @param {string} templateUid 
     * @param {string} productUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomizationApiInterface
     */
    apiCultureCustomizationCompanyUidPropertiesTemplateUidProductUidGet(companyUid: string, templateUid: string, productUid: string, culture: string, options?: any): AxiosPromise<Array<CustomizationProperty>>;

    /**
     * 
     * @param {string} culture 
     * @param {CreateCustomizationCommand} [createCustomizationCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomizationApiInterface
     */
    apiCultureCustomizationPost(culture: string, createCustomizationCommand?: CreateCustomizationCommand, options?: any): AxiosPromise<CreateCustomizationCommand>;

}

/**
 * CustomizationApi - object-oriented interface
 * @export
 * @class CustomizationApi
 * @extends {BaseAPI}
 */
export class CustomizationApi extends BaseAPI implements CustomizationApiInterface {
    /**
     * 
     * @param {string} batchUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomizationApi
     */
    public apiCultureCustomizationBatchDataBatchUidGet(batchUid: string, culture: string, options?: any) {
        return CustomizationApiFp(this.configuration).apiCultureCustomizationBatchDataBatchUidGet(batchUid, culture, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} companyUid 
     * @param {string} templateUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomizationApi
     */
    public apiCultureCustomizationBatchDataPreviewCompanyUidTemplateUidGet(companyUid: string, templateUid: string, culture: string, options?: any) {
        return CustomizationApiFp(this.configuration).apiCultureCustomizationBatchDataPreviewCompanyUidTemplateUidGet(companyUid, templateUid, culture, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} companyUid 
     * @param {string} templateUid 
     * @param {string} productUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomizationApi
     */
    public apiCultureCustomizationCompanyUidFieldsTemplateUidProductUidGet(companyUid: string, templateUid: string, productUid: string, culture: string, options?: any) {
        return CustomizationApiFp(this.configuration).apiCultureCustomizationCompanyUidFieldsTemplateUidProductUidGet(companyUid, templateUid, productUid, culture, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} companyUid 
     * @param {string} productUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomizationApi
     */
    public apiCultureCustomizationCompanyUidProductUidGet(companyUid: string, productUid: string, culture: string, options?: any) {
        return CustomizationApiFp(this.configuration).apiCultureCustomizationCompanyUidProductUidGet(companyUid, productUid, culture, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} companyUid 
     * @param {string} templateUid 
     * @param {string} productUid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomizationApi
     */
    public apiCultureCustomizationCompanyUidPropertiesTemplateUidProductUidGet(companyUid: string, templateUid: string, productUid: string, culture: string, options?: any) {
        return CustomizationApiFp(this.configuration).apiCultureCustomizationCompanyUidPropertiesTemplateUidProductUidGet(companyUid, templateUid, productUid, culture, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} culture 
     * @param {CreateCustomizationCommand} [createCustomizationCommand] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomizationApi
     */
    public apiCultureCustomizationPost(culture: string, createCustomizationCommand?: CreateCustomizationCommand, options?: any) {
        return CustomizationApiFp(this.configuration).apiCultureCustomizationPost(culture, createCustomizationCommand, options).then((request) => request(this.axios, this.basePath));
    }
}
