import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';

import { useStyles } from './styles';

function Welcome(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item md={6} sm={12}>
        <Typography variant="h1">We’ve developed a better approach to custom software development</Typography>
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            By leveraging Agile development methodologies, human-centered design tools, and best practices around
            security and risk management, we help organizations meet their needs reliably and efficiently.
          </Typography>
        </div>
      </Grid>
      <Grid item md={6} sm={12}>
        <IconCodnity className={classes.icon} name="asset:approach" width="100%" height="100%" />
      </Grid>
    </Grid>
  );
}

export { Welcome };
