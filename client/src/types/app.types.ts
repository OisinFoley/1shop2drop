/** @description Describes state of the AppComponent */
export interface AppComponentState {
  currentUser: AuthenticatedUser;
}

export interface AuthenticatedUser extends UserDetails {}

/**
 * @description Simple User object excluding sensitive info,
 * intended for consumption in the web app
 * @todo Move me to a package
 * */
export interface UserDetails {
  id: string;
  email: string;
  displayName: string;
  dateJoined: Date;
}

/**
 * @description Abstraction of expected response from a successful login
 * @todo Move me to a package
 * */
export interface LoginResponse {
  success: boolean;
  token: string;
}
