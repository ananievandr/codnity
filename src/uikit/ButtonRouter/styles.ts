import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      marginLeft: '35px',
      padding: '16px 30px',
      color: '#5b399b',
      borderRadius: '16px',
      boxShadow: '0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)',
      backgroundColor: '#ffffff',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '0.01em',
      [theme.breakpoints.down('md')]: {
        padding: '8px 30px',
      },
    },
  }),
);
