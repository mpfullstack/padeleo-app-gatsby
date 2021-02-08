import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#73efd0',
      main: '#5ec7ac',
      dark: '#4f9b88',
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

