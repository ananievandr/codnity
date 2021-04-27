import { LocaleMessages } from './interfaces';
import { getFlattenLocale } from './helpers';

const enLocale: LocaleMessages = {
  navigation: {
    career: 'Career',
    insights: 'Insights',
    services: 'Services',
    expertise: 'Expertise',
    ourApproach: 'Our Approach',
    company: 'Company',
    getInTouch: 'Get In Touch',
    terms: 'Terms',
    privacyPolicy: 'Privacy & Policy',
  },
  expertise: {
    competence: 'Competence',
    caseStudies: 'Case Studies',
  },
  footer: {
    description:
      'Porttitor lectus nibh elit pellentesque pulvinar nibh commodo dis. Sem enim, pellentesque consectetur fermentum. Aliquam malesuada donec.',
  },
};

export default getFlattenLocale(enLocale);
