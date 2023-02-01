import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { IPreloadeState } from './types/ToDo';
import { save } from 'redux-localstorage-simple';

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
    composeEnhancers(
      applyMiddleware(save({namespace: 'todo-list'}))
    ),
  )
);

const store = configureStore({});

export type RootState = ReturnType<typeof store.getState>;

export default store;

