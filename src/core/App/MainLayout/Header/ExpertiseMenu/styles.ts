import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    button: {
      margin: '0 15px',
      padding: 0,
      color: '#000000',
      position: 'relative',
      '&:hover, &$focusVisible, &$active': {
        zIndex: 1,
        '& $buttonMarked': {
          opacity: 1,
        },
      },
    },
    focusVisible: {},
    active: {},
    link: {
      textDecoration: 'none',
      color: '#212121',
      letterSpacing: '0.01em',
      fontSize: '14px',
      lineHeight: '24px',
    },
    buttonTitle: {
      position: 'relative',
      color: '#000000',
      padding: `0 0 2px`,
      fontWeight: 500,
    },
    buttonMarked: {
      opacity: 0,
      height: 3,
      width: 18,
      backgroundColor: '#ffbd00',
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
    icon: {
      width: '18px',
    },
  }),
);
