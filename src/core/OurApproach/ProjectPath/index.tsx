import React, { ReactElement } from 'react';
import { TypographyHeadline } from 'uikit/TypographyHeadline';
import { Box } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';

import { useStyles } from './styles';

function ProjectPath(): ReactElement {
  const classes = useStyles();
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      className={classes.root}
      width="100%"
    >
      <TypographyHeadline variant="h3" markedFrom="end" markedWidth={38} className={classes.title}>
        Project path
      </TypographyHeadline>
      <div className={classes.iconWrapper}>
        <IconCodnity name="asset:project-path" width="100%" height="100%" />
      </div>
    </Box>
  );
}

export { ProjectPath };
