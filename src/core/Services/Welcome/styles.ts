import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
      [theme.breakpoints.up('lg')]: {
        height: 'calc(100vh - 80px)',
      },
    },
    gridTitle: {
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    paragraph: {
      marginBottom: 30,
      letterSpacing: '0.01em',
    },
    textBlock: {
      paddingRight: 165,
      [theme.breakpoints.up('md')]: {
        maxWidth: 550,
      },
      [theme.breakpoints.down('md')]: {
        maxWidth: 480,
        textAlign: 'center',
        paddingRight: 0,
      },
    },
  }),
);
