import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    title: {
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        marginBottom: 110,
      },
      [theme.breakpoints.between('md', 'sm')]: {
        marginBottom: 80,
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 60,
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
        marginRight: 5,
      },
    },
  }),
);
