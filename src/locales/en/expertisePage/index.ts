import { indusriesList } from './industries';

export const expertisePage = {
  expertise: {
    welcome: {
      header: 'Our [competencies] generate positive business outcomes',
    },
    tools: {
      header: 'Practices and [tools]',
      subHeader:
        'In our development processes, we use tools and practices that contribute to the success of our projects and facilitate communication with our clients.',
    },
    technologies: {
      header: 'Diverse [technologies]',
      subHeader:
        'Armed with years of experience developing web and mobile solutions, we consult our clients on which technology stack can positively impact their businesses.',
    },
    industries: {
      header: 'Industries of proven [expertise]',
      ...indusriesList,
    },
  },
};
