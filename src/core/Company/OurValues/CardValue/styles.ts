import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: 24,
      [theme.breakpoints.down('sm')]: {
        padding: 20,
      },
    },
    title: {
      color: '#5b399b',
      fontWeight: 600,
      margin: '20px 0 16px',
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    content: {
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
        lineHeight: '21px',
      },
    },
    iconWrapper: {
      backgroundColor: '#F9F9FB',
      width: 80,
      height: 80,
      borderRadius: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);
