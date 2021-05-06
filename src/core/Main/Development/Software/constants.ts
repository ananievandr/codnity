import { Icons } from 'uikit/IconCodnity/utils/interfaces';

import { getStyles } from './styles';

interface ISoftwareItem {
  text: string;
  iconName: Icons;
  className: string;
}

export function getSoftwareList(): ISoftwareItem[] {
  const classes = getStyles();
  return [
    {
      text: 'Jira',
      iconName: 'software:jira',
      className: classes.itemA,
    },
    {
      text: 'git',
      iconName: 'software:git',
      className: classes.itemB,
    },
    {
      text: 'go',
      iconName: 'software:go',
      className: classes.itemC,
    },
    {
      text: 'react',
      iconName: 'software:react',
      className: classes.itemD,
    },
    {
      text: 'nodejs',
      iconName: 'software:nodejs',
      className: classes.itemE,
    },
    {
      text: 'nodejs',
      iconName: 'software:nodejs',
      className: classes.itemE,
    },
    {
      text: 'python',
      iconName: 'software:python',
      className: classes.itemF,
    },
    {
      text: 'django',
      iconName: 'software:django',
      className: classes.itemG,
    },
    {
      text: 'angular',
      iconName: 'software:angular',
      className: classes.itemH,
    },
  ];
}
