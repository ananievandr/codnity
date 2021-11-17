/* eslint-disable */
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

const environment = require('./environment');
const typescriptFormatter = require('./typescriptFormatter');

const PORT = process.env.FRONT_DEVSERVER_PORT || 3000;

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].js',
    path: environment.paths.distSrc,
    chunkFilename: `[name].js`,
    publicPath: '/',
  },
  devServer: {
    port: PORT,
    hot: true,
    compress: true,
    contentBase: environment.paths.distSrc,
    watchContentBase: true,
    historyApiFallback: true,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      watch: environment.paths.appSrc,
      async: true,
      silent: false,
      formatter: typescriptFormatter,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API': JSON.stringify(environment.context.dev),
    })
  ]
};
