import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';
import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';

function Welcome(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item lg={6} md={12}>
        <SectionHeader title="We’ve developed [a better approach] to custom software development" />
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            By leveraging Agile development methodologies, human-centered design tools, and best practices around
            security and risk management, we help organizations meet their needs reliably and efficiently.
          </Typography>
        </div>
      </Grid>
      <Grid item lg={6} md={12}>
        <IconCodnity name="asset:approach" width="100%" height="100%" />
      </Grid>
      <div className={classes.greenCircle} />
      <div className={classes.yellowCircle} />
      <div className={classes.redCircle} />
      <div className={classes.greenBigCircle} />
    </Grid>
  );
}

export { Welcome };
