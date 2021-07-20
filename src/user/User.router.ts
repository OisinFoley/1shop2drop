import { Router } from 'express';
import { UserControllerContract } from '1shop2drop-types';

/**
 * @description Function that assigns route handlers to different request
 * endpoints supported by the server
 * @function
 * @param {Object} router - Express Router
 * @param {Object} controller - User Controller class
 */
export const UserRouter = (
  router: Router,
  controller: UserControllerContract
): void => {
  router.post('/api/users/register', controller.register.bind(controller));
  router.post('/api/users/login', controller.login.bind(controller));
};
