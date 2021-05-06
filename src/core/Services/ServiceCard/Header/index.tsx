import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

import { useStyles } from './styles';
import { HeaderProps } from './interfaces';

function Header({ title, subTitle }: HeaderProps): ReactElement {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        <FormattedMessage id={title} />
      </Typography>
      <Typography variant="body2">
        <FormattedMessage id={subTitle} />
      </Typography>
    </Box>
  );
}

export { Header };
