import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'inline-block',
      position: 'relative',
      width: 24,
      height: 24,
      margin: '0 8px',
    },
    border: {
      boxSizing: 'border-box',
      display: 'block',
      position: 'absolute',
      width: 24,
      height: 24,
      border: '1px solid rgba(0, 0, 0, 0.04)',
      borderRadius: '50%',
      zIndex: 1,
    },
    radiant: {
      boxSizing: 'border-box',
      display: 'block',
      position: 'absolute',
      width: 24,
      height: 24,
      border: '1px solid #ffffff',
      borderRadius: '50%',
      animation: 'lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      borderColor: '#a0a8b0 #a0a8b0 #a0a8b0 #ffffff',
      zIndex: 2,
      '&:nth-child(1)': {
        animationDelay: '-0.45s',
      },
      '&:nth-child(2)': {
        animationDelay: '-0.3s',
      },
      '&:nth-child(3)': {
        animationDelay: '-0.15s',
      },
    },
  }),
);
