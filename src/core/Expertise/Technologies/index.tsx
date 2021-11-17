import React, { ReactElement } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

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
      <SectionHeader className={classes.title} title="expertise.technologies.header" />
      <Typography variant="body2" className={classes.paragraph}>
        <FormattedMessage id="expertise.technologies.subHeader" />
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
