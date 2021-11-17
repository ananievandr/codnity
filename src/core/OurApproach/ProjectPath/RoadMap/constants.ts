import { PathItemProps } from './PathItem/interfaces';

const card1: PathItemProps = {
  icon: 'path:calendar',
  title: 'ourApproach.projectPath.list1.0.title',
  items: ['ourApproach.projectPath.list1.0.items.0', 'ourApproach.projectPath.list1.0.items.1'],
};

const card2: PathItemProps = {
  icon: 'path:chart-pie',
  title: 'ourApproach.projectPath.list1.1.title',
  items: [
    'ourApproach.projectPath.list1.1.items.0',
    'ourApproach.projectPath.list1.1.items.1',
    'ourApproach.projectPath.list1.1.items.2',
  ],
};

const card3: PathItemProps = {
  icon: 'path:desktop',
  title: 'ourApproach.projectPath.list1.2.title',
  items: ['ourApproach.projectPath.list1.2.items.0', 'ourApproach.projectPath.list1.2.items.1'],
};

const card4: PathItemProps = {
  icon: 'path:file-check',
  title: 'ourApproach.projectPath.list2.0.title',
  items: [
    'ourApproach.projectPath.list2.0.items.0',
    'ourApproach.projectPath.list2.0.items.1',
    'ourApproach.projectPath.list2.0.items.2',
  ],
};

const card5: PathItemProps = {
  icon: 'path:rocket',
  title: 'ourApproach.projectPath.list2.1.title',
  items: ['ourApproach.projectPath.list2.1.items.0'],
};

const card6: PathItemProps = {
  icon: 'path:presentation-check',
  title: 'ourApproach.projectPath.list3.0.title',
  items: ['ourApproach.projectPath.list3.0.items.0'],
};

const card7: PathItemProps = {
  icon: 'path:grin',
  title: 'ourApproach.projectPath.finalPath',
};

export const list: PathItemProps[] = [card1, card2, card3, card4, card5, card6, card7];

export const mobileList: PathItemProps[] = [card1, card2, card5, card3, card4, card6, card7];
