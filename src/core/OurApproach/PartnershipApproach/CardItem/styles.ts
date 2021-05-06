import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      maxWidth: 510,
      paddingBottom: 90,
      [theme.breakpoints.down('md')]: {
        paddingBottom: 70,
        maxWidth: '100%',
      },
      '& $titleWrapper': {
        [theme.breakpoints.up('md')]: {
          marginLeft: 32,
        },
        [theme.breakpoints.down('md')]: {
          marginLeft: 26,
        },
        [theme.breakpoints.down('sm')]: {
          marginLeft: 12,
        },
      },
      '& $contentWrapper': {
        [theme.breakpoints.up('md')]: {
          marginLeft: 106,
        },
        [theme.breakpoints.down('md')]: {
          marginLeft: 100,
        },
        [theme.breakpoints.down('sm')]: {
          marginLeft: 0,
        },
      },
    },
    header: {
      [theme.breakpoints.up('md')]: {
        marginBottom: 24,
      },
      [theme.breakpoints.down('md')]: {
        marginBottom: 16,
      },
    },
    title: {
      color: '#5b399b',
      fontWeight: 600,

      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
    content: {},
    iconWrapper: {},
    titleWrapper: {},
    contentWrapper: {},
  }),
);
