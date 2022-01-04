import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from '../user';
import { cartReducer } from '../cart';
import { directoryReducer } from '../directory';
import { shopReducer } from '../shop';

const persistConfig = {
  key: 'root', // the reducer to set as the base when referencing others
  storage,
  whitelist: ['cart'], // the reducers we want to persist
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});
export const persisted = persistReducer(persistConfig, rootReducer);
export type AppState = ReturnType<typeof rootReducer>;
