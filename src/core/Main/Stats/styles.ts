import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '100px 0',
    },
    border: {
      border: '3px dashed rgba(91, 57, 155, 0.2)',
      boxSizing: 'border-box',
      [theme.breakpoints.down('sm')]: {
        padding: '0 84px',
      },
      [theme.breakpoints.up('sm')]: {
        padding: '54px 0',
      },
    },
    separator: {
      [theme.breakpoints.up('xs')]: {
        border: 'none',
        borderRight: '1px solid rgba(91, 57, 155, 0.2)',
        height: '100%',
      },
      [theme.breakpoints.down('xs')]: {
        border: 'none',
        borderBottom: '1px solid rgba(91, 57, 155, 0.2)',
      },
    },
    contentCenter: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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
