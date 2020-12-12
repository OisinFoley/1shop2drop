import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

// body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO: delete me once other routes have been setup
app.use('/', (req, res) => {
  console.log(`test`);
  res.send({ test_response: 'test_response' });
});

// error handling
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.warn(`Error: on request to ${req.headers.origin}${req.url}`);
  console.warn(JSON.stringify(err));

  res.status(500).json(err);
});

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
