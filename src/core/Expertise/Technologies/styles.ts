import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginBottom: 100,
    },
    title: {
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
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
      marginRight: 8,
      marginBottom: 8,
    },
  }),
);
