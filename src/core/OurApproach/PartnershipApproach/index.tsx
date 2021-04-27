import React, { ReactElement } from 'react';
import { TypographyHeadline } from 'uikit/TypographyHeadline';
import { Box, Grid } from '@material-ui/core';

import { useStyles } from './styles';
import { ApproachCard } from './ApproachCard';

function PartnershipApproach(): ReactElement {
  const classes = useStyles();
  return (
    <Box component="div" display="flex" flexDirection="column" className={classes.root}>
      <TypographyHeadline variant="h3" markedFrom="end" markedWidth={0} className={classes.title}>
        We believe in our structural and friendly partnership approach
      </TypographyHeadline>
      <Grid container justify="space-between" spacing={8}>
        <Grid item sm={6} xs={12}>
          <ApproachCard
            title="ourApproach.partnership.clientToPartner.title"
            subTitle="ourApproach.partnership.clientToPartner.subTitle"
            content="ourApproach.partnership.clientToPartner.content"
            icon="approach-1"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <ApproachCard
            title="ourApproach.partnership.riskManagement.title"
            subTitle="ourApproach.partnership.riskManagement.subTitle"
            content="ourApproach.partnership.riskManagement.content"
            icon="approach-2"
          />
        </Grid>
      </Grid>
      <Grid container justify="space-between" spacing={8}>
        <Grid item sm={6} xs={12}>
          <ApproachCard
            title="ourApproach.partnership.agile.title"
            subTitle="ourApproach.partnership.agile.subTitle"
            content="ourApproach.partnership.agile.content"
            icon="approach-3"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <ApproachCard
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
