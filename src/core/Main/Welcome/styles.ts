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
    button: {
      backgroundColor: '#7C61AF',
      boxShadow: 'none',
      color: '#ffffff',
      margin: 0,
      '&:hover': {
        backgroundColor: 'rgba(91, 57, 155, 0.7)',
      },
    },
    icon: {
      minWidth: 440,
      minHeight: 330,
    },
  }),
);
