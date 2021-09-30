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


import { CustomDataItem } from './custom-data-item';

/**
 * 
 * @export
 * @interface CustomData
 */
export interface CustomData {
    /**
     * 
     * @type {string}
     * @memberof CustomData
     */
    uid?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomData
     */
    createdOn?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomData
     */
    lastUpdatedOn?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomData
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomData
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomData
     */
    deletedOn?: string | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof CustomData
     */
    domainEvents?: Array<object> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomData
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomData
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomData
     */
    customDataDefinitionId?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomData
     */
    text?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CustomData
     */
    productionId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CustomData
     */
    batchId?: number | null;
    /**
     * 
     * @type {Array<CustomDataItem>}
     * @memberof CustomData
     */
    items?: Array<CustomDataItem> | null;
}

