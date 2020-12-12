import { Server } from 'http';
import { Express } from 'express';
import { DatabaseConnectionHandler } from '../data/DatabaseConnectionHandler';

export class ServerSetupHelper {
  static server: Server = null;
  static initialiseRequestListener(app: Express): void {
    const port = process.env.PORT || 5000;
    ServerSetupHelper.server = app.listen(port, () =>
      console.log(`Server running on port ${port}`)
    );
  }
  static initialiseServerShutdownHandler(): void {
    process.on('SIGINT', ServerSetupHelper.handleServerShutdown);
    process.on('SIGTERM', ServerSetupHelper.handleServerShutdown);
    process.on('SIGQUIT', ServerSetupHelper.handleServerShutdown);
  }

  private static handleServerShutdown(signal: string): void {
    if (!ServerSetupHelper.server) {
      return;
    }
    console.log(
      `Received ${signal}. Fulfilling open requests and shutting down server.`
    );

    ServerSetupHelper.server.close(async () => {
      console.log('Server closed.');
      const disconnectResult: number = await DatabaseConnectionHandler.disconnect();
      process.exit(disconnectResult);
    });
  }
}
