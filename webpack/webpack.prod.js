/* eslint-disable */
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const safePostCssParser = require('postcss-safe-parser');

const environment = require('./environment');

module.exports =  {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: `${environment.relativePaths.js}/[name].[hash].js`,
    path: environment.paths.distSrc,
    chunkFilename: `${environment.relativePaths.js}/[name].[chunkhash].js`,
    publicPath: '/',
  },
  optimization: {
    minimize: true,
    runtimeChunk: true,
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
        },
        async: {
          test: /[\\/]node_modules[\\/]/,
          name: 'async',
          chunks: 'async',
          minChunks: 4,
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
        cache: true,
        terserOptions: {
          compress: {
            inline: 2,
          },
          mangle: true,
          output: {
            ascii_only: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          parser: safePostCssParser,
          map: {
            inline: false,
            annotation: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API': JSON.stringify(environment.context.prod),
    })
  ]
};

