import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      [theme.breakpoints.up('md')]: {
        marginBottom: 90,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        marginBottom: 120,
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 108,
      },
    },
    form: {
      [theme.breakpoints.up('md')]: {
        width: 956,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: 720,
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    title: {
      marginBottom: 80,
    },
    noMargin: {
      margin: 0,
    },
    link: {
      color: '#7C61AF',
    },
    checkboxWrapper: {
      [theme.breakpoints.up('lg')]: {
        textAlign: 'right',
      },
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 32,
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
      },
    },
    button: {
      padding: '16px 30px',
      color: '#ffffff',
      borderRadius: '16px',
      backgroundColor: '#7C61AF',
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: 'rgba(91, 57, 155, 0.7)',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },

    greenCircle: {
      zIndex: -1,
      position: 'absolute',
      width: 14,
      height: 14,
      backgroundColor: '#2CA58D',
      left: '5%',
      bottom: '-5%',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        left: '5%',
        bottom: 0,
      },
      [theme.breakpoints.down('md')]: {
        bottom: 0,
        left: '10%',
        width: 24,
        height: 24,
      },
      [theme.breakpoints.down('sm')]: {
        left: '5%',
        bottom: '-7%',
        width: 16,
        height: 16,
      },
    },
    greenBigCircle: {
      zIndex: -1,
      position: 'absolute',
      right: '3%',
      top: '-10%',
      width: 29,
      height: 29,
      backgroundColor: '#2CA58D',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        top: '-5%',
        right: '2%',
      },
      [theme.breakpoints.down('md')]: {
        top: '1%',
        right: '2%',
      },
      [theme.breakpoints.down('sm')]: {
        right: 0,
        top: '-4%',
        width: 19,
        height: 19,
      },
    },
    violetCircle: {
      zIndex: -1,
      position: 'absolute',
      borderRadius: '50%',
      width: 20,
      height: 20,
      backgroundColor: '#7C61AF',
      left: 0,
      top: '10%',
      [theme.breakpoints.down('lg')]: {
        left: 0,
      },
      [theme.breakpoints.down('md')]: {
        top: '2%',
        left: '5%',
      },
      [theme.breakpoints.down('sm')]: {
        left: 0,
        top: '-2%',
        width: 11,
        height: 11,
      },
    },
    redCircle: {
      zIndex: -1,
      position: 'absolute',
      right: '-2%',
      bottom: '20%',
      width: 15,
      height: 15,
      backgroundColor: '#ED6A5A',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        right: '1%',
        bottom: '20%',
      },
      [theme.breakpoints.down('md')]: {
        bottom: '10%',
        right: '5%',
      },
      [theme.breakpoints.down('sm')]: {
        right: '5%',
        bottom: '12%',
      },
    },
  }),
);
