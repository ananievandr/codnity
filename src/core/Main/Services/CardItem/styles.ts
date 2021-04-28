import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: 24,
      border: '1px solid rgba(91, 57, 155, 0.2)',
      cursor: 'pointer',
      [theme.breakpoints.down('sm')]: {
        padding: 20,
      },
      '&:hover': {
        boxShadow: '0px 8px 22px -6px rgba(24, 39, 75, 0.12), 0px 14px 64px -4px rgba(24, 39, 75, 0.12)',
        borderColor: '#ffffff',
        '& $linkIcon': {
          display: 'inline-block',
        },
        '& $linkContent': {
          fontWeight: 600,
        },
        '& $iconWrapper': {
          backgroundColor: '#7C61AF',
          '& > svg path': {
            fill: '#ffffff',
          },
        },
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
    link: {
      marginTop: 16,
    },
    linkIcon: {
      display: 'none',
    },
    linkContent: {
      marginRight: 14,
    },
  }),
);
