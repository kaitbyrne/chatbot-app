import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
  },
  avatar: {
    color: theme.palette.text.primary,
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: 10,
  },
  text: {
    color: theme.palette.text.primary,
  },
  botChip: {
    backgroundColor: theme.spreadIt.background.bubble,
    borderRadius: '30px',
    display: 'inline-flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    maxWidth: '49%',
  },
  userChip: {
    backgroundColor: theme.spreadIt.background.bubble,
    borderRadius: '30px',
    display: 'inline-flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    maxWidth: '49%',
    float: 'right',
  },
}));

const ChatMessage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.message.user !== 'bot' ? (
        <Grid container spacing={1} className={classes.userChip}>
          <Grid item xs={2}>
            <Avatar className={classes.avatar}>
              {props.message.user.charAt(0)}
            </Avatar>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="subtitle1" className={classes.text}>
              {props.message.message}
            </Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={1} className={classes.botChip}>
          <Grid item xs={2}>
            <Avatar className={classes.avatar}>
              <FaceIcon />
            </Avatar>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="subtitle1" className={classes.text}>
              {props.message.message}
            </Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

ChatMessage.propTypes = {
  appState: PropTypes.object,
};

export default ChatMessage;
