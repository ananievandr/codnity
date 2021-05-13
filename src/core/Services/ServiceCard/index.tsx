import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Box, Grid } from '@material-ui/core';

import { useStyles } from './styles';
import { Header } from './Header';
import { CardItem } from './CardItem';
import { ServiceCardProps } from './interfaces';

function ServiceCard({ title, subTitle, column1 = [], column2 = [], anchor }: ServiceCardProps): ReactElement {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root} id={anchor}>
      <Header title={title} subTitle={subTitle} />
      <Grid container justify="space-between" className={classes.gridContainer}>
        <Grid item lg={6} md={6} sm={12} className={clsx(classes.fullWidth, classes.column1)}>
          {column1.map((item, i) => (
            <CardItem key={i} index={`${i + 1}`} content={item.cellContent} />
          ))}
        </Grid>
        <Grid item lg={6} md={6} sm={12} className={clsx(classes.fullWidth, classes.column2)}>
          {column2.map((item, i) => (
            <CardItem key={i} index={`${i + column1.length + 1}`} content={item.cellContent} />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export { ServiceCard };
