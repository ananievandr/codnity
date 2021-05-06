import { IService } from './interfaces/services';

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
  ourApproach: {
    partnership: {
      clientToPartner: {
        title: string;
        subTitle: string;
        content: string;
      };
      riskManagement: {
        title: string;
        subTitle: string;
        content: string;
      };
      agile: {
        title: string;
        subTitle: string;
        content: string;
      };
      humanCenteredDesign: {
        title: string;
        subTitle: string;
        content: string;
      };
    };
  };
  main: {
    services: {
      idea: {
        title: string;
        content: string;
      };
      design: {
        title: string;
        content: string;
      };
      web: {
        title: string;
        content: string;
      };
      backend: {
        title: string;
        content: string;
      };
      banking: {
        title: string;
        content: string;
      };
      app: {
        title: string;
        content: string;
      };
      support: {
        title: string;
        content: string;
      };
      platform: {
        title: string;
        content: string;
      };
    };
  };
  servicesPage: {
    ideationAndEvaluation: IService;
    design: IService;
    webDevelopment: IService;
    backend: IService;
    banking: IService;
    appDevelopment: IService;
    supportAndManagement: IService;
    platformDevelopment: IService;
  };
}
