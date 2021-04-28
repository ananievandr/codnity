import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { IconCodnity } from 'uikit/IconCodnity';

import { useStyles } from './styles';

function Career(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item md={6} sm={12}>
        <Typography variant="h1">Start career at Codnity</Typography>
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            If you want to have a kick ass career, understand business, and around what the world is spinning, also you
            have the guts, the ambition, and you like to have fun, we are always looking for great people and ready to
            hire.
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            We guarantee that your personality and career will blow up, if you are ready to work and learn.*
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            Send your CV to{' '}
            <a className={clsx(classes.mail, classes.bold)} href="mailto:kickass@codnity.com">
              kickass@codnity.com
            </a>{' '}
            with note “I would like to kick-ass”
          </Typography>
          <Typography variant="body2" className={clsx(classes.paragraph, classes.bold)}>
            *Take into account that blowing up could have different meanings. Just joking :)
          </Typography>
        </div>
      </Grid>
      <Grid item md={6} sm={12}>
        <IconCodnity className={classes.icon} name="asset:hiring-people" width="100%" height="100%" />
      </Grid>
    </Grid>
  );
}

export { Career };
