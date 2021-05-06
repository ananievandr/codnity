import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.up('md')]: {
        marginBottom: 135,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        marginBottom: 78,
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 100,
      },
    },
    paragraph: {
      marginBottom: 48,
      letterSpacing: '0.01em',
      maxWidth: 580,
      textAlign: 'center',
    },
  }),
);
