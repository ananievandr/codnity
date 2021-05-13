import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: '#ffffff',
    },
    openAppBar: {
      boxShadow: '0px 8px 22px -6px rgb(24 39 75 / 12%), 0px 14px 64px -4px rgb(24 39 75 / 12%)',
    },
    toolbar: {
      height: 80,
      padding: 0,
    },
    openToolbar: {
      height: 310,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '12px 0 36px',
    },
    expertiseMenu: {
      color: '#212121',
    },
    hide: {
      display: 'none',
      '&$expertiseMenu': {
        display: 'flex',
      },
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 0,
      color: '#000000',
      padding: 0,
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
