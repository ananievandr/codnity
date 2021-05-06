import { createStyles, makeStyles } from '@material-ui/core/styles';

export const getStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: 365,
      [theme.breakpoints.down('md')]: {
        height: 200,
      },
      maxWidth: 550,
      width: '100%',
    },
    rounded: {
      border: '2px solid rgba(91, 57, 155, 0.2)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        background: '#7C61AF',
      },
    },
    hoverItem: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: '16px',
      lineHeight: '21px',
      textTransform: 'uppercase',
      [theme.breakpoints.down('md')]: {
        fontSize: '14px',
      },
    },
    itemA: {
      position: 'absolute',
      left: 0,
      top: '5%',
      width: 103,
      height: 103,
      [theme.breakpoints.down('md')]: {
        width: 77,
        height: 77,
      },
      [theme.breakpoints.down('sm')]: {
        width: 56,
        height: 56,
      },
    },
    itemB: {
      position: 'absolute',
      left: '2%',
      bottom: '3%',
      width: 80,
      height: 80,
      [theme.breakpoints.down('md')]: {
        width: 65,
        height: 65,
      },
      [theme.breakpoints.down('sm')]: {
        width: 45,
        height: 45,
      },
    },
    itemC: {
      position: 'absolute',
      left: '26%',
      top: '43%',
      width: 90,
      height: 90,
      [theme.breakpoints.down('md')]: {
        width: 74,
        height: 74,
      },
      [theme.breakpoints.down('sm')]: {
        width: 50,
        height: 50,
      },
    },
    itemD: {
      position: 'absolute',
      left: '41%',
      top: 0,
      width: 103,
      height: 103,
      [theme.breakpoints.down('md')]: {
        width: 77,
        height: 77,
      },
      [theme.breakpoints.down('sm')]: {
        width: 54,
        height: 54,
      },
    },
    itemE: {
      position: 'absolute',
      left: '47%',
      bottom: 0,
      width: 77,
      height: 77,
      [theme.breakpoints.down('sm')]: {
        width: 44,
        height: 44,
      },
    },
    itemF: {
      position: 'absolute',
      right: '19%',
      top: '35%',
      width: 100,
      height: 100,
      [theme.breakpoints.down('md')]: {
        width: 88,
        height: 88,
      },
      [theme.breakpoints.down('sm')]: {
        width: 56,
        height: 56,
      },
    },
    itemG: {
      position: 'absolute',
      right: 0,
      top: '3%',
      width: 113,
      height: 113,
      [theme.breakpoints.down('md')]: {
        width: 71,
        height: 71,
      },
      [theme.breakpoints.down('sm')]: {
        width: 58,
        height: 58,
      },
    },
    itemH: {
      position: 'absolute',
      right: '4%',
      bottom: '8%',
      width: 90,
      height: 90,
      [theme.breakpoints.down('md')]: {
        width: 68,
        height: 68,
      },
      [theme.breakpoints.down('sm')]: {
        width: 50,
        height: 50,
      },
    },
  }),
);
