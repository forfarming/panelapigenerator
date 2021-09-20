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


import { BatchDataItem } from './batch-data-item';

/**
 * 
 * @export
 * @interface BatchData
 */
export interface BatchData {
    /**
     * 
     * @type {number}
     * @memberof BatchData
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof BatchData
     */
    uid?: string;
    /**
     * 
     * @type {string}
     * @memberof BatchData
     */
    createdOn?: string;
    /**
     * 
     * @type {string}
     * @memberof BatchData
     */
    lastUpdatedOn?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BatchData
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BatchData
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BatchData
     */
    deletedOn?: string | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof BatchData
     */
    domainEvents?: Array<object> | null;
    /**
     * 
     * @type {number}
     * @memberof BatchData
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof BatchData
     */
    productionId?: number;
    /**
     * 
     * @type {number}
     * @memberof BatchData
     */
    batchId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BatchData
     */
    batchMetadataId?: number;
    /**
     * 
     * @type {Array<BatchDataItem>}
     * @memberof BatchData
     */
    items?: Array<BatchDataItem> | null;
}

