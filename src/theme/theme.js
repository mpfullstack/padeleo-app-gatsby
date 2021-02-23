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
      light: '#d894f8',
      main: '#ba54ea',
      dark: '#9121c6',
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

