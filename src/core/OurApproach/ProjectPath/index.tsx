import React, { ReactElement } from 'react';
import { Box, Typography } from '@material-ui/core';

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
      <Typography variant="h1" className={classes.title}>
        Project path
      </Typography>
      <Box component="div" width="100%" height="100%">
        <IconCodnity name="asset:project-path" className={classes.iconDesktop} width="100%" height="100%" />
        <IconCodnity name="asset:project-path-tablet" className={classes.iconTablet} width="100%" height="100%" />
        <IconCodnity name="asset:project-path-mobile" className={classes.iconMobile} width="100%" height="100%" />
      </Box>
    </Box>
  );
}

export { ProjectPath };
