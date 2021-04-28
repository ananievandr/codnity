import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './styles';
import { CardItem } from './CardItem';
import FounderJanisImg from './assets/janis.png';
import FounderGirtsImg from './assets/girts.png';

function OurFounders(): ReactElement {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="column">
      <Typography variant="h1">Our founders</Typography>
      <Typography variant="body2" className={classes.paragraph}>
        If you want to see our professional background, check Founders Experience. We believe that one of the main
        ingredients in successful partnerships is to get to know us as people. You get to know us as persons with our
        own interests and stories. Only afterwards you see our professionalism. How about you? Tell us, what you like
        and what’s your story.
      </Typography>
      <Grid container justify="space-around" spacing={2}>
        <Grid item md={4} sm={12}>
          <CardItem
            title="company.founder1.title"
            content="company.founder1.content"
            imageSrc={FounderJanisImg}
            link=""
          />
        </Grid>
        <Grid item md={4} sm={12}>
          <CardItem
            title="company.founder2.title"
            content="company.founder2.content"
            imageSrc={FounderGirtsImg}
            link=""
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export { OurFounders };
