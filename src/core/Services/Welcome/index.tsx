import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';
import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';

function Welcome(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item lg={6} md={12} className={classes.gridTitle}>
        <SectionHeader title="servicesPage.welcome.header" />
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            <FormattedMessage id="servicesPage.welcome.subHeader" />
          </Typography>
        </div>
      </Grid>
      <Grid item lg={6} md={12}>
        <IconCodnity name="asset:our-services" width="100%" height="100%" />
      </Grid>
      <div className={classes.greenCircle} />
      <div className={classes.yellowCircle} />
      <div className={classes.redCircle} />
      <div className={classes.greenBigCircle} />
    </Grid>
  );
}

export { Welcome };
