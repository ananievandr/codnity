import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: 40,
      [theme.breakpoints.down('md')]: {
        padding: 20,
      },
    },
    icon: {
      width: 150,
      height: 150,
      marginBottom: 40,
      [theme.breakpoints.down('md')]: {
        width: 100,
        height: 100,
      },
    },
    paragraph: {
      marginBottom: 10,
    },
    buttonWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 32,
    },
    button: {
      padding: '16px 30px',
      color: '#ffffff',
      borderRadius: '16px',
      backgroundColor: '#7C61AF',
      fontWeight: 'bold',
      minWidth: 120,
      '&:hover': {
        backgroundColor: 'rgba(91, 57, 155, 0.7)',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  }),
);
