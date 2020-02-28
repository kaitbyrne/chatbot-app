import { createMuiTheme } from '@material-ui/core/styles';

const lightTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'light',
    primary: {
      main: '#283593',
      contrastText: '#eeeeee',
    },
    secondary: {
      main: '#fafafa',
      contrastText: '#212121',
    },
    background: {
      paper: '#fafafa',
    },
    action: {
      active: '#283593',
    },
    error: {
      main: '#fafafa',
    },
    info: {
      main: '#283593',
    },
    success: {
      main: '#fafafa',
    },
    warning: {
      main: '#283593',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
      hint: '#283593',
      disabled: '#d3d3d3',
    },
  },
  spreadIt: {
    background: {
      bubble: '#d3d3d3',
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

export default lightTheme;
