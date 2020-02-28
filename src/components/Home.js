import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import ChatMessages from './Chat/ChatMessages';
import ChatInput from './Chat/ChatInput';
import Loading from './Loading';
import Messages from './Messages/Messages';
import errorMessageFormatter from './Helpers/ErrorMessageFormatter';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    maxHeight: 500,
  },
  wrapper: {
    position: 'absolute',
    right: 10,
    bottom: 60,
    '&hover': {
      cursor: 'pointer',
    },
  },
  fabProgress: {
    color: theme.palette.text.primary,
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const [appState] = useState(props.appState);
  const [isLoading] = useState(false);
  const [isBotLoading, setIsBotLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState([]);
  const [messageVariant, setMessageVariant] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  const handleClick = () => {
    if (isSpeaking) {
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
    }
  };

  const getBotResponse = (text) => {
    axios.get(`${appState.apiUrl}/interpretText?userInput=${text}`)
      .then((response) => {
        setMessages((messages) => [...messages, { user: 'bot', message: response.data.message }]);
        setIsBotLoading(false);
      }).catch((error) => {
        setIsBotLoading(false);
        setMessageVariant('error');
        setErrorMessages((errorMessages) => [...errorMessages,
          errorMessageFormatter(error, 'Bot is unavailable, please refresh and try again'),
        ]);
      });
  };

  const sendMessage = (text) => {
    setMessages((messages) => [...messages, { user: 'user', message: text }]);
    setIsBotLoading(true);
    getBotResponse(text);
  };

  return (
    <div>
      {isLoading
        ? <Loading />
        : (
        <div className={classes.root} data-testid="home-div">
          <ChatMessages appState={appState} messages={messages} />
          <ChatInput
            appState={appState}
            isSpeaking={isSpeaking}
            sendMessage={sendMessage}
            isBotLoading={isBotLoading}
          />
          <div
            className={classes.wrapper}
            onClick={handleClick}
            role="button"
            tabIndex={0}
          >
            <Fab
              aria-label="turn-on-voice-input"
              color="primary"
              onClick={handleClick}
              className={classes.button}
            >
              <KeyboardVoiceIcon />
            </Fab>
            {isSpeaking && <CircularProgress size={68} className={classes.fabProgress} />}
          </div>
        </div>
      )}
      <div>
        {errorMessages.length > 0
          ? <Messages appState={appState} messages={errorMessages} variant={messageVariant} />
          : null }
      </div>
    </div>
  );
};

Home.propTypes = {
  appState: PropTypes.object,
};

export default Home;

// <SpeechInput />
// <Messages
//   messages={messages}
//   currentUser={chatUser}
// />
// <Chat
//   sendMessage={sendMessage}
// />
