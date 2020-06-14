import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// Create a theme instance.
const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    type: 'dark',
    divider: 'rgba(255, 255, 255, 0.25)',
    image: {
      hover: 'rgba(0, 0, 0, 0.25)',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.75)',
    },
  },
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: 600,
    },
    h2: {
      fontSize: 28,
      fontWeight: 400,
      color: '#ffb74d',
    },
    h3: {
      fontSize: 18,
      fontWeight: 400,
    },
    h5: {
      color: '#fff',
    },
    h6: {
      color: '#fff',
    },
  },
}));

export default theme;
