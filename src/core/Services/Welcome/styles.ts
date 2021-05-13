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
    greenCircle: {
      zIndex: -1,
      position: 'absolute',
      width: 29,
      height: 29,
      backgroundColor: '#2CA58D',
      left: '-5%',
      bottom: '20%',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        left: '-4%',
      },
      [theme.breakpoints.down('md')]: {
        bottom: '15%',
        left: '3%',
        width: 24,
        height: 24,
      },
      [theme.breakpoints.down('sm')]: {
        left: '5%',
        bottom: '7%',
        width: 16,
        height: 16,
      },
    },
    yellowCircle: {
      zIndex: -1,
      position: 'absolute',
      right: '-6%',
      top: '7%',
      width: 32,
      height: 32,
      backgroundColor: '#FFBD00',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        top: '5%',
        right: '-4%',
      },
      [theme.breakpoints.down('md')]: {
        top: '1%',
        right: '2%',
        width: 25,
        height: 25,
      },
      [theme.breakpoints.down('sm')]: {
        right: '2%',
        top: '-10%',
        width: 19,
        height: 19,
      },
    },
    redCircle: {
      zIndex: -1,
      position: 'absolute',
      borderRadius: '50%',
      width: 16,
      height: 16,
      backgroundColor: '#ED6A5A',
      left: '-6%',
      top: '15%',
      [theme.breakpoints.down('lg')]: {
        left: '-5%',
      },
      [theme.breakpoints.down('md')]: {
        top: '12%',
        left: '4%',
      },
      [theme.breakpoints.down('sm')]: {
        left: '2%',
        top: '3%',
        width: 14,
        height: 14,
      },
    },
    greenBigCircle: {
      zIndex: -1,
      position: 'absolute',
      right: '-5%',
      bottom: '25%',
      width: 19,
      height: 19,
      backgroundColor: '#2CA58D',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        right: '-5%',
        bottom: '20%',
      },
      [theme.breakpoints.down('md')]: {
        bottom: '5%',
        right: '3%',
      },
      [theme.breakpoints.down('sm')]: {
        right: '5%',
        bottom: '-5%',
      },
    },
  }),
);
