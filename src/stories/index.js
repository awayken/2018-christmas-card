import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import '../index.css';
import { answers } from './data';

import ErrorBoundary, { ProblemChild } from '../ErrorBoundary';
import Introduction from '../Introduction';
import Quiz from '../Quiz';
import Progress from '../Progress';
import Reward from '../Reward';

storiesOf('ErrorBoundary', module).add('renders', () => (
    <ErrorBoundary>
        <ProblemChild />
    </ErrorBoundary>
));

storiesOf('Introduction', module).add('renders', () => (
    <Introduction onStart={action('introduction-start')} />
));

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

storiesOf('Progress', module)
    .add('renders simple', () => (
        <Progress onChange={action('progress-change')} />
    ))
    .add('renders steps, step 1', () => (
        <Progress
            current={0}
            onChange={action('progress-change')}
            totalSteps={10}
        />
    ))
    .add('renders steps, step 5', () => (
        <Progress
            current={4}
            onChange={action('progress-change')}
            totalSteps={10}
        />
    ))
    .add('renders steps, step 10', () => (
        <Progress
            current={9}
            onChange={action('progress-change')}
            totalSteps={10}
        />
    ));

storiesOf('Reward', module)
    .add('renders pending', () => <Reward show={false} />)
    .add('renders preamble', () => (
        <Reward
            show={false}
            preamble={<p>A custom Preamble instead of default spinner text.</p>}
        />
    ))
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
