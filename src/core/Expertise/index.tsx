import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import { Welcome } from './Welcome';
import { Industries } from './Industries';
import { Technologies } from './Technologies';
import { Tools } from './Tools';

function Expertise(): ReactElement {
  return (
    <Grid container>
      <Welcome />
      <Industries />
      <Technologies />
      <Tools />
    </Grid>
  );
}

export { Expertise };
