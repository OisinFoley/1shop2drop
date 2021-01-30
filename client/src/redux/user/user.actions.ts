import jwt_decode from 'jwt-decode';
import { Dispatch } from 'redux';
import { FetchApi } from '../../network/fetch-api';
import {
  AuthenticatedUser,
  LoginInput,
  LoginResponse,
} from '../../types/app.types';
import { loginEndpoint } from '../../util/config';
import { JWT_TOKEN_IDENTIFIER } from '../../util/constants';
import { UserActions } from './user.types';

/**
 * @description Redux action to call login API endpoint,
 * saves token to storage if successful and dispatches setCurrentUser
 * @todo Add an error dispatcher when code executes catch block
 * @param loginData
 */
export const loginUser = (loginData: LoginInput) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    const res: LoginResponse = await FetchApi.post(loginEndpoint, loginData);
    localStorage.setItem(JWT_TOKEN_IDENTIFIER, res.token);
    const decoded: AuthenticatedUser = jwt_decode(res.token);
    dispatch(setCurrentUser(decoded));
  } catch (e) {
    console.log(`Error: ${e}`);
  }
};

/**
 * @description Redux action to dispatch new current user payload to user reducer
 * @param user - new user payload
 */
export const setCurrentUser = (user: AuthenticatedUser) => ({
  type: UserActions.SET_CURRENT_USER,
  payload: user,
});
