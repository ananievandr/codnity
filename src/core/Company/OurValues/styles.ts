import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '100px',
    },
    paragraph: {
      marginBottom: 30,
      letterSpacing: '0.01em',
      maxWidth: 580,
      textAlign: 'center',
    },
  }),
);
