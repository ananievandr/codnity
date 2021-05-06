import React, { ReactElement } from 'react';
import { Box, Grid } from '@material-ui/core';

import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { CardItem } from './CardItem';
import { industriesList } from './constants';

function Industries(): ReactElement {
  const classes = useStyles();
  return (
    <Box
      component="div"
      className={classes.root}
      justifyContent="center"
      display="flex"
      flexDirection="column"
      width="100%"
    >
      <SectionHeader title="Industries of proven [expertise]" className={classes.title} />
      <Grid container className={classes.grid}>
        {industriesList.map((item, i) => (
          <Grid key={i} item lg={4} md={6} sm={6} xs={6} className={classes.gridItem}>
            <CardItem title={item.title} contentItems={item.content} icon={item.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export { Industries };
