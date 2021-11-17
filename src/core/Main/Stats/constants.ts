import { Icons } from 'uikit/IconCodnity/utils/interfaces';

interface StatItem {
  content: string;
  value: string;
  icon: Icons;
}

export const statList: StatItem[] = [
  {
    content: 'main.stats.list.0.content',
    value: '3',
    icon: 'dev:startup',
  },
  {
    content: 'main.stats.list.1.content',
    value: '5',
    icon: 'dev:briefcase',
  },
  {
    content: 'main.stats.list.2.content',
    value: '2',
    icon: 'dev:office-building',
  },
];
