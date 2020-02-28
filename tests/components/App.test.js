import ReactDOM from 'react-dom';
import { renderHook } from '@testing-library/react-hooks';
import '@testing-library/jest-dom/extend-expect';
import App from '../../src/components/App';

afterEach(cleanup);

describe('App Test', () => {
  const props = {
    messages: ["test"],
    browserSupportsSpeechRecognition: true,
    isSpeaking: false,
    listening: false,
    setIsSpeaking: jest.fn(),
  };

  window.HTMLElement.prototype.scrollIntoView = jest.fn();

  test('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<App {...props}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
