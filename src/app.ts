import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import errorMiddleware from './middlewares/error.middleware';
import { UserRouter } from './routes/api/user.route';
import { UserDA } from './data-access';
import { UserService } from './services';
import { UserController } from './controllers';
import { PassportManager } from './config/PassportManager';

const app = express();
const router = express.Router();

// body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// TODO: setup origin whitelist for use in production
app.use(cors());

// passport middleware
PassportManager.initialize();

app.use('/', router);
UserRouter(router, new UserController(new UserService(new UserDA())));

app.use(errorMiddleware);

// serve static assets if production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req: Request, res: Response) => {
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'dist', 'index.html')
    );
  });
}

export default app;
