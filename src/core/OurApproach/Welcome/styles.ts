import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        marginTop: 40,
      },
      [theme.breakpoints.up('lg')]: {
        height: 'calc(100vh - 80px)',
      },
    },
    paragraph: {
      marginBottom: 30,
      letterSpacing: '0.01em',
    },
    textBlock: {
      paddingRight: 165,
      [theme.breakpoints.down('md')]: {
        paddingRight: 0,
      },
    },
    greenCircle: {
      zIndex: -1,
      position: 'absolute',
      width: 16,
      height: 16,
      backgroundColor: '#2CA58D',
      borderRadius: '50%',
      left: '-5%',
      top: '15%',
      [theme.breakpoints.down('lg')]: {
        left: '-2%',
      },
      [theme.breakpoints.down('md')]: {
        top: '10%',
        left: '5%',
      },
      [theme.breakpoints.down('sm')]: {
        left: '2%',
        top: '20%',
        width: 12,
        height: 12,
      },
    },
    yellowCircle: {
      zIndex: -1,
      position: 'absolute',
      width: 29,
      height: 29,
      backgroundColor: '#FFBD00',
      borderRadius: '50%',
      left: '-6%',
      bottom: '20%',
      [theme.breakpoints.down('lg')]: {
        left: '-3%',
      },
      [theme.breakpoints.down('md')]: {
        bottom: '28%',
        left: '3%',
        width: 24,
        height: 24,
      },
      [theme.breakpoints.down('sm')]: {
        bottom: 0,
        left: '93%',
      },
    },
    redCircle: {
      zIndex: -1,
      position: 'absolute',
      borderRadius: '50%',
      width: 25,
      height: 25,
      backgroundColor: '#ED6A5A',
      right: '-5%',
      top: '7%',
      [theme.breakpoints.down('lg')]: {
        top: '5%',
        right: '-2%',
      },
      [theme.breakpoints.down('md')]: {
        top: '-5%',
        right: 0,
      },
      [theme.breakpoints.down('sm')]: {
        right: '2%',
        top: '-6%',
        width: 19,
        height: 19,
      },
    },
    greenBigCircle: {
      zIndex: -1,
      position: 'absolute',
      right: '-6%',
      bottom: '25%',
      width: 19,
      height: 19,
      backgroundColor: '#2CA58D',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        right: '1%',
        bottom: '16%',
      },
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  }),
);
