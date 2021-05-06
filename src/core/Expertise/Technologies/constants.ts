import { Icons } from 'uikit/IconCodnity/utils/interfaces';

interface ICardItem {
  title: string;
  icon: Icons;
}

export const cardList: ICardItem[] = [
  {
    title: 'Frontend',
    icon: 'technology:brush',
  },
  {
    title: 'Backend',
    icon: 'technology:technology-settings',
  },
  {
    title: 'Databases',
    icon: 'technology:database',
  },
  {
    title: 'Third-party-services',
    icon: 'technology:device-hub',
  },
  {
    title: 'Payments',
    icon: 'technology:wallet',
  },
  {
    title: 'iOS',
    icon: 'technology:iphone',
  },
  {
    title: 'Android',
    icon: 'technology:android',
  },
  {
    title: 'Analytics',
    icon: 'technology:graph-bar',
  },
  {
    title: 'DevOps',
    icon: 'technology:infinity',
  },
  {
    title: 'Testing',
    icon: 'technology:mobile-friendly',
  },
];
