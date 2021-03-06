import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { ReactHeight } from 'react-height';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { IconCodnity } from 'uikit/IconCodnity';
import { Routes } from 'utils/constants/Routes';

import { ListItemLink } from './ListItemLink';
import { ListStyled, useStyles, DividerStyled } from './styles';
import { FooterProps } from './interfaces';

function Footer({ onHeightReady }: FooterProps): ReactElement {
  const classes = useStyles();
  return (
    <ReactHeight onHeightReady={onHeightReady}>
      <footer className={classes.footer}>
        <Container maxWidth="lg" className={classes.root}>
          <Grid container alignContent="space-between" spacing={4}>
            <Grid item md={6} sm={12}>
              <Grid container spacing={2}>
                <Grid item lg={4} md={12}>
                  <IconCodnity name="white:codnity-logo" width="122px" height="36px" />
                </Grid>
                <Grid item lg={6} md={10}>
                  <Typography variant="body1" color="inherit">
                    <FormattedMessage id="footer.description" />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6} sm={12} className={classes.links}>
              <Grid container>
                <Grid item lg={6} md={4} sm={6} xs={6} className={classes.gridLinks}></Grid>
                <Grid item lg={6} md={8} sm={6} xs={6}>
                  <Grid container>
                    <Grid item md={6} sm={12} xs={12} className={classes.gridLinksMiddleColumn}>
                      <ListStyled>
                        <ListItemLink to={Routes.services} title="navigation.services" />
                        <ListItemLink to={Routes.expertise} title="navigation.expertise" />
                        <ListItemLink to={Routes.ourAproach} title="navigation.ourApproach" />
                        <ListItemLink to={Routes.company} title="navigation.company" />
                      </ListStyled>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12} className={classes.gridLinks}>
                      <ListStyled>
                        <ListItemLink to={Routes.career} title="navigation.career" />
                        <ListItemLink to={Routes.insights} title="navigation.insights" />
                      </ListStyled>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <DividerStyled />
          <Grid container className={classes.copyrightSection}>
            <Grid item md={6} sm={12}>
              <Typography variant="body1" color="inherit">
                <FormattedMessage id="footer.copyright" />
              </Typography>
            </Grid>
            <Grid item md={6} sm={12}>
              <Grid container className={classes.socials}>
                <a href="https://www.linkedin.com/company/codnity/" className={classes.networkItem}>
                  <IconCodnity name="ic-linkedin" size={16} />
                </a>

                <a href="https://www.facebook.com/Codnity-100376125192567/" className={classes.networkItem}>
                  <IconCodnity name="ic-facebook" size={16} />
                </a>
                {/*
                <span className={classes.networkItem}>
                  <IconCodnity name="ic-instagram" size={16} />
                </span>
                 */}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </ReactHeight>
  );
}

export { Footer };
