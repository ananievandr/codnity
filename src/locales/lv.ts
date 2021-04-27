import { LocaleMessages } from './interfaces';
import { getFlattenLocale } from './helpers';

const lvLocale: LocaleMessages = {
  navigation: {
    career: 'Карьера',
    insights: 'Инсайты',
    services: 'Сервисы',
    expertise: 'Экспертиза',
    ourApproach: 'Наш подход',
    company: 'Компания',
    getInTouch: 'Поехали',
    terms: 'Условия',
    privacyPolicy: 'Конфеденциальность',
  },
  expertise: {
    competence: 'Компетенции',
    caseStudies: 'Материалы',
  },
  footer: {
    description:
      'Внезапно, реплицированные с зарубежных источников, современные исследования, инициированные исключительно синтетически, обнародованы. Разнообразный и богатый опыт говорит нам, что понимание сути ресурсосберегающих технологий, а также свежий взгляд на привычные вещи.',
  },
};

export default getFlattenLocale(lvLocale);
