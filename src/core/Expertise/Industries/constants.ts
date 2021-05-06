import { Icons } from 'uikit/IconCodnity/utils/interfaces';

interface IndustriesItem {
  title: string;
  content: string[];
  icon: Icons;
}

export const industriesList: IndustriesItem[] = [
  {
    title: 'Banking & Fintech',
    content: ['Personal tools', 'Automatization', 'Platforms', 'Web apps', 'Mobile apps', 'Financial analytics'],
    icon: 'industry:online-payment',
  },
  {
    title: 'Retail & Wholesale',
    content: ['E-commerce', 'B2B platforms and systems', 'Web designs', 'Mobile apps'],
    icon: 'industry:online-shopping',
  },
  {
    title: 'Utilities',
    content: [
      'Waste management',
      'Self-service solutions',
      'Integrations',
      'Infrastructure',
      'Process improvement automatization',
    ],
    icon: 'industry:settings',
  },
  {
    title: 'Telco',
    content: [
      'Self-service solutions',
      'IT consulting & management',
      'TV platforms',
      'Infrastructure',
      'Automatization',
      'Web designs',
      'Web apps',
    ],
    icon: 'industry:chatbot',
  },
  {
    title: 'And more industries',
    content: ['E-commerce', 'Non profit organizations', 'Healthcare', 'Renewable energy', 'Mobility', 'Etc'],
    icon: 'industry:web-design',
  },
];
