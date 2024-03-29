import { EMPTY_CURRENT_USER_STATE } from '../shared/utils/constants';
import { UserActions, UserActionTypes, UserState } from './user.types';

const INITIAL_STATE = {
  currentUser: EMPTY_CURRENT_USER_STATE,
};

const userReducer = (
  state: UserState = INITIAL_STATE,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case UserActions.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export { userReducer };
