import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '100px',
    },
    title: {
      textAlign: 'center',
      maxWidth: 730,
      marginBottom: 100,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 75,
      },
    },
  }),
);
