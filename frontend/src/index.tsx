import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from 'store/configureStore';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

const preloadedState = typeof window !== 'undefined' && (window as any).__PRELOADED_STATE__;

const store = configureStore(preloadedState);

const RootComponent = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// ReactDOM.render(RootComponent, rootElement);

if (typeof window !== 'undefined' && (window as any).ssr) {
  ReactDOM.hydrate(RootComponent, rootElement);
} else {
  ReactDOM.render(RootComponent, rootElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
