import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import cookie from 'react-cookies';
import AppBar from './AppBar/AppBar';
import Footer from './Footer';
import Home from './Home';
import NotFound from './NotFound';
import lightTheme from '../themes/LightTheme';
import darkTheme from '../themes/DarkTheme';
import getUser from './Helpers/GetUser';
import useInterval from './Helpers/Interval';

const useStyles = makeStyles((theme) => ({
  displayArea: {
    height: 'calc(100vh - 60px - 60px)',
  },
  displayAreaIndent: {
    paddingTop: 10,
    height: 'calc(100vh - 60px - 60px)',
  },
  message: {
    padding: 20,
  },
  content: {
    minWidth: 0,
  },
  root: {
    width: '100%',
    paddingBottom: 60,
    color: theme.palette.background.paper,
  }
}));

const apiUrl = 'http://localhost:5000';
const today = new Date();
const oneWeek = new Date();
oneWeek.setDate(today.getDate() + 7);

const App = () => {
  const classes = useStyles();
  const [user, setUser] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    setUser(getUser(apiUrl));
    if (cookie.load('darkMode') === undefined) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        cookie.save('darkMode', true, { path: '/', expires: oneWeek });
        setTheme(darkTheme);
        setDarkMode(true);
      }
    } else if (cookie.load('darkMode') === 'true') {
      setTheme(darkTheme);
      setDarkMode(true);
    } else {
      setTheme(lightTheme);
      setDarkMode(false);
    }
  }, []);

  useInterval(() => {
    getUser(apiUrl);
  }, 600000);

  const toggleDarkTheme = (e) => {
    cookie.remove('darkMode');
    cookie.save('darkMode', e.target.checked, { path: '/', expires: oneWeek });
    setDarkMode(e.target.checked);

    if (e.target.checked === true) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  const muiTheme = createMuiTheme(theme);

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <div className={classes.content}>
          <AppBar
            appState={{
              user,
              darkMode
            }}
            darkMode={darkMode}
            toggleDarkTheme={toggleDarkTheme}
          />
          <div className={classes.displayArea}>
            <Router basepath="/" className={classes.displayAreaIndent}>
              <Home
                path="/"
                appState={{
                  user,
                  darkMode,
                  apiUrl
                }}
              />
              <NotFound default />
            </Router>
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
