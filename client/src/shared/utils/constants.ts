/** Common re-usable string used when interacting with a json web token using LocalStorage API */
export const JWT_TOKEN_IDENTIFIER = 'jwtToken';

export const EMPTY_CURRENT_USER_STATE = {
  id: '',
  displayName: '',
  email: '',
  dateJoined: new Date(0),
};

export const EMPTY_SIGNIN_STATE = {
  email: '',
  password: '',
};

export const EMPTY_SIGNUP_STATE = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
