import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { MenuCodnity } from 'uikit/MenuCodnity';
import { MenuItemCodnity } from 'uikit/MenuItemCodnity';

import { useStyles } from './styles';

function ExpertiseMenu(): ReactElement {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <ButtonBase
        className={classes.button}
        focusRipple
        focusVisibleClassName={classes.focusVisible}
        onClick={handleMenu}
      >
        <Typography component="span" variant="subtitle1" color="inherit" className={classes.buttonTitle}>
          <FormattedMessage id="navigation.expertise" />
          <span className={classes.buttonMarked} />
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ButtonBase>
      <MenuCodnity anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
        <MenuItemCodnity onClick={handleClose}>
          <FormattedMessage id="expertise.competence" />
        </MenuItemCodnity>
        <MenuItemCodnity onClick={handleClose}>
          <FormattedMessage id="expertise.caseStudies" />
        </MenuItemCodnity>
      </MenuCodnity>
    </div>
  );
}

export { ExpertiseMenu };
