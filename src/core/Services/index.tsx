import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';

import withScrollToTop from 'hocs/ScrollToTop';

import { ServiceCard } from './ServiceCard';
import { Welcome } from './Welcome';
import { ideationAndEvaluation, design, webDevelopment, appDevelopment, supportAndManagement } from './constants';

function Services(): ReactElement {
  return (
    <Grid container>
      <Welcome />
      <ServiceCard
        title="servicesPage.ideationAndEvaluation.header.title"
        subTitle="servicesPage.ideationAndEvaluation.header.subTitle"
        column1={ideationAndEvaluation.column1}
        column2={ideationAndEvaluation.column2}
      />
      <ServiceCard
        title="servicesPage.design.header.title"
        subTitle="servicesPage.design.header.subTitle"
        column1={design.column1}
        column2={design.column2}
      />
      <ServiceCard
        title="servicesPage.webDevelopment.header.title"
        subTitle="servicesPage.webDevelopment.header.subTitle"
        column1={webDevelopment.column1}
        column2={webDevelopment.column2}
      />
      <ServiceCard title="servicesPage.backend.header.title" subTitle="servicesPage.backend.header.subTitle" />
      <ServiceCard title="servicesPage.banking.header.title" subTitle="servicesPage.banking.header.subTitle" />
      <ServiceCard
        title="servicesPage.appDevelopment.header.title"
        subTitle="servicesPage.appDevelopment.header.subTitle"
        column1={appDevelopment.column1}
        column2={appDevelopment.column2}
      />
      <ServiceCard
        title="servicesPage.supportAndManagement.header.title"
        subTitle="servicesPage.supportAndManagement.header.subTitle"
        column1={supportAndManagement.column1}
        column2={supportAndManagement.column2}
      />
      <ServiceCard
        title="servicesPage.platformDevelopment.header.title"
        subTitle="servicesPage.platformDevelopment.header.subTitle"
      />
    </Grid>
  );
}

export default withScrollToTop(Services);
