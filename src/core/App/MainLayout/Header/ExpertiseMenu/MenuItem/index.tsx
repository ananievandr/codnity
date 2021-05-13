import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

import { useStyles } from './styles';
import { MenuItemProps } from './interfaces';

function MenuItem({ title, subTitle, routePath, onClick }: MenuItemProps): ReactElement {
  const classes = useStyles();
  return (
    <NavLink className={classes.root} to={routePath} onClick={onClick}>
      <Box component="div" className={classes.titleWrapper}>
        <Typography variant="h6" className={classes.title}>
          <FormattedMessage id={title} />
        </Typography>
      </Box>
      <Typography variant="body1" className={classes.subTitle}>
        <FormattedMessage id={subTitle} />
      </Typography>
    </NavLink>
  );
}

export { MenuItem };
