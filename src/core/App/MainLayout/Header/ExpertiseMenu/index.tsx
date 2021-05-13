import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { useStyles } from './styles';
import { ExpertiseMenuProps } from './interfaces';

function ExpertiseMenu({ open, onClick }: ExpertiseMenuProps): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ButtonBase className={classes.button} focusRipple focusVisibleClassName={classes.focusVisible} onClick={onClick}>
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
