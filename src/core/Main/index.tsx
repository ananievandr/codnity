import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import { Industries } from 'core/Expertise/Industries';
import withScrollToTop from 'hocs/ScrollToTop';

import { Welcome } from './Welcome';
import { Services } from './Services';
import { Development } from './Development';
import { Stats } from './Stats';
import { Discuss } from './Discuss';

function Main(): ReactElement {
  return (
    <Grid container>
      <Welcome />
      <Services />
      <Industries />
      <Development />
      <Stats />
      <Discuss />
    </Grid>
  );
}

export default withScrollToTop(Main);
