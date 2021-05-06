import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      cursor: 'pointer',
      padding: '16px 0',
      color: 'rgba(33, 33, 33, 0.7)',
      width: '100%',
      borderRadius: 5,
      backgroundColor: '#F9F9FB',
      border: '2px solid #F9F9FB',
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '0.01em',
      '&$checked': {
        backgroundColor: '#ffffff',
        borderColor: '#7C61AF',
      },
      '&:focus': {
        outline: 'none',
      },
    },
    checked: {},
  }),
);
