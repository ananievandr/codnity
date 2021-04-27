import React, { ReactElement } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Props } from './interfaces';

function ElevationScroll(props: Props): ReactElement {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export { ElevationScroll };
