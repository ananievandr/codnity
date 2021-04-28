import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginBottom: 48,
      paddingLeft: 16,
      borderLeft: '3px solid #FFBD00',
    },
    title: {
      marginBottom: 16,
    },
  }),
);
