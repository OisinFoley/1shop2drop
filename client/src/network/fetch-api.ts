import { JWT_TOKEN_IDENTIFIER } from '../util/constants';
import { HTTPMethod } from 'http-method-enum';
import { LoginResponse } from '../types/app.types';

/**
 * @description An abstraction of the FetchApi options we expect when building a request
 */
interface FetchOptions {
  method?: HTTPMethod;
  body?: object;
}

/**
 * @description Simple util to build the headers and body options to send with a Fetch API request
 * @todo Consider specifying a caching or referrer policy
 * @param {FetchOptions} params - params to override this functions default option settings
 * @returns {RequestInit} A RequestInit-type object, as defined by the FetchApi
 */
const buildFetchOptions = (params: FetchOptions): RequestInit => {
  const options: RequestInit = {
    method: params.method, // *GET, POST, PUT, DELETE, etc.
    headers: {},
  };
  if (params.method && params.method !== 'GET') {
    options.body = JSON.stringify(params.body);
  }
  buildFetchHeaders(options);
  return options;
};

/**
 * @description Simple util to build the headers to send with a Fetch API request
 * @param {RequestInit} options - RequestInit-type object, as it exists when this function
 * is called from within buildFetchOptions()
 * @returns {RequestInit} A RequestInit-type object, as defined by the FetchApi,
 * now with a populated headers object
 */
const buildFetchHeaders = (options: RequestInit): RequestInit => {
  options.headers = {
    'Content-Type': 'application/json',
  };
  if (localStorage.jwt) {
    options.headers['Authorization'] = `Bearer ${localStorage.jwt}`;
  }
  return options;
};

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
  static async post(url: string = '', data: object): Promise<void> {
    const options: RequestInit = buildFetchOptions({
      method: HTTPMethod.POST,
      body: data,
    });
    const response = await fetch(url, options);
    const res: LoginResponse = await response.json();
    FetchApi.checkForResponseTokenAndAddToStorage(res);
  }

  /**
   * @description Check if token was passed as argument, and if so, save using LocalStorage API
   * @param {LoginResponse} responseBody @private
   * */
  private static checkForResponseTokenAndAddToStorage = (
    responseBody: LoginResponse
  ) => {
    if (responseBody.token) {
      localStorage.setItem(JWT_TOKEN_IDENTIFIER, responseBody.token);
    }
  };
}
