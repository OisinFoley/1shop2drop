import { ErrorHandlingStrings } from '../utils/error-handling-strings';

/**
 * Custom Error class which provides a Http Status code,
 * as well as string-based error description
 * @extends Error
 */
class HttpException extends Error {
  readonly status: number;
  readonly message: string;
  /**
   * @description Creates a HttpException
   * @param message string-based message describing the error
   */
  constructor(message: string) {
    super(message);
    this.status = HttpException.getStatusCodeFromMessage(message);
    this.message = message;
  }

  /**
   * @description Return Http Status code based on the message argument
   * @private @static
   * */
  private static getStatusCodeFromMessage(message: string): number {
    switch (true) {
      case message === ErrorHandlingStrings.email_already_taken:
        return 400;
      default:
        return 500;
    }
  }
}

export default HttpException;
