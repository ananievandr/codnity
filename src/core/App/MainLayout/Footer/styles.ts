import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1,
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
      paddingTop: '46px',
      paddingBottom: '30px',
      [theme.breakpoints.down('md')]: {
        paddingTop: '36px',
        paddingBottom: '15px',
      },
      [theme.breakpoints.down('sm')]: {
        paddingBottom: '30px',
      },
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
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'flex-end',
      },
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'flex-start',
      },
    },
    gridLinksMiddleColumn: {
      display: 'flex',
      justifyContent: 'flex-start',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
      },
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'flex-start',
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
      padding: 8,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      [theme.breakpoints.down('md')]: {
        margin: '-8px 18px 0',
      },
      [theme.breakpoints.between('md', 'lg')]: {
        margin: '-8px 8px 0',
      },
      [theme.breakpoints.up('lg')]: {
        margin: '-8px 2px 0',
      },
      '&:hover': {
        backgroundColor: 'rgba(91, 57, 155, 0.2)',
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
