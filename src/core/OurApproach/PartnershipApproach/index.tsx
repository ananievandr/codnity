import React, { ReactElement } from 'react';
import { Box, Grid } from '@material-ui/core';

import { SectionHeader } from 'uikit/SectionHeader';

import { useStyles } from './styles';
import { CardItem } from './CardItem';

function PartnershipApproach(): ReactElement {
  const classes = useStyles();
  return (
    <Box component="div" display="flex" flexDirection="column" className={classes.root}>
      <SectionHeader className={classes.title} title="ourApproach.partnership.header" />
      <Grid container justify="space-between">
        <Grid item lg={6} md={12}>
          <CardItem
            title="ourApproach.partnership.clientToPartner.title"
            subTitle="ourApproach.partnership.clientToPartner.subTitle"
            content="ourApproach.partnership.clientToPartner.content"
            icon="approach-1"
          />
        </Grid>
        <Grid item lg={6} md={12}>
          <CardItem
            title="ourApproach.partnership.riskManagement.title"
            subTitle="ourApproach.partnership.riskManagement.subTitle"
            content="ourApproach.partnership.riskManagement.content"
            icon="approach-2"
          />
        </Grid>
      </Grid>
      <Grid container justify="space-between">
        <Grid item lg={6} md={12}>
          <CardItem
            title="ourApproach.partnership.agile.title"
            subTitle="ourApproach.partnership.agile.subTitle"
            content="ourApproach.partnership.agile.content"
            icon="approach-3"
          />
        </Grid>
        <Grid item lg={6} md={12}>
          <CardItem
            title="ourApproach.partnership.humanCenteredDesign.title"
            subTitle="ourApproach.partnership.humanCenteredDesign.subTitle"
            content="ourApproach.partnership.humanCenteredDesign.content"
            icon="approach-4"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export { PartnershipApproach };
