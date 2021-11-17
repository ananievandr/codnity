import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { FormattedMessage } from 'react-intl';

import { IconCodnity } from 'uikit/IconCodnity';
import { SectionHeader } from 'uikit/SectionHeader';
import withScrollToTop from 'hocs/ScrollToTop';

import { useStyles } from './styles';

function Career(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item lg={6} md={12}>
        <SectionHeader title="career.header" />
        <div className={classes.textBlock}>
          <Typography variant="body2" className={classes.paragraph}>
            <FormattedMessage id="career.description1" />
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            <FormattedMessage id="career.description2" />
          </Typography>
          <Typography variant="body2" className={classes.paragraph}>
            <FormattedMessage id="career.cvPart1" />{' '}
            <a className={clsx(classes.mail, classes.bold)} href="mailto:kickass@codnity.com">
              kickass@codnity.com
            </a>{' '}
            <FormattedMessage id="career.cvPart2" />
          </Typography>
          <Typography variant="body2" className={clsx(classes.paragraph, classes.bold)}>
            <FormattedMessage id="career.description3" />
          </Typography>
        </div>
      </Grid>
      <Grid item lg={6} md={12}>
        <IconCodnity name="asset:hiring-people" width="100%" height="100%" />
      </Grid>
      <div className={classes.greenCircle} />
      <div className={classes.yellowCircle} />
      <div className={classes.redCircle} />
    </Grid>
  );
}

export default withScrollToTop(Career);
