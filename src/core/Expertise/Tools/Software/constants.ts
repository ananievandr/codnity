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
      text: 'gitlab',
      iconName: 'software:gitlab',
      className: classes.gitlab,
    },
    {
      text: 'js',
      iconName: 'software:js',
      className: classes.js,
    },
    {
      text: 'python',
      iconName: 'software:python',
      className: classes.python,
    },
    {
      text: 'django',
      iconName: 'software:django',
      className: classes.django,
    },
    {
      text: 'mysql',
      iconName: 'software:mysql',
      className: classes.mysql,
    },
    {
      text: 'oracle',
      iconName: 'software:oracle',
      className: classes.oracle,
    },
    {
      text: 'btstrp',
      iconName: 'software:bootstrap',
      className: classes.bootstrap,
    },
    {
      text: 'cat',
      iconName: 'software:cat',
      className: classes.cat,
    },
    {
      text: 'html5',
      iconName: 'software:html5',
      className: classes.html5,
    },
    {
      text: 'postgresql',
      iconName: 'software:postgresql',
      className: classes.postgresql,
    },
    {
      text: 'material',
      iconName: 'software:material-ui',
      className: classes.material,
    },
    {
      text: 'php',
      iconName: 'software:php',
      className: classes.php,
    },
    {
      text: 'kuber',
      iconName: 'software:kubernetes',
      className: classes.kubernetes,
    },
    {
      text: 'react',
      iconName: 'software:react',
      className: classes.react,
    },
    {
      text: 'laravel',
      iconName: 'software:laravel',
      className: classes.laravel,
    },
    {
      text: '*nix',
      iconName: 'software:nix',
      className: classes.nix,
    },
    {
      text: 'docker',
      iconName: 'software:docker',
      className: classes.docker,
    },
    {
      text: 'mariadb',
      iconName: 'software:mariadb',
      className: classes.mariadb,
    },
    {
      text: 'git',
      iconName: 'software:bitbucket',
      className: classes.bitbucket,
    },
  ];
}
