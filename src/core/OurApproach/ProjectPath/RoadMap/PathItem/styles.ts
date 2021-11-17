import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: 'flex-start',
      height: 261,
      width: 300,
      padding: '34px 32px 32px',
      boxShadow: '0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)',
      borderRadius: 30,
      [theme.breakpoints.down('md')]: {
        height: 282,
        width: 220,
        padding: '34px 22px 22px',
      },
      [theme.breakpoints.down('sm')]: {
        height: 202,
        width: 162,
        padding: '20px 12px 12px',
        borderRadius: 16,
      },
    },
    iconWrapper: {
      width: 30,
      height: 30,
      marginBottom: 20,
      [theme.breakpoints.down('sm')]: {
        width: 22,
        height: 22,
        marginBottom: 17,
      },
    },
    title: {
      fontSize: 18,
      lineHeight: '24px',
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
      },
    },
    finalTitle: {
      color: '#ffffff',
      textAlign: 'center',
    },
    enums: {
      paddingLeft: 20,
      color: '#7C61AF',
      margin: 0,
      marginTop: 16,
      [theme.breakpoints.down('sm')]: {
        marginTop: 10,
        paddingLeft: 15,
      },
    },
    rowItem: {
      margin: '6px 0',
      '&:first-child': {
        marginTop: 0,
      },
      lineHeight: '24px',
      [theme.breakpoints.down('sm')]: {
        fontSize: 12,
        lineHeight: '16px',
      },
    },
    plainText: {
      color: '#212121',
    },
    card7: {
      paddingLeft: 179,
      [theme.breakpoints.down('md')]: {
        paddingLeft: 30,
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 182,
      },
    },
    centerContent: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#7C61AF',
    },
    iconArrow: {
      padding: '0 21px',
      marginTop: -44,
      [theme.breakpoints.down('md')]: {
        padding: 0,
        marginTop: -30,
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    lastArrow: {
      marginLeft: 135,
      [theme.breakpoints.down('md')]: {
        marginLeft: 100,
      },
    },
    card1: {
      paddingRight: 160,
      marginBottom: 64,
      [theme.breakpoints.down('md')]: {
        paddingRight: 30,
        marginBottom: 30,
      },
      [theme.breakpoints.down('sm')]: {
        paddingRight: 20,
      },
    },
    card2: {
      paddingRight: 179,
      marginBottom: 64,
      [theme.breakpoints.down('md')]: {
        paddingRight: 30,
        marginBottom: 30,
      },
      [theme.breakpoints.down('sm')]: {
        paddingRight: 0,
      },
    },
    card3: {
      marginBottom: 64,
      [theme.breakpoints.down('md')]: {
        marginRight: 0,
        marginBottom: 30,
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: 20,
      },
    },
    card4: {
      paddingRight: 160,
      marginBottom: 64,
      [theme.breakpoints.down('md')]: {
        paddingRight: 30,
        marginBottom: 30,
      },
      [theme.breakpoints.down('sm')]: {
        paddingRight: 0,
      },
    },
    card5: {
      paddingRight: 479,
      marginBottom: 64,
      [theme.breakpoints.down('md')]: {
        paddingRight: 250,
        marginBottom: 30,
      },
      [theme.breakpoints.down('sm')]: {
        paddingRight: 20,
      },
    },
    card6: {
      paddingLeft: 460,
      marginBottom: 0,
      [theme.breakpoints.down('md')]: {
        paddingLeft: 250,
        marginBottom: 0,
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
        marginRight: 0,
      },
    },
    arrow1: {
      transform: 'translate(0, -50%)',
      [theme.breakpoints.down('md')]: {
        right: 0,
      },
      [theme.breakpoints.down('sm')]: {
        right: -2,
      },
      position: 'absolute',
      right: 13,
      top: '50%',
    },
    arrow2: {
      transform: 'translate(0, -50%)',
      [theme.breakpoints.down('md')]: {
        right: 0,
      },
      [theme.breakpoints.down('sm')]: {
        top: '100%',
        right: '50%',
        transform: 'translate(50%, 0) rotate(90deg)',
      },
      position: 'absolute',
      right: 20,
      top: '50%',
    },
    arrow3: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'block',
        position: 'absolute',
        bottom: -28,
        left: '50%',
        transform: 'translate(-50%, 0) rotate(90deg)',
      },
    },
    arrow4: {
      transform: 'translate(0, -50%)',
      [theme.breakpoints.down('md')]: {
        right: 0,
      },
      [theme.breakpoints.down('sm')]: {
        right: '100%',
        transform: 'translate(0, -50%) rotate(180deg)',
      },
      position: 'absolute',
      right: 13,
      top: '50%',
    },
    arrow5: {
      [theme.breakpoints.down('md')]: {
        right: 97,
        top: -18,
      },
      [theme.breakpoints.down('sm')]: {
        right: -2,
        top: '50%',
      },
      position: 'absolute',
      right: 140,
      top: -45,
    },
    arrow6: {
      position: 'absolute',
      left: 135,
      top: -45,
      [theme.breakpoints.down('md')]: {
        left: 97,
        top: -18,
      },
      [theme.breakpoints.down('sm')]: {
        transform: 'translate(-50%, 0) rotate(90deg)',
        left: '50%',
        top: 206,
      },
    },
    arrow7: {
      position: 'absolute',
      left: 20,
      top: '50%',
      transform: 'translate(0, -50%)',
      [theme.breakpoints.down('md')]: {
        left: 2,
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  }),
);
