import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 100,
        marginTop: 40,
      },
      [theme.breakpoints.up('md')]: {
        height: 'calc(100vh - 80px)',
      },
      position: 'relative',
    },
    title: {
      [theme.breakpoints.up('sm')]: {
        maxWidth: 400,
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: 570,
      },
    },
    greenCircle: {
      zIndex: -1,
      position: 'absolute',
      width: 29,
      height: 29,
      backgroundColor: '#2CA58D',
      left: '-2%',
      bottom: '20%',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        left: 0,
      },
      [theme.breakpoints.down('md')]: {
        bottom: '15%',
        left: '3%',
      },
      [theme.breakpoints.down('sm')]: {
        left: '5%',
        bottom: '7%',
        width: 13,
        height: 13,
      },
    },
    yellowCircle: {
      zIndex: -1,
      position: 'absolute',
      width: 26,
      height: 26,
      backgroundColor: '#FFBD00',
      borderRadius: '50%',
      right: '-5%',
      bottom: '25%',
      [theme.breakpoints.down('lg')]: {
        right: '-2%',
        bottom: '20%',
      },
      [theme.breakpoints.down('md')]: {
        bottom: '30%',
        right: 0,
        width: 22,
        height: 22,
      },
      [theme.breakpoints.down('sm')]: {
        right: 0,
        bottom: '25%',
        width: 12,
        height: 12,
      },
    },
    redCircle: {
      zIndex: -1,
      position: 'absolute',
      borderRadius: '50%',
      width: 16,
      height: 16,
      backgroundColor: '#ED6A5A',
      left: '-5%',
      top: '15%',
      [theme.breakpoints.down('lg')]: {
        left: '-3%',
      },
      [theme.breakpoints.down('md')]: {
        top: '15%',
        left: '4%',
      },
      [theme.breakpoints.down('sm')]: {
        left: '2%',
        top: '30%',
        width: 10,
        height: 10,
      },
    },
    greenBigCircle: {
      zIndex: -1,
      position: 'absolute',
      width: 19,
      height: 19,
      backgroundColor: '#2CA58D',
      borderRadius: '50%',
      right: '-1%',
      top: '7%',
      [theme.breakpoints.down('lg')]: {
        top: '5%',
        right: '2%',
      },
      [theme.breakpoints.down('md')]: {
        top: '1%',
        right: '2%',
      },
      [theme.breakpoints.down('sm')]: {
        right: '2%',
        top: '-10%',
        width: 13,
        height: 13,
      },
    },
  }),
);
