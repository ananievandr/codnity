import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
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
      },
    },
  },
});

theme.typography.body2 = {
  ...theme.typography.body2,
  fontSize: '16px',
  lineHeight: '24px',
  letterSpacing: '0.01em',
  color: `#212121`,
};

theme.typography.subtitle2 = {
  ...theme.typography.subtitle2,
  fontWeight: 600,
  letterSpacing: '0.01em',
  fontSize: 22,
  lineHeight: '28px',
};

theme.shadows[4] = '0px 8px 22px -6px rgba(24, 39, 75, 0.12), 0px 14px 64px -4px rgba(24, 39, 75, 0.12);';

export { theme };
