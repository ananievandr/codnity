import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import { CardItem } from './CardItem';

function Services(): ReactElement {
  const classes = useStyles();
  const array = [
    {
      title: '',
      content: '',
      icon: 'main:idea',
    },
    {
      title: '',
      content: '',
      icon: 'main:vector',
    },
    {
      title: '',
      content: '',
      icon: 'main:website',
    },
    {
      title: '',
      content: '',
      icon: 'main:code',
    },
    {
      title: '',
      content: '',
      icon: 'main:fintech',
    },
    {
      title: '',
      content: '',
      icon: 'main:coding',
    },
    {
      title: '',
      content: '',
      icon: 'main:maintenance',
    },
    {
      title: '',
      content: '',
      icon: 'main:database',
    },
  ];
  return (
    <Grid container className={classes.root} direction="column">
      <Typography variant="h1">Our services</Typography>
      <Typography variant="body2" className={classes.paragraph}>
        Codnity Group consists of amazing Latvian engineering talent in order to digitalize any size businesses.
      </Typography>
      <Grid container spacing={2}>
        {array.map((item, i) => (
          <Grid key={i} item md={3} sm={4}>
            <CardItem
              title="company.ourValues.codingInIntegrity.title"
              content="company.ourValues.codingInIntegrity.content"
              icon={item.icon}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export { Services };
