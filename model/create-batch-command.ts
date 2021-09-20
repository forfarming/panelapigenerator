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



/**
 * 
 * @export
 * @interface CreateBatchCommand
 */
export interface CreateBatchCommand {
    /**
     * 
     * @type {string}
     * @memberof CreateBatchCommand
     */
    uid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateBatchCommand
     */
    supplierUid?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateBatchCommand
     */
    productionUid?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateBatchCommand
     */
    harvestDate?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateBatchCommand
     */
    quantityInKgs?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateBatchCommand
     */
    quantityInCrates?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CreateBatchCommand
     */
    customerUid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateBatchCommand
     */
    templateUid?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateBatchCommand
     */
    packagingDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateBatchCommand
     */
    expirationDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateBatchCommand
     */
    commercialProductName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateBatchCommand
     */
    name?: string | null;
}

