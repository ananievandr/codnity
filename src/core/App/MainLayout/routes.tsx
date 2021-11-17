import React, { ReactElement } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Main from 'core/Main';
import Career from 'core/Career';
import { Insights } from 'core/Insights';
import { Routes } from 'utils/constants/Routes';
import Services from 'core/Services';
import Expertise from 'core/Expertise';
import OurApproach from 'core/OurApproach';
import Company from 'core/Company';
import GetInTouch from 'core/GetInTouch';

function LayoutRoutes(): ReactElement {
  return (
    <Switch>
      <Route exact path={Routes.main} component={Main} />
      <Route exact path={Routes.career} component={Career} />
      <Route exact path={Routes.insights} component={Insights} />
      <Route exact path={Routes.services} component={Services} />
      <Route exact path={Routes.expertise} component={Expertise} />
      <Route exact path={Routes.ourAproach} component={OurApproach} />
      <Route exact path={Routes.company} component={Company} />
      <Route exact path={Routes.getInTouch} component={GetInTouch} />
      <Redirect from={Routes.base} to={Routes.main} />
      <Route component={Main} />
    </Switch>
  );
}

export { LayoutRoutes };
