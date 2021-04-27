import React, { ReactElement } from 'react';
import { TypographyHeadline } from 'uikit/TypographyHeadline';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { useStyles } from './styles';
import { Grid } from '@material-ui/core';
import { IconCodnity } from 'uikit/IconCodnity';

function Career(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item sm={6} xs={12}>
        <TypographyHeadline variant="h3" markedFrom="start" markedWidth={51}>
          Start career at Codnity
        </TypographyHeadline>
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            If you want to have a kick ass career, understand business, and around what the world is spinning, also you
            have the guts, the ambition, and you like to have fun, we are always looking for great people and ready to
            hire.
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            We guarantee that your personality and career will blow up, if you are ready to work and learn.*
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            Send your CV to{' '}
            <a className={clsx(classes.mail, classes.bold)} href="mailto:kickass@codnity.com">
              kickass@codnity.com
            </a>{' '}
            with note “I would like to kick-ass”
          </Typography>
          <Typography variant="body2" className={clsx(classes.paragraph, classes.bold)}>
            *Take into account that blowing up could have different meanings. Just joking :)
          </Typography>
        </div>
      </Grid>
      <Grid item sm={6} xs={12}>
        <IconCodnity className={classes.icon} name="asset:hiring-people" width="100%" height="100%" />
      </Grid>
    </Grid>
  );
}

export { Career };
