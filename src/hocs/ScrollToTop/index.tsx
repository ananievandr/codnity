import React, { useEffect, ComponentType } from 'react';
import { useLocation } from 'react-router-dom';

function withScrollToTop(ScrolledComponent: ComponentType): ComponentType {
  const ScrollToTop = (props: any) => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return <ScrolledComponent {...props} />;
  };
  return ScrollToTop;
}

export default withScrollToTop;
