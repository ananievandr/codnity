import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    header: {
      marginBottom: 24,
      paddingLeft: 12,
      borderLeft: '3px solid #FFBD00',
    },
    title: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
    },
    iconWrapper: {
      [theme.breakpoints.up('md')]: {
        marginBottom: 68,
        width: 376,
        height: 282,
      },
      [theme.breakpoints.between('md', 'sm')]: {
        marginBottom: 46,
        width: 376,
        height: 282,
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 32,
        width: 165,
        height: 120,
      },
    },
    contentItem: {
      marginBottom: 10,
      fontWeight: 500,
      [theme.breakpoints.down('md')]: {
        marginBottom: 8,
      },
      [theme.breakpoints.down('sm')]: {
        fontWeight: 400,
      },
      '&:last-child': {
        marginBottom: 0,
      },
    },
  }),
);
