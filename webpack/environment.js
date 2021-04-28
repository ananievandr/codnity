/* eslint-disable */
const path = require('path');

const getRealPath = relativePath => path.resolve(__dirname, '../', relativePath);

module.exports = {
  paths: {
    distStorybook: getRealPath('.storybook/build'),
    stories: getRealPath('stories'),
    distSrc: getRealPath('build'),
    assetsSrc: getRealPath('public/assets/**/*'),
    assetsDistSrc: getRealPath('build/assets/'),
    htmlSrc: getRealPath('public/index.html'),
    favIcon: getRealPath('public/favicon.ico'),
    indexSrc: getRealPath('src/index.tsx'),
    appSrc: getRealPath('src'),
    nodeModules: getRealPath('node_modules'),
    publicUrl: getRealPath('/'),
    tsConfig: getRealPath('./tsconfig.json'),
    babelLoaderCacheDirectory: getRealPath('node_modules/.cache/babel-loader'),
  },
  relativePaths: {
    images: `static/assets/images`,
    js: 'static/js',
  },
};
