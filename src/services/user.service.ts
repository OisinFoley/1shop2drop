import bcrypt from 'bcryptjs';
import {
  RegisterInput,
  UserDAContract,
  UserModel,
  UserServiceContract,
} from '../types/common';
import HttpException from '../exceptions/Http.exception';
import { ErrorHandlingStrings } from '../utils/error-handling-strings';

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
   * @description Creates new User via Data Access Layer, throws if User's email already exists
   * @param {RegisterInput} userData - the input data required to register a new User
   * @throws {HttpException} Will throw HttpException with data-access-engine-specific error.
   * @throws {HttpException} Will throw a HttpException if email is already taken.
   * @returns {Promise<UserModel>}
   * @public
   */
  public async register(userData: RegisterInput): Promise<UserModel> {
    const { email, password } = userData;

    try {
      const existingUser: UserModel | null = await this.userDA.getUserByKeyValue(
        {
          email,
        }
      );
      if (existingUser) {
        throw new HttpException(ErrorHandlingStrings.email_already_taken);
      }
      const salt = await bcrypt.genSalt(10);
      const hashedSalt = await bcrypt.hash(password, salt);
      userData.password = hashedSalt;

      const createdUser: UserModel = await this.userDA.addUser(userData);
      return createdUser;
    } catch (e) {
      throw e;
    }
  }
}
