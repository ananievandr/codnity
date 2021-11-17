import React, { ReactElement } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

import { IconCodnity } from 'uikit/IconCodnity';

import { useStyles } from './styles';

function ScrollTop(): ReactElement {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 200,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <Fab aria-label="scroll back to top" className={classes.fabIcon}>
          <IconCodnity name="ic-arrow-up" />
        </Fab>
      </div>
    </Zoom>
  );
}

export { ScrollTop };
