import { AuthenticatedUser } from '../types/app.types';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: AuthenticatedUser;
}

export interface UserState {
  currentUser: AuthenticatedUser;
}

export type UserActionTypes = SetCurrentUserAction;
