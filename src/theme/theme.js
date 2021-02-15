import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#73efd0',
      main: '#5ec7ac',
      dark: '#4f9b88',
      contrastText: '#fff',
    },
    secondary: {
      light: '#a7ecd9',
      main: '#5ec6ab',
      dark: '#389a7f',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Mulish',
    ].join(','),
  },
});

export default theme;

