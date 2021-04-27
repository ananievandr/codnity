// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const getRealPath = relativePath => path.resolve(process.cwd(), relativePath);

module.exports = {
  distStorybook: getRealPath('.storybook/build'),
  stories: getRealPath('stories'),
  distSrc: getRealPath('build'),
  assetsSrc: getRealPath('public/assets/**/*'),
  assetsDistSrc: getRealPath('build/assets/'),
  htmlSrc: getRealPath('public/index.html'),
  favIcon: getRealPath('public/assets/favicon.ico'),
  indexSrc: getRealPath('src/index.tsx'),
  appSrc: getRealPath('src'),
  publicUrl: getRealPath('/'),
  tsConfig: getRealPath('./tsconfig.json'),
  babelLoaderCacheDirectory: getRealPath('node_modules/.cache/babel-loader'),
};
