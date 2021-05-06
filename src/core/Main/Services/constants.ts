import { Icons } from 'uikit/IconCodnity/utils/interfaces';

interface serviceItem {
  title: string;
  content: string;
  icon: Icons;
}

export const serviceList: serviceItem[] = [
  {
    title: 'main.services.idea.title',
    content: 'main.services.idea.content',
    icon: 'main:idea',
  },
  {
    title: 'main.services.design.title',
    content: 'main.services.design.content',
    icon: 'main:vector',
  },
  {
    title: 'main.services.web.title',
    content: 'main.services.web.content',
    icon: 'main:website',
  },
  {
    title: 'main.services.backend.title',
    content: 'main.services.backend.content',
    icon: 'main:code',
  },
  {
    title: 'main.services.banking.title',
    content: 'main.services.banking.content',
    icon: 'main:fintech',
  },
  {
    title: 'main.services.app.title',
    content: 'main.services.app.content',
    icon: 'main:coding',
  },
  {
    title: 'main.services.support.title',
    content: 'main.services.support.content',
    icon: 'main:maintenance',
  },
  {
    title: 'main.services.platform.title',
    content: 'main.services.platform.content',
    icon: 'main:database',
  },
];
