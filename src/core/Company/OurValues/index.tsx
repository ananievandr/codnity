import React, { ReactElement } from 'react';
import { TypographyHeadline } from 'uikit/TypographyHeadline';
import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import { CardValue } from './CardValue';

function OurValues(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column">
      <TypographyHeadline variant="h3" markedFrom="end" markedWidth={60}>
        Our values
      </TypographyHeadline>
      <Typography variant="body2" className={classes.paragraph}>
        Each our team member is different, but we all go along with these values and always are looking for them in our
        next chap in Codnity:
      </Typography>
      <Grid container spacing={2}>
        <Grid item sm={4} xs={12}>
          <CardValue
            title="company.ourValues.codingInIntegrity.title"
            content="company.ourValues.codingInIntegrity.content"
            icon="values:diamond"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CardValue
            title="company.ourValues.codingInOpennes.title"
            content="company.ourValues.codingInOpennes.content"
            icon="values:cooperation"
          />
        </Grid>
        <Grid item sm={4} xs={12}>
          <CardValue
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
