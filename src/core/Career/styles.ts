import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
      },
      [theme.breakpoints.up('lg')]: {
        height: 'calc(100vh - 80px)',
      },
      [theme.breakpoints.down('lg')]: {
        padding: '40px 0 100px',
      },
    },
    paragraph: {
      marginBottom: 20,
    },
    textBlock: {
      paddingRight: 165,
      [theme.breakpoints.down('md')]: {
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
  }),
);
