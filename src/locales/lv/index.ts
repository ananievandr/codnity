import { domHeader } from './domHeader';
import { getFlattenLocale } from '../helpers';
import { getInTouchPage } from './ getInTouchPage';
import { careerPage } from './careerPage';
import { companyPage } from './companyPage';
import { expertisePage } from './expertisePage';
import { footer } from './footer';
import { mainPage } from './mainPage';
import { navMenu } from './menu';
import { ourApproachPage } from './ourApproachPage';
import { servicesPage } from './servicesPage';
import { validation } from './validation';

const enLocale = {
  ...navMenu,
  ...footer,
  ...mainPage,
  ...servicesPage,
  ...careerPage,
  ...companyPage,
  ...expertisePage,
  ...getInTouchPage,
  ...ourApproachPage,
  ...validation,
  ...domHeader,
};

export default getFlattenLocale(enLocale);
