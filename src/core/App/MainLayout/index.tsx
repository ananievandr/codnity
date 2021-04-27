import React, { ReactElement, useCallback, useState } from 'react';
import Container from '@material-ui/core/Container';

import Header from './Header';
import { Footer } from './Footer';
import { LayoutRoutes } from './routes';
import { useStyles } from './styles';

function MainLayout(): ReactElement {
  const classes = useStyles();
  const [height, setHeight] = useState('calc(100% - 80px)');

  const onFooterHeightChange = useCallback((footerHeight: number) => {
    setHeight(`calc(100% - 80px - ${footerHeight}px)`);
  }, []);

  return (
    <>
      <Header />
      <Container className={classes.container} style={{ minHeight: height }}>
        <LayoutRoutes />
      </Container>
      <Footer onHeightReady={onFooterHeightChange} />
    </>
  );
}

export { MainLayout };
