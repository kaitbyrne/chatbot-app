import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.spreadIt.text.light,
    backgroundColor: theme.palette.error.main,
  },
  success: {
    color: theme.spreadIt.text.light,
    backgroundColor: theme.palette.success.main,
  },
  info: {
    color: theme.spreadIt.text.light,
    backgroundColor: theme.palette.info.main,
  },
  icon: {
    fontSize: 20,
    marginRight: 20,
  },
  closeIcon: {
    fontSize: 20,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    fontSize: 16,
    color: theme.spreadIt.text.light,
  },
  snack: {
    marginBottom: 55,
    backgroundColor: theme.palette.background.main,
  },
}));

const Message = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const {
    className, message, messages, anchorOrigin, variant, index, autoHideDuration, ...other
  } = props;

  const handleClose = (event, reason) => {
    if (reason !== 'clickaway') {
      messages.splice(message);
      setOpen(false);
    }
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={open}
      autoHideDuration={10000}
      onClose={handleClose}
      className={classes.snack}
      data-testid="message-component"
    >
      <SnackbarContent
        className={classNames(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={(
          <span id="client-snackbar" className={classes.message}>
            {variant === 'info'
              ? <InfoIcon className={classes.icon} />
              : (
                <div>
                  {variant === 'success'
                    ? <CheckCircleIcon className={classes.icon} />
                    : <ErrorIcon className={classes.icon} />}
                </div>
              )}
            {message}
          </span>
        )}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
            data-testid="close-message-button"
          >
            <CloseIcon className={classes.closeIcon} />
          </IconButton>,
        ]}
        {...other}
      />
    </Snackbar>
  );
};

Message.propTypes = {
  content: PropTypes.object,
}

export default Message;
