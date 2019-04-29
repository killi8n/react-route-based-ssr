import * as React from 'react';
import configureStore from './store/configureStore';
import { Request } from 'express';
import routeConfig from './routeConfig';
import { matchPath, StaticRouter } from 'react-router';
import * as ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
// import App from 'components/App';
// import StaticProvider from './lib/StaticProvider';
import App from 'components/App';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000';

export type PreloadParams = {
  dispatch: any;
};

const serverRender = async (req: Request) => {
  const store = configureStore();
  const promises: Promise<any>[] = [];
  const { url, path } = req;

  routeConfig.forEach(route => {
    const match = matchPath(path, route);
    if (match && route.preload) {
      const p = route.preload(store, match.params);
      console.log('p', p);
      promises.push(p);
    }
  });

  let error = null;

  try {
    await Promise.all(promises);
  } catch (e) {
    error = e;
  }
  const html = ReactDOMServer.renderToString(
    // React.createElement(StaticRouter, {}, React.createElement(StaticProvider))
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  return {
    html,
    state: store.getState(),
    error
  };
};

export default serverRender;
