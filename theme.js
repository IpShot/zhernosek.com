import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Create a theme instance.
const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'dark',
    divider: 'rgba(255, 255, 255, 0.25)',
  },
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: 600,
    },
    h2: {
      fontSize: 28,
      fontWeight: 400,
    },
    h3: {
      fontSize: 18,
      fontWeight: 400,
    },
    h4: {
      fontSize: 18,
      fontWeight: 400,
    },
    fontSize: 14,
  },
}));

export default theme;
