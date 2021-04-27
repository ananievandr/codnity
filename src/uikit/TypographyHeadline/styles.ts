import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'inline-block',
      marginBottom: 40,
      [theme.breakpoints.down('sm')]: {
        marginBottom: 24,
      },
    },
    typography: {
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        fontSize: '2em',
      },
    },
    contentMarked: {
      position: 'absolute',
      bottom: -2,
      left: 0,
      height: 3,
      backgroundColor: '#ffbd00',
    },
  }),
);
