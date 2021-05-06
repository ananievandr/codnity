import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 80,
    },
    paragraph: {
      marginBottom: 30,
      letterSpacing: '0.01em',
      maxWidth: 800,
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
        marginBottom: 48,
      },
      [theme.breakpoints.up('sm')]: {
        marginBottom: 80,
      },
    },
  }),
);
