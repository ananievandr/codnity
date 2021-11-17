import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    row: {
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: 64,
      '&:last-child': {
        marginBottom: 0,
      },
      [theme.breakpoints.down('md')]: {
        marginBottom: 35,
      },
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
    },
  }),
);
