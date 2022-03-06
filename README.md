# 1shop2drop

[![Build Status](https://dev.azure.com/OFoley/1shop2drop/_apis/build/status/1shop2drop-github-source?branchName=develop)](https://dev.azure.com/OFoley/1shop2drop/_build/latest?definitionId=12&branchName=develop)

## A Typescript-based NodeJS and React app to list store items, add them to your cart and then process payment via Stripe API

## Setup Requirements

- `NodeJS`, `npm / yarn`
- You will need to define a `.env` file both at the root of this repo, as well at the root of its `/client` directory. Sample `.env` payloads can be found in the accompanying `.env.example` files.

## Technology Requirements

Currently, the data-access layer (e.g. - `/src/user/User.data-access.ts`) is hard-coded to use a MongoDb database, so you will have to provide a MongoDb connection string in your `.env` file if you wish to run this locally.

## Running the app

Either `yarn run dev` or `npm run dev` from root directory of repo.

## Running in Production

- Run the `build-all` script defined in `package.json`
- You should now have the transpiled backend and frontend code generated in a folder called `dist`.  
  For example, the root of your repo should have a directory structure matching the following:
  ```
  dist/
      /client/dist (this is what was copied over from /client/dist during the script)
      /config
      /error
      /loaders
      .. etc.
  ```
- Now, `cd` into `/dist`, and run using your preferred process runner, such as [pm2](https://pm2.keymetrics.io/).
- Ensure to specify `NODE_ENV` as `production` if you want to serve the transpiled frontend, otherwise you need to run the `/client`'s development server.

## Notable Dependencies

This app relies on typings defined in the [1shop2drop-types](https://github.com/OisinFoley/1shop2drop-types) repo.
