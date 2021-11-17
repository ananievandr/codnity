import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginLeft: '45px',
      width: '45px',
    },
    button: {
      color: '#000000',
      position: 'relative',
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $buttonMarked': {
          opacity: 1,
        },
      },
    },
    focusVisible: {},
    buttonTitle: {
      position: 'relative',
      color: '#000000',
      padding: `0 0 2px`,
      fontWeight: 700,
      textTransform: 'uppercase',
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
    menuRoot: {
      boxShadow: '0px 4px 8px rgba(97, 97, 97, 0.14), 0px 8px 16px rgba(97, 97, 97, 0.14)',
      borderRadius: '8px',
    },
    icon: {
      width: '18px',
    },
  }),
);
