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


import { Batch } from './batch';
import { BatchDataModel } from './batch-data-model';
import { ProductionModel } from './production-model';

/**
 * 
 * @export
 * @interface BatchModel
 */
export interface BatchModel {
    /**
     * 
     * @type {string}
     * @memberof BatchModel
     */
    uid?: string | null;
    /**
     * 
     * @type {Batch}
     * @memberof BatchModel
     */
    batch?: Batch;
    /**
     * 
     * @type {Array<BatchDataModel>}
     * @memberof BatchModel
     */
    batchData?: Array<BatchDataModel> | null;
    /**
     * 
     * @type {ProductionModel}
     * @memberof BatchModel
     */
    production?: ProductionModel;
    /**
     * 
     * @type {string}
     * @memberof BatchModel
     */
    qrcodeUrl?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchModel
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchModel
     */
    templateUid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchModel
     */
    supplierUid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchModel
     */
    customerUid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BatchModel
     */
    analysisReport?: string | null;
}


