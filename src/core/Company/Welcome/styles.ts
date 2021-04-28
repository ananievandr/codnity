import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    paragraph: {
      marginBottom: 30,
      letterSpacing: '0.01em',
    },
    textBlock: {
      paddingRight: 160,
      [theme.breakpoints.down('sm')]: {
        paddingRight: 0,
      },
    },
    icon: {
      minWidth: 400,
      minHeight: 300,
    },
  }),
);