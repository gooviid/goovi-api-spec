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
 * @interface AdaptiveStreamingInfo
 */
export interface AdaptiveStreamingInfo {
    /**
     * 
     * @type {string}
     * @memberof AdaptiveStreamingInfo
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof AdaptiveStreamingInfo
     */
    fileType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AdaptiveStreamingInfo
     */
    isVideo?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AdaptiveStreamingInfo
     */
    displayAspectRatio?: string | null;
    /**
     * 
     * @type {number}
     * @memberof AdaptiveStreamingInfo
     */
    aspectRatio?: number | null;
    /**
     * 
     * @type {number}
     * @memberof AdaptiveStreamingInfo
     */
    duration?: number;
    /**
     * 
     * @type {number}
     * @memberof AdaptiveStreamingInfo
     */
    fps?: number | null;
}

/**
 * Check if a given object implements the AdaptiveStreamingInfo interface.
 */
export function instanceOfAdaptiveStreamingInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AdaptiveStreamingInfoFromJSON(json: any): AdaptiveStreamingInfo {
    return AdaptiveStreamingInfoFromJSONTyped(json, false);
}

export function AdaptiveStreamingInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdaptiveStreamingInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'fileType': !exists(json, 'file_type') ? undefined : json['file_type'],
        'isVideo': !exists(json, 'is_video') ? undefined : json['is_video'],
        'displayAspectRatio': !exists(json, 'display_aspect_ratio') ? undefined : json['display_aspect_ratio'],
        'aspectRatio': !exists(json, 'aspect_ratio') ? undefined : json['aspect_ratio'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'fps': !exists(json, 'fps') ? undefined : json['fps'],
    };
}

export function AdaptiveStreamingInfoToJSON(value?: AdaptiveStreamingInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'file_type': value.fileType,
        'is_video': value.isVideo,
        'display_aspect_ratio': value.displayAspectRatio,
        'aspect_ratio': value.aspectRatio,
        'duration': value.duration,
        'fps': value.fps,
    };
}

