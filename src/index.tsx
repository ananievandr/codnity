import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js';
import 'regenerator-runtime/runtime';
import 'intl';
import 'intl/locale-data/jsonp/en';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'core/App';

const root = document.getElementById('aka-codnity');
render(
  <BrowserRouter basename="/codnity-demo">
    <App />
  </BrowserRouter>,
  root,
);
