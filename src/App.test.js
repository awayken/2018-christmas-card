import React from 'react';
import ReactDOM from 'react-dom';

import { questions, rewards } from './data';

import App from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App questions={questions} rewards={rewards} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
