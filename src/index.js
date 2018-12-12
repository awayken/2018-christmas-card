import React from 'react';
import ReactDOM from 'react-dom';

import { preambles, questions, rewards } from './data';
import './index.css';

import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App preambles={preambles} questions={questions} rewards={rewards} />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
