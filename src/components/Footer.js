import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.toolbar} />
      </AppBar>
    </React.Fragment>
  );
};

export default Footer;
