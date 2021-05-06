import React, { ReactElement } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import { NavLink } from 'react-router-dom';

import { ElevationScroll } from 'hocs/ElevationScroll';
import { Props } from 'hocs/ElevationScroll/interfaces';
import { IconCodnity } from 'uikit/IconCodnity';
import { Routes } from 'utils/constants/Routes';
import { ButtonRouter } from 'uikit/ButtonRouter';

import { useStyles } from './styles';
import { MobileView } from './MobileView';
import { ButtonRouterLink } from './ButtonRouterLink';
import { ExpertiseMenu } from './ExpertiseMenu';
import { LanguageMenu } from './LanguageMenu';
import { IconSizes } from 'uikit/IconCodnity/constants';

function Header(props: Props): ReactElement {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.grow}>
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar}>
          <Container maxWidth="lg">
            <Toolbar className={classes.toolbar}>
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
                <ExpertiseMenu />
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
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar className={classes.toolbar} />
      <MobileView isMobileMenuOpen={isMobileMenuOpen} onClose={handleMobileMenuClose} onOpen={handleMobileMenuOpen} />
    </div>
  );
}

export default Header;
