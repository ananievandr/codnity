import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/styles';

export const ListItemStyled = withStyles(theme => ({
  root: {
    margin: 0,
    [theme.breakpoints.down('sm')]: {
      padding: '12px 23px',
    },
    [theme.breakpoints.up('sm')]: {
      padding: '18px 33px 18px 48px',
    },
  },
}))(ListItem);

export const ListItemTextStyled = withStyles({
  root: {
    margin: 0,
    padding: 0,
  },
})(ListItemText);
