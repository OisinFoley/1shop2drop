import { Request, Response, NextFunction } from 'express';
import {
  RegisterInput,
  UserControllerContract,
  UserServiceContract,
} from '../types/common';

/**
 * @description - Controller for handling requests to /api/users endpoints
 * @implements {UserControllerContract}
 */
export class UserController implements UserControllerContract {
  public readonly service: UserServiceContract;
  constructor(service: UserServiceContract) {
    this.service = service;
  }
  /**
   * @description Extracts data from request and calls UserService before returning response
   * @param {Object} req Express request object
   * @param {Object} res Express response object
   * @param {Object} next function to call next Express middleware in request-response cycle
   * @returns {Promise<void>}
   * @throws {any}
   * @public
   */
  public async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userData: RegisterInput = { ...req.body };
      const createdUser = await this.service.register(userData);
      res.status(201).json(createdUser);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}
