import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      position: 'relative',
      backgroundColor: 'rgba(91, 57, 155, 0.1)',
      padding: '16px 32px',
      borderRadius: 5,
      marginBottom: 20,
      ':&last-child': {
        marginBottom: 0,
      },
    },
    index: {
      position: 'absolute',
      top: '12px',
      left: 0,
      borderRadius: '50%',
      backgroundColor: '#FFBD00',
      width: 32,
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transform: 'translate(-50%, 0)',
    },
    number: {
      color: '#212121',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '0.01em',
    },
  }),
);
