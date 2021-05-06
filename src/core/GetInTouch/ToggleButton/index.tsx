import React, { ReactElement } from 'react';
import clsx from 'clsx';

import { ToggleButtonProps } from './interfaces';
import { useStyles } from './styles';

function ToggleButton({ content, checked, onChange, name }: ToggleButtonProps): ReactElement {
  const classes = useStyles();

  const handleChange = () => {
    onChange(!checked, name);
  };

  return (
    <div
      tabIndex={0}
      role="button"
      className={clsx(classes.root, { [classes.checked]: checked })}
      onClick={handleChange}
      onKeyDown={handleChange}
    >
      {content}
    </div>
  );
}

export { ToggleButton };
