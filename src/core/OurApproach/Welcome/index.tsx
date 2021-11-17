import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { IconCodnity } from 'uikit/IconCodnity';
import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';

function Welcome(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item lg={6} md={12}>
        <SectionHeader title="ourApproach.welcome.header" />
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            <FormattedMessage id="ourApproach.welcome.subHeader" />
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
