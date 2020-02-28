import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const options = {
  autoStart: false
}

const SpeechInput = ({
  transcript,
  startListening,
  stopListening,
  resetTranscript,
  listening,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  // TODO: if listening = true don't send transcript to api otherwise do

  return (
    <div>
      <button onClick={startListening}>Start</button>
      <button onClick={stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <span>{transcript}</span>
    </div>
  );
};

SpeechInput.propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  resetTranscript: PropTypes.func,
  listening: PropTypes.bool,
  browserSupportsSpeechRecognition: PropTypes.bool
};

export default SpeechRecognition(options)(SpeechInput);
