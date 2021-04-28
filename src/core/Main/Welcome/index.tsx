import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';
import { ButtonRouter } from 'uikit/ButtonRouter';
import { Routes } from 'utils/constants/Routes';

import { useStyles } from './styles';

function Welcome(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item md={6} sm={12}>
        <Typography variant="h1">
          We develop state of art software and digital products for ambitions companies
        </Typography>
        <ButtonRouter className={classes.button} title="get free consultation" to={Routes.getInTouch} />
      </Grid>
      <Grid item md={6} sm={12}>
        <IconCodnity className={classes.icon} name="asset:web-development" width="100%" height="100%" />
      </Grid>
    </Grid>
  );
}

export { Welcome };
