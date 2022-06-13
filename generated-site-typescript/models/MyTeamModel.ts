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
    TeamSnippet,
    TeamSnippetFromJSON,
    TeamSnippetFromJSONTyped,
    TeamSnippetToJSON,
} from './TeamSnippet';

/**
 * 
 * @export
 * @interface MyTeamModel
 */
export interface MyTeamModel {
    /**
     * 
     * @type {TeamSnippet}
     * @memberof MyTeamModel
     */
    team?: TeamSnippet;
    /**
     * 
     * @type {boolean}
     * @memberof MyTeamModel
     */
    approved?: boolean;
}

export function MyTeamModelFromJSON(json: any): MyTeamModel {
    return MyTeamModelFromJSONTyped(json, false);
}

export function MyTeamModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): MyTeamModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'team': !exists(json, 'team') ? undefined : TeamSnippetFromJSON(json['team']),
        'approved': !exists(json, 'approved') ? undefined : json['approved'],
    };
}

export function MyTeamModelToJSON(value?: MyTeamModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'team': TeamSnippetToJSON(value.team),
        'approved': value.approved,
    };
}

