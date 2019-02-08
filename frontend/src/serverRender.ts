import * as React from 'react';
import configureStore from './store/configureStore';
import { Request } from 'express';
import routeConfig from './routeConfig';
import { matchPath, StaticRouter } from 'react-router';
import * as ReactDOMServer from 'react-dom/server';
// import { Provider } from 'react-redux';
// import App from 'components/App';
import StaticProvider from './lib/StaticProvider';

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
    React.createElement(StaticRouter, {}, React.createElement(StaticProvider))
  );

  return {
    html,
    state: store.getState(),
    error
  };
};

export default serverRender;
