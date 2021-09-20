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


import { CompanyCertificate } from './company-certificate';
import { CompanyFacilityPhoto } from './company-facility-photo';
import { CompanyType } from './company-type';
import { EnvironmentData } from './environment-data';
import { Product } from './product';

/**
 * 
 * @export
 * @interface Company
 */
export interface Company {
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    uid?: string;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    createdOn?: string;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    lastUpdatedOn?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Company
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Company
     */
    isDeleted?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    deletedOn?: string | null;
    /**
     * 
     * @type {Array<object>}
     * @memberof Company
     */
    domainEvents?: Array<object> | null;
    /**
     * 
     * @type {number}
     * @memberof Company
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    logo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    title?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    description?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Company
     */
    contactId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Company
     */
    sizeInSquareMeters?: number | null;
    /**
     * 
     * @type {CompanyType}
     * @memberof Company
     */
    companyType?: CompanyType;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    photo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    video?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    website?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    facebook?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    instagram?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    linkedin?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    twitter?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    youtube?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    producerName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    producerTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    producerDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    producerEmail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    producerPhone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    producerPhoto?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    producerAddress?: string | null;
    /**
     * 
     * @type {Array<Product>}
     * @memberof Company
     */
    products?: Array<Product> | null;
    /**
     * 
     * @type {Array<CompanyFacilityPhoto>}
     * @memberof Company
     */
    facilityPhotos?: Array<CompanyFacilityPhoto> | null;
    /**
     * 
     * @type {Array<CompanyCertificate>}
     * @memberof Company
     */
    certificates?: Array<CompanyCertificate> | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    code?: string | null;
    /**
     * 
     * @type {Array<EnvironmentData>}
     * @memberof Company
     */
    environmentData?: Array<EnvironmentData> | null;
    /**
     * 
     * @type {number}
     * @memberof Company
     */
    parentCompanyId?: number | null;
}

