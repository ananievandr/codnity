import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
      },
      [theme.breakpoints.up('lg')]: {
        height: 'calc(100vh - 80px)',
      },
    },
    button: {
      backgroundColor: '#7C61AF',
      boxShadow: 'none',
      color: '#ffffff',
      margin: 0,
      '&:hover': {
        backgroundColor: 'rgba(91, 57, 155, 0.7)',
      },
    },
    titleBox: {
      [theme.breakpoints.up('md')]: {
        maxWidth: 550,
      },
      [theme.breakpoints.down('md')]: {
        maxWidth: 480,
        textAlign: 'center',
      },
    },
    gridTitle: {
      [theme.breakpoints.down('lg')]: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
  }),
);
