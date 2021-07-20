import { Strategy as JwtStrategy, StrategyOptions } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import { Request, Response, NextFunction } from 'express';
import { User } from '../user';
import { Config, UserModel } from '1shop2drop-types';
import keys from '.';

export class PassportManager {
  /**
   * @description Util to build options object that will be used when instantiating new JwtStrategy
   * @returns {StrategyOptions} The StrategyOptions-typed object
   * @private @static
   * */
  private static initStrategyOptions(): StrategyOptions {
    const config: Config = keys;
    const opts: StrategyOptions = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwtSecret,
    };
    return opts;
  }

  /**
   * @description Initialises a new JwtStrategy, used to verifiy
   * the Authorisation header's Bearer token for requests to protected routes
   * @returns {void}
   * @static
   * */
  static initialize = (): void => {
    const opts: StrategyOptions = PassportManager.initStrategyOptions();
    passport.use(
      new JwtStrategy(opts, async (jwt_payload, done): Promise<void> => {
        try {
          const user: UserModel = await User.findById(jwt_payload.id);
          if (user) {
            return done(null, user);
          }
        } catch (e) {
          console.log(e);
        }
      })
    );
  };

  /**
   * @description Authenticates the token using the specified strategy,
   * verifies said token is still valid, then attaches the user object to the request before
   * calling next middleware in the request pipeline
   * @returns {void}
   * @static
   * */
  static authenticate = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    passport.authenticate(
      'jwt',
      { session: false },
      (err, user: UserModel, info) => {
        if (err) {
          return next(err);
        }
        if (!user) {
          if (info.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Your token has expired.' });
          } else {
            return res.status(401).json({ message: info.message });
          }
        }
        req.user = user;
        return next();
      }
    )(req, res, next);
  };
}
