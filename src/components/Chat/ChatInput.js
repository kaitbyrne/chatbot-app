import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: 100,
    padding: 25,
    width: '100%',
  },
  field: {
    width: '100%',
    margin: theme.spacing(1),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  text: {
    color: theme.palette.text.primary,
  },
}));

const options = {
  autoStart: false,
  continuous: true,
}

const ChatInput = (props) => {
  const classes = useStyles();
  const [isUserTyping, setIsUserTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messageVariant, setMessageVariant] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  useEffect(() => {
    if (!props.browserSupportsSpeechRecognition) {
      setMessageVariant('error');
      setErrorMessages((errorMessages) => [...errorMessages,
        'Speech Recognition is only available in Chrome Browser',
      ]);
      props.setIsSpeaking(false);
    }
  }, []);

  useEffect(() => {
    if (props.isSpeaking) {
      props.startListening();
    } else {
      props.stopListening();
    }
  }, [props.isSpeaking]);

  useEffect(() => {
    if (props.transcript !== '') {
      setInputText(props.transcript);
    }
  }, [props.transcript]);

  useEffect(() => {
    if (props.listening) {
      setIsUserTyping(true);
    } else {
      setIsUserTyping(false);
    }
  }, [props.listening]);

  const sendMessage = (text) => {
    setInputText('');
    setIsUserTyping(false);
    props.resetTranscript();
    props.sendMessage(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(e.target.value);
  }

  useEffect(() => {
    if (props.finalTranscript !== '') {
      sendMessage(props.finalTranscript);
    }
  }, [props.finalTranscript]);

  const handleChange = (e) => {
    setInputText(e.target.value);
    if (e.target.value !== '') {
      setIsUserTyping(true);
    } else {
      setIsUserTyping(false);
    }
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <div className={classes.root}>
      {props.isBotLoading ? (
        <Typography variant="subtitle1" className={classes.text}>
          Bot is typing...
        </Typography>
      ) : null}
      {isUserTyping ? (
        <Typography variant="subtitle1" className={classes.text}>
          User is typing...
        </Typography>
      ) : null}
      <FormControl className={classes.field}>
        <Tooltip title={props.isSpeaking ? 'This field will only be enabled when you turn off voice input' : ''}>
          <OutlinedInput
            id="chat-input"
            type="text"
            placeholder="Enter your message and press Enter..."
            value={inputText}
            disabled={props.isSpeaking}
            onChange={(e) => handleChange(e)}
            onKeyDown={keyPress}
            inputProps={{
              'aria-label': 'send message to chatbot',
            }}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="send message to chatbot"
                  onClick={handleSubmit}
                  edge="end"
                  disabled={props.isSpeaking}
                >
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            )}
            labelWidth={0}
          />
        </Tooltip>
      </FormControl>
    </div>
  )
};

ChatInput.propTypes = {
  appState: PropTypes.object,
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
};

export default SpeechRecognition(options)(ChatInput);
