import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import { IconCodnity } from 'uikit/IconCodnity';

function Welcome(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item md={6} sm={12} className={classes.title}>
        <Typography variant="h1">Our competencies generate positive business outcomes</Typography>
      </Grid>
      <Grid item md={6} sm={12}>
        <IconCodnity className={classes.icon} name="asset:brainstorming" width="100%" height="100%" />
      </Grid>
    </Grid>
  );
}

export { Welcome };
