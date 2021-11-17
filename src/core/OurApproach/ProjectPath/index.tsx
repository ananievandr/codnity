import React, { ReactElement } from 'react';
import { Box } from '@material-ui/core';

import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { RoadMap } from './RoadMap';

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
      <SectionHeader className={classes.title} title="ourApproach.projectPath.header" />
      <Box
        component="div"
        width="100%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <RoadMap />
      </Box>
    </Box>
  );
}

export { ProjectPath };
