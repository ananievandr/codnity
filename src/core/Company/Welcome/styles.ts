import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        marginBottom: 100,
        marginTop: 40,
      },
      [theme.breakpoints.up('lg')]: {
        height: 'calc(100vh - 80px)',
      },
      position: 'relative',
    },
    paragraph: {
      marginBottom: 30,
      letterSpacing: '0.01em',
    },
    textBlock: {
      paddingRight: 160,
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
        left: '-3%',
      },
      [theme.breakpoints.down('md')]: {
        top: '0%',
        left: '10%',
      },
      [theme.breakpoints.down('sm')]: {
        left: '2%',
        top: '4%',
        width: 10,
        height: 10,
      },
    },
    yellowCircle: {
      zIndex: -1,
      position: 'absolute',
      right: '-6%',
      top: '7%',
      width: 49,
      height: 49,
      backgroundColor: '#FFBD00',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        top: '5%',
        right: '-3%',
      },
      [theme.breakpoints.down('md')]: {
        top: '-3%',
        right: '6%',
        width: 25,
        height: 25,
      },
      [theme.breakpoints.down('sm')]: {
        right: 0,
        top: '-3%',
        width: 19,
        height: 19,
      },
    },
    redCircle: {
      zIndex: -1,
      position: 'absolute',
      borderRadius: '50%',
      width: 25,
      height: 25,
      backgroundColor: '#ED6A5A',
      left: '-5%',
      bottom: '20%',
      [theme.breakpoints.down('lg')]: {
        left: '-3%',
      },
      [theme.breakpoints.down('md')]: {
        bottom: '28%',
        left: '3%',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    greenBigCircle: {
      zIndex: -1,
      position: 'absolute',
      right: '-7%',
      bottom: '30%',
      width: 19,
      height: 19,
      backgroundColor: '#2CA58D',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        right: '-3%',
      },
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
  }),
);
