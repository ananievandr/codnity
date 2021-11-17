import { design } from './design';
import { ideationAndEvaluation } from './ideationAndEvaluation';
import { supportAndManagement } from './supportAndManagement';
import { webDevelopment } from './webDevelopment';

export const servicesPage = {
  servicesPage: {
    ...ideationAndEvaluation,
    ...design,
    ...webDevelopment,
    welcome: {
      header: 'Our [services]',
      subHeader:
        'Codnity Group consists of amazing Latvian engineering talent in order to digitalize any size businesses.',
    },
    backend: {
      header: {
        title: 'Backend system development or enterprise apps',
        subTitle:
          'You can find lots of ready solutions for your company’s CRM or CMS, but they may not give you a full experience. We can custom-build a solutions that solves all your specific problems and satisfies all of your business’ needs.',
      },
    },
    banking: {
      header: {
        title: 'Banking & Fintech',
        subTitle:
          'All kinds of IT services and product developments for banking & fintech industry is our core speciality. Our founders combine almost 30 years of experience in IT and banking sector. That gives us ability to provide any kind of IT services specifically tailored for banks and fintechs. Our products and solutions are user-friendly, cutting edge and affordable. Our client-centred approach will focus on understanding your business needs, your market position and competition, and providing expert consulting.',
      },
    },
    appDevelopment: {
      header: {
        title: 'App development',
        subTitle:
          "Mobile apps are in every person's pocket. If you are there, you can constantly be in customers' minds. We develop apps which are appealing and useful for the customer, thus, they are not getting erased from the phone.",
      },
      services: {
        column1: [
          {
            cellContent: 'iOS',
          },
          {
            cellContent: 'Android',
          },
        ],
        column2: [
          {
            cellContent: 'Cross-platform development',
          },
        ],
      },
    },
    ...supportAndManagement,
    platformDevelopment: {
      header: {
        title: 'Platform development',
        subTitle:
          'Platforms, marketplaces, gig economy, the world is changing and platforms give you opportunity to connect two different sides more easily and without hustle. We can develop any kind of platform you desire.',
      },
    },
  },
};
