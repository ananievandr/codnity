import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { CardItem } from './CardItem';
import FounderJanisImg from './assets/janis.png';
import FounderGirtsImg from './assets/girts.png';

function OurFounders(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column">
      <SectionHeader title="Our [founders]" />
      <Typography variant="body2" className={classes.paragraph}>
        If you want to see our professional background, check Founders Experience. We believe that one of the main
        ingredients in successful partnerships is to get to know us as people. You get to know us as persons with our
        own interests and stories. Only afterwards you see our professionalism. How about you? Tell us, what you like
        and what’s your story.
      </Typography>
      <Grid container>
        <Grid item lg={6} md={12} sm={12} className={classes.gridColumn1}>
          <CardItem
            title="company.founder1.title"
            content="company.founder1.content"
            imageSrc={FounderJanisImg}
            link=""
          />
        </Grid>
        <Grid item lg={6} md={12} sm={12} className={classes.gridColumn2}>
          <CardItem
            title="company.founder2.title"
            content="company.founder2.content"
            imageSrc={FounderGirtsImg}
            link=""
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
