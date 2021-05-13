import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { SectionHeader } from 'uikit/SectionHeader';
import { IconCodnity } from 'uikit/IconCodnity';

import { useStyles } from './styles';

function Welcome(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item lg={6} md={12}>
        <SectionHeader title="[Who] we are" />
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            Codnity Group is located in Latvia. Latvia is globally known with it's high quality workforce which is
            precise, hard working, respectful, and always open-minded. We work 9 months a year 24/7, other months there
            is nothing to do as the weather is cold and daylight is on average 8 hours a day. Most of the Latvians speak
            99% English, the other 1% are Russian swore words.
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            However, Codnity Group consists not only from Latvians, we are actively looking for the talent in other
            parts of the world - East Europe, Russia, Azerbaijan, Vietnam, China, India, etc. We believe that virtues
            which we are looking for in our team members are all around the world. Therefore, our current team is global
            with hard working people.
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
