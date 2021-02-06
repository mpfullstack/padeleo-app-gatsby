import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger'; // NOTE: Only for dev purpose
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
// import rootSaga from './sagas';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const devMode = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ serializableCheck: false, thunk: false }), sagaMiddleware];

if (devMode) {
  middleware.push(logger);
}

const createStore = () => {
  const store = configureStore({
    reducer: combineReducers({
      matches: persistReducer({ key: 'matches', version: '1.0.0', storage }, rootReducer.matches),
      // professionalProfile: persistReducer({ key: 'professionalProfile', version: '1.0.0', storage }, rootReducer.professionalProfile),
      // profile: rootReducer.profile,
      // booking: persistReducer({ key: 'booking', version: '1.0.0', storage }, rootReducer.booking),
      // loginSignUp: rootReducer.loginSignUp,
      // payment: rootReducer.payment
    }),
    devTools: devMode, // NOTE: Only for dev purpose
    middleware
    // preloadedState
  });
  // sagaMiddleware.run(rootSaga);
  return store;
};

const store = createStore();
const persistor = persistStore(store);

export { persistor };

export default store;