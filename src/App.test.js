import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { preambles, questions, rewards } from './data';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <App preambles={preambles} questions={questions} rewards={rewards} />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
