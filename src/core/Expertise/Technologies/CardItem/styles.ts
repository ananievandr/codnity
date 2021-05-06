import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      boxShadow: '0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)',
      borderRadius: 10,
      padding: '32px 24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      cursor: 'pointer',
      [theme.breakpoints.up('md')]: {
        width: 240,
        height: 141,
      },
      [theme.breakpoints.between('md', 'sm')]: {
        width: 232,
        height: 141,
      },
      [theme.breakpoints.down('sm')]: {
        width: 160,
        height: 115,
      },
      '&:hover': {
        backgroundColor: '#7C61AF',
        '& > $title': {
          color: '#ffffff',
        },
        '& > div > svg > path': {
          fill: '#ffffff',
        },
      },
    },
    title: {
      fontSize: 18,
      lineHeight: '21px',
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
  }),
);
