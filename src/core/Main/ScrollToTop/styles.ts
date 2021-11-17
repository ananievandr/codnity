import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    fabIcon: {
      backgroundColor: '#ffffff',
      boxShadow: '0px 8px 28px -6px rgba(24, 39, 75, 0.12), 0px 18px 88px -4px rgba(24, 39, 75, 0.14)',
      '&:hover': {
        backgroundColor: '#F9F9FB',
      },
      width: 56,
      height: 56,
      [theme.breakpoints.down('md')]: {
        width: 48,
        height: 48,
      },
      [theme.breakpoints.down('sm')]: {
        width: 40,
        height: 40,
      },
    },
  }),
);
