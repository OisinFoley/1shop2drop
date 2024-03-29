import jwt_decode from 'jwt-decode';
import { Types } from '../';
import { EMPTY_CURRENT_USER_STATE, JWT_TOKEN_IDENTIFIER } from './constants';
import { UserJwtPayload } from '1shop2drop-types';

/**
 * @description Checks if currentUser argument is truthy and has truthy values
 * @param {UserDetails} currentUser
 * @returns {boolean} True or false boolean
 */
export const isValidCurrentUser = (
  currentUser: Types.UserDetails = EMPTY_CURRENT_USER_STATE
): boolean => {
  return currentUser && !!currentUser.email && !!currentUser.displayName;
};

/**
 * @description Tries to fetch json web token from LocalStorage
 * @returns {AuthenticatedUser} Authenticated User retrieved from decoded token
 * @returns {object} null
 */
export const getUserFromToken = (): Types.AuthenticatedUser | null => {
  if (localStorage.getItem(JWT_TOKEN_IDENTIFIER)) {
    // decode token info
    const decodedToken = jwt_decode<UserJwtPayload>(
      localStorage.getItem(JWT_TOKEN_IDENTIFIER)
    );

    // check if token has expired
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem(JWT_TOKEN_IDENTIFIER);
      return;
    }

    return decodedToken;
  }
};
