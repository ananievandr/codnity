import React from 'react';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/styles';

export const MenuCodnity = withStyles({
  paper: {
    boxShadow: '0px 4px 8px rgba(97, 97, 97, 0.14), 0px 8px 16px rgba(97, 97, 97, 0.14)',
    borderRadius: '8px',
    marginTop: 0,
  },
  list: {
    padding: 0,
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));
