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
 * @interface ChangePasswordCommand
 */
export interface ChangePasswordCommand {
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordCommand
     */
    uid?: string;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordCommand
     */
    oldPassword?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ChangePasswordCommand
     */
    newPassword?: string | null;
}

