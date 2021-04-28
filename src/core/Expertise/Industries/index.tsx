import React, { ReactElement } from 'react';
import { Box, Typography, Grid } from '@material-ui/core';

import { useStyles } from './styles';
import { CardItem } from './CardItem';

function Industries(): ReactElement {
  const classes = useStyles();
  const array = [
    {
      title: 'Banking & Fintech',
      content: ['Personal tools', 'Automatization', 'Platforms', 'Web apps'],
      icon: 'industry:online-payment',
    },
    {
      title: 'Banking & Fintech',
      content: ['Personal tools', 'Automatization', 'Platforms', 'Web apps'],
      icon: 'industry:online-shopping',
    },
    {
      title: 'Banking & Fintech',
      content: ['Personal tools', 'Automatization', 'Platforms', 'Web apps'],
      icon: 'industry:settings',
    },
    {
      title: 'Banking & Fintech',
      content: ['Personal tools', 'Automatization', 'Platforms', 'Web apps'],
      icon: 'industry:chatbot',
    },
    {
      title: 'Banking & Fintech',
      content: ['Personal tools', 'Automatization', 'Platforms', 'Web apps'],
      icon: 'industry:web-design',
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
        Industries of proven expertise
      </Typography>
      <Grid container>
        {array.map((item, i) => (
          <Grid key={i} item md={4} sm={6} className={classes.gridItem}>
            <CardItem title={item.title} contentItems={item.content} icon={item.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export { Industries };
