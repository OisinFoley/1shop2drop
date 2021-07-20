import { combineReducers } from 'redux';
import { userReducer } from '../user';
import { cartReducer } from '../cart';

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
