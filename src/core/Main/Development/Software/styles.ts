import { createStyles, makeStyles } from '@material-ui/core/styles';

export const getStyles = makeStyles(theme =>
  createStyles({
    root: {
      height: 350,
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
      '&:hover, &$active': {
        background: '#7C61AF',
      },
    },
    active: {},
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
      padding: 14,
      [theme.breakpoints.down('md')]: {
        width: 77,
        height: 77,
      },
      [theme.breakpoints.down('sm')]: {
        width: 56,
        height: 56,
        padding: 6,
      },
    },
    itemB: {
      position: 'absolute',
      left: '2%',
      bottom: '3%',
      width: 80,
      height: 80,
      padding: 17,
      [theme.breakpoints.down('md')]: {
        width: 65,
        height: 65,
      },
      [theme.breakpoints.down('sm')]: {
        width: 45,
        height: 45,
        padding: 6,
      },
    },
    itemC: {
      position: 'absolute',
      left: '26%',
      top: '43%',
      width: 90,
      height: 90,
      padding: 23,
      [theme.breakpoints.down('md')]: {
        width: 74,
        height: 74,
      },
      [theme.breakpoints.down('sm')]: {
        width: 50,
        height: 50,
        padding: 6,
      },
    },
    itemD: {
      position: 'absolute',
      left: '41%',
      top: 0,
      width: 103,
      height: 103,
      padding: 14,
      [theme.breakpoints.down('md')]: {
        width: 77,
        height: 77,
      },
      [theme.breakpoints.down('sm')]: {
        width: 54,
        height: 54,
        padding: 6,
      },
    },
    itemE: {
      position: 'absolute',
      left: '47%',
      bottom: 0,
      width: 77,
      height: 77,
      padding: 16,
      [theme.breakpoints.down('sm')]: {
        width: 44,
        height: 44,
        padding: 6,
      },
    },
    itemF: {
      position: 'absolute',
      right: '19%',
      top: '35%',
      width: 100,
      height: 100,
      padding: 22,
      [theme.breakpoints.down('md')]: {
        width: 88,
        height: 88,
        right: '20%',
        top: '25%',
      },
      [theme.breakpoints.down('sm')]: {
        width: 56,
        height: 56,
        padding: 6,
        right: '24%',
      },
    },
    itemG: {
      position: 'absolute',
      right: 0,
      top: '3%',
      width: 113,
      height: 113,
      padding: 35,
      [theme.breakpoints.down('md')]: {
        width: 71,
        height: 71,
        padding: 8,
      },
      [theme.breakpoints.down('sm')]: {
        width: 58,
        height: 58,
        padding: 6,
      },
    },
    itemH: {
      position: 'absolute',
      right: '2%',
      bottom: '5%',
      width: 90,
      height: 90,
      padding: 18,
      [theme.breakpoints.down('md')]: {
        width: 68,
        height: 68,
      },
      [theme.breakpoints.down('sm')]: {
        width: 50,
        height: 50,
        padding: 6,
      },
    },
  }),
);
