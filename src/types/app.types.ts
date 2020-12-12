export interface AppComponentState {
  currentUser: AuthenticatedUser;
}

export interface AuthenticatedUser {
  displayName: string;
  email: string;
}
