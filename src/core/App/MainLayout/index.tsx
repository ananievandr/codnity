import React, { ReactElement, useCallback, useState } from 'react';
import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

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

  const intl = useIntl();
  const getLabel = (titleId?: string) => (titleId ? intl.formatMessage({ id: titleId }) || '' : '');

  const getContentHeight = (): string => `calc(100% - 80px - ${footerHeight}px)`;
  return (
    <>
      <Helmet>
        <title>{getLabel('dom.header.og.title')}</title>
        <meta name="description" content={getLabel('dom.header.description')} />
        <meta property="og:title" content={getLabel('dom.header.og.title')} />
        <meta property="og:description" content={getLabel('dom.header.description')} />
        <meta property="og:url" content="https://codnity.com" />
      </Helmet>
      <Header />
      <Container className={classes.container} style={{ minHeight: getContentHeight() }}>
        <LayoutRoutes />
      </Container>
      <Footer onHeightReady={onFooterHeightChange} />
    </>
  );
}

export { MainLayout };
