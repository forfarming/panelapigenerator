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


import { BatchDataItemModel } from './batch-data-item-model';

/**
 * 
 * @export
 * @interface BatchDataModel
 */
export interface BatchDataModel {
    /**
     * 
     * @type {string}
     * @memberof BatchDataModel
     */
    uid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchDataModel
     */
    batchMetadataUid?: string;
    /**
     * 
     * @type {string}
     * @memberof BatchDataModel
     */
    placeholder?: string | null;
    /**
     * 
     * @type {Array<BatchDataItemModel>}
     * @memberof BatchDataModel
     */
    items?: Array<BatchDataItemModel> | null;
    /**
     * 
     * @type {string}
     * @memberof BatchDataModel
     */
    code?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchDataModel
     */
    createdOn?: string;
    /**
     * 
     * @type {string}
     * @memberof BatchDataModel
     */
    information?: string | null;
}


