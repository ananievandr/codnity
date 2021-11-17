import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { CardItem } from './CardItem';
import FounderJanisImg from './assets/janis.png';
import FounderGirtsImg from './assets/girts.png';

function OurFounders(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column">
      <SectionHeader title="company.ourFounders.header" />
      <Typography variant="body2" className={classes.paragraph}>
        <FormattedMessage id="company.ourFounders.subHeader" />
      </Typography>
      <Grid container>
        <Grid item lg={6} md={12} sm={12} className={classes.gridColumn1}>
          <CardItem
            title="company.founder1.title"
            content="company.founder1.content"
            imageSrc={FounderJanisImg}
            link="https://lv.linkedin.com/in/j%C4%81nis-anspaks-87207733"
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} className={classes.gridColumn2}>
          <CardItem
            title="company.founder2.title"
            content="company.founder2.content"
            imageSrc={FounderGirtsImg}
            link="https://lv.linkedin.com/in/girts-ledins-b7553139"
          />
        </Grid>
      </Grid>
      <div className={classes.greenCircle} />
      <div className={classes.yellowCircle} />
      <div className={classes.redCircle} />
      <div className={classes.violetCircle} />
    </Grid>
  );
}

export { OurFounders };
