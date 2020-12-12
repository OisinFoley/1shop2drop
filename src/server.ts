import app from './app';
import { ServerSetupHelper } from './config/ServerSetupHelper';
import { DatabaseConnectionHandler } from './data/DatabaseConnectionHandler';

DatabaseConnectionHandler.initialise();
ServerSetupHelper.initialiseRequestListener(app);
ServerSetupHelper.initialiseServerShutdownHandler();
