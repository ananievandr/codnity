import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';

import { IconCodnity } from 'uikit/IconCodnity';
import { SectionHeader } from 'uikit/SectionHeader';
import withScrollToTop from 'hocs/ScrollToTop';

import { useStyles } from './styles';

function Career(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item lg={6} md={12}>
        <SectionHeader title="[Start career] at Codnity" />
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
      <Grid item lg={6} md={12}>
        <IconCodnity name="asset:hiring-people" width="100%" height="100%" />
      </Grid>
      <div className={classes.greenCircle} />
      <div className={classes.yellowCircle} />
      <div className={classes.redCircle} />
    </Grid>
  );
}

export default withScrollToTop(Career);
