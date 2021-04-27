export interface Locale {
  [key: string]: string;
}

export interface LocaleMessages {
  navigation: {
    career: string;
    insights: string;
    services: string;
    expertise: string;
    ourApproach: string;
    company: string;
    getInTouch: string;
    terms: string;
    privacyPolicy: string;
  };
  expertise: {
    competence: string;
    caseStudies: string;
  };
  footer: {
    description: string;
  };
  company: {
    founder1: {
      title: string;
      content: string;
    };
    founder2: {
      title: string;
      content: string;
    };
    ourValues: {
      codingInIntegrity: {
        title: string;
        content: string;
      };
      codingInOpennes: {
        title: string;
        content: string;
      };
      codingInFun: {
        title: string;
        content: string;
      };
    };
  };
}
