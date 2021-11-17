import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { useStyles } from './styles';
import { Software } from './Software';
import { SectionHeader } from 'uikit/SectionHeader';

function Development(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item lg={6} md={12} className={classes.gridTitle}>
        <SectionHeader title="main.development.header" />
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            <FormattedMessage id="main.development.subHeader" />
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
