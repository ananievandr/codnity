import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { Icon } from 'uikit/Icon';
import { Routes } from 'utils/constants/Routes';

import { ListItemLink } from './ListItemLink';
import { ListStyled, useStyles, DividerStyled } from './styles';

function Footer(): ReactElement {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container alignContent="space-between" spacing={4}>
          <Grid item sm={6} xs={12}>
            <Grid container spacing={2}>
              <Grid item md={4} sm={12}>
                <Icon name="white:codnity-logo" width="122px" height="36px" />
              </Grid>
              <Grid item md={6} sm={12}>
                <Typography variant="body1" color="inherit">
                  <FormattedMessage id="footer.description" />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.links}>
            <Grid container>
              <Grid item md={6} sm={5} xs={6} className={classes.gridLinks}>
                <ListStyled>
                  <ListItemLink to={Routes.services} title="navigation.services" />
                  <ListItemLink to={Routes.expertise} title="navigation.expertise" />
                  <ListItemLink to={Routes.ourAproach} title="navigation.ourApproach" />
                  <ListItemLink to={Routes.company} title="navigation.company" />
                </ListStyled>
              </Grid>
              <Grid item md={6} sm={7} xs={6}>
                <Grid container>
                  <Grid item sm={6} xs={12} className={classes.gridLinksMiddleColumn}>
                    <ListStyled>
                      <ListItemLink to={Routes.career} title="navigation.career" />
                      <ListItemLink to={Routes.insights} title="navigation.insights" />
                    </ListStyled>
                  </Grid>
                  <Grid item sm={6} xs={12} className={classes.gridLinks}>
                    <ListStyled>
                      <ListItemLink to={Routes.main} title="navigation.terms" />
                      <ListItemLink to={Routes.main} title="navigation.privacyPolicy" />
                    </ListStyled>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <DividerStyled />
        <Grid container className={classes.copyrightSection}>
          <Grid item sm={6} xs={12}>
            <Typography variant="body1" color="inherit">
              Copyright @ 2021 Codnity
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Grid container className={classes.socials}>
              <Icon name="ic-linkedin" className={classes.networkItem} />
              <Icon name="ic-facebook" className={classes.networkItem} />
              <Icon name="ic-instagram" className={classes.networkItem} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export { Footer };
