/* tslint:disable */
/* eslint-disable */
/**
 * GOOVE
 * GOOVI API Design Spec
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
 * @interface AudioInfo
 */
export interface AudioInfo {
    /**
     * 
     * @type {string}
     * @memberof AudioInfo
     */
    bitrate?: string;
    /**
     * 
     * @type {string}
     * @memberof AudioInfo
     */
    frequency?: string;
    /**
     * 
     * @type {string}
     * @memberof AudioInfo
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof AudioInfo
     */
    channelNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof AudioInfo
     */
    channelName?: string;
    /**
     * 
     * @type {number}
     * @memberof AudioInfo
     */
    duration?: number;
    /**
     * 
     * @type {number}
     * @memberof AudioInfo
     */
    audioChannel?: number;
}

export function AudioInfoFromJSON(json: any): AudioInfo {
    return AudioInfoFromJSONTyped(json, false);
}

export function AudioInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AudioInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bitrate': !exists(json, 'bitrate') ? undefined : json['bitrate'],
        'frequency': !exists(json, 'frequency') ? undefined : json['frequency'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'channelNumber': !exists(json, 'channel_number') ? undefined : json['channel_number'],
        'channelName': !exists(json, 'channel_name') ? undefined : json['channel_name'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'audioChannel': !exists(json, 'audio_channel') ? undefined : json['audio_channel'],
    };
}

export function AudioInfoToJSON(value?: AudioInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bitrate': value.bitrate,
        'frequency': value.frequency,
        'type': value.type,
        'channel_number': value.channelNumber,
        'channel_name': value.channelName,
        'duration': value.duration,
        'audio_channel': value.audioChannel,
    };
}

