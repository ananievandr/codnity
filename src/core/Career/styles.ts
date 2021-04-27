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
      paddingRight: 165,
      [theme.breakpoints.down('sm')]: {
        paddingRight: 0,
      },
    },
    bold: {
      fontWeight: 600,
    },
    mail: {
      color: '#7c61af',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    icon: {
      minWidth: 440,
      minHeight: 330,
    },
  }),
);
