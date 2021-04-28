import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    title: {
      color: '#5b399b',
      fontWeight: 600,

      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    fullWidth: {
      width: '100%',
    },
  }),
);
