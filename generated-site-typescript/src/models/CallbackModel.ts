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
import type { MediaInfo } from './MediaInfo';
import {
    MediaInfoFromJSON,
    MediaInfoFromJSONTyped,
    MediaInfoToJSON,
} from './MediaInfo';
import type { TranscodeError } from './TranscodeError';
import {
    TranscodeErrorFromJSON,
    TranscodeErrorFromJSONTyped,
    TranscodeErrorToJSON,
} from './TranscodeError';

/**
 * 
 * @export
 * @interface CallbackModel
 */
export interface CallbackModel {
    /**
     * 
     * @type {boolean}
     * @memberof CallbackModel
     */
    isSuccess?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CallbackModel
     */
    queueId?: string;
    /**
     * 
     * @type {TranscodeError}
     * @memberof CallbackModel
     */
    error?: TranscodeError | null;
    /**
     * 
     * @type {Array<MediaInfo>}
     * @memberof CallbackModel
     */
    media?: Array<MediaInfo> | null;
}

/**
 * Check if a given object implements the CallbackModel interface.
 */
export function instanceOfCallbackModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CallbackModelFromJSON(json: any): CallbackModel {
    return CallbackModelFromJSONTyped(json, false);
}

export function CallbackModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallbackModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isSuccess': !exists(json, 'is_success') ? undefined : json['is_success'],
        'queueId': !exists(json, 'queue_id') ? undefined : json['queue_id'],
        'error': !exists(json, 'error') ? undefined : TranscodeErrorFromJSON(json['error']),
        'media': !exists(json, 'media') ? undefined : (json['media'] === null ? null : (json['media'] as Array<any>).map(MediaInfoFromJSON)),
    };
}

export function CallbackModelToJSON(value?: CallbackModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_success': value.isSuccess,
        'queue_id': value.queueId,
        'error': TranscodeErrorToJSON(value.error),
        'media': value.media === undefined ? undefined : (value.media === null ? null : (value.media as Array<any>).map(MediaInfoToJSON)),
    };
}

