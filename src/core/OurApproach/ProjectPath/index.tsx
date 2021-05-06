import React, { ReactElement } from 'react';
import { Box } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';
import { SectionHeader } from 'uikit/SectionHeader';

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
      <SectionHeader className={classes.title} title="Project [path]" />
      <Box component="div" width="100%" height="100%">
        <IconCodnity name="asset:project-path" className={classes.iconDesktop} width="100%" height="100%" />
        <IconCodnity name="asset:project-path-tablet" className={classes.iconTablet} width="100%" height="100%" />
        <IconCodnity name="asset:project-path-mobile" className={classes.iconMobile} width="100%" height="100%" />
      </Box>
    </Box>
  );
}

export { ProjectPath };
