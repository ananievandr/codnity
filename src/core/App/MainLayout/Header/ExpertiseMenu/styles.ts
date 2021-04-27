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
  }),
);
