import React, { ReactElement } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';

import { useStyles } from './styles';

function Welcome(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item md={6} sm={12}>
        <Typography variant="h1">Our services</Typography>
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            Codnity Group consists of amazing Latvian engineering talent in order to digitalize any size businesses.
          </Typography>
        </div>
      </Grid>
      <Grid item md={6} sm={12}>
        <IconCodnity className={classes.icon} name="asset:our-services" width="100%" height="100%" />
      </Grid>
    </Grid>
  );
}

export { Welcome };
