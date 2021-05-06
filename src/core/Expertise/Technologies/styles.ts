import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginBottom: 100,
      '& $gridItem': {
        [theme.breakpoints.down('md')]: {
          marginRight: 7,
          marginBottom: 7,
        },
      },
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
      marginRight: 8,
      marginBottom: 8,
      [theme.breakpoints.down('md')]: {
        '&:nth-child(3n)': {
          marginRight: 0,
        },
      },
      [theme.breakpoints.down('sm')]: {
        '&:nth-child(2n)': {
          marginRight: 0,
          marginBottom: 11,
        },
      },
    },
  }),
);
