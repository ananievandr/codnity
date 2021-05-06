import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import withScrollToTop from 'hocs/ScrollToTop';

import { Welcome } from './Welcome';
import { OurValues } from './OurValues';
import { OurFounders } from './OurFounders';

function Company(): ReactElement {
  return (
    <Grid container>
      <Welcome />
      <OurValues />
      <OurFounders />
    </Grid>
  );
}

export default withScrollToTop(Company);
