import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: '100%',
      boxShadow: '0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)',
      borderRadius: '30px',
      [theme.breakpoints.down('sm')]: {
        padding: '24px',
      },
      [theme.breakpoints.up('md')]: {
        padding: '32px',
        width: 400,
      },
      [theme.breakpoints.between('sm', 'md')]: {
        padding: '32px',
        width: '100%',
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
    link: {
      marginTop: 24,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    linkContent: {
      marginRight: 20,
      fontWeight: 600,
    },
  }),
);
