import React from 'react';

import enLocale from 'locales/en';
import lvLocale from 'locales/lv';

import { LocaleContextProps } from './interfaces';

export const listLocales = [enLocale, lvLocale];

export const LocaleContext = React.createContext<LocaleContextProps>({
  localeIndex: 0,
  onChangeLocale: () => {
    return;
  },
});
