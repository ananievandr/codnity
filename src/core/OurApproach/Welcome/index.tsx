import React, { ReactElement } from 'react';
import { TypographyHeadline } from 'uikit/TypographyHeadline';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import { IconCodnity } from 'uikit/IconCodnity';

import { useStyles } from './styles';

function Welcome(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item sm={6} xs={12}>
        <TypographyHeadline variant="h3" markedFrom="start" markedWidth={31}>
          We’ve developed a better approach to custom software development
        </TypographyHeadline>
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            By leveraging Agile development methodologies, human-centered design tools, and best practices around
            security and risk management, we help organizations meet their needs reliably and efficiently.
          </Typography>
        </div>
      </Grid>
      <Grid item sm={6} xs={12}>
        <IconCodnity className={classes.icon} name="asset:approach" width="100%" height="100%" />
      </Grid>
    </Grid>
  );
}

export { Welcome };
