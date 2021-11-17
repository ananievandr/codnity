import React, { ReactElement } from 'react';
import { matchPath, useLocation } from 'react-router';
import { FormattedMessage } from 'react-intl';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { useStyles } from './styles';
import { ExpertiseMenuProps } from './interfaces';
import { Routes } from 'utils/constants/Routes';
import clsx from 'clsx';

function ExpertiseMenu({ open, onClick }: ExpertiseMenuProps): ReactElement {
  const classes = useStyles();
  const location = useLocation();
  const isExpertisePathActive = !!matchPath(location.pathname, Routes.expertise);
  return (
    <div className={classes.root}>
      <ButtonBase
        className={clsx(classes.button, { [classes.active]: isExpertisePathActive })}
        focusRipple
        focusVisibleClassName={classes.focusVisible}
        onClick={onClick}
      >
        <Typography component="span" variant="subtitle1" color="inherit" className={classes.buttonTitle}>
          <FormattedMessage id="navigation.expertise" />
          <span className={classes.buttonMarked} />
        </Typography>
        {open ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon} />}
      </ButtonBase>
    </div>
  );
}

export { ExpertiseMenu };
