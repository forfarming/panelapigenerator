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
 * @interface CustomDataDefinitionItem
 */
export interface CustomDataDefinitionItem {
    /**
     * 
     * @type {string}
     * @memberof CustomDataDefinitionItem
     */
    uid?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataDefinitionItem
     */
    createdOn?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomDataDefinitionItem
     */
    lastUpdatedOn?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataDefinitionItem
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomDataDefinitionItem
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomDataDefinitionItem
     */
    deletedOn?: string | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof CustomDataDefinitionItem
     */
    domainEvents?: Array<object> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomDataDefinitionItem
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CustomDataDefinitionItem
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomDataDefinitionItem
     */
    description?: string | null;
}


