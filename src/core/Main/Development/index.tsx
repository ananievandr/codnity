import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import { IconCodnity } from 'uikit/IconCodnity';

function Development(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item md={6} sm={12}>
        <Typography variant="h1">We excel at quality software development</Typography>
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            Our work on the project includes UX/UI design, software development, testing, support, and maintance. We
            build software in time, applying the latest technologies that optimize our work processes.
          </Typography>
        </div>
      </Grid>
      <Grid item md={6} sm={12}>
        <IconCodnity className={classes.icon} name="asset:blogging" width="100%" height="100%" />
      </Grid>
    </Grid>
  );
}

export { Development };
