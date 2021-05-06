import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginBottom: 80,
      width: '100%',
      [theme.breakpoints.down('md')]: {
        marginBottom: 70,
      },
    },
    gridContainer: {
      paddingLeft: 16,
      [theme.breakpoints.down('md')]: {
        paddingLeft: 13,
      },
    },
    fullWidth: {
      width: '100%',
    },
    column1: {
      display: 'flex',
      flexDirection: 'column',
      paddingRight: 47,
      [theme.breakpoints.down('md')]: {
        paddingRight: 18,
      },
      [theme.breakpoints.down('sm')]: {
        paddingRight: 0,
      },
    },
    column2: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 47,
      [theme.breakpoints.down('md')]: {
        paddingLeft: 18,
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
      },
    },
  }),
);
