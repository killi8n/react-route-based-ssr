import * as React from 'react';
import { Provider } from 'react-redux';
import configure from 'store/configureStore';
import { StaticRouter } from 'react-router';
import App from '../components/App';

const preloadedState = typeof window !== 'undefined' && (window as any).__PRELOADED_STATE__;

const store = configure(preloadedState);

const StaticProvider = () => {
  return (
    <Provider store={store}>
      <StaticRouter>
        <App />
      </StaticRouter>
    </Provider>
  );
};

export default StaticProvider;
