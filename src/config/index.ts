/**
 * Loads environment variables via dotenv, then exposes them for importing throughout the app
 */
export default {
  databaseUri: process.env.DATABASE_URI ?? '',
  jwtSecret: process.env.JWT_SECRET ?? '',
};
