import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { useStyles } from './styles';
import { ButtonRouterProps } from './interfaces';

function ButtonRouter({ title, to }: ButtonRouterProps): ReactElement {
  const classes = useStyles();
  return (
    <Button className={classes.root} color="primary" component={RouterLink} to={to}>
      <FormattedMessage id={title} />
    </Button>
  );
}

export { ButtonRouter };
