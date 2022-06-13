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
 * @interface MyBilling
 */
export interface MyBilling {
    /**
     * 
     * @type {number}
     * @memberof MyBilling
     */
    credit?: number;
    /**
     * 
     * @type {number}
     * @memberof MyBilling
     */
    depositTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof MyBilling
     */
    expenseTotal?: number;
    /**
     * 
     * @type {Array<BillingDetail>}
     * @memberof MyBilling
     */
    expenseDetail?: Array<BillingDetail>;
    /**
     * 
     * @type {Date}
     * @memberof MyBilling
     */
    lastUpdate?: Date;
}

export function MyBillingFromJSON(json: any): MyBilling {
    return MyBillingFromJSONTyped(json, false);
}

export function MyBillingFromJSONTyped(json: any, ignoreDiscriminator: boolean): MyBilling {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'credit': !exists(json, 'credit') ? undefined : json['credit'],
        'depositTotal': !exists(json, 'deposit_total') ? undefined : json['deposit_total'],
        'expenseTotal': !exists(json, 'expense_total') ? undefined : json['expense_total'],
        'expenseDetail': !exists(json, 'expense_detail') ? undefined : ((json['expense_detail'] as Array<any>).map(BillingDetailFromJSON)),
        'lastUpdate': !exists(json, 'last_update') ? undefined : (new Date(json['last_update'])),
    };
}

export function MyBillingToJSON(value?: MyBilling | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'credit': value.credit,
        'deposit_total': value.depositTotal,
        'expense_total': value.expenseTotal,
        'expense_detail': value.expenseDetail === undefined ? undefined : ((value.expenseDetail as Array<any>).map(BillingDetailToJSON)),
        'last_update': value.lastUpdate === undefined ? undefined : (value.lastUpdate.toISOString()),
    };
}

