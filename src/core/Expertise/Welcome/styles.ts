import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        textAlign: 'center',
      },
      marginBottom: 100,
    },
    title: {
      [theme.breakpoints.up('sm')]: {
        maxWidth: 400,
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: 570,
      },
    },
    icon: {
      minWidth: 400,
      minHeight: 300,
    },
  }),
);
