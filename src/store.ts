import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';
import { IPreloadeState } from './types/ToDo';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState : IPreloadeState) => (
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(),
  )
);

const store = configureStore({});

export type RootState = ReturnType<typeof store.getState>;

export default store;

