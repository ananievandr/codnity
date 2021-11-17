import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import clsx from 'clsx';
import { NavLink as RouterLink } from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import { ButtonRouterLinkProps } from './interfaces';
import { useStyles } from './styles';

function ButtonRouterLink({ to, title, noWeight = false }: ButtonRouterLinkProps): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonBase
        className={classes.button}
        focusRipple
        focusVisibleClassName={classes.focusVisible}
        component={RouterLink}
        to={to}
      >
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          className={clsx(classes.buttonTitle, { [classes.noWeight]: noWeight })}
        >
          <FormattedMessage id={title} />
          <span className={classes.buttonMarked} />
        </Typography>
      </ButtonBase>
    </div>
  );
}

export { ButtonRouterLink };
