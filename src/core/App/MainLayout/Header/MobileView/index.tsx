import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { MobileViewProps } from './interfaces';
import { useStyles, ListItemStyled, ListItemTextStyled, ListStyled, DividerStyled } from './styles';
import { ListItemLink } from './ListItemLink';
import { Routes } from 'utils/constants/Routes';

function MobileView(props: MobileViewProps): ReactElement {
  const { isMobileMenuOpen, onClose, onOpen } = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const onExpand = () => {
    setOpen(!open);
  };

  const list = () => (
    <div className={classes.root} role="presentation">
      <div className={classes.buttonClose}>
        <IconButton color="inherit" aria-label="close drawer" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <ListStyled>
        <ListItemLink to={Routes.services} title="navigation.services" />
        <ListItemStyled button onClick={onExpand}>
          <ListItemTextStyled primary={<FormattedMessage id="navigation.expertise" />} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemStyled>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListStyled>
            <ListItemLink to={Routes.expertise} title="expertise.competence" className={classes.nested} />
            <ListItemLink to={Routes.expertise} title="expertise.caseStudies" className={classes.nested} />
          </ListStyled>
        </Collapse>
        <ListItemLink to={Routes.ourAproach} title="navigation.ourApproach" />
        <ListItemLink to={Routes.company} title="navigation.company" />
      </ListStyled>
      <DividerStyled />
      <ListStyled>
        <ListItemLink to={Routes.career} title="navigation.career" />
        <ListItemLink to={Routes.insights} title="navigation.insights" />
      </ListStyled>
      <DividerStyled />
    </div>
  );

  return (
    <SwipeableDrawer
      classes={{ paper: classes.papper }}
      anchor="right"
      open={isMobileMenuOpen}
      onClose={onClose}
      onOpen={onOpen}
    >
      {list()}
    </SwipeableDrawer>
  );
}

export { MobileView };
