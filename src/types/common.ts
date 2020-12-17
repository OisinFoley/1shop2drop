import { Request, Response, NextFunction } from 'express';
import { Document } from 'mongoose';
import { UserDA } from '../data-access';
import { User } from '../models';

export interface Config {
  /** Uri used to access the database engine being connected to */
  readonly databaseUri: string;
  /** password, token or unique identifier used to authenticate app with the relevant database engine */
  readonly password: string;
}

export interface UserInput extends RegisterInput {}

export interface RegisterInput {
  /** Unique string displayed about User in webapp */
  readonly displayName: string;
  /** Unique email used by User to login */
  readonly email: string;
  password: string;
  readonly confirmPassword: string;
}

export interface ErrorResponse {
  email?: string;
  emailNotFound?: string;
}

export interface User extends UserInput {
  /** Date User signed up to app */
  readonly dateJoined: Date;
}

export interface UserModel extends User, Document {
  readonly id: string;
}

export interface UserServiceContract {
  register(userData: RegisterInput): Promise<UserModel>;
  readonly userDA: UserDA;
}

export interface UserControllerContract {
  register(req: Request, res: Response, next: NextFunction): Promise<void>;
  readonly service: UserServiceContract;
}

export interface UserDAContract {
  addUser(userData: UserInput): Promise<UserModel>;
  getUserByKeyValue(queryParamObj: userQueryParam): Promise<UserModel>;
}

export interface emailQueryParam {
  email: string;
}
export interface displayNameQueryParam {
  displayName: string;
}
export type userQueryParam = emailQueryParam | displayNameQueryParam;
