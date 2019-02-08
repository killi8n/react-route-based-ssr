import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './modules';

const configureStore = (preloadedState?: any) => {
  //   const isDev = process.env.NODE_ENV === 'development';
  const devTools = typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = devTools || compose;

  const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(Thunk)));

  return store;
};

export default configureStore;
