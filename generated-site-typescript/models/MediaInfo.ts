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
    AdaptiveStreamingInfo,
    AdaptiveStreamingInfoFromJSON,
    AdaptiveStreamingInfoFromJSONTyped,
    AdaptiveStreamingInfoToJSON,
} from './AdaptiveStreamingInfo';
import {
    AudioInfo,
    AudioInfoFromJSON,
    AudioInfoFromJSONTyped,
    AudioInfoToJSON,
} from './AudioInfo';
import {
    ImageInfo,
    ImageInfoFromJSON,
    ImageInfoFromJSONTyped,
    ImageInfoToJSON,
} from './ImageInfo';
import {
    VideoInfo,
    VideoInfoFromJSON,
    VideoInfoFromJSONTyped,
    VideoInfoToJSON,
} from './VideoInfo';

/**
 * 
 * @export
 * @interface MediaInfo
 */
export interface MediaInfo {
    /**
     * 
     * @type {Date}
     * @memberof MediaInfo
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof MediaInfo
     */
    mime?: string;
    /**
     * 
     * @type {number}
     * @memberof MediaInfo
     */
    size?: number;
    /**
     * 
     * @type {string}
     * @memberof MediaInfo
     */
    sizeHuman?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaInfo
     */
    remoteUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof MediaInfo
     */
    remoteRelativeUrl?: string;
    /**
     * 
     * @type {VideoInfo}
     * @memberof MediaInfo
     */
    video?: VideoInfo | null;
    /**
     * 
     * @type {AudioInfo}
     * @memberof MediaInfo
     */
    audio?: AudioInfo | null;
    /**
     * 
     * @type {ImageInfo}
     * @memberof MediaInfo
     */
    image?: ImageInfo | null;
    /**
     * 
     * @type {AdaptiveStreamingInfo}
     * @memberof MediaInfo
     */
    adaptiveStreaming?: AdaptiveStreamingInfo | null;
}

export function MediaInfoFromJSON(json: any): MediaInfo {
    return MediaInfoFromJSONTyped(json, false);
}

export function MediaInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'mime': !exists(json, 'mime') ? undefined : json['mime'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'sizeHuman': !exists(json, 'size_human') ? undefined : json['size_human'],
        'remoteUrl': !exists(json, 'remote_url') ? undefined : json['remote_url'],
        'remoteRelativeUrl': !exists(json, 'remote_relative_url') ? undefined : json['remote_relative_url'],
        'video': !exists(json, 'video') ? undefined : VideoInfoFromJSON(json['video']),
        'audio': !exists(json, 'audio') ? undefined : AudioInfoFromJSON(json['audio']),
        'image': !exists(json, 'image') ? undefined : ImageInfoFromJSON(json['image']),
        'adaptiveStreaming': !exists(json, 'adaptive_streaming') ? undefined : AdaptiveStreamingInfoFromJSON(json['adaptive_streaming']),
    };
}

export function MediaInfoToJSON(value?: MediaInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'mime': value.mime,
        'size': value.size,
        'size_human': value.sizeHuman,
        'remote_url': value.remoteUrl,
        'remote_relative_url': value.remoteRelativeUrl,
        'video': VideoInfoToJSON(value.video),
        'audio': AudioInfoToJSON(value.audio),
        'image': ImageInfoToJSON(value.image),
        'adaptive_streaming': AdaptiveStreamingInfoToJSON(value.adaptiveStreaming),
    };
}

