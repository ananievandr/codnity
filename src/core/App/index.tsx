import React, { ReactElement } from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { theme } from 'theme';

import LocaleProvider from './LocaleProvider';
import { MainLayout } from './MainLayout';

function RootApp(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocaleProvider>
        <MainLayout />
      </LocaleProvider>
    </ThemeProvider>
  );
}

export const App = hot(module)(RootApp);
