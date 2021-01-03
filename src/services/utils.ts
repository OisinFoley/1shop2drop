import { UserDetails, UserModel } from '../types/common';

/**
 * @function
 * @param {UserModel} user - User model, in same format as it's received from the data store
 * @return {UserDetails} Simplified User model excluding sensitive data
 */
export function buildUserDetails(user: UserModel): UserDetails {
  const { id, displayName, email, dateJoined } = user;
  return { id, displayName, email, dateJoined };
}
