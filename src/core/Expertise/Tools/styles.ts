import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    paragraph: {
      marginBottom: 60,
      maxWidth: 800,
      textAlign: 'center',
      [theme.breakpoints.down('md')]: {
        marginBottom: 48,
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 32,
      },
    },
  }),
);
