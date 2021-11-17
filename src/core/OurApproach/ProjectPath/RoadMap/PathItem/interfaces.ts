import { Icons } from 'uikit/IconCodnity/utils/interfaces';

export interface PathItemProps {
  icon: Icons;
  title: string;
  items?: string[];
  isLast?: boolean;
  index?: number;
}
