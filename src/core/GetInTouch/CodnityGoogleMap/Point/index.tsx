import React, { ReactElement, memo } from 'react';
import { Box } from '@material-ui/core';

import { useStyles } from './styles';

function Point(): ReactElement {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <div className={classes.point}>
        <div className={classes.centerPoint} />
      </div>
      <div className={classes.tooltip}>
        <Box component="div" fontWeight="bold">
          Riga, Latvia
        </Box>
        <Box component="div" fontWeight="400">
          Barona Str 24/26,
        </Box>
      </div>
      <div className={classes.triangleRight} />
    </Box>
  );
}

export default memo(Point);
