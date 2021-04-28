import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginTop: '20px',
    },
    title: {
      textAlign: 'center',
    },
    iconDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'inline-block',
      },
    },
    iconTablet: {
      display: 'none',
      [theme.breakpoints.between('md', 'sm')]: {
        display: 'inline-block',
      },
    },
    iconMobile: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'inline-block',
      },
    },
  }),
);
