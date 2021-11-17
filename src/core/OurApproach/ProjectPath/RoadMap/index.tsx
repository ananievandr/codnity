import React, { ReactElement } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { list, mobileList } from './constants';
import { PathItem } from './PathItem';
import { useStyles } from './styles';

function RoadMap(): ReactElement {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const items = isMobile ? [...mobileList] : [...list];

  return (
    <div className={classes.row}>
      {items.map((item, i) => (
        <PathItem
          key={i}
          title={item.title}
          icon={item.icon}
          items={item.items}
          isLast={i === list.length - 1}
          index={i}
        />
      ))}
    </div>
  );
}

export { RoadMap };
