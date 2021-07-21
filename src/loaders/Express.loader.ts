import express, { Request, Response, Express } from 'express';
import path from 'path';
import cors from 'cors';
import { errorMiddleware } from '../error/middlewares/error.middleware';
import { UserRouter, UserDA, UserService, UserController } from '../user';
import { PassportManager } from '../config/PassportManager';

class ExpressLoader {
  app: Express;
  constructor() {
    const app = express();
    const router = express.Router();

    // body-parser middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    // TODO: setup origin whitelist for use in production
    const corstOpts = cors({ origin: true });
    app.use(corstOpts);

    // passport middleware
    PassportManager.initialize();

    app.use('/', router);
    UserRouter(router, new UserController(new UserService(new UserDA())));

    app.use(errorMiddleware);

    // serve static assets if production
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static('client/dist'));

      app.get('*', (req: Request, res: Response) => {
        res.sendFile(
          path.resolve(__dirname, '../../', 'client', 'dist', 'index.html')
        );
      });
    }

    this.app = app;
  }
}

export { ExpressLoader };
