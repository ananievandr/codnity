import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 60,
      },
      [theme.breakpoints.up('md')]: {
        height: 'calc(100vh - 80px)',
      },
    },
    title: {
      [theme.breakpoints.up('sm')]: {
        maxWidth: 400,
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: 570,
      },
    },
  }),
);
