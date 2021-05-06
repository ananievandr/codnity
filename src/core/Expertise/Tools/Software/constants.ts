import { Icons } from 'uikit/IconCodnity/utils/interfaces';
import { IconSizes } from 'uikit/IconCodnity/constants';

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
      text: 'gitlab',
      iconName: 'software:gitlab',
      className: classes.gitlab,
      iconSize: IconSizes.xxl48,
    },
    {
      text: 'js',
      iconName: 'software:js',
      className: classes.js,
      iconSize: IconSizes.sm24,
    },
    {
      text: 'python',
      iconName: 'software:python',
      className: classes.python,
      iconSize: IconSizes.xxl48,
    },
    {
      text: 'django',
      iconName: 'software:django',
      className: classes.django,
      iconSize: IconSizes.md32,
    },
    {
      text: 'mysql',
      iconName: 'software:mysql',
      className: classes.mysql,
      iconSize: IconSizes.xxl48,
    },
    {
      text: 'oracle',
      iconName: 'software:oracle',
      className: classes.oracle,
      iconSize: IconSizes.xxxl86,
    },
    {
      text: 'btstrp',
      iconName: 'software:bootstrap',
      className: classes.bootstrap,
      iconSize: IconSizes.sm24,
    },
    {
      text: 'cat',
      iconName: 'software:cat',
      className: classes.cat,
      iconSize: IconSizes.md32,
    },
    {
      text: 'html5',
      iconName: 'software:html5',
      className: classes.html5,
      iconSize: IconSizes.lg40,
    },
    {
      text: 'postgresql',
      iconName: 'software:postgresql',
      className: classes.postgresql,
      iconSize: IconSizes.xxl48,
    },
    {
      text: 'material',
      iconName: 'software:material-ui',
      className: classes.material,
      iconSize: IconSizes.lg40,
    },
    {
      text: 'php',
      iconName: 'software:php',
      className: classes.php,
      iconSize: IconSizes.xxxl86,
    },
    {
      text: 'kuber',
      iconName: 'software:kubernetes',
      className: classes.kubernetes,
      iconSize: IconSizes.xxl48,
    },
    {
      text: 'react',
      iconName: 'software:react',
      className: classes.react,
      iconSize: IconSizes.lg40,
    },
    {
      text: 'laravel',
      iconName: 'software:laravel',
      className: classes.laravel,
      iconSize: IconSizes.xxl48,
    },
    {
      text: '*nix',
      iconName: 'software:nix',
      className: classes.nix,
      iconSize: IconSizes.xxl48,
    },
    {
      text: 'docker',
      iconName: 'software:docker',
      className: classes.docker,
      iconSize: IconSizes.xxl48,
    },
    {
      text: 'mariadb',
      iconName: 'software:mariadb',
      className: classes.mariadb,
      iconSize: IconSizes.lg40,
    },
    {
      text: 'git',
      iconName: 'software:bitbucket',
      className: classes.bitbucket,
      iconSize: IconSizes.md32,
    },
  ];
}
