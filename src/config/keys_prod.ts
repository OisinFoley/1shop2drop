// TODO: implement class based off of an abstraction
// TODO: make me more generic so that I am not coupled to a MongoDB data store implementation
class ProductionConfig {
  mongoURI = '';
  secret = '';

  constructor() {
    this.mongoURI = process.env.mongoURI || '';
    this.secret = process.env.secretOrKey || '';
  }
}

export default ProductionConfig;
