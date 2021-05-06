import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      [theme.breakpoints.up('md')]: {
        marginBottom: 170,
        alignItems: 'center',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        marginBottom: 90,
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 100,
      },
    },
    paragraph: {
      marginBottom: 30,
      letterSpacing: '0.01em',
    },
    textBlock: {
      paddingRight: 160,
      [theme.breakpoints.down('md')]: {
        paddingRight: 0,
      },
    },
    icon: {
      minWidth: 400,
      minHeight: 300,
    },
    software: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    gridTitle: {
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
    },
  }),
);
