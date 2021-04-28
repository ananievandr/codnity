import React, { ReactElement } from 'react';
import { Box, Typography, Grid } from '@material-ui/core';

import { useStyles } from './styles';
import { CardItem } from './CardItem';

function Technologies(): ReactElement {
  const classes = useStyles();
  const array = [
    {
      title: 'Frontend',
      icon: 'technology:brush',
    },
    {
      title: 'Backend',
      icon: 'technology:technology-settings',
    },
    {
      title: 'Databases',
      icon: 'technology:database',
    },
    {
      title: 'Third-party-services',
      icon: 'technology:device-hub',
    },
    {
      title: 'Payments',
      icon: 'technology:wallet',
    },
    {
      title: 'iOS',
      icon: 'technology:iphone',
    },
    {
      title: 'Android',
      icon: 'technology:android',
    },
    {
      title: 'Analytics',
      icon: 'technology:graph-bar',
    },
    {
      title: 'DevOps',
      icon: 'technology:infinity',
    },
    {
      title: 'Testing',
      icon: 'technology:mobile-friendly',
    },
  ];
  return (
    <Box
      component="div"
      className={classes.root}
      justifyContent="center"
      display="flex"
      flexDirection="column"
      width="100%"
    >
      <Typography variant="h1" className={classes.title}>
        Diverse technologies
      </Typography>
      <Grid container spacing={1}>
        {array.map((item, i) => (
          <Grid key={i} className={classes.gridItem}>
            <CardItem title={item.title} icon={item.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export { Technologies };
