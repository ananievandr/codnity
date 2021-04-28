import React, { ReactElement } from 'react';
import { Box, Typography } from '@material-ui/core';

import { useStyles } from './styles';

function Tools(): ReactElement {
  const classes = useStyles();
  return (
    <Box component="div" display="flex" flexDirection="column" alignItems="center" justifyContent="center" width="100%">
      <Typography variant="h1">Practices and tools</Typography>
      <Typography variant="body2" className={classes.paragraph}>
        In our development processes, we use tools and practices that contribute to the success of our projects and
        facilitate communication with our clients.
      </Typography>
    </Box>
  );
}

export { Tools };
