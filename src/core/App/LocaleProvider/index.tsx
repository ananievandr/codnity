import React, { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';

import { StorageKeys } from 'utils/constants/StorageKeys';
import { storage } from 'utils/storage';

import { LocaleProviderProps } from './interfaces';
import { messages, LocaleContext, LocaleTypes } from './localeContext';

function LocaleProvider({ children }: LocaleProviderProps): ReactElement {
  const curLocale = storage.getItem(StorageKeys.codnityLocale);
  const locale = curLocale || LocaleTypes.EN;

  const handleChangeLocale = (value: LocaleTypes): void => {
    storage.setItem(StorageKeys.codnityLocale, value);
    const pathname = document.location.pathname;
    document.location.replace(pathname.replace(locale, `${value}`));
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]} defaultLocale={LocaleTypes.EN}>
      <LocaleContext.Provider value={{ locale, onChangeLocale: handleChangeLocale }}>
        <BrowserRouter basename={`/${locale}`}>{children}</BrowserRouter>
      </LocaleContext.Provider>
    </IntlProvider>
  );
}

export default LocaleProvider;
