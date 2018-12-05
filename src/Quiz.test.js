import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz';
import { answers } from './stories/data';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Quiz />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders question', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Quiz
            question="Which answer is the answer to this question?"
            answers={answers}
            correctAnswer="q3"
        />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});

it('renders with correct answer', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Quiz
            question="Which answer is the answer to this question?"
            answers={answers}
            correctAnswer="q3"
            selectedAnswer="q3"
        />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});

it('renders with incorrect answer', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Quiz
            question="Which answer is the answer to this question?"
            answers={answers}
            correctAnswer="q3"
            selectedAnswer="q1"
        />,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
