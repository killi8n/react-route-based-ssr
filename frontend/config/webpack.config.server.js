// originally written by velopert

const path = require('path');
const webpack = require('webpack');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);
const env = getClientEnvironment(publicUrl);

module.exports = {
  entry: paths.ssrJs,
  target: 'node',
  output: {
    path: paths.ssrBuild,
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            // loader: require.resolve('ts-loader')
            options: {
              cacheDirectory: true
            }
          },
          {
            test: /\.(ts|tsx)$/,
            include: path.resolve('./src'),
            use: [
              {
                loader: 'ts-loader',
                options: {
                  // disable type checker - we will use it in fork plugin
                  transpileOnly: true,
                  configFile: path.resolve('tsconfig.json')
                }
              }
            ]
          },
          /* css-loader/locals does not create the output */
          {
            test: /\.(css|scss)$/,
            loader: require.resolve('css-loader/locals')
          },
          /* emitFile: false will not create new files */
          {
            loader: require.resolve('file-loader'),
            exclude: [/\.js$/, /\.html$/, /\.json$/],
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
              // it only generates the url to be used in the app
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  resolve: {
    // same configuration with webpack.prod.js
    modules: ['node_modules', paths.appNodeModules].concat(process.env.NODE_PATH.split(path.delimiter).filter(Boolean)),
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve('tsconfig.json'),
        logLevel: 'info',
        extensions: ['.ts', '.tsx'],
        mainFields: ['browser', 'main']
        // baseUrl: "/foo"
      })
    ]
  },
  // sets env variables
  plugins: [
    new webpack.DefinePlugin(env.stringified)
    // new TsconfigPathsPlugin({ extensions: ['.ts', '.tsx'], baseUrl: 'src' })
  ]
};
