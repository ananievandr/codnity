import React, { ReactElement, useCallback, useState } from 'react';
import Container from '@material-ui/core/Container';

import Header from './Header';
import { Footer } from './Footer';
import { LayoutRoutes } from './routes';
import { useStyles } from './styles';

function MainLayout(): ReactElement {
  const classes = useStyles();
  const [footerHeight, setFooterHeight] = useState(0);

  const onFooterHeightChange = useCallback((value: number) => {
    setFooterHeight(value);
  }, []);

  const getContentHeight = (): string => `calc(100% - 80px - ${footerHeight}px)`;
  return (
    <>
      <Header />
      <Container className={classes.container} style={{ minHeight: getContentHeight() }}>
        <LayoutRoutes />
      </Container>
      <Footer onHeightReady={onFooterHeightChange} />
    </>
  );
}

export { MainLayout };
