import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      width: 258,
      marginRight: 100,
      textDecoration: 'none',
      cursor: 'pointer',
      '&:last-child': {
        marginRight: 0,
      },
      '&:hover': {
        '& $title': {
          textDecoration: 'underline',
        },
      },
    },
    titleWrapper: {
      paddingLeft: 16,
      borderLeft: '3px solid #FFBD00',
    },
    title: {
      fontSize: 14,
      lineHeight: '24px',
      fontWeight: 700,
      marginBottom: 16,
    },
    subTitle: {
      fontWeight: 'normal',
      color: '#212121',
    },
  }),
);
