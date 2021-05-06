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
      [theme.breakpoints.down('md')]: {
        paddingRight: '12px',
      },
      [theme.breakpoints.up('md')]: {
        paddingRight: '21px',
      },
    },
    papper: {
      background: '#7c61af',
    },
    backdropProps: {
      background: 'transparent',
    },
    root: {
      width: 0,
      height: '100%',
      [theme.breakpoints.down('md')]: {
        width: 290,
        paddingTop: '12px',
      },
      [theme.breakpoints.up('md')]: {
        width: 500,
        paddingTop: '28px',
      },
      boxShadow: '0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)',
      color: '#ffffff',
    },
    nested: {
      [theme.breakpoints.down('md')]: {
        paddingLeft: '24px',
      },
      [theme.breakpoints.up('md')]: {
        paddingLeft: '48px',
      },
    },
    languageSwitch: {
      display: 'inline-block',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        marginLeft: '24px',
        marginTop: '12px',
        marginBottom: '24px',
      },
      [theme.breakpoints.up('md')]: {
        marginLeft: '48px',
        marginTop: '18px',
        marginBottom: '36px',
      },
    },
    switchLabel: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: -1,
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
    [theme.breakpoints.down('md')]: {
      padding: '12px 23px',
    },
    [theme.breakpoints.up('md')]: {
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
    [theme.breakpoints.down('md')]: {
      margin: '12px 0',
    },
    [theme.breakpoints.up('md')]: {
      margin: '18px 0',
    },
  },
}))(Divider);
