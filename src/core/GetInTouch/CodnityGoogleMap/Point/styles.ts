import { createStyles, makeStyles } from '@material-ui/core/styles';

const K_WIDTH = 24;
const K_HEIGHT = 24;

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'relative',
    },
    point: {
      position: 'absolute',
      width: K_WIDTH,
      height: K_HEIGHT,
      left: -K_WIDTH / 2,
      top: -K_HEIGHT / 2,

      borderRadius: K_HEIGHT,
      background: '#FDFFFC',
      boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    centerPoint: {
      width: 6,
      height: 6,
      backgroundColor: '#FFBD00',
      borderRadius: 6,
    },
    tooltip: {
      backgroundColor: '#ffffff',
      position: 'absolute',
      top: '-25px',
      left: '-184px',
      width: '150px',
      height: '50px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '0 16px',
      borderRadius: '16px',
      boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
      fontSize: '14px',
      lineHeight: '21px',
      letterSpacing: '0.01em',
      color: '#212121',
    },
    triangleRight: {
      position: 'absolute',
      left: '-38px',
      top: '-11px',
      border: '12px solid transparent',
      borderLeft: '12px solid #ffffff',
    },
  }),
);
