import { Config } from '../types/common';

/** @implements {Config} */
class ProductionConfig implements Config {
  databaseUri = '';
  password = '';

  constructor() {
    this.databaseUri = process.env.databaseUri || '';
    this.password = process.env.password || '';
  }
}

export default ProductionConfig;
