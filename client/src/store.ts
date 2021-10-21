import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import { persisted } from './shared';

const middlewares = [logger, thunk];

const store = createStore(persisted, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
