import React, { ReactElement } from 'react';

import { useStyles } from './styles';

function Loader(): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.border} />
      <div className={classes.radiant}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export { Loader };
