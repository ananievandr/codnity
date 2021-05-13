import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 80,
      [theme.breakpoints.down('sm')]: {
        marginTop: 50,
      },
      '& $submitButtonWrapper': {
        [theme.breakpoints.down('md')]: {
          justifyContent: 'center',
          marginTop: 24,
        },
      },
    },
    title: {
      marginBottom: 80,
    },
    noMargin: {
      margin: 0,
    },
    submitButtonWrapper: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 32,
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
    toggleButton: {
      '&:last-child': {
        paddingRight: 0,
      },
      [theme.breakpoints.up('md')]: {
        paddingRight: 20,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        paddingRight: 9,
      },
      [theme.breakpoints.down('sm')]: {
        paddingRight: 0,
        marginBottom: 8,
        '&:last-child': {
          marginBottom: 0,
        },
      },
    },
    serviceLabel: {
      transform: 'translate(0, -11px) scale(1)',
      marginTop: 11,
    },
    form: {
      [theme.breakpoints.up('md')]: {
        width: 940,
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      position: 'relative',
    },
    greenCircle: {
      zIndex: -1,
      position: 'absolute',
      left: '-15%',
      top: '-15%',
      width: 20,
      height: 20,
      backgroundColor: '#2CA58D',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        left: '-7%',
      },
      [theme.breakpoints.down('md')]: {
        top: '-19%',
        left: '4%',
      },
      [theme.breakpoints.down('sm')]: {
        left: '6%',
        top: '-10%',
        width: 14,
        height: 14,
      },
    },
    yellowCircle: {
      zIndex: -1,
      position: 'absolute',
      right: '-20%',
      top: '-27%',
      width: 19,
      height: 19,
      backgroundColor: '#FFBD00',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        right: '-15%',
      },
      [theme.breakpoints.down('md')]: {
        top: '-25%',
        right: '2%',
        width: 14,
        height: 14,
      },
      [theme.breakpoints.down('sm')]: {
        right: '2%',
        top: '-15%',
        width: 13,
        height: 13,
      },
    },
    redCircle: {
      zIndex: -1,
      position: 'absolute',
      left: '-25%',
      bottom: '7%',
      width: 25,
      height: 25,
      backgroundColor: '#ED6A5A',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        left: '-15%',
      },
      [theme.breakpoints.down('md')]: {
        bottom: '1%',
        left: '3%',
        width: 16,
        height: 16,
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
      right: '-25%',
      bottom: '20%',
      width: 49,
      height: 49,
      backgroundColor: '#2CA58D',
      borderRadius: '50%',
      [theme.breakpoints.down('lg')]: {
        right: '-15%',
        bottom: '30%',
      },
      [theme.breakpoints.down('md')]: {
        bottom: '5%',
        right: '3%',
        width: 30,
        height: 30,
      },
      [theme.breakpoints.down('sm')]: {
        right: '5%',
        bottom: '-5%',
        width: 14,
        height: 14,
      },
    },
  }),
);
