import { IconSizes } from 'uikit/IconCodnity/constants';
import { Icons } from 'uikit/IconCodnity/utils/interfaces';

import { getStyles } from './styles';

interface ISoftwareItem {
  text: string;
  iconName: Icons;
  className: string;
  iconSize: number;
}

export function getSoftwareList(): ISoftwareItem[] {
  const classes = getStyles();
  return [
    {
      text: 'Jira',
      iconName: 'software:jira',
      className: classes.itemA,
      iconSize: IconSizes.md32,
    },
    {
      text: 'git',
      iconName: 'software:git',
      className: classes.itemB,
      iconSize: IconSizes.lg40,
    },
    {
      text: 'go',
      iconName: 'software:go',
      className: classes.itemC,
      iconSize: IconSizes.lg40,
    },
    {
      text: 'react',
      iconName: 'software:react',
      className: classes.itemD,
      iconSize: IconSizes.xxxl86,
    },
    {
      text: 'nodejs',
      iconName: 'software:nodejs',
      className: classes.itemE,
      iconSize: IconSizes.lg40,
    },
    {
      text: 'nodejs',
      iconName: 'software:nodejs',
      className: classes.itemE,
      iconSize: IconSizes.lg40,
    },
    {
      text: 'python',
      iconName: 'software:python',
      className: classes.itemF,
      iconSize: IconSizes.xxl48,
    },
    {
      text: 'django',
      iconName: 'software:django',
      className: classes.itemG,
      iconSize: IconSizes.xxl48,
    },
    {
      text: 'angular',
      iconName: 'software:angular',
      className: classes.itemH,
      iconSize: IconSizes.xxl48,
    },
  ];
}
