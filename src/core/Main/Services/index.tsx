import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { CardItem } from './CardItem';
import { serviceList } from './constants';

function Services(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column">
      <SectionHeader title="Our [services]" />
      <Typography variant="body2" className={classes.paragraph}>
        Codnity Group consists of amazing Latvian engineering talent in order to digitalize any size businesses.
      </Typography>
      <Grid container spacing={2}>
        {serviceList.map((item, i) => (
          <Grid key={i} item lg={3} md={4}>
            <CardItem title={item.title} content={item.content} icon={item.icon} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export { Services };
