/* eslint-disable */
const path = require('path');
const environment = require('./environment');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const isProdBuild = mode !== 'development';

module.exports = {
  entry: environment.paths.indexSrc,
  plugins: [
    new ProgressBarPlugin({
      width: 100,
    }),
    new CleanWebpackPlugin({
      dry: true,
      verbose: true,
      cleanStaleWebpackAssets: false,
      protectWebpackAssets: false,
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
    new DuplicatePackageCheckerPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      favicon: environment.paths.favIcon,
      template: environment.paths.htmlSrc,
    }),
    new CopyWebpackPlugin([{
      from: environment.paths.assetsSrc,
      to: environment.paths.assetsDistSrc,
      context: path.resolve(__dirname, '../public', 'assets'),
    }]),
  ],
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(tsx?|js)$/,
        include: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ['@babel/plugin-transform-object-assign'],
            cacheDirectory: environment.paths.babelLoaderCacheDirectory,
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: environment.paths.babelLoaderCacheDirectory,
            },
          },
        ],
        include: environment.paths.appSrc,
      },
      {
        test: /\.(?:jpg|png|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `${environment.relativePaths.images}/[name].[ext]`
            }
          }
        ],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [environment.paths.nodeModules, environment.paths.appSrc],
    alias: {
      'react-dom': isProdBuild ? 'react-dom' : '@hot-loader/react-dom',
      "react-hook-form": "react-hook-form/dist/react-hook-form.ie11"
    },
  },
};
