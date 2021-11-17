import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { CardItem } from './CardItem';
import { serviceList } from './constants';

function Services(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column">
      <SectionHeader title="main.services.header" />
      <Typography variant="body2" className={classes.paragraph}>
        <FormattedMessage id="main.services.subHeader" />
      </Typography>
      <Grid container spacing={2} className={classes.gridContainer}>
        {serviceList.map((item, i) => (
          <Grid key={i} item lg={3} md={4} sm={12}>
            <NavLink className={classes.link} to={`/services?anchor=${item.routePath}`}>
              <CardItem title={item.title} content={item.content} icon={item.icon} />
            </NavLink>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export { Services };
