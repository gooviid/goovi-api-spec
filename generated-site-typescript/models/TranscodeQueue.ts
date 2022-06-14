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
import {
    MediaInfo,
    MediaInfoFromJSON,
    MediaInfoFromJSONTyped,
    MediaInfoToJSON,
} from './MediaInfo';
import {
    SourceTranscode,
    SourceTranscodeFromJSON,
    SourceTranscodeFromJSONTyped,
    SourceTranscodeToJSON,
} from './SourceTranscode';
import {
    TranscodeError,
    TranscodeErrorFromJSON,
    TranscodeErrorFromJSONTyped,
    TranscodeErrorToJSON,
} from './TranscodeError';
import {
    TranscodeMeta,
    TranscodeMetaFromJSON,
    TranscodeMetaFromJSONTyped,
    TranscodeMetaToJSON,
} from './TranscodeMeta';

/**
 * 
 * @export
 * @interface TranscodeQueue
 */
export interface TranscodeQueue {
    /**
     * 
     * @type {string}
     * @memberof TranscodeQueue
     */
    queueId?: string;
    /**
     * 
     * @type {string}
     * @memberof TranscodeQueue
     */
    queueStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof TranscodeQueue
     */
    chargeStatus?: string;
    /**
     * 
     * @type {number}
     * @memberof TranscodeQueue
     */
    totalPrice?: number;
    /**
     * 
     * @type {Date}
     * @memberof TranscodeQueue
     */
    createdAt?: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof TranscodeQueue
     */
    resolutionTarget?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof TranscodeQueue
     */
    fileTarget?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof TranscodeQueue
     */
    requestDuration?: number;
    /**
     * 
     * @type {SourceTranscode}
     * @memberof TranscodeQueue
     */
    source?: SourceTranscode;
    /**
     * 
     * @type {SourceTranscode}
     * @memberof TranscodeQueue
     */
    destination?: SourceTranscode;
    /**
     * 
     * @type {Array<BillingDetail>}
     * @memberof TranscodeQueue
     */
    billingDetail?: Array<BillingDetail>;
    /**
     * 
     * @type {MediaInfo}
     * @memberof TranscodeQueue
     */
    media?: MediaInfo;
    /**
     * 
     * @type {TranscodeMeta}
     * @memberof TranscodeQueue
     */
    transcodeMeta?: TranscodeMeta | null;
    /**
     * 
     * @type {TranscodeError}
     * @memberof TranscodeQueue
     */
    error?: TranscodeError | null;
}

export function TranscodeQueueFromJSON(json: any): TranscodeQueue {
    return TranscodeQueueFromJSONTyped(json, false);
}

export function TranscodeQueueFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranscodeQueue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'queueId': !exists(json, 'queue_id') ? undefined : json['queue_id'],
        'queueStatus': !exists(json, 'queue_status') ? undefined : json['queue_status'],
        'chargeStatus': !exists(json, 'charge_status') ? undefined : json['charge_status'],
        'totalPrice': !exists(json, 'total_price') ? undefined : json['total_price'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'resolutionTarget': !exists(json, 'resolution_target') ? undefined : json['resolution_target'],
        'fileTarget': !exists(json, 'file_target') ? undefined : json['file_target'],
        'requestDuration': !exists(json, 'request_duration') ? undefined : json['request_duration'],
        'source': !exists(json, 'source') ? undefined : SourceTranscodeFromJSON(json['source']),
        'destination': !exists(json, 'destination') ? undefined : SourceTranscodeFromJSON(json['destination']),
        'billingDetail': !exists(json, 'billing_detail') ? undefined : ((json['billing_detail'] as Array<any>).map(BillingDetailFromJSON)),
        'media': !exists(json, 'media') ? undefined : MediaInfoFromJSON(json['media']),
        'transcodeMeta': !exists(json, 'transcode_meta') ? undefined : TranscodeMetaFromJSON(json['transcode_meta']),
        'error': !exists(json, 'error') ? undefined : TranscodeErrorFromJSON(json['error']),
    };
}

export function TranscodeQueueToJSON(value?: TranscodeQueue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'queue_id': value.queueId,
        'queue_status': value.queueStatus,
        'charge_status': value.chargeStatus,
        'total_price': value.totalPrice,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'resolution_target': value.resolutionTarget,
        'file_target': value.fileTarget,
        'request_duration': value.requestDuration,
        'source': SourceTranscodeToJSON(value.source),
        'destination': SourceTranscodeToJSON(value.destination),
        'billing_detail': value.billingDetail === undefined ? undefined : ((value.billingDetail as Array<any>).map(BillingDetailToJSON)),
        'media': MediaInfoToJSON(value.media),
        'transcode_meta': TranscodeMetaToJSON(value.transcodeMeta),
        'error': TranscodeErrorToJSON(value.error),
    };
}

