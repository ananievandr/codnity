import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/styles';

export const ListItemStyled = withStyles({
  root: {
    margin: 0,
    padding: 0,
    paddingBottom: '10px',
  },
})(ListItem);

export const ListItemTextStyled = withStyles({
  root: {
    margin: 0,
    padding: 0,
    color: '#ffffff',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0.01em',
  },
})(ListItemText);
