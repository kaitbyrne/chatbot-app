import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const Messages = (props) => {
  const [messages, setMessages] = useState([]);
  const [variant] = useState(props.variant);

  useEffect(() => {
    setMessages(props.messages);
  }, [props.messages]);

  return (
    <div>
      {messages.map((message, idx) => (
        <React.Fragment key={idx}>
          <Message
            autoHideDuration={message.autoHideDuration}
            variant={variant}
            message={message}
            messages={messages}
            index={idx}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.string),
  variant: PropTypes.string,
};

export default Messages;
