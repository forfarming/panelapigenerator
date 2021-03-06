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
import { MenuItem } from '../model';
// @ts-ignore
import { ProblemDetails } from '../model';
/**
 * MenuApi - axios parameter creator
 * @export
 */
export const MenuApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureMenuGet: async (culture: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureMenuGet', 'culture', culture)
            const localVarPath = `/api/{culture}/Menu`
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
         * @param {MenuItem} [menuItem] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureMenuPost: async (culture: string, menuItem?: MenuItem, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureMenuPost', 'culture', culture)
            const localVarPath = `/api/{culture}/Menu`
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
            localVarRequestOptions.data = serializeDataIfNeeded(menuItem, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} culture 
         * @param {string} [uid] 
         * @param {MenuItem} [menuItem] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureMenuPut: async (culture: string, uid?: string, menuItem?: MenuItem, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureMenuPut', 'culture', culture)
            const localVarPath = `/api/{culture}/Menu`
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

            if (uid !== undefined) {
                localVarQueryParameter['uid'] = uid;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(menuItem, localVarRequestOptions, configuration)

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
        apiCultureMenuUidGet: async (uid: string, culture: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'uid' is not null or undefined
            assertParamExists('apiCultureMenuUidGet', 'uid', uid)
            // verify required parameter 'culture' is not null or undefined
            assertParamExists('apiCultureMenuUidGet', 'culture', culture)
            const localVarPath = `/api/{culture}/Menu/{uid}`
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
 * MenuApi - functional programming interface
 * @export
 */
export const MenuApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MenuApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureMenuGet(culture: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureMenuGet(culture, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} culture 
         * @param {MenuItem} [menuItem] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureMenuPost(culture: string, menuItem?: MenuItem, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureMenuPost(culture, menuItem, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} culture 
         * @param {string} [uid] 
         * @param {MenuItem} [menuItem] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureMenuPut(culture: string, uid?: string, menuItem?: MenuItem, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureMenuPut(culture, uid, menuItem, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {string} uid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCultureMenuUidGet(uid: string, culture: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.apiCultureMenuUidGet(uid, culture, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MenuApi - factory interface
 * @export
 */
export const MenuApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MenuApiFp(configuration)
    return {
        /**
         * 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureMenuGet(culture: string, options?: any): AxiosPromise<void> {
            return localVarFp.apiCultureMenuGet(culture, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} culture 
         * @param {MenuItem} [menuItem] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureMenuPost(culture: string, menuItem?: MenuItem, options?: any): AxiosPromise<void> {
            return localVarFp.apiCultureMenuPost(culture, menuItem, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} culture 
         * @param {string} [uid] 
         * @param {MenuItem} [menuItem] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureMenuPut(culture: string, uid?: string, menuItem?: MenuItem, options?: any): AxiosPromise<void> {
            return localVarFp.apiCultureMenuPut(culture, uid, menuItem, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} uid 
         * @param {string} culture 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCultureMenuUidGet(uid: string, culture: string, options?: any): AxiosPromise<void> {
            return localVarFp.apiCultureMenuUidGet(uid, culture, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MenuApi - interface
 * @export
 * @interface MenuApi
 */
export interface MenuApiInterface {
    /**
     * 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuApiInterface
     */
    apiCultureMenuGet(culture: string, options?: any): AxiosPromise<void>;

    /**
     * 
     * @param {string} culture 
     * @param {MenuItem} [menuItem] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuApiInterface
     */
    apiCultureMenuPost(culture: string, menuItem?: MenuItem, options?: any): AxiosPromise<void>;

    /**
     * 
     * @param {string} culture 
     * @param {string} [uid] 
     * @param {MenuItem} [menuItem] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuApiInterface
     */
    apiCultureMenuPut(culture: string, uid?: string, menuItem?: MenuItem, options?: any): AxiosPromise<void>;

    /**
     * 
     * @param {string} uid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuApiInterface
     */
    apiCultureMenuUidGet(uid: string, culture: string, options?: any): AxiosPromise<void>;

}

/**
 * MenuApi - object-oriented interface
 * @export
 * @class MenuApi
 * @extends {BaseAPI}
 */
export class MenuApi extends BaseAPI implements MenuApiInterface {
    /**
     * 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuApi
     */
    public apiCultureMenuGet(culture: string, options?: any) {
        return MenuApiFp(this.configuration).apiCultureMenuGet(culture, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} culture 
     * @param {MenuItem} [menuItem] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuApi
     */
    public apiCultureMenuPost(culture: string, menuItem?: MenuItem, options?: any) {
        return MenuApiFp(this.configuration).apiCultureMenuPost(culture, menuItem, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} culture 
     * @param {string} [uid] 
     * @param {MenuItem} [menuItem] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuApi
     */
    public apiCultureMenuPut(culture: string, uid?: string, menuItem?: MenuItem, options?: any) {
        return MenuApiFp(this.configuration).apiCultureMenuPut(culture, uid, menuItem, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} uid 
     * @param {string} culture 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MenuApi
     */
    public apiCultureMenuUidGet(uid: string, culture: string, options?: any) {
        return MenuApiFp(this.configuration).apiCultureMenuUidGet(uid, culture, options).then((request) => request(this.axios, this.basePath));
    }
}
