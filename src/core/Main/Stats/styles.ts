import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        marginBottom: 145,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        marginBottom: 100,
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 90,
        textAlign: 'center',
      },
    },
    border: {
      border: '3px dashed rgba(91, 57, 155, 0.2)',
      boxSizing: 'border-box',
      [theme.breakpoints.down('md')]: {
        padding: '0 84px',
      },
      [theme.breakpoints.up('md')]: {
        padding: '54px 0',
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: 340,
      },
    },
    separator: {
      [theme.breakpoints.up('sm')]: {
        border: 'none',
        borderRight: '1px solid rgba(91, 57, 155, 0.2)',
        height: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        border: 'none',
        borderBottom: '1px solid rgba(91, 57, 155, 0.2)',
      },
    },
    contentCenter: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'left',
        padding: '40px 0 60px',
      },
    },
    projectCount: {
      fontWeight: 'bold',
      fontSize: '40px',
      lineHeight: '27px',
      letterSpacing: '0.01em',
      color: '#5B399B',
    },
  }),
);
