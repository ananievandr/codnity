import React, { ReactElement } from 'react';
import { Box, Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { Software } from './Software';

function Tools(): ReactElement {
  const classes = useStyles();
  return (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      marginBottom="60px"
    >
      <SectionHeader title="expertise.tools.header" />
      <Typography variant="body2" className={classes.paragraph}>
        <FormattedMessage id="expertise.tools.subHeader" />
      </Typography>
      <Software />
    </Box>
  );
}

export { Tools };
