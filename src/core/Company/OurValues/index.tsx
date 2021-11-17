import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { CardItem } from './CardItem';

function OurValues(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column">
      <SectionHeader title="company.ourValues.header" />
      <Typography variant="body2" className={classes.paragraph}>
        <FormattedMessage id="company.ourValues.subHeader" />
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={4} sm={12}>
          <CardItem
            title="company.ourValues.codingInIntegrity.title"
            content="company.ourValues.codingInIntegrity.content"
            icon="values:diamond"
          />
        </Grid>
        <Grid item md={4} sm={12}>
          <CardItem
            title="company.ourValues.codingInOpennes.title"
            content="company.ourValues.codingInOpennes.content"
            icon="values:cooperation"
          />
        </Grid>
        <Grid item md={4} sm={12}>
          <CardItem
            title="company.ourValues.codingInFun.title"
            content="company.ourValues.codingInFun.content"
            icon="values:confetti"
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export { OurValues };
