import HttpException from '../error/exceptions/Http.exception';
import { User } from './';
import {
  UserDAContract,
  RegisterInput,
  UserModel,
  UserQueryParam,
} from '1shop2drop-types';

/**
 * @description Interacts with underlying data store engine
 * @implements {UserDAContract}
 */
export class UserDA implements UserDAContract {
  /**
   * @description Adds user to database
   * @param {RegisterInput} userData - the input data required to register a new User
   * @throws {HttpException} HttpException with data-access-engine-specific error.
   * @returns {Promise<UserModel>}
   * @public
   */
  public async addUser(userData: RegisterInput): Promise<UserModel> {
    try {
      return await new User(userData).save();
    } catch (e) {
      throw new HttpException(e);
    }
  }

  /**
   * @description Fetches user from database based on value associated with key specified in queryParamObj argument
   * @param {UserQueryParam} queryParamObj - a { key: value } formatted object stating the key-value pair to fetch a User with
   * @returns {Promise<UserModel | null>}
   * @throws {HttpException} HttpException with data-access-engine-specific error.
   * @public
   */
  public async getUserByKeyValue(
    queryParamObj: UserQueryParam
  ): Promise<UserModel> {
    try {
      return (await User.findOne(queryParamObj)) || null;
    } catch (e) {
      throw new HttpException(e);
    }
  }
}
