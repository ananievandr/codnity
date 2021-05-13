import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';
import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';

function Welcome(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item lg={6} md={12} sm={12} className={classes.title}>
        <SectionHeader title="Our [competencies] generate positive business outcomes" />
      </Grid>
      <Grid item lg={6} md={12} sm={12}>
        <IconCodnity name="asset:brainstorming" width="100%" height="100%" />
      </Grid>
      <div className={classes.greenCircle} />
      <div className={classes.yellowCircle} />
      <div className={classes.redCircle} />
      <div className={classes.greenBigCircle} />
    </Grid>
  );
}

export { Welcome };
