import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { SectionHeader } from 'uikit/SectionHeader';
import { IconCodnity } from 'uikit/IconCodnity';

import { useStyles } from './styles';

function Welcome(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item lg={6} md={12}>
        <SectionHeader title="company.welcome.header" />
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            <FormattedMessage id="company.welcome.body1" />
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            <FormattedMessage id="company.welcome.body2" />
          </Typography>
        </div>
      </Grid>
      <Grid item lg={6} md={12}>
        <IconCodnity name="asset:blogging" width="100%" height="100%" />
      </Grid>
      <div className={classes.greenCircle} />
      <div className={classes.yellowCircle} />
      <div className={classes.redCircle} />
      <div className={classes.greenBigCircle} />
    </Grid>
  );
}

export { Welcome };
