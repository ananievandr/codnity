import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1280,
      xl: 1440,
    },
  },
  typography: {
    fontFamily: 'DM Sans',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
        },
        body: {
          backgroundColor: '#ffffff',
          height: '100%',
        },
        '#aka-codnity': {
          height: '100%',
        },
        '@keyframes lds-ring': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
    },
    MuiContainer: {
      root: {
        '@media (min-width: 375px)': {
          paddingLeft: 16,
          paddingRight: 16,
        },
        '@media (min-width: 768px)': {
          paddingLeft: 24,
          paddingRight: 24,
        },
        '@media (min-width: 1280px)': {
          paddingLeft: 48,
          paddingRight: 48,
        },
        '@media (min-width: 1440px)': {
          '&.MuiContainer-maxWidthLg': {
            maxWidth: 1260,
            padding: 0,
          },
        },
      },
    },
  },
});

theme.typography.body1 = {
  ...theme.typography.body1,
  fontSize: '14px',
  lineHeight: '21px',
  letterSpacing: '0.01em',
  fontWeight: 500,
};

theme.typography.body2 = {
  ...theme.typography.body2,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.01em',
  color: `#212121`,
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
  },
};

theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  fontWeight: 'normal',
  letterSpacing: '0.01em',
  fontSize: '14px',
  lineHeight: '24px',
};

theme.typography.subtitle2 = {
  ...theme.typography.subtitle2,
  fontWeight: 600,
  letterSpacing: '0.01em',
  fontSize: 22,
  lineHeight: '28px',
};

theme.typography.h1 = {
  ...theme.typography.h1,
  fontWeight: 700,
  fontSize: '36px',
  lineHeight: '54px',
  letterSpacing: '0.01em',
  color: '#212121',
  display: 'inline-block',
  marginBottom: 48,
  [theme.breakpoints.between('lg', 'md')]: {
    fontSize: '32px',
    lineHeight: '44px',
    marginBottom: 32,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '36px',
    marginBottom: 24,
  },
};

theme.typography.h6 = {
  ...theme.typography.h6,
  fontWeight: 'bold',
  fontSize: '20px',
  lineHeight: '22px',
  letterSpacing: '0.01em',
  color: '#5B399B',
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
  },
};

theme.shadows[4] = '0px 8px 22px -6px rgba(24, 39, 75, 0.12), 0px 14px 64px -4px rgba(24, 39, 75, 0.12);';

export { theme };
