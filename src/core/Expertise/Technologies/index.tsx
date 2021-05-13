import React, { ReactElement } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

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
      alignItems="center"
      width="100%"
    >
      <SectionHeader className={classes.title} title="Diverse [technologies]" />
      <Typography variant="body2" className={classes.paragraph}>
        Armed with years of experience developing web and mobile solutions, we consult our clients on which technology
        stack can positively impact their businesses.
      </Typography>
      <Grid container spacing={1} className={classes.gridContainer}>
        {cardList.map((item, i) => (
          <Grid item lg md={4} sm={6} key={i} className={classes.gridItem}>
            <CardItem title={item.title} icon={item.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export { Technologies };
