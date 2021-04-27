import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import { WhoWeAre } from './WhoWeAre';
import { OurValues } from './OurValues';
import { OurFounders } from './OurFounders';

function Company(): ReactElement {
  return (
    <Grid container>
      <WhoWeAre />
      <OurValues />
      <OurFounders />
    </Grid>
  );
}

export { Company };
