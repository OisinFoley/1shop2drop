# Ecommerce App

## A Typescript-based NodeJS and React app to list store items, add them to your cart and then process payment via Stripe API

## Setup Requirements

- `NodeJS`, `npm / yarn`
- Connection string to a database
- You will need to create a `keys_dev.ts` file at `src/config` in the following format:

```
class DevelopmentConfig {
  mongoURI =
    {key_goes_here};
  secret = {secret_goes_here};
}

export default DevelopmentConfig;

```

## Running the app

Either `yarn run dev` or `npm run dev` from root directory of repo.
