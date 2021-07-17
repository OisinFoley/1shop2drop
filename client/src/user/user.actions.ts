import jwt_decode from 'jwt-decode';
import { Dispatch } from 'redux';
import { FetchApi } from '../api';
import { Config, Constants, Types } from '../shared';
import { UserActions } from './user.types';

/**
 * @description Redux action to call login API endpoint,
 * saves token to storage if successful and dispatches setCurrentUser
 * @todo Add an error dispatcher when code executes catch block
 * @param loginData
 */
export const loginUser =
  (loginData: Types.LoginInput) =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const res: Types.LoginResponse = await FetchApi.post(
        Config.loginEndpoint,
        loginData
      );
      if (res.token) {
        localStorage.setItem(Constants.JWT_TOKEN_IDENTIFIER, res.token);
        const decoded: Types.AuthenticatedUser = jwt_decode(res.token);
        dispatch(setCurrentUser(decoded));
      }
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

/**
 * @description Redux action to dispatch new current user payload to user reducer
 * @param user - new user payload
 */
export const setCurrentUser = (user: Types.AuthenticatedUser) => ({
  type: UserActions.SET_CURRENT_USER,
  payload: user,
});
