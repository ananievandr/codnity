import { ReactNode, ReactNodeArray } from 'react';

import { LocaleTypes } from './localeContext';

export interface LocaleProviderProps {
  children: ReactNodeArray | ReactNode;
}

export interface LocaleContextProps {
  locale: LocaleTypes;
  onChangeLocale: (LocaleTypes: LocaleTypes) => void;
}
