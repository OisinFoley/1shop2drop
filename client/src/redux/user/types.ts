import { AuthenticatedUser } from '../../types/app.types';

export enum UserActions {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

export interface SetCurrentUserAction {
  type: typeof UserActions.SET_CURRENT_USER;
  payload: AuthenticatedUser;
}

export interface UserState {
  currentUser: AuthenticatedUser;
}

export type UserActionTypes = SetCurrentUserAction;
