/* tslint:disable */
/* eslint-disable */
/**
 * Goovi ID
 * GOOVI ID Website spec
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BillingDetail
 */
export interface BillingDetail {
    /**
     * 
     * @type {number}
     * @memberof BillingDetail
     */
    qty?: number;
    /**
     * 
     * @type {string}
     * @memberof BillingDetail
     */
    method?: string;
    /**
     * 
     * @type {number}
     * @memberof BillingDetail
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof BillingDetail
     */
    price?: number;
}

/**
 * Check if a given object implements the BillingDetail interface.
 */
export function instanceOfBillingDetail(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BillingDetailFromJSON(json: any): BillingDetail {
    return BillingDetailFromJSONTyped(json, false);
}

export function BillingDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'qty': !exists(json, 'qty') ? undefined : json['qty'],
        'method': !exists(json, 'method') ? undefined : json['method'],
        'total': !exists(json, 'total') ? undefined : json['total'],
        'price': !exists(json, 'price') ? undefined : json['price'],
    };
}

export function BillingDetailToJSON(value?: BillingDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'qty': value.qty,
        'method': value.method,
        'total': value.total,
        'price': value.price,
    };
}

