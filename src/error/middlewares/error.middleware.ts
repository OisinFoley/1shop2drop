import { NextFunction, Request, Response } from 'express';
import HttpException from '../exceptions/Http.exception';

/**
 * @module errorMiddleware
 * @function
 * @param {HttpException} error - Info about the HttpException error which triggered this middleware
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @param {NextFunction} next - Express next middleware function
 * @return {undefined}
 */
function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction // eslint-disable-line
) {
  const status = error.status || 500;
  const message = error.message || 'Unknown error occurred - See StackTrace';
  response.status(status).send({
    message,
  });
}

export { errorMiddleware };
