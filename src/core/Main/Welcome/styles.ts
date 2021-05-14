import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        marginBottom: 100,
        marginTop: 40,
      },
      [theme.breakpoints.up('lg')]: {
        height: 'calc(100vh - 80px)',
      },
    },
    button: {
      backgroundColor: '#7C61AF',
      boxShadow: 'none',
      color: '#ffffff',
      margin: 0,
      '&:hover': {
        backgroundColor: 'rgba(91, 57, 155, 0.7)',
      },
    },
    titleBox: {
      [theme.breakpoints.up('md')]: {
        maxWidth: 550,
      },
      [theme.breakpoints.down('md')]: {
        maxWidth: 480,
        textAlign: 'center',
      },
    },
    gridTitle: {
      [theme.breakpoints.down('lg')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    greenCircle: {
      position: 'absolute',
      left: '-3%',
      top: '10%',
      width: 25,
      height: 25,
      backgroundColor: '#2CA58D',
      borderRadius: 25,
      [theme.breakpoints.down('lg')]: {
        left: 0,
      },
      [theme.breakpoints.down('md')]: {
        top: '25%',
        left: '19%',
      },
      [theme.breakpoints.down('sm')]: {
        left: '0',
        top: '55%',
        width: 14,
        height: 14,
      },
    },
    yellowCircle: {
      position: 'absolute',
      right: '-3%',
      top: '5%',
      width: 49,
      height: 49,
      backgroundColor: '#FFBD00',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        right: '-1%',
      },
      [theme.breakpoints.down('md')]: {
        top: '10%',
        right: 0,
        width: 39,
        height: 39,
      },
      [theme.breakpoints.down('sm')]: {
        right: 0,
        top: '45%',
        width: 21,
        height: 21,
      },
    },
    redCircle: {
      position: 'absolute',
      left: '28%',
      bottom: '27%',
      width: 19,
      height: 19,
      backgroundColor: '#ED6A5A',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        left: '42%',
      },
      [theme.breakpoints.down('md')]: {
        bottom: '6%',
        left: '4%',
      },
      [theme.breakpoints.down('sm')]: {
        left: '95%',
        bottom: '15%',
        width: 9,
        height: 9,
      },
    },
  }),
);
