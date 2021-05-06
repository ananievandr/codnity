import { Icons } from 'uikit/IconCodnity/utils/interfaces';

interface StatItem {
  content: string;
  value: string;
  icon: Icons;
}

export const statList: StatItem[] = [
  {
    content: 'Projects for startups',
    value: '95',
    icon: 'dev:startup',
  },
  {
    content: 'Projects for small businesses',
    value: '18',
    icon: 'dev:briefcase',
  },
  {
    content: 'Projects for medium-sized enterprises',
    value: '9',
    icon: 'dev:office-building',
  },
];
