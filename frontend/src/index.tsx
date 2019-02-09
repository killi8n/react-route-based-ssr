import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from 'components/App';
import configureStore from 'store/configureStore';
import * as serviceWorker from './serviceWorker';
import routeConfig from './routeConfig';

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

const render = async () => {
  if (process.env.NODE_ENV === 'development') {
    return ReactDOM.render(RootComponent, rootElement);
  }

  const getComponents: Promise<any>[] = [];
  const { pathname } = window.location;

  routeConfig.forEach(route => {
    const match = matchPath(pathname, route);
    if (!match) return;
    const { getComponent } = route.component;
    if (!getComponent) return;
    getComponents.push(getComponent());
  });

  await Promise.all(getComponents);

  ReactDOM.render(RootComponent, rootElement);
};

render();

// ReactDOM.render(RootComponent, rootElement);

// if (typeof window !== 'undefined' && (window as any).ssr) {
//   ReactDOM.hydrate(RootComponent, rootElement);
// } else {
//   ReactDOM.render(RootComponent, rootElement);
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
