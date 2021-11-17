import { InputLabel, InputBase, InputAdornment } from '@material-ui/core';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    input: {
      width: '100%',
      marginBottom: 50,
      '&:last-child': {
        marginBottom: 20,
      },
    },
    focused: {
      '&:focus': {
        borderColor: '#F1F1F1',
        backgroundColor: '#ffffff',
      },
    },
    upload: {
      '& > input': {
        cursor: 'pointer',
      },
    },
    error: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      transform: 'translate(0, 14px)',
      fontSize: '0.6rem',
      color: '#f44336',
    },
  }),
);

export const CodnityInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: 0,
      },
    },
    input: {
      borderRadius: 5,
      position: 'relative',
      backgroundColor: '#F9F9FB',
      border: '2px solid #F9F9FB',
      width: '100%',
      padding: '16px 20px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontSize: 14,
      lineHeight: '24px',
      letterSpacing: '0.01em',
    },
    multiline: {
      padding: 0,
    },
  }),
)(InputBase);

export const CodnityLabel = withStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: 16,
      transform: 'translate(0, -30px) scale(1)',
      color: '#212121',
      fontWeight: 500,
    },
  }),
)(InputLabel);

export const InputAdornmentStyled = withStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      right: 18,
      top: '50%',
    },
  }),
)(InputAdornment);
