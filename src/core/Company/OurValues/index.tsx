import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { CardItem } from './CardItem';

function OurValues(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column">
      <SectionHeader title="Our [values]" />
      <Typography variant="body2" className={classes.paragraph}>
        Each our team member is different, but we all go along with these values and always are looking for them in our
        next chap in Codnity:
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
