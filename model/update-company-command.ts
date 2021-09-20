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


import { CompanyType } from './company-type';

/**
 * 
 * @export
 * @interface UpdateCompanyCommand
 */
export interface UpdateCompanyCommand {
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    uid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    logo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof UpdateCompanyCommand
     */
    sizeInSquareMeters?: number;
    /**
     * 
     * @type {CompanyType}
     * @memberof UpdateCompanyCommand
     */
    companyType?: CompanyType;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    photo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    website?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    facebook?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    instagram?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    linkedin?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    twitter?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    youtube?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    producerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    producerTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    producerDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    producerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    producerPhone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    producerPhoto?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateCompanyCommand
     */
    producerAddress?: string | null;
}

