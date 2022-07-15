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


import * as runtime from '../runtime';
import type {
  LoginResponse,
  SocialLoginReq,
} from '../models';
import {
    LoginResponseFromJSON,
    LoginResponseToJSON,
    SocialLoginReqFromJSON,
    SocialLoginReqToJSON,
} from '../models';

export interface AuthGooglePostRequest {
    socialLoginReq?: SocialLoginReq;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     * Make google login
     */
    async authGooglePostRaw(requestParameters: AuthGooglePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<LoginResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/auth/google`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SocialLoginReqToJSON(requestParameters.socialLoginReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => LoginResponseFromJSON(jsonValue));
    }

    /**
     * Make google login
     */
    async authGooglePost(requestParameters: AuthGooglePostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<LoginResponse> {
        const response = await this.authGooglePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Logout
     */
    async authLogoutPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = this.configuration.apiKey("token"); // Refresh authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["token"] = this.configuration.apiKey("token"); // Token authentication
        }

        const response = await this.request({
            path: `/auth/logout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Logout
     */
    async authLogoutPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.authLogoutPostRaw(initOverrides);
    }

}
