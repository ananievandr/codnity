import React, { ReactElement, useCallback, useState } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { ElevationScroll } from 'hocs/ElevationScroll';
import { Props } from 'hocs/ElevationScroll/interfaces';

import { IconCodnity } from 'uikit/IconCodnity';
import { Routes } from 'utils/constants/Routes';
import { ButtonRouter } from 'uikit/ButtonRouter';
import { IconSizes } from 'uikit/IconCodnity/constants';

import { useStyles } from './styles';
import { MobileView } from './MobileView';
import { ButtonRouterLink } from './ButtonRouterLink';
import { ExpertiseMenu } from './ExpertiseMenu';
import { LanguageMenu } from './LanguageMenu';
import { MenuItem } from './ExpertiseMenu/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

function Header(props: Props): ReactElement {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleExpertiseClick = useCallback(() => {
    setExpertiseOpen(!expertiseOpen);
  }, [expertiseOpen]);

  const onClickAway = useCallback(() => {
    if (expertiseOpen) {
      setExpertiseOpen(false);
    }
  }, [expertiseOpen]);

  return (
    <ClickAwayListener mouseEvent="onMouseDown" touchEvent="onTouchStart" onClickAway={onClickAway}>
      <div className={classes.grow}>
        <ElevationScroll {...props}>
          <AppBar className={clsx(classes.appBar, { [classes.openAppBar]: expertiseOpen })}>
            <Container maxWidth="lg">
              <Toolbar className={clsx(classes.toolbar, { [classes.openToolbar]: expertiseOpen })}>
                <Box component="div" display="flex" alignItems="center" width="100%">
                  <NavLink to={Routes.main}>
                    <IconCodnity className={classes.codnityLogo} name="codnity-logo" width="122px" height="36px" />
                  </NavLink>
                  <div className={classes.sectionDesktop}>
                    <ButtonRouterLink to={Routes.career} title="navigation.career" noWeight />
                    <ButtonRouterLink to={Routes.insights} title="navigation.insights" noWeight />
                  </div>
                  <div className={classes.grow} />
                  <div className={classes.sectionDesktop}>
                    <ButtonRouterLink to={Routes.services} title="navigation.services" />
                    <ExpertiseMenu open={expertiseOpen} onClick={handleExpertiseClick} />
                    <ButtonRouterLink to={Routes.ourAproach} title="navigation.ourApproach" />
                    <ButtonRouterLink to={Routes.company} title="navigation.company" />
                    <LanguageMenu />
                  </div>
                  <div className={classes.getInTouch}>
                    <ButtonRouter to={Routes.getInTouch} title="navigation.getInTouch" />
                  </div>
                  <div className={classes.sectionMobile}>
                    <IconButton
                      edge="start"
                      aria-haspopup="true"
                      onClick={handleMobileMenuOpen}
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="open drawer"
                    >
                      <IconCodnity name="ic-menu" size={IconSizes.md32} />
                    </IconButton>
                  </div>
                </Box>
                <div className={clsx(classes.hide, { [classes.expertiseMenu]: expertiseOpen })}>
                  <MenuItem
                    routePath={Routes.expertise}
                    onClick={handleExpertiseClick}
                    title="Competence"
                    subTitle="Quis nec nulla praesent convallis. Tellus amet, cursus mauris vulputate mus scelerisque. Montes, et quam tortor placerat nibh quisque."
                  />
                  <MenuItem
                    onClick={handleExpertiseClick}
                    routePath={Routes.expertise}
                    title="Case studies"
                    subTitle="Quis nec nulla praesent convallis. Tellus amet, cursus mauris vulputate mus scelerisque. Montes, et quam tortor placerat nibh quisque."
                  />
                </div>
              </Toolbar>
            </Container>
          </AppBar>
        </ElevationScroll>
        <Toolbar className={classes.toolbar} />
        <MobileView isMobileMenuOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} onOpen={handleMobileMenuOpen} />
      </div>
    </ClickAwayListener>
  );
}

export default Header;
