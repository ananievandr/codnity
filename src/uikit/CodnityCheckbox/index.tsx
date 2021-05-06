import React, { ReactElement } from 'react';
import { Checkbox, CheckboxProps, withStyles } from '@material-ui/core';

const CodnityCheckbox = withStyles({
  root: {
    color: 'rgba(91, 57, 155, 0.2)',
    paddingLeft: 0,
    '&$checked': {
      color: '#7c61af',
    },
  },
  checked: {},
})((props: CheckboxProps): ReactElement => <Checkbox color="default" {...props} />);

export { CodnityCheckbox };
