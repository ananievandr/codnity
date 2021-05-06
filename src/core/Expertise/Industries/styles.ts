import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      [theme.breakpoints.up('md')]: {
        marginBottom: 40,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        marginBottom: 30,
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 20,
      },
    },
    title: {
      textAlign: 'center',
    },
    grid: {
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-between',
      },
    },
    gridItem: {
      [theme.breakpoints.up('md')]: {
        marginBottom: 100,
      },
      [theme.breakpoints.between('md', 'sm')]: {
        marginBottom: 80,
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 60,
      },
    },
  }),
);
