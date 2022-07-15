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
 * @interface Keys
 */
export interface Keys {
    /**
     * 
     * @type {string}
     * @memberof Keys
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Keys
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Keys
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof Keys
     */
    keyView?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Keys
     */
    capabilities?: Array<string>;
}

/**
 * Check if a given object implements the Keys interface.
 */
export function instanceOfKeys(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KeysFromJSON(json: any): Keys {
    return KeysFromJSONTyped(json, false);
}

export function KeysFromJSONTyped(json: any, ignoreDiscriminator: boolean): Keys {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'key': !exists(json, 'key') ? undefined : json['key'],
        'keyView': !exists(json, 'key_view') ? undefined : json['key_view'],
        'capabilities': !exists(json, 'capabilities') ? undefined : json['capabilities'],
    };
}

export function KeysToJSON(value?: Keys | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'key': value.key,
        'key_view': value.keyView,
        'capabilities': value.capabilities,
    };
}

