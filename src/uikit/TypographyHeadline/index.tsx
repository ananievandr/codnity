import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';
import { TypographyHeadlineProps } from './interfaces';

function TypographyHeadline({
  markedWidth = 0,
  markedFrom,
  className,
  ...props
}: TypographyHeadlineProps): ReactElement {
  const classes = useStyles();
  const nonMarkedWidth = 100 - markedWidth;
  const markedStyles = {
    width: `${markedWidth}%`,
    [`margin${markedFrom === 'start' ? 'Right' : 'Left'}`]: `${nonMarkedWidth}%`,
  };
  return (
    <div className={classes.root}>
      <Typography {...props} className={clsx(className, classes.typography)}>
        {props.children}
        <span className={classes.contentMarked} style={markedStyles} />
      </Typography>
    </div>
  );
}

export { TypographyHeadline };
