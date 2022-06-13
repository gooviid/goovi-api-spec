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
    sentTotal?: number;
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

export function BillingDetailFromJSON(json: any): BillingDetail {
    return BillingDetailFromJSONTyped(json, false);
}

export function BillingDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sentTotal': !exists(json, 'sent_total') ? undefined : json['sent_total'],
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
        
        'sent_total': value.sentTotal,
        'method': value.method,
        'total': value.total,
        'price': value.price,
    };
}
