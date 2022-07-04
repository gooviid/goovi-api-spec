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
 * @interface SourceTranscode
 */
export interface SourceTranscode {
    /**
     * 
     * @type {string}
     * @memberof SourceTranscode
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceTranscode
     */
    accessKeyId?: string;
    /**
     * 
     * @type {string}
     * @memberof SourceTranscode
     */
    accessKeySecret?: string;
}

export function SourceTranscodeFromJSON(json: any): SourceTranscode {
    return SourceTranscodeFromJSONTyped(json, false);
}

export function SourceTranscodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceTranscode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
        'accessKeyId': !exists(json, 'access_key_id') ? undefined : json['access_key_id'],
        'accessKeySecret': !exists(json, 'access_key_secret') ? undefined : json['access_key_secret'],
    };
}

export function SourceTranscodeToJSON(value?: SourceTranscode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'access_key_id': value.accessKeyId,
        'access_key_secret': value.accessKeySecret,
    };
}

