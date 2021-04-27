import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';

import { StorageKeys } from 'utils/constants/StorageKeys';
import { storage } from 'utils/storage';

import { LocaleProviderState, LocaleProviderProps } from './interfaces';
import { listLocales, LocaleContext } from './localeContext';

export class LocaleProvider extends Component<LocaleProviderProps, LocaleProviderState> {
  constructor(props: LocaleProviderProps) {
    super(props);

    const localeIndex = Number(storage.getItem(StorageKeys.eduLocaleIndex));

    this.state = {
      localeIndex: listLocales[localeIndex] ? localeIndex : 0,
    };
  }

  public handleChangeLocale = (id: number): void => {
    storage.setItem(StorageKeys.eduLocaleIndex, `${id}`);
    this.setState({ localeIndex: id });
  };

  render() {
    const { children } = this.props;
    const { localeIndex } = this.state;
    return (
      <IntlProvider locale="en" messages={listLocales[localeIndex]}>
        <LocaleContext.Provider value={{ localeIndex, onChangeLocale: this.handleChangeLocale }}>
          {children}
        </LocaleContext.Provider>
      </IntlProvider>
    );
  }
}
