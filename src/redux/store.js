import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { v4 as uuidv4, validate } from "uuid";
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
      matches: persistReducer({ key: 'matches', version: '1.0.2', storage, migrate: (state) => {
        if (state) {
          const newEntities = {};
          const newIds = state.ids.map((id, i) => {
            if (!validate(id)) {
              const newId = uuidv4();
              newEntities[newId] = {
                ...state.entities[id],
                id: newId
              };
              return newId;
            } else {
              newEntities[id] = {...state.entities[id]};
              return id;
            }
          });
          return Promise.resolve({
            ...state,
            ids: newIds,
            entities: newEntities
          });
        } else {
          return Promise.resolve(state);
        }
      } }, rootReducer.matches)
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