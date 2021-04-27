import React, { ReactElement } from 'react';
import Container from '@material-ui/core/Container';

import Header from './Header';
import { Footer } from './Footer';
import { LayoutRoutes } from './routes';

function MainLayout(): ReactElement {
  return (
    <>
      <Header />
      <Container>
        <LayoutRoutes />
      </Container>
      <Footer />
    </>
  );
}

export { MainLayout };
