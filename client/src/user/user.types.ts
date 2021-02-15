import { Types } from '../shared';

export enum UserActions {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}

export interface SetCurrentUserAction {
  type: typeof UserActions.SET_CURRENT_USER;
  payload: Types.AuthenticatedUser;
}

export interface UserState {
  currentUser: Types.AuthenticatedUser;
}

export type UserActionTypes = SetCurrentUserAction;
