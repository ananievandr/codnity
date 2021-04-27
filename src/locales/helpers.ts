import { Locale } from './interfaces';

export const getFlattenLocale = (locale: any): Locale => {
  const acc: Locale = {};

  const func = (element: any, key = '') => {
    if (typeof element === 'object') {
      return Object.keys(element).forEach(el => {
        func(element[el], `${key ? `${key}.` : ''}${el}`);
      });
    }

    acc[key] = element;
  };

  func(locale);

  return acc;
};
