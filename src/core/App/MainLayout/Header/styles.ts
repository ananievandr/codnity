import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: '#ffffff',
    },
    toolbar: {
      height: '80px',
      padding: 0,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 0,
      color: '#000000',
      [theme.breakpoints.between('md', 'lg')]: {
        marginLeft: 52,
      },
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'block',
      },
    },
    codnityLogo: {
      [theme.breakpoints.up('lg')]: {
        marginRight: '80px',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    getInTouch: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
  }),
);
