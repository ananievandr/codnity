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
  company: {
    founder1: {
      title: 'Janis Anspaks',
      content:
        'Half man, half software. Janis is the most linear thinking guy you can find. He likes mountain snowboarding, books, jokes, and tech. No, he loves tech. Janis is also a big supporter of harmonized and well-balanced city life. He lives in the city center and is not planning to move away into suburbs. After his words: “you just can’t get so nice food outside city”. What can you conclude? He is an epicure. Originally comes from rough, tough, and cold place, but full of warm people - Latgale. He is honest, true, and does not fuck around when he does his job.',
    },
    founder2: {
      title: 'Girts Ledins',
      content:
        'Half funny, mostly not. Girts is a serial entrepreneur, but that is a really boring description. Yes, he has had an extensive experience with numbers, figures, dough flows, with balance and not so balanced sheets. But that does not tell anything about him. Girts is a family guy and dad of two beautiful boys. He claims himself as a patriarch, but everyone who knows him sees very well who calls the shots in the family. When he was young, and did not know much about business, he played in National Junior Basketball team. He even earned money by playing ball, 150 USD a month. Funny, that made him feel like a king. Do not judge, he was sixteen. Now he is more laid back, reads a lot of books, and is ready to hustle hard when shit needs to be done.',
    },
    ourValues: {
      codingInIntegrity: {
        title: 'Coding in integrity',
        content:
          'We look at our work with high importance and value, we always seek for high quality, and we deliver work with high respect. We show a consistent and uncompromising adherence to strong moral and ethical principles and values to our team members, peers, partners, clients, and all people around us. We do not compromise our integrity in no circumstances.',
      },
      codingInOpennes: {
        title: 'Coding in opennes',
        content:
          'We believe in openness between ourselves and our clients. We are not afraid from hard issues, questions, and calls. If we believe that something is wrong within organization or our work, we are obliged to speak out. We are not afraid to admit our mistakes, correct them, and learn from them. We listen, learn and teach simultaneously within our team. We are open.',
      },
      codingInFun: {
        title: 'Coding in fun',
        content:
          'We may seem as serious people, but we do not forget about fun. We believe that each person’s life should consist of daily fun. Fun is part of happy life. As at least 33% of our awake time we consume in our work, we do not forget about laughing, joking, entertainment, hobbies, small chats, and so much more. We do not consider ourselves too serious, it’s fun to work with us.',
      },
    },
  },
};

export default getFlattenLocale(enLocale);
