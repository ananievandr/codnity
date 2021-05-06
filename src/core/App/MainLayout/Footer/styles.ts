import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
      [theme.breakpoints.down('sm')]: {
        paddingTop: '36px',
        paddingBottom: '15px',
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: '46px',
        paddingBottom: '30px',
      },
    },
    footer: {
      width: '100%',
      display: 'flex',
      zIndex: 1100,
      boxSizing: 'border-box',
      flexShrink: 0,
      flexDirection: 'column',
      color: '#ffffff',
      backgroundColor: '#7c61af',
    },
    links: {
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '8px',
        width: '100%',
      },
    },
    gridLinks: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
    },
    gridLinksMiddleColumn: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'space-around',
      },
    },
    copyrightSection: {
      [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
        flexDirection: 'column-reverse',
      },
    },
    socials: {
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        marginBottom: '24px',
      },
      [theme.breakpoints.up('sm')]: {
        justifyContent: 'flex-end',
      },
    },
    networkItem: {
      [theme.breakpoints.down('md')]: {
        margin: '0 26px',
      },
      [theme.breakpoints.between('md', 'lg')]: {
        margin: '0 16px',
      },
      [theme.breakpoints.up('lg')]: {
        margin: '0 10px',
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

export const DividerStyled = withStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      margin: '35px 0 25px',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '25px 0 15px',
    },
  },
}))(Divider);
