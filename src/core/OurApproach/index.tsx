import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import withScrollToTop from 'hocs/ScrollToTop';

import { Welcome } from './Welcome';
import { PartnershipApproach } from './PartnershipApproach';
import { ProjectPath } from './ProjectPath';

function OurApproach(): ReactElement {
  return (
    <Grid container>
      <Welcome />
      <PartnershipApproach />
      <ProjectPath />
    </Grid>
  );
}

export default withScrollToTop(OurApproach);
