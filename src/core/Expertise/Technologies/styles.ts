import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginBottom: 100,
      '& $title': {
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
