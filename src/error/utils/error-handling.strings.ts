/**
 * Enum for error-handling strings.
 * @readonly
 * @enum {string}
 */
export enum ErrorHandlingStrings {
  email_already_taken = 'Email already taken',
  no_user_for_email = 'User does not exist for provided email',
  password_not_match = 'Password does not match',
  invalid_email = 'Email is invalid',
  email_field_required = 'Email field is required',
  password_field_required = 'Password field is required',
  password_invalid_length = 'Password must be between 6 and 30 characters long',
  confirm_password_field_required = 'Confirm Password field is required',
  passwords_must_match = 'Passwords must be a match',
  name_invalid_length = 'Name must be between 2 and 30 characters long',
  name_field_required = 'Name field is required',
}
