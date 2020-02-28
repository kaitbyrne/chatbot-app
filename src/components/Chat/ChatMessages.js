import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ChatMessage from './ChatMessage';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 75,
    paddingLeft: 50,
    paddingRight: 50,
    maxHeight: 500,
    overflow: 'auto',
  },
}));

const ChatMessages = (props) => {
  const classes = useStyles();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [props.messages]);

  return (
    <div className={classes.root}>
      {props.messages.map((message, idx) => (
        <ChatMessage key={idx} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

ChatMessages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object),
};

export default ChatMessages;
