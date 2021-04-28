import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import { ServiceCard } from './ServiceCard';
import { Welcome } from './Welcome';

function Services(): ReactElement {
  return (
    <Grid container>
      <Welcome />
      <ServiceCard />
    </Grid>
  );
}

export { Services };
