import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../index.css';
import App from '../App';
import Quiz from '../Quiz';
import Reward from '../Reward';
import SplitScreen from '../SplitScreen';
import { answers } from './data';

storiesOf('App', module).add('renders', () => <App />);

storiesOf('Quiz', module)
    .add('renders question', () => (
        <Quiz
            question="Which answer is the answer to this question?"
            answers={answers}
            correctAnswer="q3"
            onAnswer={action('quiz-answer')}
        />
    ))
    .add('renders with correct answer', () => (
        <Quiz
            question="Which answer is the answer to this question?"
            answers={answers}
            correctAnswer="q3"
            selectedAnswer="q3"
            onAnswer={action('quiz-answer')}
        />
    ))
    .add('renders with incorrect answer', () => (
        <Quiz
            question="Which answer is the answer to this question?"
            answers={answers}
            correctAnswer="q3"
            selectedAnswer="q1"
            onAnswer={action('quiz-answer')}
        />
    ));

storiesOf('SplitScreen', module)
    .add('renders 2 children', () => (
        <SplitScreen>
            <p>Panel 1</p>
            <p>Panel 2</p>
        </SplitScreen>
    ))
    .add('renders 1 child', () => (
        <SplitScreen>
            <p>Panel 1</p>
        </SplitScreen>
    ))
    .add('renders more children', () => (
        <SplitScreen>
            <p>Panel 1</p>
            <p>Panel 2</p>
            <p>Panel 3</p>
            <p>Panel 4</p>
        </SplitScreen>
    ));

storiesOf('Reward', module)
    .add('renders pending', () => <Reward show={false} />)
    .add('renders image', () => (
        <Reward image="https://placehold.it/800x600" show={true} />
    ))
    .add('renders video', () => (
        <Reward video="https://youtu.be/bHFbaF9_kpI" show={true} />
    ))
    .add('renders image with content', () => (
        <Reward image="https://placehold.it/800x600" show={true}>
            <p>This year we saw this cool image!</p>
        </Reward>
    ))
    .add('renders video with content', () => (
        <Reward video="https://youtu.be/bHFbaF9_kpI" show={true}>
            <p>This year we saw this cool video!</p>
        </Reward>
    ));
