import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import './AppBar.css';
import logo from '../../logo.svg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: '100%',
  },
  flexGrow: {
    flexGrow: 1,
  },
  appHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.primary,
  },
  user: {
    marginLeft: 'auto',
    paddingTop: 5,
    paddingBottom: 2,
    fontSize: 16,
    textAlign: 'right',
  },
  homeLink: {
    color: theme.spreadIt.text.light,
    textDecoration: 'none',
  },
  inline: {
    display: 'flex',
    flexDirection: 'row',
  },
  darkModeSwitch: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
    color: theme.palette.primary.contrastText,
  },
  switchTextLeft: {
    marginTop: 2,
    marginRight: 5,
  },
  switchTextRight: {
    marginTop: 2,
    marginLeft: 2,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const user = useState(props.appState.user);
  const [darkMode, setDarkMode] = useState(props.darkMode);

  useEffect(() => {
    setDarkMode(props.darkMode);
  }, [props.darkMode]);

  const toggleDarkTheme = (e) => {
    props.toggleDarkTheme(e);
  };

  return (
    <div className={classes.appBar}>
      <AppBar position="fixed">
        <Toolbar>
          <header className={classes.appHeader}>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Typography variant="h5" noWrap>
            <Link to="/" className={classes.homeLink}>
              Home
            </Link>
          </Typography>
          <div className={classes.flexGrow} />
          <div className={classes.user}>
            {(user)
              ? (
                <div className={classes.inline}>
                  <div className={classes.darkModeSwitch}>
                    <Brightness7Icon fontSize="small" className={classes.switchTextLeft} />
                    <Switch
                      inputProps={{ 'data-testid': 'dark-mode-switch' }}
                      checked={darkMode}
                      onChange={(e) => {
                        toggleDarkTheme(e);
                      }}
                      value="darkMode"
                      size="small"
                    />
                    <Brightness3Icon fontSize="small" className={classes.switchTextRight} />
                  </div>
                  <div className={classes.userName}>
                    <span>
                      {`Welcome, ${user.name}`}
                    </span>
                  </div>
                </div>
              )
              : <spa>Login</spa>}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  appState: PropTypes.object,
  darkMode: PropTypes.bool,
  toggleDarkTheme: PropTypes.func,
};

export default Header;
