import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { preambles, questions, rewards } from './data';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App preambles={preambles} questions={questions} rewards={rewards} />,
    document.getElementById('root')
);

serviceWorker.register();
