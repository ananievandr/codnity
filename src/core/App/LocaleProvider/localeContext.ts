import React from 'react';

import en from 'locales/en';
import lv from 'locales/lv';

import { LocaleContextProps } from './interfaces';

export enum LocaleTypes {
  EN = 'en',
  LV = 'lv',
}

export const messages = { [LocaleTypes.EN]: en, [LocaleTypes.LV]: lv };

export const LocaleContext = React.createContext<LocaleContextProps>({
  locale: LocaleTypes.EN,
  onChangeLocale: () => {
    return;
  },
});
