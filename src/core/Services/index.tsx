import React, { ReactElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { ServiceCard } from './ServiceCard';
import { Welcome } from './Welcome';
import { ideationAndEvaluation, design, webDevelopment, appDevelopment, supportAndManagement } from './constants';
import { getQueryVariable } from './utils';

function Services(): ReactElement {
  const location = useLocation();
  useEffect(() => {
    const id = getQueryVariable('anchor', location.search);
    console.log(id);
    const ref = document.getElementById(id);
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.search]);
  return (
    <Grid container>
      <Welcome />
      <ServiceCard
        anchor="idea"
        title="servicesPage.ideationAndEvaluation.header.title"
        subTitle="servicesPage.ideationAndEvaluation.header.subTitle"
        column1={ideationAndEvaluation.column1}
        column2={ideationAndEvaluation.column2}
      />
      <ServiceCard
        anchor="design"
        title="servicesPage.design.header.title"
        subTitle="servicesPage.design.header.subTitle"
        column1={design.column1}
        column2={design.column2}
      />
      <ServiceCard
        anchor="website"
        title="servicesPage.webDevelopment.header.title"
        subTitle="servicesPage.webDevelopment.header.subTitle"
        column1={webDevelopment.column1}
        column2={webDevelopment.column2}
      />
      <ServiceCard
        anchor="backend"
        title="servicesPage.backend.header.title"
        subTitle="servicesPage.backend.header.subTitle"
      />
      <ServiceCard
        anchor="banking"
        title="servicesPage.banking.header.title"
        subTitle="servicesPage.banking.header.subTitle"
      />
      <ServiceCard
        anchor="app"
        title="servicesPage.appDevelopment.header.title"
        subTitle="servicesPage.appDevelopment.header.subTitle"
        column1={appDevelopment.column1}
        column2={appDevelopment.column2}
      />
      <ServiceCard
        anchor="support"
        title="servicesPage.supportAndManagement.header.title"
        subTitle="servicesPage.supportAndManagement.header.subTitle"
        column1={supportAndManagement.column1}
        column2={supportAndManagement.column2}
      />
      <ServiceCard
        anchor="platform"
        title="servicesPage.platformDevelopment.header.title"
        subTitle="servicesPage.platformDevelopment.header.subTitle"
      />
    </Grid>
  );
}

export default Services;
