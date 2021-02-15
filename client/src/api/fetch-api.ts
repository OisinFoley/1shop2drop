import { HTTPMethod } from 'http-method-enum';
import { Types } from '../shared';

/**
 * @description Wrapper class to reduce boilerplate when making network
 * requests via the FetchApi
 */
export class FetchApi {
  static token: string = '';
  /**
   * Makes a Http POST request, using the url and data arguments
   * as the request endpoint and body
   * @static
   */
  static async post(
    url: string = '',
    data: object
  ): Promise<Types.LoginResponse> {
    const options: RequestInit = FetchApi.buildFetchOptions({
      method: HTTPMethod.POST,
      body: data,
    });
    const response = await fetch(url, options);
    const resJson: Types.LoginResponse = await response.json();
    return resJson;
  }

  /**
   * @description Simple util to build the headers and body options to send with a Fetch API request
   * @todo Consider specifying a caching or referrer policy
   * @param {FetchOptions} params - params to override this functions default option settings
   * @returns {RequestInit} A RequestInit-type object, as defined by the FetchApi
   */
  private static buildFetchOptions = (params: FetchOptions): RequestInit => {
    const options: RequestInit = {
      method: params.method, // *GET, POST, PUT, DELETE, etc.
      headers: {},
    };
    if (params.method && params.method !== 'GET') {
      options.body = JSON.stringify(params.body);
    }
    FetchApi.buildFetchHeaders(options);
    return options;
  };

  /**
   * @description Simple util to build the headers to send with a Fetch API request
   * @param {RequestInit} options - RequestInit-type object, as it exists when this function
   * is called from within buildFetchOptions()
   * @returns {RequestInit} A RequestInit-type object, as defined by the FetchApi,
   * now with a populated headers object
   */
  private static buildFetchHeaders = (options: RequestInit): RequestInit => {
    options.headers = {
      'Content-Type': 'application/json',
    };
    if (localStorage.jwt) {
      options.headers['Authorization'] = `Bearer ${localStorage.jwt}`;
    }
    return options;
  };
}

/**
 * @description An abstraction of the FetchApi options we expect when building a request
 */
interface FetchOptions {
  method?: HTTPMethod;
  body?: object;
}
