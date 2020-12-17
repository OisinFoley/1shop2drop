import HttpException from '../exceptions/Http.exception';
import { User } from '../models';
import {
  UserDAContract,
  UserInput,
  UserModel,
  userQueryParam,
} from '../types/common';

/**
 * @description Interacts with underlying data store engine
 * @implements {UserDAContract}
 */
export class UserDA implements UserDAContract {
  /**
   * @description Adds user to database
   * @param {UserInput} userData - the input data required to register a new User
   * @throws {HttpException} HttpException with data-access-engine-specific error.
   * @returns {Promise<UserModel>}
   * @public
   */
  public async addUser(userData: UserInput): Promise<UserModel> {
    try {
      return await new User(userData).save();
    } catch (e) {
      throw new HttpException(e);
    }
  }

  /**
   * @description Fetches user from database based on value associated with key specified in queryParamObj argument
   * @param {userQueryParam} queryParamObj - a { key: value } formatted object stating the key-value pair to fetch a User with
   * @returns {Promise<UserModel | null>}
   * @throws {HttpException} HttpException with data-access-engine-specific error.
   * @public
   */
  public async getUserByKeyValue(
    queryParamObj: userQueryParam
  ): Promise<UserModel> {
    try {
      return (await User.findOne(queryParamObj)) || null;
    } catch (e) {
      throw new HttpException(e);
    }
  }
}
