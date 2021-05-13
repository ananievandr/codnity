import { Icons } from 'uikit/IconCodnity/utils/interfaces';

interface serviceItem {
  title: string;
  content: string;
  icon: Icons;
  routePath: string;
}

export const serviceList: serviceItem[] = [
  {
    title: 'main.services.idea.title',
    content: 'main.services.idea.content',
    icon: 'main:idea',
    routePath: 'idea',
  },
  {
    title: 'main.services.design.title',
    content: 'main.services.design.content',
    icon: 'main:vector',
    routePath: 'design',
  },
  {
    title: 'main.services.web.title',
    content: 'main.services.web.content',
    icon: 'main:website',
    routePath: 'website',
  },
  {
    title: 'main.services.backend.title',
    content: 'main.services.backend.content',
    icon: 'main:code',
    routePath: 'backend',
  },
  {
    title: 'main.services.banking.title',
    content: 'main.services.banking.content',
    icon: 'main:fintech',
    routePath: 'banking',
  },
  {
    title: 'main.services.app.title',
    content: 'main.services.app.content',
    icon: 'main:coding',
    routePath: 'app',
  },
  {
    title: 'main.services.support.title',
    content: 'main.services.support.content',
    icon: 'main:maintenance',
    routePath: 'support',
  },
  {
    title: 'main.services.platform.title',
    content: 'main.services.platform.content',
    icon: 'main:database',
    routePath: 'platform',
  },
];
