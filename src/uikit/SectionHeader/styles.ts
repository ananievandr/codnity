import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    underline: {
      display: 'inline-block',
      borderBottom: '3px solid #FFBD00',
    },
  }),
);
