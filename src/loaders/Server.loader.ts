import { Server } from 'http';
import { Express } from 'express';
import { DatabaseLoader } from './Database.loader';

/**
 * Class with functions to handle opening and closing server's request listener functionality
 */
export class ServerLoader {
  /** @static */
  static server: Server = null;
  /**
   * @description Opens Express server to listen for requests on specified port
   * @param {Express} app - Express server instance
   * @returns {void}
   * @static
   * @public
   */
  static initialiseRequestListener(app: Express): void {
    const port = process.env.PORT || 5000;
    ServerLoader.server = app.listen(port, () =>
      console.log(`Server running on port ${port}`)
    );
  }
  /**
   * @description Initialises server shutdown handlers for different signal events
   * @returns {void}
   * @static
   * @public
   */
  static initialiseServerShutdownHandler(): void {
    process.on('SIGINT', ServerLoader.handleServerShutdown);
    process.on('SIGTERM', ServerLoader.handleServerShutdown);
    process.on('SIGQUIT', ServerLoader.handleServerShutdown);
  }

  /**
   * @static
   * @private
   */
  private static handleServerShutdown(signal: string): void {
    if (!ServerLoader.server) {
      return;
    }
    console.log(
      `Received ${signal}. Fulfilling open requests and shutting down server.`
    );

    ServerLoader.server.close(async () => {
      console.log('Server closed.');
      const disconnectResult: number = await DatabaseLoader.disconnect();
      process.exit(disconnectResult);
    });
  }
}
