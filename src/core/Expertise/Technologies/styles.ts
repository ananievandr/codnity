import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginBottom: 100,
    },
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
    title: {
      textAlign: 'center',
    },
    gridContainer: {
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-between',
      },
    },
    gridItem: {
      marginBottom: 8,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 2,
      },
    },
  }),
);
