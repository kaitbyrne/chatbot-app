import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#283593',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#616161',
      contrastText: '#fafafa',
    },
    background: {
      paper: '#303030',
    },
    action: {
      active: '#ffffff',
    },
    error: {
      main: '#283593',
    },
    info: {
      main: '#283593',
    },
    success: {
      main: '#43a047',
    },
    warning: {
      main: '#283593',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
      hint: '#283593',
      disabled: '#d3d3d3',
    },
  },
  spreadIt: {
    background: {
      bubble: '#616161',
    },
    text: {
      light: '#ffffff',
      tertiary: '#212121',
      hover: '#283593',
    },
    divider: {
      main: '#eeeeee',
    },
  },
});

export default darkTheme;
