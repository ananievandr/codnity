import { Box } from '@material-ui/core';
import clsx from 'clsx';

import React, { ReactElement, useState } from 'react';
import { IconCodnity } from 'uikit/IconCodnity';
import { getSoftwareList } from './constants';
import { getStyles } from './styles';

function Software(): ReactElement {
  const classes = getStyles();
  const [hover, setHover] = useState({});
  const softwareList = getSoftwareList();

  const onMouseEnterHandle = (itemKey: string) => {
    setHover({
      [itemKey]: true,
    });
  };

  const onMouseLeaveHandle = (itemKey: string) => {
    setHover({
      [itemKey]: false,
    });
  };

  return (
    <Box component="div" position="relative" className={classes.root}>
      {softwareList.map((item, i) => (
        <Box
          component="div"
          className={clsx(classes.rounded, item.className, { [classes.active]: hover[item.text] })}
          onMouseEnter={() => onMouseEnterHandle(item.text)}
          onMouseLeave={() => onMouseLeaveHandle(item.text)}
          key={i}
        >
          {hover[item.text] ? (
            <div className={classes.hoverItem}>{item.text}</div>
          ) : (
            <IconCodnity name={item.iconName} width="100%" height="100%" />
          )}
        </Box>
      ))}
    </Box>
  );
}

export { Software };
