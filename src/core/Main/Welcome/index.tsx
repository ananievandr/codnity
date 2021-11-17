import React, { ReactElement } from 'react';
import { Box, Grid } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';
import { ButtonRouter } from 'uikit/ButtonRouter';
import { Routes } from 'utils/constants/Routes';
import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';

function Welcome(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item lg={6} md={12} className={classes.gridTitle}>
        <Box component="div" className={classes.titleBox}>
          <SectionHeader title="main.welcome.header" />
          <ButtonRouter className={classes.button} title="main.welcome.button" to={Routes.getInTouch} />
        </Box>
      </Grid>
      <Grid item lg={6} md={12}>
        <IconCodnity name="asset:web-development" width="100%" height="100%" />
      </Grid>
      <div className={classes.greenCircle} />
      <div className={classes.yellowCircle} />
      <div className={classes.redCircle} />
    </Grid>
  );
}

export { Welcome };
