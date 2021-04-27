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
  ourApproach: {
    partnership: {
      clientToPartner: {
        title: 'Client to Partner',
        subTitle: 'Getting to know your partner as getting for marriage',
        content:
          "Get to know your client as well as your long-term partner. It is not a banking rule or requirement by the legislation. We truly want to know our client, and with every client we aim for the long-term partnership. This allows us not only to maintain good relationships, but also we are able to understand your business, you company, your team, and with that we can build better products or solutions for your company's customers. We are with both hands for transparency, honesty, integrity.",
      },
      riskManagement: {
        title: 'Risk Management',
        subTitle: 'Stopping roadblocks before they happen',
        content:
          'Identify and manage obstacles before they are at sight. To identify potential risks at the start of and during any software project is critical in the success of that project. Risks can come from any place — from budget, schedule, technology, and people to name just a few. We identify and deal with all of those as well as ensure continuity in the project. Whether we’re facing a challenge for the first time or the hundredth time, our team proposes, validates, and implements solutions that make the most sense for the project.',
      },
      agile: {
        title: 'Agile Software Development',
        subTitle: 'Blending Agile with Offshore',
        content:
          'Most agile development methods break product development work into small increments that minimize the amount of up-front planning and design. Iterations, or sprints, are short time frames (timeboxes) that typically last from one to four weeks. Each iteration involves a cross-functional team working in all functions: planning, analysis, design, coding, unit testing, and acceptance testing. At the end of the iteration a working product is demonstrated to stakeholders. This minimizes overall risk and allows the product to adapt to changes quickly. An iteration might not add enough functionality to warrant a market release, but the goal is to have an available release (with minimal bugs) at the end of each iteration. Through incremental development products have room to "fail often and early" throughout each iterative phase instead of drastically on a final release date. Multiple iterations might be required to release a product or new features. Working software is the primary measure of progress.',
      },
      humanCenteredDesign: {
        title: 'Human Centered Design',
        subTitle: 'Focusing on people’s real needs',
        content:
          'We use human-centered design process for every screen, view, and app we design and build. The process ensures that the design match the needs and capabilities of the people for whom they are intended. What are their needs? More importantly, what are the behaviors motivating those needs? By taking a human-centered design approach, we’re able to better meet and anticipate people’s expectations as they interact with your business and products. The human centered design process goes through four key activities - Observation, Idea generation, Prototyping, and Testing. These four activities are iterated - they repeated over and over, with each cycle yielding more insights and getting closer to the desired solution. This allows us to really understand the people you’re trying to reach and how to successfully engage them with your product or service. From there, we use our findings to guide how we design in a way that solves the problem and meets people’s needs in the simplest way possible.',
      },
    },
  },
};

export default getFlattenLocale(enLocale);
