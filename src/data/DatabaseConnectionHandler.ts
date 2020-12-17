import mongoose from 'mongoose';
export class DatabaseConnectionHandler {
  /**
   * @description Initialises connection to database
   * @param {string} databaseUri - string used to connect to the database engine
   * @todo Decouple me from Mongoose-specific implementation
   * @throws {Error} Throws error about database connection failure
   * @returns {Promise<void>}
   * @public @static
   */
  static async initialise(databaseUri: string): Promise<void> {
    await mongoose
      .connect(databaseUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.info('MongoDb connected.'))
      .catch((err) => {
        throw new Error(err);
      });
  }

  /**
   * @description Closes connection to database, then resolves Promise.
   * @todo Decouple me from Mongoose-specific implementation
   * @returns {Promise<number>}
   * @public @static
   */
  static disconnect(): Promise<number> {
    return new Promise(async (resolve) => {
      mongoose.disconnect((err) => {
        console.log('Database connection closed. Preparing to exit.');
        return resolve(err ? 1 : 0);
      });
    });
  }
}
