import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';
import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';

function Welcome(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item md={6} sm={12} className={classes.title}>
        <SectionHeader title="Our [competencies] generate positive business outcomes" />
      </Grid>
      <Grid item md={6} sm={12}>
        <IconCodnity name="asset:brainstorming" width="100%" height="100%" />
      </Grid>
    </Grid>
  );
}

export { Welcome };
