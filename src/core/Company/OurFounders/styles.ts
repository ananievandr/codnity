import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 100,
      position: 'relative',
    },
    paragraph: {
      marginBottom: 30,
      letterSpacing: '0.01em',
      maxWidth: 800,
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        marginBottom: 48,
      },
      [theme.breakpoints.up('sm')]: {
        marginBottom: 80,
      },
    },
    gridColumn1: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: 50,
      [theme.breakpoints.down('md')]: {
        justifyContent: 'flex-start',
        paddingRight: 0,
        paddingBottom: 16,
      },
    },
    gridColumn2: {
      paddingLeft: 50,
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0,
      },
    },
    greenCircle: {
      zIndex: -1,
      position: 'absolute',
      width: 49,
      height: 49,
      backgroundColor: '#2CA58D',
      borderRadius: '50%',
      left: '2%',
      top: '13%',
      [theme.breakpoints.down('md')]: {
        top: '-2%',
        left: '1%',
        width: 35,
        height: 35,
      },
      [theme.breakpoints.down('sm')]: {
        left: 0,
        top: '-3%',
        width: 23,
        height: 23,
      },
    },
    yellowCircle: {
      zIndex: -1,
      position: 'absolute',
      width: 25,
      height: 25,
      backgroundColor: '#FFBD00',
      right: '5%',
      bottom: '12%',
      borderRadius: '50%',
      [theme.breakpoints.down('md')]: {
        right: '1%',
        bottom: '-6%',
      },
      [theme.breakpoints.down('sm')]: {
        bottom: '-3%',
        width: 20,
        height: 20,
      },
    },
    redCircle: {
      zIndex: -1,
      position: 'absolute',
      borderRadius: '50%',
      width: 19,
      height: 19,
      backgroundColor: '#ED6A5A',
      left: '8%',
      bottom: 0,
      [theme.breakpoints.down('lg')]: {
        bottom: '2%',
      },
      [theme.breakpoints.down('md')]: {
        bottom: '-5%',
        left: 0,
      },
      [theme.breakpoints.down('sm')]: {
        bottom: '-2%',
        width: 12,
        height: 12,
      },
    },
    violetCircle: {
      zIndex: -1,
      position: 'absolute',
      width: 25,
      height: 25,
      backgroundColor: '#7C61AF',
      borderRadius: '50%',
      right: '6%',
      top: '24%',
      [theme.breakpoints.down('md')]: {
        top: 0,
        width: 20,
        height: 20,
      },
      [theme.breakpoints.down('sm')]: {
        right: 0,
        top: '18%',
        width: 16,
        height: 16,
      },
    },
  }),
);
