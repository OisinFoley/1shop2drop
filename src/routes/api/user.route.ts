import { Router } from 'express';
import { UserControllerContract } from '../../types/common';

/**
 * @description Function that assigns route handlers to different request
 * endpoints supported by our server
 * @function
 * @param {Object} router - Express Router
 * @param {Object} controller - User Controller class
 */
export const UserRouter = (
  router: Router,
  controller: UserControllerContract
): void => {
  router.post('/api/users/register', controller.register.bind(controller));
};
