import app from './app';
import config from './config/keys';
import { ServerSetupHelper } from './config/ServerSetupHelper';
import { DatabaseConnectionHandler } from './data/DatabaseConnectionHandler';

const { databaseUri }: { databaseUri: string } = config;

(async () => {
  try {
    await DatabaseConnectionHandler.initialise(databaseUri);
    ServerSetupHelper.initialiseRequestListener(app);
    ServerSetupHelper.initialiseServerShutdownHandler();
  } catch (e) {
    console.error(`Server initialisation failed`);
    throw new Error(e);
  }
})();
