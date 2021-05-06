import { Box } from '@material-ui/core';
import clsx from 'clsx';

import React, { ReactElement, useState } from 'react';
import { IconCodnity } from 'uikit/IconCodnity';
import { IconSizes } from 'uikit/IconCodnity/constants';
import { getSoftwareList } from './constants';
import { getStyles } from './styles';

function Software(): ReactElement {
  const classes = getStyles();
  const [hover, setHover] = useState({});
  const softwareList = getSoftwareList();

  const onMouseEnterHandle = (itemKey: string) => {
    setHover({
      ...hover,
      [itemKey]: true,
    });
  };

  const onMouseLeaveHandle = (itemKey: string) => {
    setHover({
      ...hover,
      [itemKey]: false,
    });
  };

  return (
    <Box component="div" position="relative" className={classes.root}>
      {softwareList.map((item, i) => (
        <Box
          component="div"
          className={clsx(classes.rounded, item.className)}
          onMouseEnter={() => onMouseEnterHandle(item.text)}
          onMouseLeave={() => onMouseLeaveHandle(item.text)}
          key={i}
        >
          {hover[item.text] ? (
            <div className={classes.hoverItem}>{item.text}</div>
          ) : (
            <IconCodnity name={item.iconName} size={IconSizes.md32} />
          )}
        </Box>
      ))}
    </Box>
  );
}

export { Software };
