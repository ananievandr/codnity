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
      [theme.breakpoints.down('lg')]: {
        padding: '40px 0 100px',
      },
      position: 'relative',
    },
    paragraph: {
      marginBottom: 20,
    },
    textBlock: {
      paddingRight: 165,
      [theme.breakpoints.down('md')]: {
        paddingRight: 0,
      },
    },
    bold: {
      fontWeight: 600,
    },
    mail: {
      color: '#7c61af',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    greenCircle: {
      zIndex: -1,
      position: 'absolute',
      left: '9%',
      top: '12%',
      width: 20,
      height: 20,
      backgroundColor: '#2CA58D',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        left: '11%',
        top: '6%',
      },
      [theme.breakpoints.down('md')]: {
        left: '12%',
      },
      [theme.breakpoints.down('sm')]: {
        left: '0',
        top: '27%',
        width: 14,
        height: 14,
      },
    },
    yellowCircle: {
      zIndex: -1,
      position: 'absolute',
      right: '-3%',
      top: '13%',
      width: 23,
      height: 23,
      backgroundColor: '#FFBD00',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        right: '-2%',
        top: '12%',
        width: 19,
        height: 19,
      },
      [theme.breakpoints.down('md')]: {
        top: '4%',
        right: '5%',
      },
      [theme.breakpoints.down('sm')]: {
        right: 0,
        top: 0,
      },
    },
    redCircle: {
      zIndex: -1,
      position: 'absolute',
      left: '-5%',
      bottom: '12%',
      width: 25,
      height: 25,
      backgroundColor: '#ED6A5A',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        left: '-3%',
      },
      [theme.breakpoints.down('md')]: {
        bottom: '24%',
        left: '4%',
      },
      [theme.breakpoints.down('sm')]: {
        left: '5%',
        bottom: '7%',
        width: 15,
        height: 15,
      },
    },
  }),
);
