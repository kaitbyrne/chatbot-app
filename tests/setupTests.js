import React from 'react';
import {render,
        rerender,
        cleanup,
        act,
        expect,
        fireEvent,
        getByTestId,
        getByLabelText,
        getByPlaceholderText,
        wait,
        waitForElement,
        within} from '@testing-library/react';
import '@testing-library/jest-dom';

global.React = React;
global.render = render;
global.rerender = rerender;
global.cleanup = cleanup;
global.act = act;
global.expect = expect;
global.fireEvent = fireEvent;
global.getByTestId = getByTestId;
global.getByLabelText = getByLabelText;
global.getByPlaceholderText = getByPlaceholderText;
global.wait = wait;
global.waitForElement = waitForElement;
global.within = within;
