import ProductionConfig from './keys_prod';
import DevelopmentConfig from './keys_dev';

/**
 * Instantiates new ProductionConfig or DevelopmentConfig class
 * depending on the env config, then returns the instantiated class
 */
class Keys {
  /** @static */
  static config: ProductionConfig | DevelopmentConfig =
    process.env.NODE_ENV === 'production'
      ? new ProductionConfig()
      : new DevelopmentConfig();
}

export default Keys.config;
