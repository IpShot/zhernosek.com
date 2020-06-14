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
      highlight: 'rgba(255, 255, 255, 0.9)',
      gold: 'rgba(255, 183, 77, 0.95)',
    },
  },
  typography: {
    h1: {
      fontSize: '2.25rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 400,
      color: 'rgba(255, 183, 77, 1)',
    },
    h3: {
      fontSize: '1.125rem',
      fontWeight: 400,
    },
    h5: {
      color: '#fff',
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 400,
      color: '#fff',
    },
  },
}));

export default theme;
