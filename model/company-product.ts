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
 * @interface CompanyProduct
 */
export interface CompanyProduct {
    /**
     * 
     * @type {string}
     * @memberof CompanyProduct
     */
    uid?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyProduct
     */
    createdOn?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyProduct
     */
    lastUpdatedOn?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyProduct
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyProduct
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CompanyProduct
     */
    deletedOn?: string | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof CompanyProduct
     */
    domainEvents?: Array<object> | null;
    /**
     * 
     * @type {number}
     * @memberof CompanyProduct
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyProduct
     */
    companyId?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyProduct
     */
    productId?: number;
    /**
     * 
     * @type {number}
     * @memberof CompanyProduct
     */
    capacity?: number;
}

