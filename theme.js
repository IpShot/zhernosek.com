import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Create a theme instance.
const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'dark',
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
      fontSize: 22,
      fontWeight: 400,
    },
    fontSize: 14,
  },
}));

export default theme;
