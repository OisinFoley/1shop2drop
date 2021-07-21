import dotenv from 'dotenv';
dotenv.config();
import config from './config';
import { ExpressLoader } from './loaders/Express.loader';
import { ServerLoader } from './loaders/Server.loader';
import { DatabaseLoader } from './loaders/Database.loader';

const { databaseUri }: { databaseUri: string } = config;

(async () => {
  try {
    await DatabaseLoader.initialise(databaseUri);
    ServerLoader.initialiseRequestListener(new ExpressLoader().app);
    ServerLoader.initialiseServerShutdownHandler();
  } catch (e) {
    console.error('Server initialisation failed');
    throw new Error(e);
  }
})();
