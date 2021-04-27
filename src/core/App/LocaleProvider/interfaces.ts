import { ReactNode, ReactNodeArray } from 'react';

export interface LocaleProviderState {
  localeIndex: number;
}

export interface LocaleProviderProps {
  children: ReactNodeArray | ReactNode;
}

export interface LocaleContextProps {
  localeIndex: number;
  onChangeLocale: (id: number) => void;
}
