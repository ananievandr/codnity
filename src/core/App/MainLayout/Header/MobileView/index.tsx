import React, { ReactElement, useCallback, useContext, ChangeEvent } from 'react';
import { FormattedMessage } from 'react-intl';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';

import { Routes } from 'utils/constants/Routes';
import { CodnitySwitch } from 'uikit/CodnitySwitch';
import { LocaleContext } from 'core/App/LocaleProvider/localeContext';

import { MobileViewProps } from './interfaces';
import { useStyles, ListItemStyled, ListItemTextStyled, ListStyled, DividerStyled } from './styles';
import { ListItemLink } from './ListItemLink';

function MobileView(props: MobileViewProps): ReactElement {
  const { isMobileMenuOpen, onClose, onOpen } = props;
  const classes = useStyles();
  const { localeIndex, onChangeLocale } = useContext(LocaleContext);
  const [open, setOpen] = React.useState(false);

  const onExpand = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleChangeLanguage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const index = event.target.checked ? 1 : 0;
      onChangeLocale(index);
    },
    [onChangeLocale],
  );

  const list = () => (
    <div className={classes.root} role="presentation">
      <div className={classes.buttonClose}>
        <IconButton color="inherit" aria-label="close drawer" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <ListStyled>
        <ListItemLink to={Routes.services} title="navigation.services" onClick={onClose} />
        <ListItemStyled button onClick={onExpand}>
          <ListItemTextStyled primary={<FormattedMessage id="navigation.expertise" />} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemStyled>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ListStyled>
            <ListItemLink
              to={Routes.expertise}
              title="expertise.competence"
              className={classes.nested}
              onClick={onClose}
            />
            <ListItemLink
              to={Routes.expertise}
              title="expertise.caseStudies"
              className={classes.nested}
              onClick={onClose}
            />
          </ListStyled>
        </Collapse>
        <ListItemLink to={Routes.ourAproach} title="navigation.ourApproach" onClick={onClose} />
        <ListItemLink to={Routes.company} title="navigation.company" onClick={onClose} />
      </ListStyled>
      <DividerStyled />
      <ListStyled>
        <ListItemLink to={Routes.career} title="navigation.career" onClick={onClose} />
        <ListItemLink to={Routes.insights} title="navigation.insights" onClick={onClose} />
      </ListStyled>
      <DividerStyled />
      <Box component="div" className={classes.languageSwitch}>
        <CodnitySwitch onChange={handleChangeLanguage} checked={localeIndex === 1} />
        <Box component="div" className={classes.switchLabel}>
          <Box component="div">EN</Box>
          <Box component="div">LT</Box>
        </Box>
      </Box>
    </div>
  );

  return (
    <SwipeableDrawer
      classes={{ paper: classes.papper }}
      anchor="right"
      open={isMobileMenuOpen}
      onClose={onClose}
      onOpen={onOpen}
      disableSwipeToOpen
      ModalProps={{
        BackdropProps: {
          classes: {
            root: classes.backdropProps,
          },
        },
      }}
    >
      {list()}
    </SwipeableDrawer>
  );
}

export { MobileView };
