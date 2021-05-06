import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import { Software } from './Software';
import { SectionHeader } from 'uikit/SectionHeader';

function Development(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item lg={6} md={12} className={classes.gridTitle}>
        <SectionHeader title="We excel at quality [software development]" />
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            Our work on the project includes UX/UI design, software development, testing, support, and maintance. We
            build software in time, applying the latest technologies that optimize our work processes.
          </Typography>
        </div>
      </Grid>
      <Grid item lg={6} md={12} className={classes.software}>
        <Software />
      </Grid>
    </Grid>
  );
}

export { Development };
