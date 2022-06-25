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
    SourceTranscode,
    SourceTranscodeFromJSON,
    SourceTranscodeFromJSONTyped,
    SourceTranscodeToJSON,
} from './SourceTranscode';

/**
 * 
 * @export
 * @interface CreateTranscode
 */
export interface CreateTranscode {
    /**
     * 
     * @type {string}
     * @memberof CreateTranscode
     */
    merchantGivenId?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateTranscode
     */
    resolutionTarget?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateTranscode
     */
    fileTarget?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateTranscode
     */
    callbackUrl?: string | null;
    /**
     * Mute Video
     * @type {boolean}
     * @memberof CreateTranscode
     */
    mute?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreateTranscode
     */
    durationInSecond?: number | null;
    /**
     * 
     * @type {SourceTranscode}
     * @memberof CreateTranscode
     */
    source?: SourceTranscode;
    /**
     * 
     * @type {SourceTranscode}
     * @memberof CreateTranscode
     */
    destination?: SourceTranscode;
}

export function CreateTranscodeFromJSON(json: any): CreateTranscode {
    return CreateTranscodeFromJSONTyped(json, false);
}

export function CreateTranscodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTranscode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'merchantGivenId': !exists(json, 'merchant_given_id') ? undefined : json['merchant_given_id'],
        'resolutionTarget': !exists(json, 'resolution_target') ? undefined : json['resolution_target'],
        'fileTarget': !exists(json, 'file_target') ? undefined : json['file_target'],
        'callbackUrl': !exists(json, 'callback_url') ? undefined : json['callback_url'],
        'mute': !exists(json, 'mute') ? undefined : json['mute'],
        'durationInSecond': !exists(json, 'duration_in_second') ? undefined : json['duration_in_second'],
        'source': !exists(json, 'source') ? undefined : SourceTranscodeFromJSON(json['source']),
        'destination': !exists(json, 'destination') ? undefined : SourceTranscodeFromJSON(json['destination']),
    };
}

export function CreateTranscodeToJSON(value?: CreateTranscode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'merchant_given_id': value.merchantGivenId,
        'resolution_target': value.resolutionTarget,
        'file_target': value.fileTarget,
        'callback_url': value.callbackUrl,
        'mute': value.mute,
        'duration_in_second': value.durationInSecond,
        'source': SourceTranscodeToJSON(value.source),
        'destination': SourceTranscodeToJSON(value.destination),
    };
}

