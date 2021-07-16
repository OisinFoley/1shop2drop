import { Request, Response, NextFunction } from 'express';
import { Document } from 'mongoose';
import { UserDA, User } from '../user';

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
 * @description Abstraction of expected input for a login request
 * @todo Move me to a package
 * */
export interface LoginInput {
  email: string;
  password: string;
}

/**
 * @description Abstraction of expected response from a successful login
 * @todo Move me to a package
 * */
export interface LoginResponse {
  success: boolean;
  token: string;
}

/** @description Abstraction of the User Service's members */
export interface UserServiceContract {
  register(userData: RegisterInput): Promise<UserModel>;
  login(loginData: LoginInput): Promise<LoginResponse>;
  readonly userDA: UserDA;
}

/** @description Abstraction of the User Controller's members */
export interface UserControllerContract {
  register(req: Request, res: Response, next: NextFunction): Promise<void>;
  login(req: Request, res: Response, next: NextFunction): Promise<void>;
  readonly service: UserServiceContract;
}

/** @description Abstraction of the User DA's (data-access) members */
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
/** @description Type to represent the params supported by a function
 * used in the User DA (data-access) class to get a User based on a particular key */
export type userQueryParam = emailQueryParam | displayNameQueryParam;
