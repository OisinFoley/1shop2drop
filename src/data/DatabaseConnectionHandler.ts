import mongoose from 'mongoose';
import config from '../config/keys';

export class DatabaseConnectionHandler {
  static async initialise(): Promise<void> {
    await mongoose
      .connect(config.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.info('MongoDb connected.'))
      .catch((err: Error) => console.log(err));
  }

  static disconnect(): Promise<number> {
    return new Promise(async (resolve) => {
      mongoose.disconnect((err) => {
        console.log('Database connection closed. Preparing to exit.');
        return resolve(err ? 1 : 0);
      });
    });
  }
}
