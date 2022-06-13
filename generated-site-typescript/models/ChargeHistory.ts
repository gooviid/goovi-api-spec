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
import {
    BillingDetail,
    BillingDetailFromJSON,
    BillingDetailFromJSONTyped,
    BillingDetailToJSON,
} from './BillingDetail';

/**
 * 
 * @export
 * @interface ChargeHistory
 */
export interface ChargeHistory {
    /**
     * 
     * @type {number}
     * @memberof ChargeHistory
     */
    totalSent?: number;
    /**
     * 
     * @type {string}
     * @memberof ChargeHistory
     */
    chargeID?: string;
    /**
     * 
     * @type {number}
     * @memberof ChargeHistory
     */
    totalAmount?: number;
    /**
     * 
     * @type {Array<BillingDetail>}
     * @memberof ChargeHistory
     */
    detail?: Array<BillingDetail>;
    /**
     * 
     * @type {Date}
     * @memberof ChargeHistory
     */
    till?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ChargeHistory
     */
    from?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ChargeHistory
     */
    createdAt?: Date;
}

export function ChargeHistoryFromJSON(json: any): ChargeHistory {
    return ChargeHistoryFromJSONTyped(json, false);
}

export function ChargeHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeHistory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'totalSent': !exists(json, 'total_sent') ? undefined : json['total_sent'],
        'chargeID': !exists(json, 'chargeID') ? undefined : json['chargeID'],
        'totalAmount': !exists(json, 'total_amount') ? undefined : json['total_amount'],
        'detail': !exists(json, 'detail') ? undefined : ((json['detail'] as Array<any>).map(BillingDetailFromJSON)),
        'till': !exists(json, 'till') ? undefined : (new Date(json['till'])),
        'from': !exists(json, 'from') ? undefined : (new Date(json['from'])),
        'createdAt': !exists(json, 'createdAt') ? undefined : (new Date(json['createdAt'])),
    };
}

export function ChargeHistoryToJSON(value?: ChargeHistory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total_sent': value.totalSent,
        'chargeID': value.chargeID,
        'total_amount': value.totalAmount,
        'detail': value.detail === undefined ? undefined : ((value.detail as Array<any>).map(BillingDetailToJSON)),
        'till': value.till === undefined ? undefined : (value.till.toISOString()),
        'from': value.from === undefined ? undefined : (value.from.toISOString()),
        'createdAt': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}
