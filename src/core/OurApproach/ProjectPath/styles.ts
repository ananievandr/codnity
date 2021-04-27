import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px',
    },
    title: {
      textAlign: 'center',
    },
    iconWrapper: {
      width: '100%',
      height: '100%',
      [theme.breakpoints.down('sm')]: {
        width: 344,
        height: 967,
      },
    },
  }),
);
