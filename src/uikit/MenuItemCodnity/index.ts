import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

export const MenuItemCodnity = withStyles(theme => ({
  root: {
    padding: '10px 24px',
  },
}))(MenuItem);
