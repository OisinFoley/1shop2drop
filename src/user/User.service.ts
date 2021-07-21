import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  LoginInput,
  LoginResponse,
  RegisterInput,
  UserDAContract,
  UserDetails,
  UserModel,
  UserServiceContract,
} from '1shop2drop-types';
import keys from '../config';
import HttpException from '../error/exceptions/Http.exception';
import { ErrorHandlingStrings } from '../error/utils/error-handling.strings';
import { buildUserDetails } from './user.utils';

/**
 * @description Service for performing Business Logic and handling interaction with Data Access Layer
 * before returning result back to the the function which invoked this service
 * @implements {UserServiceContract}
 */
export class UserService implements UserServiceContract {
  public readonly userDA: UserDAContract;
  constructor(userDA: UserDAContract) {
    this.userDA = userDA;
  }
  /**
   * @description Creates new User via Data Access Layer
   * @param {RegisterInput} userData - the input data required to register a new User
   * @throws {HttpException} Will throw HttpException with data-access-engine-specific error.
   * @throws {HttpException} Will throw a HttpException if email is already in-use by another User.
   * @throws {HttpException} Will throw a HttpException if unexpected error with token signing via jsonwebtoken package.
   * @returns {Promise<UserModel>}
   * @public
   */
  public async register(userData: RegisterInput): Promise<UserModel> {
    const { email, password } = userData;
    const existingUser: UserModel | null = await this.userDA.getUserByKeyValue({
      email,
    });
    if (existingUser) {
      throw new HttpException(ErrorHandlingStrings.email_already_taken);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedSalt = await bcrypt.hash(password, salt);
    userData.password = hashedSalt;

    const createdUser: UserModel = await this.userDA.addUser(userData);
    return createdUser;
  }

  /**
   * @description Authenticates User via Data Access Layer
   * @param {LoginInput} loginData - the input data required to login a User
   * @throws {HttpException} Will throw a HttpException if email doesn't exist for User.
   * @throws {HttpException} Will throw a HttpException if password doesn't match.
   * @throws {HttpException} Will throw HttpException with data-access-engine-specific error.
   * @returns {Promise<LoginResponse>}
   * @public
   */
  public async login(loginData: LoginInput): Promise<LoginResponse> {
    const { email, password } = loginData;
    const user: UserModel | null = await this.userDA.getUserByKeyValue({
      email,
    });
    if (!user) {
      throw new HttpException(ErrorHandlingStrings.no_user_for_email);
    }
    const passwordIsMatch = await bcrypt.compare(password, user.password);
    if (!passwordIsMatch) {
      throw new HttpException(ErrorHandlingStrings.password_not_match);
    }
    const payload: UserDetails = buildUserDetails(user);
    return new Promise(resolve => {
      // assign JWT
      jwt.sign(payload, keys.jwtSecret, { expiresIn: 3600 }, (err, token) => {
        if (err) {
          throw new HttpException(err.message);
        }
        resolve({
          success: true,
          token: `Bearer ${token}`,
        });
      });
    });
  }
}
