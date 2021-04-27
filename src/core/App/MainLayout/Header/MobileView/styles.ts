import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/styles';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonClose: {
      display: 'flex',
      justifyContent: 'flex-end',
      [theme.breakpoints.down('sm')]: {
        paddingRight: '12px',
      },
      [theme.breakpoints.up('sm')]: {
        paddingRight: '21px',
      },
    },
    papper: {
      background: '#7c61af',
    },
    root: {
      width: 0,
      height: '100%',
      [theme.breakpoints.down('sm')]: {
        width: 290,
        paddingTop: '12px',
      },
      [theme.breakpoints.up('sm')]: {
        width: 500,
        paddingTop: '28px',
      },
      boxShadow: '0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)',
      color: '#ffffff',
    },
    nested: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '24px',
      },
      [theme.breakpoints.up('sm')]: {
        paddingLeft: '48px',
      },
    },
  }),
);

export const ListStyled = withStyles({
  root: {
    margin: 0,
    padding: 0,
  },
})(List);

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

export const DividerStyled = withStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      margin: '12px 0',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '18px 0',
    },
  },
}))(Divider);
