import React, { ReactElement } from 'react';
import { Box, Grid } from '@material-ui/core';

import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { CardItem } from './CardItem';
import { cardList } from './constants';

function Technologies(): ReactElement {
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
      <SectionHeader className={classes.title} title="Diverse [technologies]" />
      <Grid container spacing={1} className={classes.gridContainer}>
        {cardList.map((item, i) => (
          <Grid item lg={3} md={4} sm={6} xs={6} key={i} className={classes.gridItem}>
            <CardItem title={item.title} icon={item.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export { Technologies };
