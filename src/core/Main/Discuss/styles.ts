import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
  }),
);
