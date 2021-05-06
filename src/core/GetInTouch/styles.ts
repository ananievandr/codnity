import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
    },
  }),
);
